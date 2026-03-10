// ============================================================================
// PendingActions: Items needing attention in the CRM
// Shows deals closing soon / overdue and stale opportunity contacts.
// ============================================================================

import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { timeAgo } from "@/components/crm/utils";
import { AlertTriangle, CalendarClock, UserCheck } from "lucide-react";
import StageBadge from "@/components/crm/StageBadge";
import type { DealStage, ContactStage } from "@/types/crm";

interface PendingDeal {
  id: string;
  title: string;
  stage: DealStage;
  expected_close_date: string;
  contact_id: string;
  contacts: {
    first_name: string;
    last_name: string | null;
  };
}

interface StaleContact {
  id: string;
  first_name: string;
  last_name: string | null;
  stage: ContactStage;
  updated_at: string;
}

export default function PendingActions() {
  const [pendingDeals, setPendingDeals] = useState<PendingDeal[]>([]);
  const [staleContacts, setStaleContacts] = useState<StaleContact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPendingItems = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const now = new Date();
      const sevenDaysOut = new Date(
        now.getTime() + 7 * 24 * 60 * 60 * 1000
      ).toISOString();

      // Deals with expected_close_date in the past or within 7 days
      const { data: deals, error: dealsErr } = await supabase
        .from("deals")
        .select(
          "id, title, stage, expected_close_date, contact_id, contacts!inner(first_name, last_name)"
        )
        .not("stage", "in", '("closed_won","closed_lost")')
        .not("expected_close_date", "is", null)
        .lte("expected_close_date", sevenDaysOut)
        .order("expected_close_date", { ascending: true })
        .limit(10);

      if (dealsErr) throw dealsErr;

      // Contacts in opportunity or proposal_sent with no recent update (14+ days)
      const fourteenDaysAgo = new Date(
        now.getTime() - 14 * 24 * 60 * 60 * 1000
      ).toISOString();

      const { data: contacts, error: contactsErr } = await supabase
        .from("contacts")
        .select("id, first_name, last_name, stage, updated_at")
        .in("stage", ["opportunity", "proposal_sent"])
        .lte("updated_at", fourteenDaysAgo)
        .order("updated_at", { ascending: true })
        .limit(10);

      if (contactsErr) throw contactsErr;

      setPendingDeals((deals || []) as PendingDeal[]);
      setStaleContacts((contacts || []) as StaleContact[]);
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Failed to load pending actions";
      setError(msg);
      console.error("PendingActions error:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPendingItems();
  }, [fetchPendingItems]);

  const totalItems = pendingDeals.length + staleContacts.length;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-500" />
          Pending Actions
          {totalItems > 0 && (
            <span className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">
              {totalItems}
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p className="text-muted-foreground text-sm">Loading...</p>
        ) : error ? (
          <p className="text-destructive text-sm">{error}</p>
        ) : totalItems === 0 ? (
          <p className="text-muted-foreground text-sm py-4 text-center">
            No pending actions. You're all caught up!
          </p>
        ) : (
          <div className="space-y-2">
            {/* Deals closing soon or overdue */}
            {pendingDeals.map((deal) => {
              const isOverdue =
                new Date(deal.expected_close_date) < new Date();
              const contactName = [
                deal.contacts.first_name,
                deal.contacts.last_name,
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <Link
                  key={`deal-${deal.id}`}
                  to={`/admin/crm/contacts/${deal.contact_id}`}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 transition-colors hover:border-primary/50 hover:bg-slate-50"
                >
                  <CalendarClock
                    className={`h-4 w-4 shrink-0 ${
                      isOverdue ? "text-red-500" : "text-amber-500"
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium truncate">
                      {deal.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {contactName}
                      {" "}
                      {isOverdue ? "(overdue)" : "(closing soon)"}
                    </p>
                  </div>
                  <StageBadge stage={deal.stage} type="deal" />
                </Link>
              );
            })}

            {/* Stale opportunity / proposal_sent contacts */}
            {staleContacts.map((contact) => {
              const name = [contact.first_name, contact.last_name]
                .filter(Boolean)
                .join(" ");

              return (
                <Link
                  key={`contact-${contact.id}`}
                  to={`/admin/crm/contacts/${contact.id}`}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 transition-colors hover:border-primary/50 hover:bg-slate-50"
                >
                  <UserCheck className="h-4 w-4 shrink-0 text-purple-500" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium truncate">{name}</p>
                    <p className="text-xs text-muted-foreground">
                      No activity for {timeAgo(contact.updated_at)}
                    </p>
                  </div>
                  <StageBadge stage={contact.stage} type="contact" />
                </Link>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

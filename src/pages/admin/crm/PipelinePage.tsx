// ============================================================================
// PipelinePage: Sales pipeline view with deals table, summary, and detail sheet
// ============================================================================

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useDeals, usePipelineSummary, useDealMutation } from "@/hooks/useCrm";
import {
  DEAL_STAGE_COLORS,
  DEAL_STAGE_LABELS,
  type DealStage,
} from "@/types/crm";
import { formatCurrency } from "@/components/crm/utils";
import DealsTable from "@/components/crm/DealsTable";
import DealDetailSheet from "@/components/crm/DealDetailSheet";
import DealForm from "@/components/crm/DealForm";

// Active stages to show in the summary row (excludes closed_lost)
const ACTIVE_STAGES: DealStage[] = [
  "discovery",
  "proposal",
  "negotiation",
  "closed_won",
];

interface ContactOption {
  id: string;
  first_name: string;
  last_name: string | null;
  company_name: string | null;
  email: string;
}

export default function PipelinePage() {
  const {
    data: deals,
    isLoading: dealsLoading,
    refetch: refetchDeals,
  } = useDeals();
  const {
    data: pipelineSummary,
    isLoading: summaryLoading,
    refetch: refetchSummary,
  } = usePipelineSummary();
  const { changeDealStage } = useDealMutation();

  const [selectedDealId, setSelectedDealId] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [contacts, setContacts] = useState<ContactOption[]>([]);

  // Load contacts for the DealForm contact picker
  const loadContacts = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("contacts")
        .select("id, first_name, last_name, company_name, email")
        .order("first_name", { ascending: true });
      if (error) throw error;
      setContacts((data || []) as ContactOption[]);
    } catch (err) {
      console.error("Failed to load contacts:", err);
    }
  }, []);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  // Compute summary stats
  const totalDeals = deals.length;
  const totalMrr = deals.reduce(
    (sum, d) => sum + (d.value_monthly || 0),
    0
  );

  const handleStageChange = async (
    dealId: string,
    contactId: string,
    title: string,
    oldStage: DealStage,
    newStage: DealStage
  ) => {
    try {
      await changeDealStage(dealId, contactId, title, oldStage, newStage);
      toast.success(
        `${title}: moved to ${DEAL_STAGE_LABELS[newStage]}`
      );
      refetchDeals();
      refetchSummary();
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Failed to update stage";
      toast.error(msg);
      console.error("Stage change error:", err);
    }
  };

  const handleDealSaved = () => {
    refetchDeals();
    refetchSummary();
  };

  const getStageSummary = (stage: DealStage) => {
    const row = pipelineSummary.find((s) => s.stage === stage);
    return {
      count: row?.deal_count ?? 0,
      totalMonthly: row?.total_monthly ?? 0,
    };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">Pipeline</h1>
          <p className="text-muted-foreground">
            {totalDeals} deals, {formatCurrency(totalMrr)} total MRR
          </p>
        </div>
        <Button onClick={() => setShowCreateForm(true)}>
          <Plus size={16} className="mr-2" />
          New Deal
        </Button>
      </div>

      {/* Pipeline summary cards */}
      {summaryLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-24" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ACTIVE_STAGES.map((stage) => {
            const summary = getStageSummary(stage);
            return (
              <Card key={stage}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {DEAL_STAGE_LABELS[stage]}
                  </CardTitle>
                  <span
                    className={`inline-flex h-2 w-2 rounded-full ${
                      DEAL_STAGE_COLORS[stage].split(" ")[0]
                    }`}
                  />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{summary.count}</div>
                  <p className="text-xs text-muted-foreground">
                    {formatCurrency(summary.totalMonthly)} MRR
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Deals table */}
      <DealsTable
        deals={deals}
        onSelectDeal={(id) => setSelectedDealId(id)}
        onStageChange={handleStageChange}
        isLoading={dealsLoading}
      />

      {/* Deal detail sheet */}
      <DealDetailSheet
        dealId={selectedDealId}
        deals={deals}
        open={!!selectedDealId}
        onOpenChange={(open) => {
          if (!open) setSelectedDealId(null);
        }}
      />

      {/* Create deal dialog */}
      <DealForm
        deal={null}
        contacts={contacts}
        open={showCreateForm}
        onOpenChange={setShowCreateForm}
        onSaved={handleDealSaved}
      />
    </div>
  );
}

// ============================================================================
// SmartFirm CRM Data Hooks
// All Supabase queries for the CRM dashboard. Follows the useState + useEffect
// pattern established in AdminDashboard.tsx and PostList.tsx.
// ============================================================================

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import type {
  ContactOverview,
  Contact,
  DealWithContact,
  Deal,
  FormSubmission,
  EmailEvent,
  RecentActivity,
  ActivityLogEntry,
  PipelineStageSummary,
  CrmStats,
  ContactStage,
  DealStage,
  ActivityType,
} from "@/types/crm";

// ── Generic fetch state ─────────────────────────────────────────────────────

interface FetchState<T> {
  data: T;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

// ── useCrmStats: aggregate metrics for overview cards ───────────────────────

export function useCrmStats(): FetchState<CrmStats> {
  const [data, setData] = useState<CrmStats>({
    activeContacts: 0,
    pipelineValue: 0,
    newLeadsThisWeek: 0,
    emailOpenRate: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Active contacts (not closed_lost)
      const { count: activeCount, error: e1 } = await supabase
        .from("contacts")
        .select("*", { count: "exact", head: true })
        .neq("stage", "closed_lost");
      if (e1) throw e1;

      // Pipeline value from view
      const { data: pipeline, error: e2 } = await supabase
        .from("v_pipeline_summary")
        .select("*");
      if (e2) throw e2;
      const pipelineValue = (pipeline || []).reduce(
        (sum: number, row: PipelineStageSummary) => sum + Number(row.total_monthly || 0),
        0
      );

      // New leads this week
      const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString();
      const { count: newLeads, error: e3 } = await supabase
        .from("contacts")
        .select("*", { count: "exact", head: true })
        .gte("created_at", weekAgo);
      if (e3) throw e3;

      // Email open rate (last 30 days)
      const thirtyDaysAgo = new Date(Date.now() - 30 * 86400000).toISOString();
      const { data: emails, error: e4 } = await supabase
        .from("email_events")
        .select("status")
        .gte("created_at", thirtyDaysAgo)
        .in("status", ["sent", "delivered", "opened", "clicked"]);
      if (e4) throw e4;
      const sentCount = (emails || []).length;
      const openedCount = (emails || []).filter(
        (e) => e.status === "opened" || e.status === "clicked"
      ).length;
      const openRate = sentCount > 0 ? Math.round((openedCount / sentCount) * 100) : 0;

      setData({
        activeContacts: activeCount || 0,
        pipelineValue,
        newLeadsThisWeek: newLeads || 0,
        emailOpenRate: openRate,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to load CRM stats";
      setError(msg);
      console.error("useCrmStats error:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => { fetch(); }, [fetch]);
  return { data, isLoading, error, refetch: fetch };
}

// ── usePipelineSummary: deals grouped by stage ──────────────────────────────

export function usePipelineSummary(): FetchState<PipelineStageSummary[]> {
  const [data, setData] = useState<PipelineStageSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data: rows, error: e } = await supabase
        .from("v_pipeline_summary")
        .select("*");
      if (e) throw e;
      setData((rows || []) as PipelineStageSummary[]);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to load pipeline");
      console.error("usePipelineSummary error:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => { fetch(); }, [fetch]);
  return { data, isLoading, error, refetch: fetch };
}

// ── useContacts: full contact list from v_contact_overview ──────────────────

export function useContacts(): FetchState<ContactOverview[]> {
  const [data, setData] = useState<ContactOverview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data: rows, error: e } = await supabase
        .from("v_contact_overview")
        .select("*")
        .order("created_at", { ascending: false });
      if (e) throw e;
      setData((rows || []) as ContactOverview[]);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to load contacts");
      console.error("useContacts error:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => { fetch(); }, [fetch]);
  return { data, isLoading, error, refetch: fetch };
}

// ── useContactDetail: single contact + all related data ─────────────────────

interface ContactDetail {
  contact: Contact | null;
  deals: Deal[];
  emails: EmailEvent[];
  forms: FormSubmission[];
  activity: ActivityLogEntry[];
}

export function useContactDetail(contactId: string | null): FetchState<ContactDetail> {
  const empty: ContactDetail = { contact: null, deals: [], emails: [], forms: [], activity: [] };
  const [data, setData] = useState<ContactDetail>(empty);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    if (!contactId) { setData(empty); return; }
    setIsLoading(true);
    setError(null);
    try {
      const [cRes, dRes, eRes, fRes, aRes] = await Promise.all([
        supabase.from("contacts").select("*").eq("id", contactId).single(),
        supabase.from("deals").select("*").eq("contact_id", contactId).order("created_at", { ascending: false }),
        supabase.from("email_events").select("*").eq("contact_id", contactId).order("created_at", { ascending: false }),
        supabase.from("form_submissions").select("*").eq("contact_id", contactId).order("created_at", { ascending: false }),
        supabase.from("activity_log").select("*").eq("contact_id", contactId).order("created_at", { ascending: false }),
      ]);
      if (cRes.error) throw cRes.error;
      setData({
        contact: cRes.data as Contact,
        deals: (dRes.data || []) as Deal[],
        emails: (eRes.data || []) as EmailEvent[],
        forms: (fRes.data || []) as FormSubmission[],
        activity: (aRes.data || []) as ActivityLogEntry[],
      });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to load contact detail");
      console.error("useContactDetail error:", err);
    } finally {
      setIsLoading(false);
    }
  }, [contactId]);

  useEffect(() => { fetch(); }, [fetch]);
  return { data, isLoading, error, refetch: fetch };
}

// ── useDeals: all deals with joined contact data ────────────────────────────

export function useDeals(): FetchState<DealWithContact[]> {
  const [data, setData] = useState<DealWithContact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data: rows, error: e } = await supabase
        .from("deals")
        .select("*, contacts!inner(first_name, last_name, company_name, email)")
        .order("updated_at", { ascending: false });
      if (e) throw e;
      setData((rows || []) as DealWithContact[]);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to load deals");
      console.error("useDeals error:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => { fetch(); }, [fetch]);
  return { data, isLoading, error, refetch: fetch };
}

// ── useRecentActivity: from view, configurable limit ────────────────────────

export function useRecentActivity(limit = 50): FetchState<RecentActivity[]> {
  const [data, setData] = useState<RecentActivity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data: rows, error: e } = await supabase
        .from("v_recent_activity")
        .select("*")
        .limit(limit);
      if (e) throw e;
      setData((rows || []) as RecentActivity[]);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to load activity");
      console.error("useRecentActivity error:", err);
    } finally {
      setIsLoading(false);
    }
  }, [limit]);

  useEffect(() => { fetch(); }, [fetch]);
  return { data, isLoading, error, refetch: fetch };
}

// ── useActivityLog: full log with optional filters ──────────────────────────

interface ActivityFilters {
  activityType?: ActivityType;
  daysBack?: number;
  search?: string;
}

export function useActivityLog(filters?: ActivityFilters): FetchState<RecentActivity[]> {
  const [data, setData] = useState<RecentActivity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Use the view for joined contact data, with manual filtering
      let query = supabase
        .from("v_recent_activity")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(200);

      // Note: v_recent_activity already has a LIMIT 50, so for full log
      // we query activity_log directly with a join
      const { data: rows, error: e } = await supabase
        .from("activity_log")
        .select("*, contacts(first_name, last_name, company_name, email)")
        .order("created_at", { ascending: false })
        .limit(200);
      if (e) throw e;

      let filtered = (rows || []).map((row: any) => ({
        ...row,
        first_name: row.contacts?.first_name || null,
        last_name: row.contacts?.last_name || null,
        company_name: row.contacts?.company_name || null,
        contact_email: row.contacts?.email || null,
      })) as RecentActivity[];

      if (filters?.activityType) {
        filtered = filtered.filter((a) => a.activity_type === filters.activityType);
      }
      if (filters?.daysBack) {
        const cutoff = new Date(Date.now() - filters.daysBack * 86400000).toISOString();
        filtered = filtered.filter((a) => a.created_at >= cutoff);
      }
      if (filters?.search) {
        const term = filters.search.toLowerCase();
        filtered = filtered.filter(
          (a) =>
            (a.description || "").toLowerCase().includes(term) ||
            (a.first_name || "").toLowerCase().includes(term) ||
            (a.last_name || "").toLowerCase().includes(term) ||
            (a.company_name || "").toLowerCase().includes(term)
        );
      }

      setData(filtered);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to load activity log");
      console.error("useActivityLog error:", err);
    } finally {
      setIsLoading(false);
    }
  }, [filters?.activityType, filters?.daysBack, filters?.search]);

  useEffect(() => { fetch(); }, [fetch]);
  return { data, isLoading, error, refetch: fetch };
}

// ── useEmailStats: aggregated email metrics ─────────────────────────────────

interface EmailStats {
  totalSent: number;
  openRate: number;
  clickRate: number;
  bounceRate: number;
  sequences: SequenceStats[];
  recentEvents: EmailEvent[];
}

interface SequenceStats {
  sequence_name: string;
  step_number: number;
  email_subject: string | null;
  sent: number;
  opened: number;
  clicked: number;
  bounced: number;
}

export function useEmailStats(): FetchState<EmailStats> {
  const empty: EmailStats = {
    totalSent: 0, openRate: 0, clickRate: 0, bounceRate: 0,
    sequences: [], recentEvents: [],
  };
  const [data, setData] = useState<EmailStats>(empty);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const thirtyDaysAgo = new Date(Date.now() - 30 * 86400000).toISOString();

      const [allRes, recentRes] = await Promise.all([
        supabase
          .from("email_events")
          .select("sequence_name, step_number, email_subject, status")
          .gte("created_at", thirtyDaysAgo),
        supabase
          .from("email_events")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(20),
      ]);

      if (allRes.error) throw allRes.error;
      if (recentRes.error) throw recentRes.error;

      const all = allRes.data || [];
      const sent = all.filter((e) => e.status !== "scheduled").length;
      const opened = all.filter((e) => e.status === "opened" || e.status === "clicked").length;
      const clicked = all.filter((e) => e.status === "clicked").length;
      const bounced = all.filter((e) => e.status === "bounced").length;

      // Group by sequence + step
      const groupMap = new Map<string, SequenceStats>();
      for (const row of all) {
        const key = `${row.sequence_name}::${row.step_number}`;
        if (!groupMap.has(key)) {
          groupMap.set(key, {
            sequence_name: row.sequence_name,
            step_number: row.step_number,
            email_subject: row.email_subject,
            sent: 0, opened: 0, clicked: 0, bounced: 0,
          });
        }
        const g = groupMap.get(key)!;
        if (row.status !== "scheduled") g.sent++;
        if (row.status === "opened" || row.status === "clicked") g.opened++;
        if (row.status === "clicked") g.clicked++;
        if (row.status === "bounced") g.bounced++;
      }

      const sequences = Array.from(groupMap.values()).sort(
        (a, b) => a.sequence_name.localeCompare(b.sequence_name) || a.step_number - b.step_number
      );

      setData({
        totalSent: sent,
        openRate: sent > 0 ? Math.round((opened / sent) * 100) : 0,
        clickRate: sent > 0 ? Math.round((clicked / sent) * 100) : 0,
        bounceRate: sent > 0 ? Math.round((bounced / sent) * 100) : 0,
        sequences,
        recentEvents: (recentRes.data || []) as EmailEvent[],
      });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to load email stats");
      console.error("useEmailStats error:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => { fetch(); }, [fetch]);
  return { data, isLoading, error, refetch: fetch };
}

// ── Mutation hooks ──────────────────────────────────────────────────────────

export function useContactMutation() {
  const updateContact = async (id: string, updates: Partial<Contact>) => {
    const { error } = await supabase
      .from("contacts")
      .update(updates)
      .eq("id", id);
    if (error) throw error;
  };

  const createContact = async (contact: Omit<Contact, "id" | "created_at" | "updated_at">) => {
    const { data, error } = await supabase
      .from("contacts")
      .insert(contact)
      .select()
      .single();
    if (error) throw error;
    return data as Contact;
  };

  const addNote = async (contactId: string, note: string) => {
    await updateContact(contactId, { notes: note });
    // Also log to activity
    await supabase.from("activity_log").insert({
      contact_id: contactId,
      activity_type: "note_added",
      description: `Note updated`,
    });
  };

  return { updateContact, createContact, addNote };
}

export function useDealMutation() {
  const createDeal = async (deal: Omit<Deal, "id" | "created_at" | "updated_at">) => {
    const { data, error } = await supabase
      .from("deals")
      .insert(deal)
      .select()
      .single();
    if (error) throw error;
    // Log activity
    await supabase.from("activity_log").insert({
      contact_id: deal.contact_id,
      activity_type: "deal_created",
      description: `Deal created: ${deal.title}`,
      metadata: { deal_id: data.id, stage: deal.stage },
    });
    return data as Deal;
  };

  const updateDeal = async (id: string, updates: Partial<Deal>) => {
    const { error } = await supabase
      .from("deals")
      .update(updates)
      .eq("id", id);
    if (error) throw error;
  };

  const changeDealStage = async (id: string, contactId: string, title: string, oldStage: DealStage, newStage: DealStage) => {
    const updates: Partial<Deal> = { stage: newStage };
    if (newStage === "closed_won" || newStage === "closed_lost") {
      updates.closed_at = new Date().toISOString();
    }
    await updateDeal(id, updates);
    // Log activity
    await supabase.from("activity_log").insert({
      contact_id: contactId,
      activity_type: "deal_stage_changed",
      description: `Deal "${title}" moved from ${oldStage} to ${newStage}`,
      metadata: { deal_id: id, old_stage: oldStage, new_stage: newStage },
    });
  };

  return { createDeal, updateDeal, changeDealStage };
}

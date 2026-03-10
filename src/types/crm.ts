// ============================================================================
// SmartFirm CRM TypeScript Types
// Mirrors supabase-schema.sql (project: sywfvkjxefuykrannots)
// ============================================================================

import type { Json } from "@/integrations/supabase/types";

// ── Contact ─────────────────────────────────────────────────────────────────

export type ContactSource =
  | "diagnostic"
  | "contact_form"
  | "linkedin"
  | "cold_outreach"
  | "referral"
  | "podcast"
  | "website"
  | "haro"
  | "manual";

export type ContactStage =
  | "lead"
  | "subscriber"
  | "qualified"
  | "opportunity"
  | "proposal_sent"
  | "negotiation"
  | "closed_won"
  | "closed_lost"
  | "client";

export interface Contact {
  id: string;
  first_name: string;
  last_name: string | null;
  email: string;
  phone: string | null;
  company_name: string | null;
  company_size: string | null;
  website: string | null;
  location_city: string | null;
  location_state: string | null;
  source: ContactSource | null;
  source_detail: string | null;
  stage: ContactStage;
  tags: string[] | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

/** v_contact_overview view: contact + aggregated counts */
export interface ContactOverview extends Contact {
  deal_count: number;
  deals_total_monthly: number;
  form_submission_count: number;
  email_event_count: number;
}

// ── Deal ────────────────────────────────────────────────────────────────────

export type DealStage =
  | "discovery"
  | "proposal"
  | "negotiation"
  | "closed_won"
  | "closed_lost";

export type PackageTier =
  | "essentials"
  | "growth"
  | "strategic_partner"
  | "quickstart"
  | "custom";

export interface Deal {
  id: string;
  contact_id: string;
  title: string;
  stage: DealStage;
  value_monthly: number | null;
  value_setup: number | null;
  services: string[] | null;
  package_tier: PackageTier | null;
  probability: number;
  expected_close_date: string | null;
  closed_at: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

/** Deal joined with contact fields for display */
export interface DealWithContact extends Deal {
  contacts: {
    first_name: string;
    last_name: string | null;
    company_name: string | null;
    email: string;
  };
}

// ── Form Submission ─────────────────────────────────────────────────────────

export type FormType =
  | "diagnostic"
  | "contact"
  | "get_started"
  | "growth_calculator"
  | "email_capture"
  | "reactivation"
  | "audit_intake";

export interface FormSubmission {
  id: string;
  contact_id: string | null;
  form_type: FormType;
  page_url: string | null;
  data: Json;
  ip_address: string | null;
  user_agent: string | null;
  created_at: string;
}

// ── Email Event ─────────────────────────────────────────────────────────────

export type EmailStatus =
  | "scheduled"
  | "sent"
  | "delivered"
  | "opened"
  | "clicked"
  | "bounced"
  | "failed";

export interface EmailEvent {
  id: string;
  contact_id: string;
  sequence_name: string;
  step_number: number;
  email_subject: string | null;
  status: EmailStatus;
  scheduled_for: string | null;
  sent_at: string | null;
  opened_at: string | null;
  clicked_at: string | null;
  resend_id: string | null;
  created_at: string;
}

// ── Activity Log ────────────────────────────────────────────────────────────

export type ActivityType =
  | "form_submit"
  | "email_sent"
  | "email_opened"
  | "deal_created"
  | "deal_stage_changed"
  | "call_booked"
  | "proposal_sent"
  | "note_added";

export interface ActivityLogEntry {
  id: string;
  contact_id: string | null;
  activity_type: ActivityType;
  description: string | null;
  metadata: Json | null;
  created_at: string;
}

/** v_recent_activity view: activity + contact info */
export interface RecentActivity extends ActivityLogEntry {
  first_name: string | null;
  last_name: string | null;
  company_name: string | null;
  contact_email: string | null;
}

// ── Pipeline Summary View ───────────────────────────────────────────────────

export interface PipelineStageSummary {
  stage: DealStage;
  deal_count: number;
  total_monthly: number;
  total_setup: number;
  avg_probability: number;
}

// ── CRM Stats (for overview page) ──────────────────────────────────────────

export interface CrmStats {
  activeContacts: number;
  pipelineValue: number;
  newLeadsThisWeek: number;
  emailOpenRate: number;
}

// ── Stage / Source Display Helpers ──────────────────────────────────────────

export const CONTACT_STAGE_LABELS: Record<ContactStage, string> = {
  lead: "Lead",
  subscriber: "Subscriber",
  qualified: "Qualified",
  opportunity: "Opportunity",
  proposal_sent: "Proposal Sent",
  negotiation: "Negotiation",
  closed_won: "Closed Won",
  closed_lost: "Closed Lost",
  client: "Client",
};

export const DEAL_STAGE_LABELS: Record<DealStage, string> = {
  discovery: "Discovery",
  proposal: "Proposal",
  negotiation: "Negotiation",
  closed_won: "Closed Won",
  closed_lost: "Closed Lost",
};

export const CONTACT_SOURCE_LABELS: Record<ContactSource, string> = {
  diagnostic: "Diagnostic",
  contact_form: "Contact Form",
  linkedin: "LinkedIn",
  cold_outreach: "Cold Outreach",
  referral: "Referral",
  podcast: "Podcast",
  website: "Website",
  haro: "HARO",
  manual: "Manual",
};

export const STAGE_COLORS: Record<ContactStage, string> = {
  lead: "bg-slate-100 text-slate-700",
  subscriber: "bg-blue-100 text-blue-700",
  qualified: "bg-teal-100 text-teal-700",
  opportunity: "bg-amber-100 text-amber-700",
  proposal_sent: "bg-purple-100 text-purple-700",
  negotiation: "bg-orange-100 text-orange-700",
  closed_won: "bg-green-100 text-green-700",
  closed_lost: "bg-red-100 text-red-700",
  client: "bg-teal-600 text-white",
};

export const DEAL_STAGE_COLORS: Record<DealStage, string> = {
  discovery: "bg-slate-100 text-slate-700",
  proposal: "bg-purple-100 text-purple-700",
  negotiation: "bg-amber-100 text-amber-700",
  closed_won: "bg-green-100 text-green-700",
  closed_lost: "bg-red-100 text-red-700",
};

export const SOURCE_COLORS: Record<ContactSource, string> = {
  diagnostic: "bg-teal-100 text-teal-700",
  contact_form: "bg-blue-100 text-blue-700",
  linkedin: "bg-sky-100 text-sky-700",
  cold_outreach: "bg-orange-100 text-orange-700",
  referral: "bg-green-100 text-green-700",
  podcast: "bg-purple-100 text-purple-700",
  website: "bg-slate-100 text-slate-700",
  haro: "bg-amber-100 text-amber-700",
  manual: "bg-gray-100 text-gray-700",
};

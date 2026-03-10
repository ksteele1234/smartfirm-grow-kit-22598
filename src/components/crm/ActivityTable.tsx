// ============================================================================
// ActivityTable: Full activity log with type, date range, and search filters
// ============================================================================

import { useState, useMemo } from "react";
import { useActivityLog } from "@/hooks/useCrm";
import { timeAgo } from "@/components/crm/utils";
import type { ActivityType } from "@/types/crm";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FileText,
  Mail,
  MailOpen,
  DollarSign,
  ArrowRightLeft,
  Phone,
  Send,
  StickyNote,
  Activity,
  Search,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ── Activity type icon map ──────────────────────────────────────────────────

const ACTIVITY_ICONS: Record<ActivityType, LucideIcon> = {
  form_submit: FileText,
  email_sent: Mail,
  email_opened: MailOpen,
  deal_created: DollarSign,
  deal_stage_changed: ArrowRightLeft,
  call_booked: Phone,
  proposal_sent: Send,
  note_added: StickyNote,
};

const ACTIVITY_LABELS: Record<ActivityType, string> = {
  form_submit: "Form Submit",
  email_sent: "Email Sent",
  email_opened: "Email Opened",
  deal_created: "Deal Created",
  deal_stage_changed: "Deal Stage Changed",
  call_booked: "Call Booked",
  proposal_sent: "Proposal Sent",
  note_added: "Note Added",
};

// ── Date range options ──────────────────────────────────────────────────────

const DATE_RANGES = [
  { label: "All Time", value: "all" },
  { label: "Today", value: "1" },
  { label: "Last 7 Days", value: "7" },
  { label: "Last 30 Days", value: "30" },
] as const;

const ALL_ACTIVITY_TYPES: ActivityType[] = [
  "form_submit",
  "email_sent",
  "email_opened",
  "deal_created",
  "deal_stage_changed",
  "call_booked",
  "proposal_sent",
  "note_added",
];

// ── Component ───────────────────────────────────────────────────────────────

export default function ActivityTable() {
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [dateRange, setDateRange] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Build filters for the hook
  const filters = useMemo(
    () => ({
      activityType:
        typeFilter !== "all" ? (typeFilter as ActivityType) : undefined,
      daysBack: dateRange !== "all" ? Number(dateRange) : undefined,
      search: searchTerm.trim() || undefined,
    }),
    [typeFilter, dateRange, searchTerm]
  );

  const { data: activities, isLoading, error } = useActivityLog(filters);

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Activity type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {ALL_ACTIVITY_TYPES.map((t) => (
              <SelectItem key={t} value={t}>
                {ACTIVITY_LABELS[t]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Date range" />
          </SelectTrigger>
          <SelectContent>
            {DATE_RANGES.map((r) => (
              <SelectItem key={r.value} value={r.value}>
                {r.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search activity..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Table / States */}
      {isLoading ? (
        <div className="space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
      ) : error ? (
        <p className="text-destructive text-sm py-4">{error}</p>
      ) : activities.length === 0 ? (
        <p className="text-muted-foreground text-sm py-8 text-center">
          No activity found matching your filters.
        </p>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10" />
                <TableHead>Description</TableHead>
                <TableHead className="hidden md:table-cell">Contact</TableHead>
                <TableHead className="text-right">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activities.map((entry) => {
                const Icon =
                  ACTIVITY_ICONS[entry.activity_type] || Activity;
                const contactName = [entry.first_name, entry.last_name]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <TableRow key={entry.id}>
                    <TableCell>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100">
                        <Icon className="h-3.5 w-3.5 text-slate-600" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="text-sm leading-snug">
                        {entry.description || ACTIVITY_LABELS[entry.activity_type]}
                      </p>
                      {/* Show contact on mobile below description */}
                      {contactName && (
                        <p className="text-xs text-muted-foreground mt-0.5 md:hidden">
                          {contactName}
                          {entry.company_name ? ` (${entry.company_name})` : ""}
                        </p>
                      )}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {contactName ? (
                        <div>
                          <p className="text-sm">{contactName}</p>
                          {entry.company_name && (
                            <p className="text-xs text-muted-foreground">
                              {entry.company_name}
                            </p>
                          )}
                        </div>
                      ) : (
                        <span className="text-xs text-muted-foreground">
                          No contact
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-right whitespace-nowrap text-sm text-muted-foreground">
                      {timeAgo(entry.created_at)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}

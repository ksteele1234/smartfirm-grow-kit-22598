// ============================================================================
// EmailStatsPage: Email performance overview (/admin/crm/emails)
// Summary cards, sequence breakdown, and recent events
// ============================================================================

import SEO from "@/components/SEO";
import { useEmailStats } from "@/hooks/useCrm";
import EmailSummaryCards from "@/components/crm/EmailSummaryCards";
import SequencePerformance from "@/components/crm/SequencePerformance";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { timeAgo } from "@/components/crm/utils";
import type { EmailStatus } from "@/types/crm";
import { cn } from "@/lib/utils";

// ── Status badge color map ──────────────────────────────────────────────────

const STATUS_COLORS: Record<EmailStatus, string> = {
  scheduled: "bg-slate-100 text-slate-700",
  sent: "bg-blue-100 text-blue-700",
  delivered: "bg-blue-100 text-blue-700",
  opened: "bg-green-100 text-green-700",
  clicked: "bg-teal-100 text-teal-700",
  bounced: "bg-red-100 text-red-700",
  failed: "bg-red-100 text-red-700",
};

// ── Component ───────────────────────────────────────────────────────────────

export default function EmailStatsPage() {
  const { data, isLoading, error } = useEmailStats();

  if (error) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-primary">Email Performance</h1>
        </div>
        <p className="text-destructive text-sm">{error}</p>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Email Performance"
        description="SmartFirm CRM email stats and analytics"
        robots="noindex,nofollow"
      />
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-primary">
            Email Performance
          </h1>
          <p className="text-muted-foreground">Last 30 days</p>
        </div>

        {/* Summary Cards */}
        {isLoading ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-[108px] w-full rounded-lg" />
            ))}
          </div>
        ) : (
          <EmailSummaryCards
            totalSent={data.totalSent}
            openRate={data.openRate}
            clickRate={data.clickRate}
            bounceRate={data.bounceRate}
          />
        )}

        {/* Sequence Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Sequence Performance</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-10 w-full" />
                ))}
              </div>
            ) : (
              <SequencePerformance sequences={data.sequences} />
            )}
          </CardContent>
        </Card>

        {/* Recent Email Events */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Email Events</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-10 w-full" />
                ))}
              </div>
            ) : data.recentEvents.length === 0 ? (
              <p className="text-muted-foreground text-sm py-4 text-center">
                No email events yet.
              </p>
            ) : (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Sequence
                      </TableHead>
                      <TableHead className="hidden md:table-cell text-center">
                        Step
                      </TableHead>
                      <TableHead className="text-right">Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.recentEvents.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell className="max-w-[200px] truncate text-sm">
                          {event.email_subject || "(no subject)"}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="secondary"
                            className={cn(
                              "border-0 capitalize",
                              STATUS_COLORS[event.status] || ""
                            )}
                          >
                            {event.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                          {event.sequence_name}
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-center">
                          {event.step_number}
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap text-sm text-muted-foreground">
                          {timeAgo(event.sent_at || event.created_at)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

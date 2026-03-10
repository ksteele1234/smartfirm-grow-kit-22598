// ============================================================================
// RecentActivityFeed: Activity timeline for CRM overview page
// ============================================================================

import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRecentActivity } from "@/hooks/useCrm";
import { timeAgo } from "@/components/crm/utils";
import type { ActivityType } from "@/types/crm";
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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

interface RecentActivityFeedProps {
  limit?: number;
}

export default function RecentActivityFeed({
  limit = 10,
}: RecentActivityFeedProps) {
  const { data: activities, isLoading, error } = useRecentActivity(limit);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Recent Activity</CardTitle>
        <Button variant="outline" size="sm" asChild>
          <Link to="/admin/crm/activity">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p className="text-muted-foreground text-sm">Loading activity...</p>
        ) : error ? (
          <p className="text-destructive text-sm">{error}</p>
        ) : activities.length === 0 ? (
          <p className="text-muted-foreground text-sm py-4 text-center">
            No recent activity
          </p>
        ) : (
          <div className="space-y-3">
            {activities.map((entry) => {
              const Icon =
                ACTIVITY_ICONS[entry.activity_type] || Activity;
              const contactName = [entry.first_name, entry.last_name]
                .filter(Boolean)
                .join(" ");

              return (
                <div
                  key={entry.id}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 p-3"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100">
                    <Icon className="h-3.5 w-3.5 text-slate-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm leading-snug">
                      {entry.description || entry.activity_type}
                    </p>
                    {contactName && (
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {contactName}
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground whitespace-nowrap">
                    {timeAgo(entry.created_at)}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

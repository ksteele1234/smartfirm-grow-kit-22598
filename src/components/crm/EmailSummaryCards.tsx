// ============================================================================
// EmailSummaryCards: Top-level email metrics (sent, open rate, click, bounce)
// Matches the AdminDashboard.tsx CardHeader + CardContent pattern
// ============================================================================

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MailOpen, MousePointerClick, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmailSummaryCardsProps {
  totalSent: number;
  openRate: number;
  clickRate: number;
  bounceRate: number;
}

export default function EmailSummaryCards({
  totalSent,
  openRate,
  clickRate,
  bounceRate,
}: EmailSummaryCardsProps) {
  // Color helpers for conditional rate coloring
  const openRateColor =
    openRate > 30
      ? "text-green-600"
      : openRate >= 15
        ? "text-amber-600"
        : "text-red-600";

  const bounceRateColor = bounceRate > 5 ? "text-red-600" : "text-green-600";

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* Emails Sent */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Emails Sent</CardTitle>
          <Mail className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalSent.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">Last 30 days</p>
        </CardContent>
      </Card>

      {/* Open Rate */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Open Rate</CardTitle>
          <MailOpen className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className={cn("text-2xl font-bold", openRateColor)}>
            {openRate}%
          </div>
          <p className="text-xs text-muted-foreground">Last 30 days</p>
        </CardContent>
      </Card>

      {/* Click Rate */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Click Rate</CardTitle>
          <MousePointerClick className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{clickRate}%</div>
          <p className="text-xs text-muted-foreground">Last 30 days</p>
        </CardContent>
      </Card>

      {/* Bounce Rate */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className={cn("text-2xl font-bold", bounceRateColor)}>
            {bounceRate}%
          </div>
          <p className="text-xs text-muted-foreground">Last 30 days</p>
        </CardContent>
      </Card>
    </div>
  );
}

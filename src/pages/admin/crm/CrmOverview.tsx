// ============================================================================
// CrmOverview: Main CRM dashboard page at /admin/crm
// ============================================================================

import { Users, DollarSign, TrendingUp, Mail } from "lucide-react";
import { useCrmStats } from "@/hooks/useCrm";
import { formatCurrency } from "@/components/crm/utils";
import MetricCard from "@/components/crm/MetricCard";
import PipelineMini from "@/components/crm/PipelineMini";
import RecentActivityFeed from "@/components/crm/RecentActivityFeed";
import PendingActions from "@/components/crm/PendingActions";
import SEO from "@/components/SEO";

export default function CrmOverview() {
  const { data: stats, isLoading } = useCrmStats();

  return (
    <>
      <SEO
        title="CRM Overview"
        description="SmartFirm CRM dashboard overview"
        robots="noindex,nofollow"
      />
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-primary">CRM Overview</h1>
          <p className="text-muted-foreground">
            Pipeline, activity, and pending actions at a glance
          </p>
        </div>

        {/* Metric Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Active Contacts"
            value={isLoading ? "..." : String(stats.activeContacts)}
            subtitle="Excluding closed lost"
            icon={Users}
          />
          <MetricCard
            title="Pipeline Value"
            value={
              isLoading ? "..." : `${formatCurrency(stats.pipelineValue)}/mo`
            }
            subtitle="Total monthly recurring"
            icon={DollarSign}
          />
          <MetricCard
            title="New Leads This Week"
            value={isLoading ? "..." : String(stats.newLeadsThisWeek)}
            subtitle="Last 7 days"
            icon={TrendingUp}
          />
          <MetricCard
            title="Email Open Rate"
            value={isLoading ? "..." : `${stats.emailOpenRate}%`}
            subtitle="Last 30 days"
            icon={Mail}
          />
        </div>

        {/* Pipeline Mini */}
        <PipelineMini />

        {/* Two-column: Activity + Pending Actions */}
        <div className="grid gap-6 lg:grid-cols-2">
          <RecentActivityFeed limit={10} />
          <PendingActions />
        </div>
      </div>
    </>
  );
}

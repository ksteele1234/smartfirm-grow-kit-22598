// ============================================================================
// ActivityPage: Full activity feed with filters (/admin/crm/activity)
// ============================================================================

import SEO from "@/components/SEO";
import ActivityTable from "@/components/crm/ActivityTable";

export default function ActivityPage() {
  return (
    <>
      <SEO
        title="Activity Feed"
        description="SmartFirm CRM activity log"
        robots="noindex,nofollow"
      />
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-primary">Activity Feed</h1>
          <p className="text-muted-foreground">
            All CRM activity across contacts, deals, and emails
          </p>
        </div>

        {/* Activity log table with built-in filters */}
        <ActivityTable />
      </div>
    </>
  );
}

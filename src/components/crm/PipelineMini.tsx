// ============================================================================
// PipelineMini: Horizontal pipeline summary for CRM overview page
// Shows each deal stage with count and total monthly value.
// ============================================================================

import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { usePipelineSummary } from "@/hooks/useCrm";
import { DEAL_STAGE_LABELS, DEAL_STAGE_COLORS } from "@/types/crm";
import { formatCurrency } from "@/components/crm/utils";

const STAGE_ORDER = [
  "discovery",
  "proposal",
  "negotiation",
  "closed_won",
  "closed_lost",
] as const;

export default function PipelineMini() {
  const { data: stages, isLoading, error } = usePipelineSummary();

  // Build a lookup for quick access by stage name
  const stageMap = new Map(stages.map((s) => [s.stage, s]));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Pipeline</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p className="text-muted-foreground text-sm">Loading pipeline...</p>
        ) : error ? (
          <p className="text-destructive text-sm">{error}</p>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {STAGE_ORDER.map((stage) => {
              const summary = stageMap.get(stage);
              const count = summary?.deal_count ?? 0;
              const total = summary?.total_monthly ?? 0;
              const colors = DEAL_STAGE_COLORS[stage];

              return (
                <Link
                  key={stage}
                  to={`/admin/crm/pipeline?stage=${stage}`}
                  className="block rounded-lg border p-3 text-center transition-colors hover:border-primary/50 hover:bg-slate-50"
                >
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${colors}`}
                  >
                    {DEAL_STAGE_LABELS[stage]}
                  </span>
                  <div className="mt-2 text-xl font-bold">{count}</div>
                  <p className="text-xs text-muted-foreground">
                    {formatCurrency(total)}/mo
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

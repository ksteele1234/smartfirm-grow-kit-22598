// ============================================================================
// StageBadge: Colored badge for contact or deal stages
// ============================================================================

import { Badge } from "@/components/ui/badge";
import type { ContactStage, DealStage } from "@/types/crm";
import {
  STAGE_COLORS,
  DEAL_STAGE_COLORS,
  CONTACT_STAGE_LABELS,
  DEAL_STAGE_LABELS,
} from "@/types/crm";

interface StageBadgeProps {
  stage: ContactStage | DealStage;
  type: "contact" | "deal";
}

export default function StageBadge({ stage, type }: StageBadgeProps) {
  const colorClass =
    type === "contact"
      ? STAGE_COLORS[stage as ContactStage]
      : DEAL_STAGE_COLORS[stage as DealStage];

  const label =
    type === "contact"
      ? CONTACT_STAGE_LABELS[stage as ContactStage]
      : DEAL_STAGE_LABELS[stage as DealStage];

  return (
    <Badge variant="secondary" className={colorClass}>
      {label}
    </Badge>
  );
}

// ============================================================================
// SourceBadge: Badge for contact source (diagnostic, referral, etc.)
// ============================================================================

import { Badge } from "@/components/ui/badge";
import type { ContactSource } from "@/types/crm";
import { SOURCE_COLORS, CONTACT_SOURCE_LABELS } from "@/types/crm";

interface SourceBadgeProps {
  source: ContactSource | null;
}

export default function SourceBadge({ source }: SourceBadgeProps) {
  if (!source) {
    return (
      <Badge variant="secondary" className="bg-gray-100 text-gray-500">
        Unknown
      </Badge>
    );
  }

  return (
    <Badge variant="secondary" className={SOURCE_COLORS[source]}>
      {CONTACT_SOURCE_LABELS[source]}
    </Badge>
  );
}

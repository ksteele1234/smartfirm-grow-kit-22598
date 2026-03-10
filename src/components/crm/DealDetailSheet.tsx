// ============================================================================
// DealDetailSheet: Slide-out panel showing full deal details
// ============================================================================

import { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DEAL_STAGE_COLORS,
  DEAL_STAGE_LABELS,
  type DealWithContact,
} from "@/types/crm";
import { formatCurrency } from "@/components/crm/utils";

const PACKAGE_TIER_LABELS: Record<string, string> = {
  essentials: "Essentials",
  growth: "Growth",
  strategic_partner: "Strategic Partner",
  quickstart: "QuickStart",
  custom: "Custom",
};

interface DealDetailSheetProps {
  dealId: string | null;
  deals: DealWithContact[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function DealDetailSheet({
  dealId,
  deals,
  open,
  onOpenChange,
}: DealDetailSheetProps) {
  const deal = useMemo(
    () => deals.find((d) => d.id === dealId) ?? null,
    [deals, dealId]
  );

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "Not set";
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const formatShortDate = (dateStr: string | null) => {
    if (!dateStr) return "Not set";
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getContactName = () => {
    if (!deal) return "";
    const parts = [deal.contacts.first_name, deal.contacts.last_name].filter(
      Boolean
    );
    return parts.join(" ");
  };

  if (!deal) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Deal Details</SheetTitle>
            <SheetDescription>No deal selected</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left">{deal.title}</SheetTitle>
          <SheetDescription className="text-left">
            <span className="flex items-center gap-2 mt-1">
              <Badge className={DEAL_STAGE_COLORS[deal.stage]}>
                {DEAL_STAGE_LABELS[deal.stage]}
              </Badge>
            </span>
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-1">
              Contact
            </h4>
            <p className="text-sm font-medium">{getContactName()}</p>
            {deal.contacts.company_name && (
              <p className="text-sm text-muted-foreground">
                {deal.contacts.company_name}
              </p>
            )}
            <p className="text-sm text-muted-foreground">
              {deal.contacts.email}
            </p>
          </div>

          {/* Value */}
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">
              Value
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-xs text-muted-foreground">Monthly</p>
                <p className="text-lg font-bold">
                  {deal.value_monthly
                    ? formatCurrency(deal.value_monthly)
                    : "N/A"}
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-xs text-muted-foreground">Setup</p>
                <p className="text-lg font-bold">
                  {deal.value_setup
                    ? formatCurrency(deal.value_setup)
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Probability */}
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-1">
              Probability
            </h4>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-muted rounded-full h-2">
                <div
                  className="bg-primary rounded-full h-2 transition-all"
                  style={{ width: `${deal.probability}%` }}
                />
              </div>
              <span className="text-sm font-medium w-12 text-right">
                {deal.probability}%
              </span>
            </div>
          </div>

          {/* Package Tier */}
          {deal.package_tier && (
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">
                Package Tier
              </h4>
              <Badge variant="outline">
                {PACKAGE_TIER_LABELS[deal.package_tier] || deal.package_tier}
              </Badge>
            </div>
          )}

          {/* Services */}
          {deal.services && deal.services.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">
                Services
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {deal.services.map((service, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Expected Close */}
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-1">
              Expected Close
            </h4>
            <p className="text-sm">
              {formatShortDate(deal.expected_close_date)}
            </p>
          </div>

          {/* Notes */}
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-1">
              Notes
            </h4>
            <p className="text-sm whitespace-pre-wrap">
              {deal.notes || "No notes"}
            </p>
          </div>

          {/* Close Date (if closed) */}
          {deal.closed_at && (
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">
                Closed At
              </h4>
              <p className="text-sm">{formatDate(deal.closed_at)}</p>
            </div>
          )}

          {/* Timestamps */}
          <div className="border-t pt-4">
            <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
              <div>
                <p className="font-medium">Created</p>
                <p>{formatDate(deal.created_at)}</p>
              </div>
              <div>
                <p className="font-medium">Updated</p>
                <p>{formatDate(deal.updated_at)}</p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

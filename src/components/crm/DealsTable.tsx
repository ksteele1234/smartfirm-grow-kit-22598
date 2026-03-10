// ============================================================================
// DealsTable: Filterable table of deals with inline stage change
// ============================================================================

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
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
import { Search } from "lucide-react";
import {
  DEAL_STAGE_COLORS,
  DEAL_STAGE_LABELS,
  type DealStage,
  type DealWithContact,
} from "@/types/crm";
import { formatCurrency } from "@/components/crm/utils";

const STAGE_OPTIONS: DealStage[] = [
  "discovery",
  "proposal",
  "negotiation",
  "closed_won",
  "closed_lost",
];

interface DealsTableProps {
  deals: DealWithContact[];
  onSelectDeal: (dealId: string) => void;
  onStageChange?: (
    dealId: string,
    contactId: string,
    title: string,
    oldStage: DealStage,
    newStage: DealStage
  ) => void;
  isLoading: boolean;
}

export default function DealsTable({
  deals,
  onSelectDeal,
  onStageChange,
  isLoading,
}: DealsTableProps) {
  const [search, setSearch] = useState("");
  const [stageFilter, setStageFilter] = useState<string>("all");

  const filteredDeals = useMemo(() => {
    const term = search.toLowerCase();
    return deals.filter((deal) => {
      const matchesSearch =
        !term ||
        deal.title.toLowerCase().includes(term) ||
        (deal.contacts.company_name || "").toLowerCase().includes(term) ||
        deal.contacts.first_name.toLowerCase().includes(term) ||
        (deal.contacts.last_name || "").toLowerCase().includes(term);

      const matchesStage =
        stageFilter === "all" || deal.stage === stageFilter;

      return matchesSearch && matchesStage;
    });
  }, [deals, search, stageFilter]);

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getContactDisplay = (deal: DealWithContact) => {
    if (deal.contacts.company_name) {
      return deal.contacts.company_name;
    }
    const parts = [deal.contacts.first_name, deal.contacts.last_name].filter(
      Boolean
    );
    return parts.join(" ") || deal.contacts.email;
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex gap-4">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-40" />
        </div>
        <div className="border rounded-lg">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-14 w-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search deals, contacts, companies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={stageFilter} onValueChange={setStageFilter}>
          <SelectTrigger className="w-full sm:w-44">
            <SelectValue placeholder="All Stages" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Stages</SelectItem>
            {STAGE_OPTIONS.map((stage) => (
              <SelectItem key={stage} value={stage}>
                {DEAL_STAGE_LABELS[stage]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="border rounded-lg bg-card overflow-x-auto">
        {filteredDeals.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {search || stageFilter !== "all"
                ? "No deals match your filters"
                : "No deals yet"}
            </p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead className="text-right">Monthly</TableHead>
                <TableHead className="text-right">Setup</TableHead>
                <TableHead className="text-right">Probability</TableHead>
                <TableHead>Expected Close</TableHead>
                <TableHead>Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDeals.map((deal) => (
                <TableRow
                  key={deal.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => onSelectDeal(deal.id)}
                >
                  <TableCell className="font-medium max-w-[200px] truncate">
                    {deal.title}
                  </TableCell>
                  <TableCell className="max-w-[180px] truncate text-muted-foreground">
                    {getContactDisplay(deal)}
                  </TableCell>
                  <TableCell
                    onClick={(e) => e.stopPropagation()}
                    className="min-w-[150px]"
                  >
                    {onStageChange ? (
                      <Select
                        value={deal.stage}
                        onValueChange={(newStage: string) => {
                          if (newStage !== deal.stage) {
                            onStageChange(
                              deal.id,
                              deal.contact_id,
                              deal.title,
                              deal.stage,
                              newStage as DealStage
                            );
                          }
                        }}
                      >
                        <SelectTrigger className="h-8 w-[140px] border-none bg-transparent p-0">
                          <Badge className={DEAL_STAGE_COLORS[deal.stage]}>
                            {DEAL_STAGE_LABELS[deal.stage]}
                          </Badge>
                        </SelectTrigger>
                        <SelectContent>
                          {STAGE_OPTIONS.map((stage) => (
                            <SelectItem key={stage} value={stage}>
                              <Badge className={DEAL_STAGE_COLORS[stage]}>
                                {DEAL_STAGE_LABELS[stage]}
                              </Badge>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Badge className={DEAL_STAGE_COLORS[deal.stage]}>
                        {DEAL_STAGE_LABELS[deal.stage]}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    {deal.value_monthly
                      ? formatCurrency(deal.value_monthly)
                      : ""}
                  </TableCell>
                  <TableCell className="text-right">
                    {deal.value_setup
                      ? formatCurrency(deal.value_setup)
                      : ""}
                  </TableCell>
                  <TableCell className="text-right">
                    {deal.probability}%
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {formatDate(deal.expected_close_date)}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {formatDate(deal.updated_at)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Results count */}
      {filteredDeals.length > 0 && (
        <p className="text-sm text-muted-foreground text-center">
          Showing {filteredDeals.length} of {deals.length} deals
        </p>
      )}
    </div>
  );
}

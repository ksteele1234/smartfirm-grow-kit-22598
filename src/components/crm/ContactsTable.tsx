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
import {
  Search,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import type { ContactOverview, ContactStage, ContactSource } from "@/types/crm";
import {
  CONTACT_STAGE_LABELS,
  CONTACT_SOURCE_LABELS,
  STAGE_COLORS,
  SOURCE_COLORS,
} from "@/types/crm";

// ── Props ───────────────────────────────────────────────────────────────────

interface ContactsTableProps {
  contacts: ContactOverview[];
  onSelectContact: (id: string) => void;
  isLoading: boolean;
}

// ── Sort configuration ──────────────────────────────────────────────────────

type SortField = "name" | "company" | "created_at" | "stage";
type SortDirection = "asc" | "desc";

// ── Helpers ─────────────────────────────────────────────────────────────────

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const ALL_STAGES: ContactStage[] = [
  "lead",
  "subscriber",
  "qualified",
  "opportunity",
  "proposal_sent",
  "negotiation",
  "closed_won",
  "closed_lost",
  "client",
];

const ALL_SOURCES: ContactSource[] = [
  "diagnostic",
  "contact_form",
  "linkedin",
  "cold_outreach",
  "referral",
  "podcast",
  "website",
  "haro",
  "manual",
];

// ── Component ───────────────────────────────────────────────────────────────

export default function ContactsTable({
  contacts,
  onSelectContact,
  isLoading,
}: ContactsTableProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [stageFilter, setStageFilter] = useState<string>("all");
  const [sourceFilter, setSourceFilter] = useState<string>("all");
  const [sortField, setSortField] = useState<SortField>("created_at");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  // Filter contacts client-side
  const filteredContacts = useMemo(() => {
    const term = searchQuery.toLowerCase();
    return contacts.filter((c) => {
      const matchesSearch =
        !term ||
        c.first_name.toLowerCase().includes(term) ||
        (c.last_name || "").toLowerCase().includes(term) ||
        c.email.toLowerCase().includes(term) ||
        (c.company_name || "").toLowerCase().includes(term);

      const matchesStage = stageFilter === "all" || c.stage === stageFilter;
      const matchesSource =
        sourceFilter === "all" || c.source === sourceFilter;

      return matchesSearch && matchesStage && matchesSource;
    });
  }, [contacts, searchQuery, stageFilter, sourceFilter]);

  // Sort filtered results
  const sortedContacts = useMemo(() => {
    return [...filteredContacts].sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case "name": {
          const aName = `${a.first_name} ${a.last_name || ""}`.trim();
          const bName = `${b.first_name} ${b.last_name || ""}`.trim();
          comparison = aName.localeCompare(bName);
          break;
        }
        case "company":
          comparison = (a.company_name || "").localeCompare(
            b.company_name || ""
          );
          break;
        case "created_at":
          comparison =
            new Date(a.created_at).getTime() -
            new Date(b.created_at).getTime();
          break;
        case "stage":
          comparison = a.stage.localeCompare(b.stage);
          break;
      }
      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [filteredContacts, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field)
      return (
        <ArrowUpDown size={14} className="ml-1 text-muted-foreground" />
      );
    return sortDirection === "asc" ? (
      <ArrowUp size={14} className="ml-1" />
    ) : (
      <ArrowDown size={14} className="ml-1" />
    );
  };

  // ── Loading skeleton ────────────────────────────────────────────────────

  if (isLoading) {
    return (
      <div className="space-y-4">
        {/* Skeleton filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-full sm:w-40" />
          <Skeleton className="h-10 w-full sm:w-40" />
        </div>
        {/* Skeleton table rows */}
        <div className="border rounded-lg bg-card">
          <div className="space-y-0">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-4 py-3 border-b last:border-b-0"
              >
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-5 w-20 rounded-full" />
                <Skeleton className="h-5 w-20 rounded-full" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-8" />
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── Rendered table ──────────────────────────────────────────────────────

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search name, email, or company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={stageFilter} onValueChange={setStageFilter}>
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Stage" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Stages</SelectItem>
            {ALL_STAGES.map((stage) => (
              <SelectItem key={stage} value={stage}>
                {CONTACT_STAGE_LABELS[stage]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sourceFilter} onValueChange={setSourceFilter}>
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Source" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sources</SelectItem>
            {ALL_SOURCES.map((source) => (
              <SelectItem key={source} value={source}>
                {CONTACT_SOURCE_LABELS[source]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="border rounded-lg bg-card overflow-x-auto">
        {sortedContacts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {searchQuery || stageFilter !== "all" || sourceFilter !== "all"
                ? "No contacts match your filters"
                : "No contacts yet"}
            </p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => handleSort("name")}
                >
                  <div className="flex items-center">
                    Name
                    <SortIcon field="name" />
                  </div>
                </TableHead>
                <TableHead
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => handleSort("company")}
                >
                  <div className="flex items-center">
                    Company
                    <SortIcon field="company" />
                  </div>
                </TableHead>
                <TableHead>Email</TableHead>
                <TableHead
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => handleSort("stage")}
                >
                  <div className="flex items-center">
                    Stage
                    <SortIcon field="stage" />
                  </div>
                </TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead>Deals</TableHead>
                <TableHead
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => handleSort("created_at")}
                >
                  <div className="flex items-center">
                    Created
                    <SortIcon field="created_at" />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedContacts.map((contact) => (
                <TableRow
                  key={contact.id}
                  className="cursor-pointer"
                  onClick={() => onSelectContact(contact.id)}
                >
                  <TableCell className="font-medium">
                    {contact.first_name} {contact.last_name || ""}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {contact.company_name || (
                      <span className="italic text-muted-foreground/60">
                        No company
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {contact.email}
                  </TableCell>
                  <TableCell>
                    <Badge className={STAGE_COLORS[contact.stage]}>
                      {CONTACT_STAGE_LABELS[contact.stage]}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {contact.source ? (
                      <Badge className={SOURCE_COLORS[contact.source]}>
                        {CONTACT_SOURCE_LABELS[contact.source]}
                      </Badge>
                    ) : (
                      <span className="text-muted-foreground text-sm">
                        Unknown
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    {contact.tags && contact.tags.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {contact.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    ) : (
                      <span className="text-muted-foreground text-sm">
                        None
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {contact.deal_count}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {formatDate(contact.created_at)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Results count */}
      {sortedContacts.length > 0 && (
        <p className="text-sm text-muted-foreground text-center">
          Showing {sortedContacts.length} of {contacts.length} contacts
        </p>
      )}
    </div>
  );
}

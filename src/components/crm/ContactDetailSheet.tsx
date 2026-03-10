import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Pencil,
  StickyNote,
  Activity,
  HandCoins,
  Mail,
  FileText,
  ChevronDown,
  ChevronRight,
  Save,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { useContactDetail, useContactMutation } from "@/hooks/useCrm";
import type {
  ActivityLogEntry,
  ActivityType,
  Deal,
  EmailEvent,
  FormSubmission,
  ContactStage,
  ContactSource,
  Contact,
} from "@/types/crm";
import {
  CONTACT_STAGE_LABELS,
  CONTACT_SOURCE_LABELS,
  STAGE_COLORS,
  SOURCE_COLORS,
  DEAL_STAGE_LABELS,
  DEAL_STAGE_COLORS,
} from "@/types/crm";

// ── Props ───────────────────────────────────────────────────────────────────

interface ContactDetailSheetProps {
  contactId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onEdit?: (contact: Contact) => void;
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function timeAgo(dateStr: string): string {
  const seconds = Math.floor(
    (Date.now() - new Date(dateStr).getTime()) / 1000
  );
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "N/A";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatCurrency(amount: number | null): string {
  if (amount === null || amount === undefined) return "$0";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

const ACTIVITY_ICONS: Record<ActivityType, typeof Activity> = {
  form_submit: FileText,
  email_sent: Mail,
  email_opened: Mail,
  deal_created: HandCoins,
  deal_stage_changed: HandCoins,
  call_booked: Activity,
  proposal_sent: FileText,
  note_added: StickyNote,
};

const EMAIL_STATUS_COLORS: Record<string, string> = {
  scheduled: "bg-slate-100 text-slate-700",
  sent: "bg-blue-100 text-blue-700",
  delivered: "bg-teal-100 text-teal-700",
  opened: "bg-green-100 text-green-700",
  clicked: "bg-emerald-100 text-emerald-700",
  bounced: "bg-red-100 text-red-700",
  failed: "bg-red-200 text-red-800",
};

// ── Component ───────────────────────────────────────────────────────────────

export default function ContactDetailSheet({
  contactId,
  open,
  onOpenChange,
  onEdit,
}: ContactDetailSheetProps) {
  const { data, isLoading, refetch } = useContactDetail(contactId);
  const { addNote } = useContactMutation();
  const [noteDraft, setNoteDraft] = useState("");
  const [isSavingNote, setIsSavingNote] = useState(false);
  const [expandedForms, setExpandedForms] = useState<Set<string>>(new Set());

  const { contact, deals, emails, forms, activity } = data;

  // Sync note draft when contact changes
  const handleTabChange = (value: string) => {
    if (value === "notes" && contact?.notes) {
      setNoteDraft(contact.notes);
    }
  };

  const handleSaveNote = async () => {
    if (!contactId) return;
    setIsSavingNote(true);
    try {
      await addNote(contactId, noteDraft);
      toast.success("Note saved");
      refetch();
    } catch (err) {
      console.error("Failed to save note:", err);
      toast.error("Failed to save note");
    } finally {
      setIsSavingNote(false);
    }
  };

  const toggleFormExpand = (formId: string) => {
    setExpandedForms((prev) => {
      const next = new Set(prev);
      if (next.has(formId)) {
        next.delete(formId);
      } else {
        next.add(formId);
      }
      return next;
    });
  };

  // ── Loading state ───────────────────────────────────────────────────────

  const renderLoading = () => (
    <div className="space-y-4 pt-4">
      <Skeleton className="h-6 w-48" />
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-10 w-full mt-6" />
      <div className="space-y-3 mt-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-12 w-full" />
        ))}
      </div>
    </div>
  );

  // ── Activity tab ────────────────────────────────────────────────────────

  const renderActivity = () => {
    if (activity.length === 0) {
      return (
        <p className="text-muted-foreground text-sm py-4 text-center">
          No activity recorded yet.
        </p>
      );
    }
    return (
      <div className="space-y-3">
        {activity.map((entry: ActivityLogEntry) => {
          const IconComponent =
            ACTIVITY_ICONS[entry.activity_type] || Activity;
          return (
            <div
              key={entry.id}
              className="flex items-start gap-3 py-2 border-b last:border-b-0"
            >
              <div className="mt-0.5 text-muted-foreground">
                <IconComponent size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  {entry.description || entry.activity_type}
                </p>
                <p className="text-xs text-muted-foreground">
                  {timeAgo(entry.created_at)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // ── Deals tab ───────────────────────────────────────────────────────────

  const renderDeals = () => {
    if (deals.length === 0) {
      return (
        <p className="text-muted-foreground text-sm py-4 text-center">
          No deals yet.
        </p>
      );
    }
    return (
      <div className="space-y-3">
        {deals.map((deal: Deal) => (
          <div
            key={deal.id}
            className="p-3 border rounded-lg space-y-2"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-sm">{deal.title}</h4>
              <Badge className={DEAL_STAGE_COLORS[deal.stage]}>
                {DEAL_STAGE_LABELS[deal.stage]}
              </Badge>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>
                {formatCurrency(deal.value_monthly)}/mo
              </span>
              {deal.expected_close_date && (
                <span>Close: {formatDate(deal.expected_close_date)}</span>
              )}
              <span>{deal.probability}% probability</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // ── Emails tab ──────────────────────────────────────────────────────────

  const renderEmails = () => {
    if (emails.length === 0) {
      return (
        <p className="text-muted-foreground text-sm py-4 text-center">
          No email events yet.
        </p>
      );
    }
    return (
      <div className="space-y-3">
        {emails.map((event: EmailEvent) => (
          <div
            key={event.id}
            className="p-3 border rounded-lg space-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                {event.sequence_name} (Step {event.step_number})
              </span>
              <Badge
                className={
                  EMAIL_STATUS_COLORS[event.status] ||
                  "bg-slate-100 text-slate-700"
                }
              >
                {event.status}
              </Badge>
            </div>
            {event.email_subject && (
              <p className="text-sm text-muted-foreground">
                {event.email_subject}
              </p>
            )}
            <div className="flex gap-4 text-xs text-muted-foreground">
              {event.sent_at && (
                <span>Sent: {timeAgo(event.sent_at)}</span>
              )}
              {event.opened_at && (
                <span>Opened: {timeAgo(event.opened_at)}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // ── Forms tab ───────────────────────────────────────────────────────────

  const renderForms = () => {
    if (forms.length === 0) {
      return (
        <p className="text-muted-foreground text-sm py-4 text-center">
          No form submissions yet.
        </p>
      );
    }
    return (
      <div className="space-y-3">
        {forms.map((form: FormSubmission) => {
          const isExpanded = expandedForms.has(form.id);
          return (
            <div key={form.id} className="border rounded-lg">
              <button
                type="button"
                className="w-full flex items-center justify-between p-3 text-left hover:bg-muted/50 transition-colors"
                onClick={() => toggleFormExpand(form.id)}
              >
                <div>
                  <span className="text-sm font-medium capitalize">
                    {form.form_type.replace(/_/g, " ")}
                  </span>
                  <span className="text-xs text-muted-foreground ml-2">
                    {formatDate(form.created_at)}
                  </span>
                </div>
                {isExpanded ? (
                  <ChevronDown size={16} className="text-muted-foreground" />
                ) : (
                  <ChevronRight size={16} className="text-muted-foreground" />
                )}
              </button>
              {isExpanded && (
                <div className="px-3 pb-3 border-t">
                  <pre className="text-xs bg-muted p-2 rounded mt-2 overflow-x-auto whitespace-pre-wrap">
                    {JSON.stringify(form.data, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  // ── Notes tab ───────────────────────────────────────────────────────────

  const renderNotes = () => (
    <div className="space-y-3">
      <Textarea
        placeholder="Add notes about this contact..."
        value={noteDraft}
        onChange={(e) => setNoteDraft(e.target.value)}
        className="min-h-[160px]"
      />
      <Button
        onClick={handleSaveNote}
        disabled={isSavingNote}
        size="sm"
      >
        {isSavingNote ? (
          <Loader2 size={14} className="mr-1 animate-spin" />
        ) : (
          <Save size={14} className="mr-1" />
        )}
        Save Note
      </Button>
    </div>
  );

  // ── Main render ─────────────────────────────────────────────────────────

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-lg overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle>
            {isLoading ? (
              <Skeleton className="h-6 w-48" />
            ) : contact ? (
              `${contact.first_name} ${contact.last_name || ""}`
            ) : (
              "Contact Details"
            )}
          </SheetTitle>
          <SheetDescription>
            {isLoading ? (
              <Skeleton className="h-4 w-32" />
            ) : contact ? (
              contact.email
            ) : (
              "Select a contact to view details"
            )}
          </SheetDescription>
        </SheetHeader>

        {isLoading ? (
          renderLoading()
        ) : contact ? (
          <div className="mt-4 space-y-6">
            {/* Contact header info */}
            <div className="space-y-2">
              {contact.company_name && (
                <p className="text-sm text-muted-foreground">
                  {contact.company_name}
                </p>
              )}
              {contact.phone && (
                <p className="text-sm text-muted-foreground">
                  {contact.phone}
                </p>
              )}
              <div className="flex items-center gap-2 flex-wrap">
                <Badge className={STAGE_COLORS[contact.stage as ContactStage]}>
                  {CONTACT_STAGE_LABELS[contact.stage as ContactStage]}
                </Badge>
                {contact.source && (
                  <Badge
                    className={
                      SOURCE_COLORS[contact.source as ContactSource]
                    }
                  >
                    {CONTACT_SOURCE_LABELS[contact.source as ContactSource]}
                  </Badge>
                )}
              </div>
            </div>

            {/* Quick actions */}
            <div className="flex gap-2">
              {onEdit && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onEdit(contact)}
                >
                  <Pencil size={14} className="mr-1" />
                  Edit
                </Button>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setNoteDraft(contact.notes || "");
                  // Switch to notes tab via programmatic click is complex;
                  // we rely on Tabs defaultValue and user clicking
                }}
              >
                <StickyNote size={14} className="mr-1" />
                Add Note
              </Button>
            </div>

            {/* Tabbed content */}
            <Tabs
              defaultValue="activity"
              onValueChange={handleTabChange}
            >
              <TabsList className="w-full grid grid-cols-5">
                <TabsTrigger value="activity" className="text-xs">
                  Activity
                </TabsTrigger>
                <TabsTrigger value="deals" className="text-xs">
                  Deals
                </TabsTrigger>
                <TabsTrigger value="emails" className="text-xs">
                  Emails
                </TabsTrigger>
                <TabsTrigger value="forms" className="text-xs">
                  Forms
                </TabsTrigger>
                <TabsTrigger value="notes" className="text-xs">
                  Notes
                </TabsTrigger>
              </TabsList>

              <TabsContent value="activity">
                {renderActivity()}
              </TabsContent>
              <TabsContent value="deals">{renderDeals()}</TabsContent>
              <TabsContent value="emails">
                {renderEmails()}
              </TabsContent>
              <TabsContent value="forms">{renderForms()}</TabsContent>
              <TabsContent value="notes">{renderNotes()}</TabsContent>
            </Tabs>
          </div>
        ) : (
          <p className="text-muted-foreground text-sm py-8 text-center">
            Select a contact to view details.
          </p>
        )}
      </SheetContent>
    </Sheet>
  );
}

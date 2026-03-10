import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useContactMutation } from "@/hooks/useCrm";
import type { Contact, ContactStage, ContactSource } from "@/types/crm";
import { CONTACT_STAGE_LABELS, CONTACT_SOURCE_LABELS } from "@/types/crm";

// ── Props ───────────────────────────────────────────────────────────────────

interface ContactFormProps {
  contact: Contact | null; // null = create mode
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSaved: () => void;
}

// ── Constants ───────────────────────────────────────────────────────────────

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

const COMPANY_SIZES = ["1-5", "5-10", "11-25", "25+"];

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
  "DC",
];

// ── Form state type ─────────────────────────────────────────────────────────

interface FormState {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company_name: string;
  company_size: string;
  website: string;
  location_city: string;
  location_state: string;
  source: string;
  stage: ContactStage;
  notes: string;
}

const EMPTY_FORM: FormState = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  company_name: "",
  company_size: "",
  website: "",
  location_city: "",
  location_state: "",
  source: "",
  stage: "lead",
  notes: "",
};

// ── Component ───────────────────────────────────────────────────────────────

export default function ContactForm({
  contact,
  open,
  onOpenChange,
  onSaved,
}: ContactFormProps) {
  const { createContact, updateContact } = useContactMutation();
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEditMode = contact !== null;

  // Reset form when dialog opens or contact changes
  useEffect(() => {
    if (open) {
      if (contact) {
        setForm({
          first_name: contact.first_name,
          last_name: contact.last_name || "",
          email: contact.email,
          phone: contact.phone || "",
          company_name: contact.company_name || "",
          company_size: contact.company_size || "",
          website: contact.website || "",
          location_city: contact.location_city || "",
          location_state: contact.location_state || "",
          source: contact.source || "",
          stage: contact.stage,
          notes: contact.notes || "",
        });
      } else {
        setForm(EMPTY_FORM);
      }
    }
  }, [open, contact]);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!form.first_name.trim()) {
      toast.error("First name is required");
      return;
    }
    if (!form.email.trim()) {
      toast.error("Email is required");
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        first_name: form.first_name.trim(),
        last_name: form.last_name.trim() || null,
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        company_name: form.company_name.trim() || null,
        company_size: form.company_size || null,
        website: form.website.trim() || null,
        location_city: form.location_city.trim() || null,
        location_state: form.location_state || null,
        source: (form.source || null) as ContactSource | null,
        stage: form.stage,
        notes: form.notes.trim() || null,
        tags: contact?.tags || null,
        source_detail: contact?.source_detail || null,
      };

      if (isEditMode && contact) {
        await updateContact(contact.id, payload);
        toast.success("Contact updated");
      } else {
        await createContact(payload);
        toast.success("Contact created");
      }

      onOpenChange(false);
      onSaved();
    } catch (err) {
      console.error("Failed to save contact:", err);
      toast.error(
        isEditMode ? "Failed to update contact" : "Failed to create contact"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {isEditMode ? "Edit Contact" : "New Contact"}
          </DialogTitle>
          <DialogDescription>
            {isEditMode
              ? "Update the contact information below."
              : "Fill in the details to create a new contact."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          {/* Name row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first_name">
                First Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="first_name"
                value={form.first_name}
                onChange={(e) => updateField("first_name", e.target.value)}
                placeholder="Jane"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last_name">Last Name</Label>
              <Input
                id="last_name"
                value={form.last_name}
                onChange={(e) => updateField("last_name", e.target.value)}
                placeholder="Smith"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="jane@example.com"
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              placeholder="(555) 123-4567"
            />
          </div>

          {/* Company row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company_name">Company</Label>
              <Input
                id="company_name"
                value={form.company_name}
                onChange={(e) => updateField("company_name", e.target.value)}
                placeholder="Smith CPA"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company_size">Company Size</Label>
              <Select
                value={form.company_size}
                onValueChange={(val) => updateField("company_size", val)}
              >
                <SelectTrigger id="company_size">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {COMPANY_SIZES.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Website */}
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              type="url"
              value={form.website}
              onChange={(e) => updateField("website", e.target.value)}
              placeholder="https://smithcpa.com"
            />
          </div>

          {/* Location row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location_city">City</Label>
              <Input
                id="location_city"
                value={form.location_city}
                onChange={(e) => updateField("location_city", e.target.value)}
                placeholder="Eugene"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location_state">State</Label>
              <Select
                value={form.location_state}
                onValueChange={(val) => updateField("location_state", val)}
              >
                <SelectTrigger id="location_state">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {US_STATES.map((st) => (
                    <SelectItem key={st} value={st}>
                      {st}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Source + Stage row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="source">Source</Label>
              <Select
                value={form.source}
                onValueChange={(val) => updateField("source", val)}
              >
                <SelectTrigger id="source">
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent>
                  {ALL_SOURCES.map((source) => (
                    <SelectItem key={source} value={source}>
                      {CONTACT_SOURCE_LABELS[source]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="stage">Stage</Label>
              <Select
                value={form.stage}
                onValueChange={(val) =>
                  updateField("stage", val as ContactStage)
                }
              >
                <SelectTrigger id="stage">
                  <SelectValue placeholder="Select stage" />
                </SelectTrigger>
                <SelectContent>
                  {ALL_STAGES.map((stage) => (
                    <SelectItem key={stage} value={stage}>
                      {CONTACT_STAGE_LABELS[stage]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={form.notes}
              onChange={(e) => updateField("notes", e.target.value)}
              placeholder="Internal notes about this contact..."
              className="min-h-[80px]"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting && (
                <Loader2 size={14} className="mr-1 animate-spin" />
              )}
              {isEditMode ? "Save Changes" : "Create Contact"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

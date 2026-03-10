// ============================================================================
// DealForm: Create/edit deal dialog
// ============================================================================

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { useDealMutation } from "@/hooks/useCrm";
import {
  DEAL_STAGE_LABELS,
  type Deal,
  type DealStage,
  type PackageTier,
} from "@/types/crm";

const STAGE_OPTIONS: DealStage[] = [
  "discovery",
  "proposal",
  "negotiation",
  "closed_won",
  "closed_lost",
];

const PACKAGE_OPTIONS: { value: PackageTier; label: string }[] = [
  { value: "essentials", label: "Essentials" },
  { value: "growth", label: "Growth" },
  { value: "strategic_partner", label: "Strategic Partner" },
  { value: "quickstart", label: "QuickStart" },
  { value: "custom", label: "Custom" },
];

interface ContactOption {
  id: string;
  first_name: string;
  last_name: string | null;
  company_name: string | null;
  email: string;
}

interface DealFormProps {
  deal: Deal | null;
  contacts: ContactOption[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSaved: () => void;
}

export default function DealForm({
  deal,
  contacts,
  open,
  onOpenChange,
  onSaved,
}: DealFormProps) {
  const { createDeal, updateDeal } = useDealMutation();
  const [saving, setSaving] = useState(false);

  // Form state
  const [contactId, setContactId] = useState("");
  const [title, setTitle] = useState("");
  const [stage, setStage] = useState<DealStage>("discovery");
  const [valueMonthly, setValueMonthly] = useState("");
  const [valueSetup, setValueSetup] = useState("");
  const [packageTier, setPackageTier] = useState<string>("none");
  const [probability, setProbability] = useState("50");
  const [expectedCloseDate, setExpectedCloseDate] = useState("");
  const [services, setServices] = useState("");
  const [notes, setNotes] = useState("");

  const isEditing = !!deal;

  // Populate form when editing
  useEffect(() => {
    if (deal) {
      setContactId(deal.contact_id);
      setTitle(deal.title);
      setStage(deal.stage);
      setValueMonthly(deal.value_monthly?.toString() ?? "");
      setValueSetup(deal.value_setup?.toString() ?? "");
      setPackageTier(deal.package_tier ?? "none");
      setProbability(deal.probability.toString());
      setExpectedCloseDate(
        deal.expected_close_date
          ? deal.expected_close_date.substring(0, 10)
          : ""
      );
      setServices(deal.services?.join(", ") ?? "");
      setNotes(deal.notes ?? "");
    } else {
      // Reset for create
      setContactId("");
      setTitle("");
      setStage("discovery");
      setValueMonthly("");
      setValueSetup("");
      setPackageTier("none");
      setProbability("50");
      setExpectedCloseDate("");
      setServices("");
      setNotes("");
    }
  }, [deal, open]);

  const getContactLabel = (c: ContactOption) => {
    const name = [c.first_name, c.last_name].filter(Boolean).join(" ");
    if (c.company_name) {
      return `${name} (${c.company_name})`;
    }
    return `${name} (${c.email})`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!contactId) {
      toast.error("Please select a contact");
      return;
    }
    if (!title.trim()) {
      toast.error("Please enter a deal title");
      return;
    }

    setSaving(true);
    try {
      const servicesArray = services
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      const dealData = {
        contact_id: contactId,
        title: title.trim(),
        stage,
        value_monthly: valueMonthly ? Number(valueMonthly) : null,
        value_setup: valueSetup ? Number(valueSetup) : null,
        package_tier:
          packageTier === "none" ? null : (packageTier as PackageTier),
        probability: Number(probability) || 50,
        expected_close_date: expectedCloseDate || null,
        services: servicesArray.length > 0 ? servicesArray : null,
        notes: notes.trim() || null,
        closed_at: null as string | null,
      };

      // Set closed_at for won/lost stages
      if (stage === "closed_won" || stage === "closed_lost") {
        dealData.closed_at = new Date().toISOString();
      }

      if (isEditing) {
        await updateDeal(deal.id, dealData);
        toast.success("Deal updated");
      } else {
        await createDeal(dealData);
        toast.success("Deal created");
      }

      onOpenChange(false);
      onSaved();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to save deal";
      toast.error(msg);
      console.error("DealForm save error:", err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Deal" : "New Deal"}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Update deal details below."
              : "Fill in the details to create a new deal."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Contact */}
          <div className="space-y-2">
            <Label htmlFor="contact_id">Contact *</Label>
            <Select value={contactId} onValueChange={setContactId}>
              <SelectTrigger id="contact_id">
                <SelectValue placeholder="Select a contact" />
              </SelectTrigger>
              <SelectContent>
                {contacts.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {getContactLabel(c)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., SEO Package for ABC Accounting"
              required
            />
          </div>

          {/* Stage */}
          <div className="space-y-2">
            <Label htmlFor="stage">Stage</Label>
            <Select
              value={stage}
              onValueChange={(v) => setStage(v as DealStage)}
            >
              <SelectTrigger id="stage">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {STAGE_OPTIONS.map((s) => (
                  <SelectItem key={s} value={s}>
                    {DEAL_STAGE_LABELS[s]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Value row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="value_monthly">Monthly Value ($)</Label>
              <Input
                id="value_monthly"
                type="number"
                min="0"
                step="1"
                value={valueMonthly}
                onChange={(e) => setValueMonthly(e.target.value)}
                placeholder="0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="value_setup">Setup Value ($)</Label>
              <Input
                id="value_setup"
                type="number"
                min="0"
                step="1"
                value={valueSetup}
                onChange={(e) => setValueSetup(e.target.value)}
                placeholder="0"
              />
            </div>
          </div>

          {/* Package Tier */}
          <div className="space-y-2">
            <Label htmlFor="package_tier">Package Tier</Label>
            <Select value={packageTier} onValueChange={setPackageTier}>
              <SelectTrigger id="package_tier">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                {PACKAGE_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Probability + Expected Close */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="probability">Probability (%)</Label>
              <Input
                id="probability"
                type="number"
                min="0"
                max="100"
                value={probability}
                onChange={(e) => setProbability(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expected_close_date">Expected Close</Label>
              <Input
                id="expected_close_date"
                type="date"
                value={expectedCloseDate}
                onChange={(e) => setExpectedCloseDate(e.target.value)}
              />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-2">
            <Label htmlFor="services">Services (comma-separated)</Label>
            <Input
              id="services"
              value={services}
              onChange={(e) => setServices(e.target.value)}
              placeholder="SEO, PPC, Web Design"
            />
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Additional context about this deal..."
              rows={3}
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={saving}>
              {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isEditing ? "Update Deal" : "Create Deal"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

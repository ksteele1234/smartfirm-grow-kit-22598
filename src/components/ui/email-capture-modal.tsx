import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

export function EmailCaptureModal({ isOpen, onClose, onContinue }: EmailCaptureModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Get Your Results</DialogTitle>
          <DialogDescription className="text-lg">
            Enter your email to receive your personalized report
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/Wb4H4J1ZUVSoZ6W5zkns"
            style={{ width: "100%", height: "500px", border: "none" }}
            title="Email Capture Form"
            className="rounded-lg"
          />
          <Button 
            onClick={onContinue} 
            className="w-full bg-coral hover:bg-coral/90 text-white"
            size="lg"
          >
            Continue to Results
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

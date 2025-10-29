import { cn } from "@/lib/utils";

interface CurvedSeparatorProps {
  className?: string;
  variant?: "primary" | "teal" | "light-teal";
}

export const CurvedSeparator = ({ className, variant = "primary" }: CurvedSeparatorProps) => {
  const fillClasses = {
    primary: "text-primary",
    teal: "text-secondary",
    "light-teal": "text-light-teal",
  };

  return (
    <div className={cn("relative w-full -mb-1", fillClasses[variant], className)}>
      <svg
        className="w-full h-12 md:h-16"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 L720,60 L1440,0 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

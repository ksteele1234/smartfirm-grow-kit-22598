import { cn } from "@/lib/utils";

interface CurvedSeparatorProps {
  className?: string;
  variant?: "primary" | "teal" | "light-teal";
}

export const CurvedSeparator = ({ className, variant = "primary" }: CurvedSeparatorProps) => {
  const bgColors = {
    primary: "bg-[#647FBC]",
    teal: "bg-[#4D869C]",
    "light-teal": "bg-[#7AB2B2]",
  };

  const fillColors = {
    primary: "#647FBC",
    teal: "#4D869C",
    "light-teal": "#7AB2B2",
  };

  return (
    <div className={cn("relative w-full -mb-1", className)}>
      <svg
        className="w-full h-12 md:h-16"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 L720,60 L1440,0 Z"
          fill={fillColors[variant]}
        />
      </svg>
    </div>
  );
};

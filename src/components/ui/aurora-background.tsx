"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean; // kept for API compatibility (unused)
}

export const AuroraBackground = ({
  className,
  children,
  // do not mask by default; ensure it's visible everywhere
  showRadialGradient = false,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-background text-foreground",
        className
      )}
      {...props}
    >
      {/* Aurora Layer */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div
          className="absolute -inset-[10px] pointer-events-none animate-aurora"
          style={{
            backgroundImage:
              'radial-gradient(50% 50% at 70% 20%, hsl(var(--light-teal) / 0.65), transparent 70%),\
radial-gradient(45% 45% at 20% 70%, hsl(var(--primary-teal) / 0.55), transparent 70%),\
radial-gradient(40% 40% at 85% 80%, hsl(var(--secondary-blue) / 0.5), transparent 70%),\
repeating-linear-gradient(110deg, hsl(var(--primary-blue) / 0.25) 0%, hsl(var(--primary-blue) / 0.25) 4%, hsl(var(--secondary-blue) / 0.2) 6%, hsl(var(--secondary-blue) / 0.2) 10%, hsl(var(--light-teal) / 0.18) 12%, hsl(var(--light-teal) / 0.18) 16%, hsl(var(--accent-light) / 0.15) 18%, hsl(var(--accent-light) / 0.15) 22%)',
            backgroundSize: '150% 150%, 150% 150%, 150% 150%, 300%',
            backgroundPosition: '50% 50%, 50% 50%, 50% 50%, 50% 50%',
            animation: 'aurora 240s linear infinite',
            opacity: 0.85,
          }}
        />
      </div>

      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

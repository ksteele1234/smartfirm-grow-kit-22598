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
        "relative flex flex-col h-[100vh] items-center justify-center bg-background text-foreground",
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
              'radial-gradient(60% 60% at 70% 20%, hsl(var(--light-teal) / 0.95), transparent 62%),\
radial-gradient(55% 55% at 20% 70%, hsl(var(--dark-teal) / 0.9), transparent 62%),\
radial-gradient(50% 50% at 50% 50%, hsl(var(--slate-navy) / 0.85), transparent 62%),\
radial-gradient(45% 45% at 85% 80%, hsl(var(--primary-teal) / 0.9), transparent 62%),\
repeating-linear-gradient(110deg, hsl(var(--primary-blue) / 0.95) 0%, hsl(var(--primary-blue) / 0.95) 4%, hsl(var(--dark-teal) / 0.92) 6%, hsl(var(--dark-teal) / 0.92) 10%, hsl(var(--slate-navy) / 0.9) 12%, hsl(var(--slate-navy) / 0.9) 16%, hsl(var(--primary-teal) / 0.88) 18%, hsl(var(--primary-teal) / 0.88) 22%)',
            backgroundSize: '160% 160%, 160% 160%, 160% 160%, 160% 160%, 400%',
            backgroundPosition: '50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%',
            animation: 'aurora 240s linear infinite',
            opacity: 0.35,
          }}
        />
      </div>

      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

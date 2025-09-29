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
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            /* Full-strength Aurora using SmartFirm brand colors */
            [--aurora:repeating-linear-gradient(
              110deg,
              hsl(var(--primary-blue)/0.95)_0%,
              hsl(var(--primary-blue)/0.95)_10%,
              hsl(var(--secondary-blue)/0.92)_12%,
              hsl(var(--secondary-blue)/0.92)_22%,
              hsl(var(--primary-teal)/0.9)_24%,
              hsl(var(--primary-teal)/0.9)_34%,
              hsl(var(--accent-light)/0.88)_36%,
              hsl(var(--accent-light)/0.88)_46%
            )]
            [--glow:radial-gradient(60%_60%_at_70%_20%,hsl(var(--light-teal)/0.95),transparent_62%),
                     radial-gradient(55%_55%_at_20%_70%,hsl(var(--primary-teal)/0.9),transparent_62%),
                     radial-gradient(45%_45%_at_85%_80%,hsl(var(--accent-light)/0.95),transparent_62%)]

            [background-image:var(--glow),var(--aurora)]
            [background-size:160%_160%,400%]
            [background-position:50%_50%,50%_50%]
            animate-aurora opacity-100

            pointer-events-none absolute -inset-[10px]
          `)}
        />
      </div>

      {children}
    </div>
  );
};

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
            /* Base aurora made from SmartFirm brand colors */
            [--aurora:repeating-linear-gradient(
              110deg,
              hsl(var(--primary-blue))_0%,
              hsl(var(--primary-blue))_6%,
              hsl(var(--secondary-blue))_8%,
              hsl(var(--secondary-blue))_14%,
              transparent_16%,
              transparent_20%
            )]
            [--glow:radial-gradient(60%_60%_at_70%_20%,hsl(var(--light-teal)/0.55),transparent_60%),
                     radial-gradient(50%_50%_at_20%_70%,hsl(var(--primary-teal)/0.45),transparent_60%),
                     radial-gradient(40%_40%_at_85%_80%,hsl(var(--accent-light)/0.65),transparent_60%)]

            [background-image:var(--glow),var(--aurora)]
            [background-size:120%_120%,300%]
            [background-position:50%_50%,50%_50%]
            animate-aurora opacity-70

            pointer-events-none absolute -inset-[10px]
          `)}
        />
      </div>

      {children}
    </div>
  );
};

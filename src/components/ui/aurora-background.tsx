"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-[100vh] items-center justify-center bg-background text-foreground transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            /* Aurora gradient using SmartFirm brand colors */
            [--aurora:repeating-linear-gradient(
              100deg,
              hsl(var(--primary-blue))_10%,
              hsl(var(--secondary-blue))_15%,
              hsl(var(--primary-teal))_20%,
              hsl(var(--light-teal))_25%,
              hsl(var(--accent-light))_30%
            )]

            [background-image:var(--aurora)]
            [background-size:300%]
            [background-position:50%_50%]
            opacity-20
            
            after:content-[""] 
            after:absolute 
            after:inset-0
            after:[background-image:var(--aurora)]
            after:[background-size:200%]
            after:animate-aurora
            after:opacity-30

            pointer-events-none
            absolute -inset-[10px] will-change-transform
            `,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
          )}
        />
      </div>
      {children}
    </div>
  );
};
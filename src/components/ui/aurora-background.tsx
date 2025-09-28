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
              /* White vs dark stripe layer */
              [--white-gradient:repeating-linear-gradient(100deg,hsl(var(--background))_0%,hsl(var(--background))_7%,transparent_10%,transparent_12%,hsl(var(--background))_16%)]
              [--dark-gradient:repeating-linear-gradient(100deg,hsl(var(--foreground))_0%,hsl(var(--foreground))_7%,transparent_10%,transparent_12%,hsl(var(--foreground))_16%)]

              /* Aurora with your exact palette */
              [--aurora:repeating-linear-gradient(
                100deg,
                hsl(var(--aurora-1))_10%,
                hsl(var(--aurora-2))_15%,
                hsl(var(--aurora-3))_20%,
                hsl(var(--aurora-4))_25%,
                hsl(var(--aurora-5))_30%
              )]

             [background-image:var(--aurora)]
            [background-size:300%]
            [background-position:50%_50%]
            filter blur-[10px]

            after:content-[""] after:absolute after:inset-0
             after:[background-image:var(--aurora)]
            after:[background-size:200%]
            after:animate-aurora
             after:[background-attachment:fixed]

            pointer-events-none
            absolute -inset-[10px] opacity-80 will-change-transform
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
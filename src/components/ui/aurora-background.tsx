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
            [--white-gradient:repeating-linear-gradient(100deg,var(--background)_0%,var(--background)_7%,transparent_10%,transparent_12%,var(--background)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--foreground)_0%,var(--foreground)_7%,transparent_10%,transparent_12%,var(--foreground)_16%)]

            /* Aurora with your exact palette */
            [--aurora:repeating-linear-gradient(
              100deg,
              var(--aurora-1)_10%,
              var(--aurora-2)_15%,
              var(--aurora-3)_20%,
              var(--aurora-4)_25%,
              var(--aurora-5)_30%
            )]

            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0

            after:content-[""] after:absolute after:inset-0
            after:[background-image:var(--white-gradient),var(--aurora)]
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora
            after:[background-attachment:fixed]
            after:mix-blend-difference

            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform
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
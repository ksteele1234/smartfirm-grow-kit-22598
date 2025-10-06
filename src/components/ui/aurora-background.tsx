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
  showRadialGradient = false,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-white text-foreground overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Aurora effect layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full opacity-30 blur-3xl animate-pulse"
          style={{
            background: "radial-gradient(circle, hsl(var(--teal)) 0%, transparent 70%)",
            animationDuration: "8s",
          }}
        />
        <div
          className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl animate-pulse"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
            animationDuration: "6s",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute -bottom-1/3 left-1/3 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
            animationDuration: "10s",
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

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
      <div className="absolute inset-0 overflow-hidden z-0">
        <div
          className="absolute top-0 left-0 w-[1000px] h-[1000px] rounded-full opacity-60 blur-[100px] animate-pulse"
          style={{
            background: "radial-gradient(circle, hsl(var(--teal)) 0%, transparent 60%)",
            animationDuration: "8s",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-50 blur-[100px] animate-pulse"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)",
            animationDuration: "6s",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-40 blur-[100px] animate-pulse"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 60%)",
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

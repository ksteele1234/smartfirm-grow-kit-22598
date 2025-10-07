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
        "relative flex flex-col items-center justify-center bg-background text-foreground overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Aurora effect layers with movement */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-accent/5 to-transparent" />
        <div
          className="absolute -top-[20%] -left-[10%] w-[1200px] h-[1200px] rounded-full opacity-90 blur-[160px] mix-blend-normal"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, hsl(var(--primary) / 0.85) 0%, transparent 70%)",
            animation: "float1 12s ease-in-out infinite",
            willChange: "transform",
          }}
        />
        <div
          className="absolute -top-[10%] -right-[15%] w-[1100px] h-[1100px] rounded-full opacity-80 blur-[150px] mix-blend-normal"
          style={{
            background:
              "radial-gradient(45% 45% at 50% 50%, hsl(var(--accent) / 0.8) 0%, transparent 70%)",
            animation: "float2 10s ease-in-out infinite 1.5s",
            willChange: "transform",
          }}
        />
        <div
          className="absolute -bottom-[15%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full opacity-75 blur-[160px] mix-blend-normal"
          style={{
            background:
              "radial-gradient(42% 42% at 50% 50%, hsl(var(--secondary) / 0.75) 0%, transparent 70%)",
            animation: "float3 16s ease-in-out infinite 3s",
            willChange: "transform",
          }}
        />
      </div>

      {/* Keyframes for floating animation */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(100px, 50px) scale(1.1); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-80px, 60px) scale(1.15); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(-50%, 0) scale(1); }
          50% { transform: translate(calc(-50% + 60px), -40px) scale(1.08); }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

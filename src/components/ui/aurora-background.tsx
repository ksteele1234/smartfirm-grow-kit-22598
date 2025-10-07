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
      {/* Aurora effect layers with movement */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div
          className="absolute top-0 -left-40 w-[1200px] h-[1200px] rounded-full opacity-80 blur-[120px]"
          style={{
            background: "radial-gradient(circle, hsl(var(--teal)) 0%, transparent 50%)",
            animation: "float1 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -top-20 -right-40 w-[1000px] h-[1000px] rounded-full opacity-70 blur-[100px]"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 50%)",
            animation: "float2 10s ease-in-out infinite 2s",
          }}
        />
        <div
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full opacity-60 blur-[110px]"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 50%)",
            animation: "float3 15s ease-in-out infinite 4s",
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

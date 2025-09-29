import * as React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface EnhancedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "tilted" | "elevated" | "outlined" | "gradient";
  hoverEffect?: "lift" | "glow" | "scale" | "none";
  children: React.ReactNode;
}

const EnhancedCard = React.forwardRef<HTMLDivElement, EnhancedCardProps>(
  ({ className, variant = "default", hoverEffect = "lift", children, ...props }, ref) => {
    const variants = {
      default: "bg-card text-card-foreground border-border/50",
      tilted: "bg-card text-card-foreground border-border/50 transform rotate-1 hover:rotate-0 transition-transform duration-300",
      elevated: "bg-card text-card-foreground border-border/50 shadow-lg hover:shadow-xl",
      outlined: "bg-transparent border-2 border-primary/20 hover:border-primary/40 text-card-foreground",
      gradient: "bg-gradient-to-br from-primary/5 via-white to-teal/5 text-card-foreground border-border/30"
    };

    const hoverEffects = {
      lift: "hover:-translate-y-2 hover:shadow-lg",
      glow: "hover:shadow-[0_0_20px_rgba(100,127,188,0.15)]",
      scale: "hover:scale-105",
      none: ""
    };

    return (
      <Card
        ref={ref}
        className={cn(
          "rounded-xl transition-all duration-300",
          variants[variant],
          hoverEffects[hoverEffect],
          className
        )}
        {...props}
      >
        {children}
      </Card>
    );
  }
);
EnhancedCard.displayName = "EnhancedCard";

export { EnhancedCard };
import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StandardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon;
  iconBgColor?: string;
  title: string;
  description: string;
  variant?: "default" | "popular" | "featured";
  children?: React.ReactNode;
  href?: string;
}

const StandardCard = React.forwardRef<HTMLDivElement, StandardCardProps>(
  ({ 
    className, 
    icon: Icon, 
    iconBgColor = "bg-gradient-to-br from-primary/10 to-teal/10",
    title, 
    description, 
    variant = "default",
    children,
    href,
    ...props 
  }, ref) => {
    const baseCardClasses = "shadow-card hover:shadow-soft transition-all duration-300 group border border-border/50";
    
    const variantClasses = {
      default: "",
      popular: "ring-2 ring-primary relative",
      featured: "bg-gradient-to-br from-background to-teal/5"
    };

    const CardComponent = (
      <Card
        ref={ref}
        className={cn(
          baseCardClasses,
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {variant === "popular" && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>
        )}
        
        <CardHeader className="text-center pb-4">
          {Icon && (
            <div className={cn(
              "w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center group-hover:from-primary/20 group-hover:to-teal/20 transition-all duration-300",
              iconBgColor
            )}>
              <Icon className="h-8 w-8 text-primary" />
            </div>
          )}
          <CardTitle className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <CardDescription className="text-text-secondary leading-relaxed text-center">
            {description}
          </CardDescription>
          {children}
        </CardContent>
      </Card>
    );

    if (href) {
      return (
        <a href={href} className="block cursor-pointer">
          {CardComponent}
        </a>
      );
    }

    return CardComponent;
  }
);

StandardCard.displayName = "StandardCard";

export { StandardCard };
export type { StandardCardProps };
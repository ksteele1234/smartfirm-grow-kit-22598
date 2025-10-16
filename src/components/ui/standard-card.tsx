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
    const baseCardClasses = "border border-[#E5E7EB] rounded-xl transition-all duration-300 group cursor-pointer hover:-translate-y-2 hover:shadow-[0_12px_48px_rgba(20,184,166,0.2)]";
    
    const variantClasses = {
      default: "",
      popular: "ring-2 ring-primary relative",
      featured: ""
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
        
        <CardHeader className="text-center pb-6 p-5 md:p-6">
          {Icon && (
            <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
              <Icon className="h-7 w-7 text-[#14b8a6]" strokeWidth={1.5} />
            </div>
          )}
          <CardTitle className="text-[22px] md:text-2xl font-heading font-bold text-foreground group-hover:text-[#14b8a6] transition-colors leading-tight">
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6 p-5 md:p-6 pt-0">
          <CardDescription className="text-base text-text-primary leading-relaxed text-center max-w-[65ch] mx-auto">
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
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background magnetic scale-feedback color-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // High contrast blue variants
        default: "bg-primary text-white hover:bg-primary/90 shadow-card hover:shadow-soft rounded-lg font-semibold",
        hero: "bg-primary text-white hover:bg-primary/90 shadow-soft hover:shadow-lg rounded-xl font-semibold",
        
        // High contrast teal variants  
        secondary: "bg-teal text-white hover:bg-teal/90 shadow-card hover:shadow-soft rounded-lg font-semibold",
        "teal-bold": "bg-[#4D869C] text-white hover:bg-[#3d6b7d] shadow-lg hover:shadow-xl rounded-xl font-bold",
        "dark-teal": "bg-[#123C41] text-white hover:bg-[#0d2a2d] shadow-lg hover:shadow-xl rounded-xl font-bold",
        
        // White with blue/teal outline variants
        outline: "border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white rounded-lg font-semibold",
        "outline-teal": "border-2 border-teal text-teal bg-white hover:bg-teal hover:text-white rounded-lg font-semibold",
        
        // Gradient variants with white text
        "gradient-primary": "bg-gradient-to-r from-primary to-teal text-white hover:from-primary/90 hover:to-teal/90 shadow-soft hover:shadow-lg rounded-lg font-semibold",
        "gradient-reverse": "bg-gradient-to-r from-teal to-primary text-white hover:from-teal/90 hover:to-primary/90 shadow-soft hover:shadow-lg rounded-lg font-semibold",
        
        // White on dark backgrounds
        "white-on-dark": "bg-white text-primary hover:bg-white/90 shadow-soft rounded-lg font-semibold",
        "white-outline-on-dark": "border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary rounded-lg font-semibold",
        
        // Destructive - red with white text
        destructive: "bg-red-600 text-white hover:bg-red-700 rounded-lg font-semibold",
        
        // Minimal variants for special cases
        ghost: "hover:bg-primary/10 hover:text-primary rounded-lg",
        link: "text-primary underline-offset-4 hover:underline font-medium",
      },
      size: {
        default: "h-12 px-6 py-3 text-sm",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-xl px-8 text-base",
        icon: "h-12 w-12",
        hero: "h-16 rounded-xl px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

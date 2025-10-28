import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background magnetic scale-feedback color-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary CTA - Coral (for "Book Call", "Get Started")
        default: "bg-gradient-coral text-white hover:opacity-90 shadow-[0_4px_24px_rgba(251,113,133,0.6)] hover:shadow-[0_8px_32px_rgba(251,113,133,0.8)] rounded-lg font-semibold transition-all",
        coral: "bg-gradient-coral text-white hover:opacity-90 shadow-[0_4px_24px_rgba(251,113,133,0.6)] hover:shadow-[0_8px_32px_rgba(251,113,133,0.8)] rounded-lg font-semibold transition-all",
        
        // Secondary - Vibrant Teal
        "vibrant-teal": "bg-gradient-vibrant-teal text-white hover:opacity-90 shadow-md hover:shadow-teal-md rounded-lg font-semibold transition-all",
        
        // Outline variants
        "outline-coral": "border-2 border-coral text-coral bg-white hover:bg-coral hover:text-white rounded-lg font-semibold transition-all",
        outline: "border-2 border-vibrant-teal text-vibrant-teal bg-white hover:bg-vibrant-teal hover:text-white rounded-lg font-semibold transition-all",
        
        // Ghost and link
        ghost: "hover:bg-slate-100 text-slate-900 rounded-lg transition-all",
        link: "text-vibrant-teal underline-offset-4 hover:underline font-medium",
        
        // Legacy variants for backward compatibility
        secondary: "bg-gradient-vibrant-teal text-white hover:opacity-90 rounded-lg font-semibold",
        destructive: "bg-red-600 text-white hover:bg-red-700 rounded-lg font-semibold",
        hero: "bg-gradient-coral text-white hover:opacity-90 shadow-md hover:shadow-glow-coral rounded-xl font-semibold transition-all",
        "dark-teal": "bg-deep-teal text-white hover:bg-deep-teal-end shadow-lg hover:shadow-xl rounded-xl font-bold transition-all",
        "white-on-dark": "bg-white text-vibrant-teal hover:bg-white/90 shadow-md rounded-lg font-semibold transition-all",
        "white-outline-on-dark": "border-2 border-white text-white bg-transparent hover:bg-white hover:text-vibrant-teal rounded-lg font-semibold transition-all",
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

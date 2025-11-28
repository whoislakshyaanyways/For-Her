import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  pixelSize?: "sm" | "md" | "lg";
}

export const PixelButton = forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, variant = "primary", pixelSize = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-primary hover:bg-pixel-pink-dark text-primary-foreground border-pixel-pink-dark",
      secondary: "bg-secondary hover:bg-pixel-purple text-secondary-foreground border-pixel-purple",
      accent: "bg-accent hover:bg-pixel-teal text-accent-foreground border-accent",
    };

    const sizes = {
      sm: "px-6 py-2 text-sm",
      md: "px-8 py-3 text-base",
      lg: "px-12 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "pixel-border font-bold rounded-lg hover-lift transition-all",
          "active:translate-y-1 active:shadow-none",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          sizes[pixelSize],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

PixelButton.displayName = "PixelButton";

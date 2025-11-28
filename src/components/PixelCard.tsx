import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface PixelCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

export const PixelCard = ({ children, className, glow = false, onClick, style }: PixelCardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-xl p-6",
        glow ? "pixel-border-glow" : "pixel-border",
        onClick && "cursor-pointer hover-lift",
        "transition-all duration-300",
        className
      )}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};

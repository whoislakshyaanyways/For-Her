import coupleSprites from "@/assets/output-onlinegiftools-unscreen.gif";
import { cn } from "@/lib/utils";

interface AnimatedCoupleProps {
  className?: string;
}

export const AnimatedCouple = ({ className }: AnimatedCoupleProps) => {
  return (
    <div className={cn("relative w-48 h-48 mx-auto", className)}>
      <img
        src={coupleSprites}
        alt="Cute animated couple"
        className="w-full h-full object-contain pixelated"
        style={{ imageRendering: "pixelated" }}
      />
    </div>
  );
};
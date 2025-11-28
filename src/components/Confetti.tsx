import { useEffect, useState } from "react";
import { Heart, Star, Sparkles } from "lucide-react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  icon: "heart" | "star" | "sparkle";
  color: string;
}

export const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ["text-primary", "text-secondary", "text-accent", "text-pixel-pink"];
    const icons: ("heart" | "star" | "sparkle")[] = ["heart", "star", "sparkle"];

    const newPieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      icon: icons[Math.floor(Math.random() * icons.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setPieces(newPieces);
  }, []);

  const getIcon = (type: "heart" | "star" | "sparkle") => {
    switch (type) {
      case "heart":
        return <Heart className="fill-current" size={20} />;
      case "star":
        return <Star className="fill-current" size={20} />;
      case "sparkle":
        return <Sparkles className="fill-current" size={20} />;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className={cn("absolute animate-confetti", piece.color)}
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
          }}
        >
          {getIcon(piece.icon)}
        </div>
      ))}
    </div>
  );
};

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

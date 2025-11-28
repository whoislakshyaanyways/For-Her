import { useState, useEffect } from "react";
import { FloatingHearts } from "@/components/FloatingHearts";
import { PixelButton } from "@/components/PixelButton";
import { PixelCard } from "@/components/PixelCard";
import { AnimatedCouple } from "@/components/AnimatedCouple";
import { Confetti } from "@/components/Confetti";
import { Heart, Sparkles, ChevronRight } from "lucide-react";
import { toast } from "sonner";

type Step = "start" | "intro" | "memories" | "feelings" | "buildup" | "question" | "celebration";

const Index = () => {
  const [step, setStep] = useState<Step>("start");
  const [showConfetti, setShowConfetti] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [typewriterText, setTypewriterText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messages = {
    intro: "I know we haven't known each other for long... but you are definitely one of the best things life has offered me",
    buildup: "So... there's something I've been wanting to ask you...",
  };

  // Typewriter effect
  useEffect(() => {
    if (step === "intro" || step === "buildup") {
      setIsTyping(true);
      setTypewriterText("");
      const message = step === "intro" ? messages.intro : messages.buildup;
      let index = 0;

const interval = setInterval(() => {
  const char = message[index];

  if (char !== undefined) {
    setTypewriterText((prev) => prev + char);
    index++;
  } else {
    setIsTyping(false);
    clearInterval(interval);
  }
}, 50);


      return () => clearInterval(interval);
    }
  }, [step]);

  const handleYes = () => {
    setStep("celebration");
    setShowConfetti(true);
    toast.success("you just made me really happy 😭💗", {
      duration: 5000,
    });
  };

  const handleNoHover = () => {
    const maxX = 200;
    const maxY = 200;
    setNoButtonPosition({
      x: (Math.random() - 0.5) * maxX,
      y: (Math.random() - 0.5) * maxY,
    });
  };

  const memories = [
    {
      title: "I love how deeply you pay attention",
      content: "to the little things I do, the details I care about, and even the parts of me I don’t talk about out loud. It makes me feel seen in a way no one else ever has.",
    },
    {
      title: "How you make my days better...",
      content: "Even on the hardest days, hanging out with you brings joy to my day.",
    },
    {
      title: "I’m always amazed by how naturally our conversations flow",
      content: "With you, nothing feels forced it just feels right.",
    },    
    {
      title: "I just love your energy",
      content: "your laugh, your excitement, the way you show your joy without holding back. You make moments brighter just by being in them.",
    },
    {
      title: "I feel lucky that you want to know me",
      content: "I love that I get to explore who you are too. Every time we talk or build something together, I discover another reason to fall for you.",
    },
    {
      title: "What I feel for you is simple: I love being with you",
      content: "I love the way you care. I love who I am around you. And I want to keep choosing you",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingHearts />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {/* Start Screen */}
          {step === "start" && (
            <div className="text-center animate-bounce-in">
              <PixelCard className="bg-gradient-to-br from-pixel-pink-light to-pixel-purple">
                <div className="space-y-6">
                  <div className="flex justify-center gap-2 mb-4">
                    <Heart className="text-primary fill-primary animate-float" size={32} />
                    <Heart
                      className="text-secondary fill-secondary animate-float"
                      size={32}
                      style={{ animationDelay: "0.5s" }}
                    />
                    <Heart
                      className="text-accent fill-accent animate-float"
                      size={32}
                      style={{ animationDelay: "1s" }}
                    />
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Hey... I made something for you 💗
                  </h1>

                  <AnimatedCouple />

                  <PixelButton onClick={() => setStep("intro")} pixelSize="lg" className="mx-auto">
                    <span className="flex items-center gap-2">
                      Start <Heart className="fill-current" size={20} />
                    </span>
                  </PixelButton>
                </div>
              </PixelCard>
            </div>
          )}

          {/* Intro */}
          {step === "intro" && (
            <div className="text-center animate-bounce-in">
              <PixelCard>
                <p className="text-2xl md:text-3xl font-semibold mb-8 min-h-[100px] flex items-center justify-center">
                  {typewriterText}
                  {isTyping && <span className="animate-pulse ml-1">|</span>}
                </p>
                {!isTyping && (
                  <PixelButton onClick={() => setStep("memories")} className="mx-auto">
                    <span className="flex items-center gap-2">
                      Continue <ChevronRight size={20} />
                    </span>
                  </PixelButton>
                )}
              </PixelCard>
            </div>
          )}

          {/* Memories */}
          {step === "memories" && (
            <div className="space-y-4 animate-bounce-in">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
                A Few Things more things to tell you... 💭
              </h2>

              {memories.map((memory, index) => (
                <PixelCard
                  key={index}
                  className="animate-bounce-in hover:scale-105 transition-transform"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="font-bold text-lg text-primary mb-2">{memory.title}</h3>
                  <p className="text-foreground">{memory.content}</p>
                </PixelCard>
              ))}

              <div className="text-center pt-4">
                <PixelButton onClick={() => setStep("feelings")} className="mx-auto" pixelSize="lg">
                  <span className="flex items-center gap-2">
                    Next <Sparkles size={20} />
                  </span>
                </PixelButton>
              </div>
            </div>
          )}

          {/* Feelings */}
          {step === "feelings" && (
            <div className="text-center animate-bounce-in">
              <PixelCard className="bg-gradient-to-br from-pixel-cream to-pixel-pink-light" glow>
                <div className="space-y-6">
                  <Sparkles className="mx-auto text-primary animate-float" size={48} />

                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    That was How You Make Me Feel
                  </h2>

                  <p className="text-xl text-foreground">I miss the moment even while I’m living it… whenever I’m with you</p>

                  <AnimatedCouple className="scale-110" />

                  <PixelButton onClick={() => setStep("buildup")} className="mx-auto" pixelSize="lg">
                    <span className="flex items-center gap-2">
                      Continue <Heart className="fill-current" size={20} />
                    </span>
                  </PixelButton>
                </div>
              </PixelCard>
            </div>
          )}

          {/* Build-up */}
          {step === "buildup" && (
            <div className="text-center animate-bounce-in">
              <PixelCard>
                <p className="text-2xl md:text-3xl font-semibold mb-8 min-h-[100px] flex items-center justify-center">
                  {typewriterText}
                  {isTyping && <span className="animate-pulse ml-1">|</span>}
                </p>
                {!isTyping && (
                  <PixelButton
                    onClick={() => setStep("question")}
                    className="mx-auto animate-pulse-glow"
                    pixelSize="lg"
                  >
                    <span className="flex items-center gap-2">
                      Continue... <ChevronRight size={20} />
                    </span>
                  </PixelButton>
                )}
              </PixelCard>
            </div>
          )}

          {/* The Question */}
          {step === "question" && (
            <div className="text-center animate-bounce-in">
              <PixelCard className="bg-gradient-to-br from-pixel-pink to-pixel-purple" glow>
                <div className="space-y-8">
                  <AnimatedCouple className="scale-125" />

                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    Will you be my girlfriend? 💞
                  </h1>

                  <div className="flex gap-4 justify-center items-center flex-wrap relative">
                    <PixelButton
                      onClick={handleYes}
                      variant="accent"
                      pixelSize="lg"
                      className="text-xl animate-pulse-glow"
                    >
                      YES!! 🥺💗
                    </PixelButton>

                    <div className="relative">
                      <PixelButton
                        variant="secondary"
                        pixelSize="lg"
                        onMouseEnter={handleNoHover}
                        onTouchStart={handleNoHover}
                        className="text-xl transition-transform duration-200"
                        style={{
                          transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                        }}
                      >
                        Umm...
                      </PixelButton>
                    </div>
                  </div>

                  <p className="text-sm text-white/80 italic">
                    (Try hovering over the second button... 😏)
                  </p>
                </div>
              </PixelCard>
            </div>
          )}

          {/* Celebration */}
          {step === "celebration" && (
            <div className="text-center animate-bounce-in">
              {showConfetti && <Confetti />}
              <PixelCard className="bg-gradient-to-br from-pixel-pink to-pixel-purple" glow>
                <div className="space-y-6">
                  <div className="flex justify-center gap-3">
                    <Heart className="text-white fill-white animate-float" size={48} />
                    <Heart
                      className="text-white fill-white animate-float"
                      size={56}
                      style={{ animationDelay: "0.3s" }}
                    />
                    <Heart
                      className="text-white fill-white animate-float"
                      size={48}
                      style={{ animationDelay: "0.6s" }}
                    />
                  </div>

                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    This feels Unreal 😭💗
                  </h1>                  
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    So, We are officially together?
                  </h1>

                  <AnimatedCouple className="scale-150 my-12 p-5" />

                  <p className="text-xl md:text-2xl text-white">
                    I can't wait for all our adventures together
                  </p>

                  <p className="text-lg text-white/90 italic">This is just the beginning... </p>
                </div>
              </PixelCard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;

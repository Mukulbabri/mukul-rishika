import { useEffect, useRef, useState, type ReactNode } from "react";
import confetti from "canvas-confetti";

function weddingConfetti(origin: { x: number; y: number }) {
  const colors = ["#d4a373", "#c87e5a", "#e8b4b8", "#f4d03f", "#f5b7b1", "#f1948a"];

  confetti({
    particleCount: 70,
    spread: 70,
    origin,
    colors,
    disableForReducedMotion: true,
    gravity: 0.8,
    scalar: 0.9,
  });

  setTimeout(() => {
    confetti({
      particleCount: 40,
      spread: 55,
      origin: { x: origin.x - 0.2, y: origin.y },
      colors,
      disableForReducedMotion: true,
      gravity: 0.8,
      scalar: 0.8,
    });
  }, 150);

  setTimeout(() => {
    confetti({
      particleCount: 40,
      spread: 55,
      origin: { x: origin.x + 0.2, y: origin.y },
      colors,
      disableForReducedMotion: true,
      gravity: 0.8,
      scalar: 0.8,
    });
  }, 300);
}

type Props = {
  children: ReactNode;
  className?: string;
  confettiOrigin?: { x: number; y: number };
};

export function ScrollReveal({ children, className = "", confettiOrigin }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const hasFired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFired.current) {
          hasFired.current = true;
          setRevealed(true);

          const rect = entry.boundingClientRect;
          const vw = window.innerWidth;
          const vh = window.innerHeight;
          const origin = confettiOrigin ?? {
            x: (rect.left + rect.width / 2) / vw,
            y: (rect.top + rect.height / 2) / vh,
          };
          weddingConfetti(origin);
        }
      },
      { threshold: 0.50 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [confettiOrigin]);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
}

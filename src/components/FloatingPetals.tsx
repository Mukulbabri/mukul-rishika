import { useMemo } from "react";
 import butterfly from "@/assets/butterfly.gif";

const EMOJIS = ["🌸", "🌼", "🌿", "🌸", "🌸", "🦋"];

export function FloatingPetals({ count = 18 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 12, // Smaller size (10px - 22px)
        duration: 15 + Math.random() * 15,
        delay: Math.random() * 12,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      })),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {petals.map((p) =>
        p.emoji === "🦋" ? (
          <img
            key={p.id}
            src={butterfly}
            alt=""
            className="absolute animate-float-petal"
            style={{
              left: `${p.left}%`,
              top: "-10vh",
              width: `${p.size + 8}px`,
              height: "auto",
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
            }}
          />
        ) : (
          <span
            key={p.id}
            className="absolute animate-float-petal"
            style={{
              left: `${p.left}%`,
              top: "-10vh",
              fontSize: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
            }}
          >
            {p.emoji}
          </span>
        )
      )}
    </div>
  );
}

export function FallingEnvelopes({ count = 14 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 12 + Math.random() * 10, // Smaller envelopes
        duration: 14 + Math.random() * 14,
        delay: Math.random() * 10,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((p) => (
        <span
          key={p.id}
          className="absolute animate-env-fall opacity-60"
          style={{
            left: `${p.left}%`,
            top: "-10vh",
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
          }}
        >
          ✉️
        </span>
      ))}
    </div>
  );
}
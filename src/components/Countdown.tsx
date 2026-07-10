import { useEffect, useState } from "react";
import { ScratchCard } from "./ScratchCard";

const TARGET = new Date("2026-07-19T15:48:00+05:30").getTime();

function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

const pad = (n: number) => String(n).padStart(2, "0");

export function Countdown() {
  const [t, setT] = useState(calc());
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Days", v: t.d },
    { label: "Hours", v: t.h },
    { label: "Minutes", v: t.m },
    { label: "Seconds", v: t.s },
  ];

  return (
    <section className="relative py-14 sm:py-20 px-4 sm:px-6 bg-sage-soft text-center">
      <div className="mt-2">
        <ScratchCard width={560} height={200
        
        }>
          <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 py-4 sm:py-6 w-full px-2 sm:px-4">
            <p className="font-cinzel tracking-[0.3em] text-sage-deep text-[10px] sm:text-sm">
              SAVE THE DATE
            </p>
            <h2 className="font-script text-rose text-4xl sm:text-6xl leading-none">
              19th July 2026
            </h2>
            <span className="text-gold-deep text-lg">❀</span>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full mt-0">
              {items.map((i) => (
                <div
                  key={i.label}
                  className="rounded-lg sm:rounded-xl bg-cream/90 border border-gold/30 py-2.5 sm:py-5 shadow-sm"
                >
                  <div className="font-cinzel text-xl sm:text-3xl md:text-4xl text-rose-deep">{pad(i.v)}</div>
                  <div className="mt-1 text-[9px] sm:text-xs tracking-widest text-sage-deep/80 uppercase">
                    {i.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScratchCard>
      </div>
    </section>
  );
}

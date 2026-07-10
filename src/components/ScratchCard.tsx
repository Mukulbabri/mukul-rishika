import { useEffect, useRef, useState, type ReactNode } from "react";
import confetti from "canvas-confetti";

type Props = {
  children: ReactNode;
  width?: number;
  height?: number;
  className?: string;
  revealThreshold?: number; // 0..1
};

function boom(originX: number, originY: number) {
  const colors = ["#d4a373", "#c87e5a", "#e8b4b8", "#f4d03f", "#f5b7b1", "#7a8a6a"];
  const x = originX / window.innerWidth;
  const y = originY / window.innerHeight;
  confetti({
    particleCount: 140,
    spread: 100,
    startVelocity: 45,
    origin: { x, y },
    colors,
    disableForReducedMotion: true,
  });
  setTimeout(() => {
    confetti({ particleCount: 80, spread: 120, origin: { x: x - 0.15, y }, colors });
    confetti({ particleCount: 80, spread: 120, origin: { x: x + 0.15, y }, colors });
  }, 180);
}

export function ScratchCard({
  children,
  width = 480,
  height = 140,
  className = "",
  revealThreshold = 0.30,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const drawing = useRef(false);
  const fired = useRef(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Gold gradient cover
    const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, "#d8b078");
    grad.addColorStop(0.5, "#e8c89a");
    grad.addColorStop(1, "#b8893f");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Sparkle / label
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "600 14px 'Cinzel', serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("✦  SCRATCH TO REVEAL  ✦", rect.width / 2, rect.height / 2);

    ctx.globalCompositeOperation = "destination-out";
  }, []);

  const getPos = (e: PointerEvent | React.PointerEvent) => {
    const canvas = canvasRef.current!;
    const r = canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const scratchAt = (x: number, y: number) => {
    const ctx = canvasRef.current!.getContext("2d")!;
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();
  };

  const checkReveal = () => {
    if (fired.current) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const { width: w, height: h } = canvas;
    const step = 8;
    const data = ctx.getImageData(0, 0, w, h).data;
    let cleared = 0;
    let total = 0;
    for (let i = 0; i < data.length; i += 4 * step) {
      total++;
      if (data[i + 3] === 0) cleared++;
    }
    if (cleared / total > revealThreshold) {
      fired.current = true;
      setRevealed(true);
      const r = canvas.getBoundingClientRect();
      boom(r.left + r.width / 2, r.top + r.height / 2);
    }
  };

  const onDown = (e: React.PointerEvent) => {
    drawing.current = true;
    (e.target as Element).setPointerCapture(e.pointerId);
    const { x, y } = getPos(e);
    scratchAt(x, y);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!drawing.current) return;
    const { x, y } = getPos(e);
    scratchAt(x, y);
  };
  const onUp = () => {
    if (!drawing.current) return;
    drawing.current = false;
    checkReveal();
  };

  return (
    <div
      ref={wrapRef}
      className={`relative mx-auto select-none ${className}`}
      style={{ maxWidth: width, width: "100%" }}
    >
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-gold/40 shadow-md bg-cream/70"
        style={{ height }}
      >
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          {children}
        </div>
        <canvas
          ref={canvasRef}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          onPointerLeave={onUp}
          className={`absolute inset-0 h-full w-full touch-none cursor-grab transition-opacity duration-700 ${
            revealed ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          style={{ touchAction: "none" }}
        />
      </div>
    </div>
  );
}

import envelope from "../assets/envelope.png";

export function Cover({ onOpen }: { onOpen: () => void }) {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center relative px-6"
      style={{ background: "linear-gradient(135deg, rgb(201,219,189), rgb(170,191,155))" }}
    >
      <span className="absolute top-6 left-6 text-3xl opacity-70 animate-drift">🌸</span>
      <span className="absolute top-8 right-10 text-2xl opacity-60 animate-drift" style={{ animationDelay: "1s" }}>🌼</span>
      <span className="absolute bottom-8 left-10 text-3xl opacity-70 animate-drift" style={{ animationDelay: "2s" }}>🌿</span>
      <span className="absolute bottom-6 right-6 text-3xl opacity-70 animate-drift" style={{ animationDelay: ".5s" }}>🌿</span>

      <button
        onClick={onOpen}
        aria-label="Open invitation"
        className="relative group transition-transform duration-500 hover:scale-105"
        style={{ perspective: "1000px" }}
      >
        <img
          src={envelope}
          alt="Wedding invitation envelope"
          className="w-[240px] sm:w-[360px] md:w-[420px] h-auto drop-shadow-2xl"
        />
        <span className="absolute inset-0 flex items-center justify-center  ">
          <span className="w-16 h-16 sm:w-24 sm:h-24 rounded-full gradient-gold shadow-gold  animate-shimmer flex items-center justify-center">
            <span className="font-cinzel text-[10px] sm:text size-xs text-white/90">R &amp; P</span>
          </span>
        </span>
      </button>

      <div className="mt-8 sm:mt-10 text-center animate-fade-up delay-300 px-4">
        <h2 className="font-script text-3xl sm:text-5xl text-sage-deep">You're Invited</h2>
        <p className="mt-2 text-sage-deep/80 italic tracking-wide text-sm sm:text-base">
          Tap the envelope to open your invitation
        </p>
      </div>
    </div>
  );
}

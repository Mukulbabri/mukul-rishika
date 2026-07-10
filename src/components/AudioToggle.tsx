import { useEffect, useRef, useState } from "react";
import audio from "../assets/background.mp3";

export function AudioToggle({ autoplay }: { autoplay: boolean }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!autoplay || !ref.current) return;
    ref.current.volume = 0.4;
    ref.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, [autoplay]);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.volume = 0.4;
      el.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={ref} src={audio} preload="auto" loop />
      <button
        onClick={toggle}
        aria-label={playing ? "Mute music" : "Play music"}
        className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-maroon/80 backdrop-blur text-cream shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        {playing ? "🔊" : "🔇"}
      </button>
    </>
  );
}

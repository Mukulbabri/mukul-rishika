type Props = {
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  bg: string;
  couple: string;
  imageSize: string;
};

export function EventCard({ title, subtitle, date, time, venue, bg, couple }: Props) {
  return (
    <article
      className="postiion: relative
       rounded-2xl overflow-hidden shadow-xl mx-auto max-w-md aspect-[9/16] bg-black/54flex flex-col
    "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/56" />
      <div className="relative z-10 text-center pt-10 sm:pt-25 px-0 sm:px-0 pb-0">
        <div><h3 className="font-script text-white text-5xl sm:text-6xl drop-shadow-lg break-words">{title}</h3>
        <p className="mt-1 italic text-white/90 text-xs sm:text-sm">{subtitle}</p>
        <span className="block mt-3 text-white">❀</span>

        <div className="mt-1 sm:mt-5 space-y-2 sm:space-y-3 text-white">
          <div>
            <p className="font-cinzel tracking-[0.25em] text-[10px] sm:text-xs text-white">Date</p>
            <p className="font-serif text-base sm:text-lg">{date}</p>
          </div>
          <div>
            <p className="font-cinzel tracking-[0.25em] text-[10px] sm:text-xs text-white">Time</p>
            <p className="font-serif text-base sm:text-lg">{time}</p>
          </div>
          <div>
            <p className="font-cinzel tracking-[0.25em] text-[10px] sm:text-xs text-white">Venue</p>
            <p className="font-serif text-sm sm:text-lg px-2">{venue}</p>
          </div>
        </div>
        <div className="mt-5 text-blue-400 text-xl">🦋</div>
      </div>
      </div>
      <img
  src={couple}
  alt={`${title} couple`}
  className="relative -top-25 mx-auto block w-[65%] h-auto"
/>
    </article>
  );
}

import hero from "../assets/hero.jpg";
import ganesh from "../assets/ganesh.png";

export function Hero() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 overflow-hidden"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 w-full max-w-2xl text-center animate-fade-up">
        <img src={ganesh} alt="Ganesha" className="mx-auto w-20 sm:w-28 mb-4 drop-shadow" />
        <p className="font-cinzel text-rose-deep tracking-widest text-xs sm:text-base">
          ‖ Shree Ganeshaya Namah ‖
        </p>
        <p className="mt-6 sm:mt-8 text-rose-deep/90 font-serif text-sm sm:text-lg leading-relaxed italic px-2">
          We cordially invite you to witness the beginning of our
          <br className="hidden sm:block" /> forever and celebrate the wedding ceremony of
        </p>

        <h1 className="mt-5 font-script text-rose text-5xl sm:text-7xl md:text-8xl leading-none break-words">
         Rakesh
        </h1>
        <p className="mt-3 text-foreground/85 text-xs sm:text-base">S/o Mr. Sanjay Deshmukh</p>
        <p className="text-foreground/85 text-xs sm:text-base">&amp; Mrs. Seema Deshmukh</p>

        <p className="mt-5 font-script text-rose-deep text-2xl sm:text-3xl">with</p>

        <h1 className="mt-2 font-script text-rose text-5xl sm:text-7xl md:text-8xl leading-none break-words">
          Priti
        </h1>
        <p className="mt-3 text-foreground/85 text-xs sm:text-base">D/o Mr. Dasharath Yadav</p>
        <p className="text-foreground/85 text-xs sm:text-base">&amp; Mrs. Ujjwala Yadav</p>
      </div>
    </section>
  );
}

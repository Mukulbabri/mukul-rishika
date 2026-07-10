const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Fulai+Garden+Hall+Zirapwadi+Phaltan+Satara";
const EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.3456227519414!2d74.45045007848168!3d17.96265004223526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3bb20df01328f%3A0xe6733f49e10584bf!2sFulai%20Garden%20Hall!5e0!3m2!1sen!2sin!4v1781690362707!5m2!1sen!2sin"
export function Venue() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-cream text-center">
      <p className="font-cinzel tracking-[0.3em] text-sage-deep text-xs sm:text-sm">VENUE</p>
      <h2 className="mt-2 font-script text-rose text-4xl sm:text-6xl">Where We Celebrate</h2>
      <span className="block mt-3 text-gold-deep">❀</span>
      <p className="mt-6 text-foreground/85 text-sm sm:text-base px-2">
        Fulai Garden, Zirapwadi, Phaltan, Satara, Maharashtra
      </p>

      <div className="mt-8 max-w-2xl mx-auto rounded-xl overflow-hidden border border-gold/40 shadow">
        <iframe
          title="Venue map"
          src={EMBED_URL}
          width="100%"
          height="340"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
          className="h-[240px] sm:h-[340px] w-full"
        />
      </div>

      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full gradient-gold text-white px-5 sm:px-7 py-2.5 sm:py-3 shadow-gold hover:scale-105 transition-transform"
      >
        <span>📍</span>
        <span className="font-cinzel tracking-widest text-xs sm:text-sm">Get Directions</span>
      </a>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-maroon text-cream py-12 sm:py-16 px-4 sm:px-6 text-center">
      <p className="font-cinzel tracking-[0.3em] text-xs sm:text-sm">WITH LOVE</p>
      <h3 className="mt-3 font-script text-4xl sm:text-5xl md:text-6xl break-words">Rushikesh &amp; Prajakta</h3>
      <div className="mt-4 text-2xl">💐</div>
      <p className="mt-6 italic text-sm sm:text-base">19th July 2026</p>
      <p className="mt-2 font-cinzel tracking-[0.3em] text-xs sm:text-sm text-gold">#RUSHIKIPRAJU</p>
    </footer>
  );
}

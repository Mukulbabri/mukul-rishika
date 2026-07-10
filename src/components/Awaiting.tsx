export function Awaiting() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 text-center bg-cream">
      <h2 className="font-script text-rose text-4xl sm:text-6xl leading-tight">
        Awaiting Your Noble
        <br />
        Presence
      </h2>
      <span className="block mt-3 text-gold-deep">❀</span>
      <p className="mt-6 max-w-xl mx-auto italic text-foreground/80 text-sm sm:text-base">
        Because meeting two souls requires twice the fun — and you!
      </p>
      <div className="mt-4 text-2xl">🦋</div>
    </section>
  );
}

export function Families() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 text-center bg-sage-soft">
      <p className="font-cinzel tracking-[0.3em] text-sage-deep text-xs sm:text-sm">WITH LOVE</p>
      <h2 className="mt-2 font-script text-rose text-4xl sm:text-6xl">The Families</h2>
      <span className="block mt-3 text-gold-deep">❀</span>

      <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-3xl mx-auto">
        <div className="rounded-xl border border-gold/40 bg-cream/80 px-4 sm:px-6 py-6 sm:py-8">
          <p className="font-cinzel tracking-[0.2em] text-[10px] sm:text-xs text-sage-deep">
            AWAITING YOUR GRACIOUS PRESENCE
          </p>
          <span className="block mt-3 text-gold-deep">❀</span>
          <p className="mt-4 text-base sm:text-lg">Mr. Sanjay Deshmukh</p>
          <p className="text-base sm:text-lg">Mrs. Seema Deshmukh</p>
        </div>
        <div className="rounded-xl border border-gold/40 bg-cream/80 px-4 sm:px-6 py-6 sm:py-8">
          <p className="font-cinzel tracking-[0.2em] text-[10px] sm:text-xs text-sage-deep">
            AWAITING YOUR GRACIOUS PRESENCE
          </p>
          <span className="block mt-3 text-gold-deep">❀</span>
          <p className="mt-4 text-base sm:text-lg">Mr. Dasharath Yadav</p>
          <p className="text-base sm:text-lg">Mrs. Ujjwala Yadav</p>
        </div>
      </div>
    </section>
  );
}

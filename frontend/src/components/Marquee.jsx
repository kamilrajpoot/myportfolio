const Marquee = ({ words }) => {
  const text = `${words.join(" • ")} • `;

  return (
    <section className="relative -skew-y-2 bg-ink py-14 md:py-14 mt-5 mb-5 overflow-hidden" aria-hidden="true">
      <div>
        <div className="overflow-hidden">
          <div className="marquee-track animate-marquee">
            <span className="font-display text-cream text-[9vw] pr-8">{text.repeat(3)}</span>
            <span className="font-display text-cream text-[9vw] pr-8">{text.repeat(3)}</span>
          </div>
        </div>
        <div className="overflow-hidden mt-2">
          <div className="marquee-track animate-marquee-reverse">
            <span className="font-display text-paper/80 text-[9vw] pr-8">{text.repeat(3)}</span>
            <span className="font-display text-paper/80 text-[9vw] pr-8">{text.repeat(3)}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
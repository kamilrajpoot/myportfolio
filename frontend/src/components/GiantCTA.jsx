import { Link } from "react-router-dom";

const GiantCTA = ({ heading, buttonLabel = "Start A Conversation", to = "/contact" }) => (
  <section className="bg-cream px-6 md:px-10 py-24 md:py-32 flex flex-col items-center text-center">
    <h2 className="font-display text-ink text-[10vw] leading-[0.85] max-w-6xl">{heading}</h2>
    <Link to={to} className="mt-10 md:mt-14 inline-flex items-center justify-center bg-ink text-paper font-mono-label uppercase text-sm rounded-full px-10 py-5 transition-transform duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink">
      {buttonLabel}
    </Link>
  </section>
);

export default GiantCTA;

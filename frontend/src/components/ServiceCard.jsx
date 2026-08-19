import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ index, title, description, tags = [], slug }) => (
  <Link
    to={`/services/${slug}`}
    className="group relative block w-full border-t border-white/20 py-8 md:py-10 px-2 md:px-4 transition-colors duration-300 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00fff2]"
    aria-label={`Open ${title} service details`}
  >
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
      <span className="font-mono-label text-cyan text-sm shrink-0 w-10">{index}</span>
      <div className="flex-1 transition-transform duration-300 group-hover:translate-x-4">
        <h3 className="font-display text-paper text-[7vw] md:text-[4.5vw] leading-[0.9]">{title}</h3>
        <p className="font-body text-paper/70 mt-3 max-w-xl text-sm md:text-base">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => <span key={tag} className="font-mono-label text-[11px] uppercase text-paper border border-white/30 rounded-full px-3 py-1">{tag}</span>)}
        </div>
      </div>
      <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45">
        <ArrowUpRight size={40} className="text-cyan" />
      </div>
    </div>
  </Link>
);

export default ServiceCard;
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => (
    <Link to={`/projects/${project.slug}`} className="group relative bg-ink p-6 md:p-8 min-h-[300px] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan">
        <div className="flex items-start justify-between gap-4">
            <span className="font-mono-label text-xs uppercase text-cyan">{project.category}</span>
            <span className="font-mono-label text-xs uppercase text-cyan text-right">{project.year}</span>
        </div>
        <div>
            <h3 className="font-display text-cyan text-3xl md:text-4xl mt-10 mb-3">{project.title}</h3>
            <p className="font-body text-cyan/80 text-sm md:text-base mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={tag} className="font-mono-label text-[10px] uppercase border border-cyan/50 rounded-full px-3 py-1 text-cyan">{tag}</span>)}
            </div>
        </div>
        <ArrowUpRight size={28} className="absolute bottom-6 right-6 text-cyan opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45" />
    </Link>
);

export default ProjectCard;
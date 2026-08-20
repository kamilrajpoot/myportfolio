import { Link, useParams } from "react-router-dom";
import GiantCTA from "../components/GiantCTA";
import { getProject } from "../data/portfolioData";
import NotFound from "./NotFound";

const ProjectDetail = () => {
    const { projectSlug } = useParams();
    const project = getProject(projectSlug);
    if (!project) return <NotFound />;

    return (
        <div>
            <section className="min-h-[70vh] flex flex-col justify-end px-6 pt-32 pb-16"><div className="flex justify-between gap-4 mb-6"><span className="font-mono-label text-xs uppercase">{project.category}</span><span className="font-mono-label text-xs uppercase">{project.year}</span></div><h1 className="font-display text-ink text-[12vw] md:text-[10vw] leading-[0.82] max-w-7xl">{project.title}</h1><p className="font-body text-lg md:text-xl max-w-2xl mt-8 border-t-2 border-ink pt-8">{project.detail}</p><div className="flex flex-wrap gap-2 mt-6">{project.tags.map((tag) => <span key={tag} className="font-mono-label text-xs uppercase border-2 border-ink rounded-full px-3 py-2">{tag}</span>)}</div></section>
            <section className="bg-ink text-paper px-6 md:px-10 py-20"><div className="max-w-4xl"><p className="font-mono-label text-cyan text-xs uppercase mb-5">Project Breakdown</p><h2 className="font-display text-4xl md:text-6xl mb-10">The Build</h2>{project.bullets.map((bullet, index) => <div key={bullet} className="border-t border-white/20 py-7 flex gap-5"><span className="font-mono-label text-cyan text-sm">{String(index + 1).padStart(2, "0")}</span><p className="font-body text-paper/80 text-lg">{bullet}</p></div>)}</div></section>
            <section className="px-6 md:px-10 py-20"><p className="font-mono-label text-xs uppercase mb-5">Category</p><h2 className="font-display text-4xl md:text-6xl mb-8">{project.category}</h2><Link to="/projects" className="font-mono-label uppercase border-2 border-ink rounded-full px-6 py-3 inline-block hover:bg-ink hover:text-paper transition-colors">Back To Projects</Link></section>
            <GiantCTA heading="Let's Build Your Next Idea" />
        </div>
    );
};

export default ProjectDetail;

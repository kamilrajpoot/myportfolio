import { Link, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import GiantCTA from "../components/GiantCTA";
import ProjectCard from "../components/ProjectCard";
import { getProject, getService } from "../data/portfolioData";
import NotFound from "./NotFound";

const ServiceDetail = () => {
    const { serviceSlug } = useParams();
    const service = getService(serviceSlug);
    if (!service) return <NotFound />;

    const relatedProjects = service.relatedProjectSlugs.map(getProject).filter(Boolean);

    return (
        <div>
            <section className="min-h-[75vh] flex flex-col justify-end px-6 pt-32 pb-16">
                <span className="font-mono-label text-xs uppercase mb-6">Service {service.index}</span>
                <h1 className="font-display text-ink text-[12vw] md:text-[10vw] leading-[0.82] max-w-7xl">{service.title}</h1>
                <p className="font-body text-lg md:text-xl max-w-2xl mt-8 border-t-2 border-ink pt-8">{service.intro}</p>
                <div className="flex flex-wrap gap-2 mt-6">{service.tags.map((tag) => <span key={tag} className="font-mono-label text-xs uppercase border-2 border-ink rounded-full px-3 py-2">{tag}</span>)}</div>
            </section>

            <section className="bg-ink px-6 md:px-10 py-20">
                <h2 className="font-display text-paper text-4xl md:text-6xl mb-10">What This Includes</h2>
                {service.includes.map((item, index) => <div key={item} className="border-t border-white/20 py-6 flex gap-5"><span className="font-mono-label text-cyan text-sm">{String(index + 1).padStart(2, "0")}</span><p className="font-display text-paper text-2xl md:text-4xl">{item}</p></div>)}
            </section>

            <section className="px-6 md:px-10 py-20"><div className="flex items-center justify-between mb-8"><h2 className="font-display text-ink text-4xl md:text-6xl">Relevant Work</h2><ArrowUpRight className="text-ink" /></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{relatedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section>

            <section className="bg-cream px-6 md:px-10 py-20"><p className="font-mono-label text-xs uppercase mb-5">Typical Stack</p><div className="flex flex-wrap gap-3">{service.stack.map((item) => <span key={item} className="font-mono-label text-sm uppercase bg-ink text-paper rounded-full px-4 py-3">{item}</span>)}</div><Link to={`/contact?service=${service.slug}`} className="inline-flex mt-12 bg-ink text-paper font-mono-label uppercase rounded-full px-8 py-4 hover:scale-105 transition-transform">Discuss This Service</Link></section>
        </div>
    );
};

export default ServiceDetail;
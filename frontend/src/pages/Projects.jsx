import { useMemo, useState } from "react";
import GiantCTA from "../components/GiantCTA";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolioData";

const filters = ["All", "AI / ML", "AI / RAG", "Web Development", "Computer Vision", "Research"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const visibleProjects = useMemo(() => filter === "All" ? projects : projects.filter((project) => project.category === filter), [filter]);

  return (
    <div>
      <section className="min-h-[50vh] flex flex-col justify-end px-6 pt-32 pb-16"><span className="font-mono-label text-xs uppercase mb-6">Selected Work</span><h1 className="font-display text-ink text-[13vw] md:text-[10vw] leading-[0.85]">Projects</h1></section>
      <section className="px-6 md:px-10 pb-10 flex flex-wrap gap-2">{filters.map((item) => <button key={item} type="button" onClick={() => setFilter(item)} className={`font-mono-label text-xs uppercase rounded-full px-4 py-3 border-2 border-ink transition-colors ${filter === item ? "bg-ink text-paper" : "text-ink hover:bg-ink hover:text-paper"}`}>{item}</button>)}</section>
      <section className="px-6 md:px-10 pb-24"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section>
      <GiantCTA heading="Have A Project?" buttonLabel="Let's Talk" />
    </div>
  );
};

export default Projects;
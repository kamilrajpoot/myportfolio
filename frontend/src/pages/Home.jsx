import { Link } from "react-router-dom";
import Marquee from "../components/Marquee";
import ScrollIndicator from "../components/ScrollIndicator";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import GiantCTA from "../components/GiantCTA";
import { marqueeWords, profile, projects, services, skills } from "../data/portfolioData";

const Home = () => {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-10">
        <h1 className="font-display text-ink text-[10vw] md:text-[12vw] text-center leading-[0.95]">
          Muhammad
          Kamil Toor
        </h1>
        <div className="mt-16 ml-5 mr-5 border-t-2 border-ink pt-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="font-mono-label text-xs uppercase text-center md:text-left">Based In
            <br />
            {profile.location}</div>
          <ScrollIndicator />
          <div className="font-mono-label text-xs uppercase text-center md:text-right leading-relaxed">AI Products
            <br />
            MERN Apps
            <br />
            & Web Experiences</div>
        </div>
      </section>

      <Marquee words={marqueeWords} />

      <section className="bg-ink px-6 md:px-10 py-20">
        <div className="flex items-center justify-between mb-8 gap-4">
          <h2 className="font-display text-paper text-3xl md:text-5xl">What I Build</h2>
          <Link to="/services" className="font-mono-label text-[12px] uppercase text-cyan hover:translate-x-1 transition-transform">View All →</Link>
        </div>
        {services.map((service) => <ServiceCard key={service.slug} {...service} />)}
      </section>

      <section className="px-6 md:px-10 py-20">
        <div className="flex items-center justify-between mb-8 gap-4">
          <h2 className="font-display text-ink text-3xl md:text-5xl">Selected Work</h2>
          <Link to="/projects" className="font-mono-label text-[12px] uppercase hover:translate-x-1 transition-transform">View All →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>

      <section className="bg-ink px-6 md:px-10 py-14 overflow-hidden">
        <p className="font-mono-label text-cyan text-xs uppercase mb-5">Tools I Work With</p>
        <div className="flex flex-wrap gap-3">{skills.map((skill) => <span key={skill} className="font-mono-label text-xs uppercase text-paper border border-white/30 rounded-full px-4 py-2">{skill}</span>)}</div>
      </section>

      <GiantCTA heading="Let's Build Something" />
    </div>
  );
};

export default Home;
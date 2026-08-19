import Marquee from "../components/Marquee";
import GiantCTA from "../components/GiantCTA";
import { marqueeWords, processSteps, profile, skills } from "../data/portfolioData";

const About = () => (
  <div>
    <section className="min-h-[70vh] flex flex-col justify-center px-6 pt-32 pb-16">
      <span className="font-mono-label text-xs uppercase mb-6">About Me</span>
      <h1 className="font-display text-ink text-[12vw] md:text-[9vw] leading-[0.85] max-w-6xl">AI Engineer
        & Developer</h1>
      <p className="font-body text-ink text-lg md:text-xl max-w-3xl mt-8 border-t-2 border-ink pt-8">I am an AI Engineer and Full-Stack Developer based in Pakistan. I specialize in designing end-to-end web applications, intelligent computer vision systems, and advanced Retrieval-Augmented Generation (RAG) pipelines. My focus is on bridging the gap between cutting-edge machine learning and intuitive, high-performance software that solves practical user needs.</p>
    </section>

    <Marquee words={["AI Engineer", "Full-Stack Builder", "Pakistan", "Python", "React", "Build With Purpose"]} />

    <section className="px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div><p className="font-mono-label text-xs uppercase mb-5">Education</p><h2 className="font-display text-ink text-4xl md:text-6xl leading-[0.9]">BS Artificial Intelligence</h2><p className="font-body mt-6 max-w-md">{profile.university}
      </p></div>
      <div><p className="font-mono-label text-xs uppercase mb-5">Capabilities</p><div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="font-mono-label text-xs uppercase border-2 border-ink rounded-full px-3 py-2">{skill}</span>)}</div></div>
    </section>

    <section className="bg-ink px-6 md:px-10 py-20">
      <h2 className="font-display text-paper text-4xl md:text-6xl mb-10">How I Work</h2>
      {processSteps.map(([index, title, description]) => <div key={index} className="border-t border-white/20 py-8 flex flex-col md:flex-row gap-4 md:gap-8"><span className="font-mono-label text-cyan text-sm w-10">{index}</span><div><h3 className="font-display text-paper text-2xl md:text-3xl mb-2">{title}</h3><p className="font-body text-paper/70 max-w-2xl text-sm md:text-base">{description}</p></div></div>)}
    </section>

    <GiantCTA heading="Let's Start Your Project" buttonLabel="Get In Touch" />
  </div>
);

export default About;
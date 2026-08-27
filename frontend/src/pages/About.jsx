import { useEffect, useState } from "react";
import Marquee from "../components/Marquee";
import GiantCTA from "../components/GiantCTA";
import { getCertifications } from "../api"; // Added API call
import {
  marqueeWords,
  processSteps,
  profile,
  skills,
  badges,
} from "../data/portfolioData";
import { ExternalLink, Award, Brain, Code, Database, Zap } from "lucide-react";

const iconMap = {
  Brain: <Brain size={20} />,
  Code: <Code size={20} />,
  Database: <Database size={20} />,
  Zap: <Zap size={20} />,
};

const About = () => {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    const fetchCerts = async () => {
      try {
        const response = await getCertifications();
        setCerts(response.data.data);
      } catch (error) {
        console.error("Failed to fetch certifications:", error);
      }
    };
    fetchCerts();
  }, []);

  return (
    <div>
      <section className="min-h-[70vh] flex flex-col justify-center px-6 pt-32 pb-16">
        <span className="font-mono-label text-xs uppercase mb-6">About Me</span>
        <h1 className="font-display text-ink text-[12vw] md:text-[9vw] leading-[0.85] max-w-6xl">
          AI Engineer & Developer
        </h1>
        <p className="font-body text-ink text-lg md:text-xl max-w-3xl mt-8 border-t-2 border-ink pt-8">
          I am an AI Engineer and Full-Stack Developer based in Pakistan. I
          specialize in designing end-to-end web applications, intelligent
          computer vision systems, and advanced Retrieval-Augmented Generation
          (RAG) pipelines. My focus is on bridging the gap between cutting-edge
          machine learning and intuitive, high-performance software that solves
          practical user needs.
        </p>
      </section>

      <Marquee
        words={[
          "AI Engineer",
          "Full-Stack Builder",
          "Pakistan",
          "Python",
          "React",
          "Build With Purpose",
        ]}
      />

      <section className="px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="font-mono-label text-xs uppercase mb-5">Education</p>
          <h2 className="font-display text-ink text-4xl md:text-6xl leading-[0.9]">
            BS Artificial Intelligence
          </h2>
          <p className="font-body mt-6 max-w-md">{profile.university}</p>
        </div>
        <div>
          <p className="font-mono-label text-xs uppercase mb-5">Capabilities</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="font-mono-label text-xs uppercase border-2 border-ink rounded-full px-3 py-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 md:px-10 py-20">
        <h2 className="font-display text-paper text-4xl md:text-6xl mb-10">
          How I Work
        </h2>
        {processSteps.map(([index, title, description]) => (
          <div
            key={index}
            className="border-t border-white/20 py-8 flex flex-col md:flex-row gap-4 md:gap-8"
          >
            <span className="font-mono-label text-cyan text-sm w-10">
              {index}
            </span>
            <div>
              <h3 className="font-display text-paper text-2xl md:text-3xl mb-2">
                {title}
              </h3>
              <p className="font-body text-paper/70 max-w-2xl text-sm md:text-base">
                {description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Certifications & Badges Section */}
      <section className="px-6 md:px-10 py-20 bg-cream border-t-2 border-ink">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-20 mb-12">
          <div>
            <p className="font-mono-label text-xs uppercase mb-5 text-ink/60">
              Verified Expertise
            </p>
            <h2 className="font-display text-ink text-4xl md:text-6xl leading-[0.9]">
              Credentials
            </h2>
          </div>
          <div className="flex flex-wrap gap-1">
            {badges.map((badge) => (
              <div
                key={badge.name}
                className="flex items-center gap-2 bg-ink px-4 py-2 rounded-full"
              >
                <span className="text-cyan">{iconMap[badge.icon]}</span>
                <span className="font-mono-label text-[10px] uppercase text-paper">
                  {badge.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert) => (
            <div
              key={cert._id}
              className="group relative bg-paper border-2 border-ink p-6 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2"
            >
              <div>
                <div className="bg-ink text-paper w-10 h-10 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan group-hover:text-ink transition-colors">
                  <Award size={20} />
                </div>
                <h3 className="font-display text-xl leading-tight mb-2 uppercase">
                  {cert.title}
                </h3>
                <p className="font-mono-label text-[10px] uppercase text-ink/60 mb-4">
                  {cert.issuer} • {cert.date}
                </p>
                {cert.idCode && (
                  <p className="font-mono-label text-[9px] text-ink/40 mb-2">
                    ID: {cert.idCode}
                  </p>
                )}
              </div>

              <a
                href={cert.file}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-mono-label text-xs uppercase border-b border-ink pb-1 w-fit hover:text-cyan hover:border-cyan transition-colors"
              >
                View Document <ExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <GiantCTA heading="Let's Start Your Project" buttonLabel="Get In Touch" />
    </div>
  );
};

export default About;

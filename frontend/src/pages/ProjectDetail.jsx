import { Link, useParams } from "react-router-dom";
import GiantCTA from "../components/GiantCTA";
import { getProject } from "../data/portfolioData";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { projectSlug } = useParams();
  const project = getProject(projectSlug);

  if (!project) return <NotFound />;

  const hasProjectLinks =
    project.liveUrl || project.githubUrl || project.pdfUrl;

  return (
    <div>
      {/* Project Intro */}
      <section className="min-h-[70vh] flex flex-col justify-end px-6 pt-32 pb-16">
        <div className="flex justify-between gap-4 mb-6">
          <span className="font-mono-label text-xs uppercase">
            {project.category}
          </span>

          <span className="font-mono-label text-xs uppercase">
            {project.year}
          </span>
        </div>

        <h1 className="font-display text-ink text-[12vw] md:text-[10vw] leading-[0.82] max-w-7xl">
          {project.title}
        </h1>

        <p className="font-body text-lg md:text-xl max-w-2xl mt-8 border-t-2 border-ink pt-8">
          {project.detail}
        </p>

        {/* Project Tags */}
        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono-label text-xs uppercase border-2 border-ink rounded-full px-3 py-2"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* Project Images */}
      {project.images?.length > 0 && (
        <section className="px-6 md:px-10 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${project.title} preview ${index + 1}`}
                className="w-full aspect-[16/10] object-cover border-2 border-ink"
                loading="lazy"
              />
            ))}
          </div>
        </section>
      )}

      {/* Project Links */}
      {/* Yeh section images ke baad aur Project Breakdown se pehle hai. */}
      {hasProjectLinks && (
        <section className="px-6 md:px-10 pb-24">
          <div className="border-t-2 border-ink pt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="font-mono-label text-xs uppercase mb-3">
                Explore The {project.category}
              </p>
              <h2 className="font-display text-4xl md:text-6xl leading-none">
                See The Work
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-label uppercase border-2 border-ink rounded-full px-5 py-3 inline-flex items-center hover:bg-ink hover:text-paper transition-colors"
                >
                  Live Demo <span className="ml-2">↗</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-label uppercase border-2 border-ink rounded-full px-5 py-3 inline-flex items-center hover:bg-ink hover:text-paper transition-colors"
                >
                  GitHub Code <span className="ml-2">↗</span>
                </a>
              )}

              {project.pdfUrl && (
                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-label uppercase border-2 border-ink rounded-full px-5 py-3 inline-flex items-center hover:bg-ink hover:text-paper transition-colors"
                >
                  View PDF <span className="ml-2">↗</span>
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Project Breakdown */}
      <section className="bg-ink text-paper px-6 md:px-10 py-20">
        <div className="max-w-4xl">
          <p className="font-mono-label text-cyan text-xs uppercase mb-5">
            Project Breakdown
          </p>

          <h2 className="font-display text-4xl md:text-6xl mb-10">The Build</h2>

          {project.bullets?.map((bullet, index) => (
            <div
              key={`${bullet}-${index}`}
              className="border-t border-white/20 py-7 flex gap-5"
            >
              <span className="font-mono-label text-cyan text-sm">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="font-body text-paper/80 text-lg">{bullet}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Category / Back Button */}
      <section className="px-6 md:px-10 py-20">
        <p className="font-mono-label text-xs uppercase mb-5">Category</p>

        <h2 className="font-display text-4xl md:text-6xl mb-8">
          {project.category}
        </h2>

        <Link
          to="/projects"
          className="font-mono-label uppercase border-2 border-ink rounded-full px-6 py-3 inline-block hover:bg-ink hover:text-paper transition-colors"
        >
          Back To Projects
        </Link>
      </section>

      <GiantCTA heading="Let's Build Your Next Idea" />
    </div>
  );
};

export default ProjectDetail;

/*
portfolioData.js examples:

// Sirf GitHub button:
{
  ...,
  githubUrl: "https://github.com/username/project",
}

// Sirf PDF button:
{
  ...,
  pdfUrl: "/projects/project-case-study.pdf",
}

// Sirf Live Demo button:
{
  ...,
  liveUrl: "https://your-live-demo.com",
}

// Multiple buttons:
{
  ...,
  liveUrl: "https://your-live-demo.com",
  githubUrl: "https://github.com/username/project",
  pdfUrl: "/projects/project-case-study.pdf",
}

// Images:
{
  ...,
  images: [
    "/projects/project-01.jpg",
    "/projects/project-02.jpg",
  ],
}
*/

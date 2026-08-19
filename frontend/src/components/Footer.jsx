import { profile } from "../data/portfolioData";

const Footer = () => (
  <footer className="border-t-2 border-ink px-4 md:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 bg-cream">
    <p className="font-mono-label text-[11px] uppercase text-ink">
      © {new Date().getFullYear()} {profile.name}
    </p>
    <div className="flex items-center gap-5">
      <a className="font-mono-label text-[11px] uppercase hover:opacity-60" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
      <a className="font-mono-label text-[11px] uppercase hover:opacity-60" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      <a className="font-mono-label text-[11px] uppercase hover:opacity-60" href={`mailto:${profile.email}`}>Email</a>
    </div>
  </footer>
);

export default Footer;
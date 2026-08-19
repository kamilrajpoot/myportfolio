import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolioData";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Page ke bilkul top par navbar hamesha visible rahega.
          if (currentScrollY <= 40) {
            setIsHidden(false);
          }
          // Neeche scroll karne par navbar hide hoga.
          else if (currentScrollY > lastScrollY.current) {
            setIsHidden(true);
          }
          // Upar scroll karne par navbar show hoga.
          else if (currentScrollY < lastScrollY.current) {
            setIsHidden(false);
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarVisibility = isHidden
    ? "-translate-y-[140%] opacity-0 pointer-events-none"
    : "translate-y-0 opacity-100";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-5 md:px-10 transform transition-all duration-500 ease-in-out ${navbarVisibility}`}
    >
      <NavLink
        to="/"
        className="font-display text-xl text-ink shrink-0"
        aria-label="Go to home"
      >
        M. Kamil
      </NavLink>

      <nav
        className="hidden md:flex items-center gap-1 bg-ink rounded-full px-2 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `font-mono-label text-[12px] uppercase px-4 py-2 rounded-full transition-colors duration-200 ${isActive
                ? "bg-paper text-ink"
                : "text-paper hover:bg-paper hover:text-ink"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-4 text-ink">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <Mail size={18} />
        </a>
      </div>

      <nav
        className="flex md:hidden items-center gap-1 bg-ink rounded-full px-2 py-2 overflow-x-auto max-w-[70vw]"
        aria-label="Mobile navigation"
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `font-mono-label text-[10px] uppercase px-3 py-2 rounded-full whitespace-nowrap ${isActive ? "bg-paper text-ink" : "text-paper"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;

import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Github, Linkedin, Mail, X } from "lucide-react";
import { profile } from "../data/portfolioData";
import logo from "../assets/kamil-logo-1.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Keep the navbar visible at the top and while the mobile drawer is open.
          if (currentScrollY <= 40 || isDrawerOpen) {
            setIsHidden(false);
          } else if (currentScrollY > lastScrollY.current) {
            setIsHidden(true);
          } else if (currentScrollY < lastScrollY.current) {
            setIsHidden(false);
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDrawerOpen]);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsDrawerOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    // Prevent the page behind the drawer from scrolling on mobile.
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const navbarVisibility =
    isHidden && !isDrawerOpen
      ? "-translate-y-[140%] opacity-0 pointer-events-none"
      : "translate-y-0 opacity-100";

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-2 px-3 py-4 sm:px-4 sm:py-5 md:px-10 transform transition-all duration-500 ease-in-out ${navbarVisibility}`}
      >
        {/* Desktop and mobile logo. Keep the same logo asset at every breakpoint. */}
        <NavLink
          to="/"
          className="shrink-0"
          aria-label="Go to home"
        >
          <img
            src={logo}
            alt="Muhammad Kamil Toor logo"
            className="h-8 w-auto max-w-[150px] object-contain sm:h-9 md:h-10"
          />
        </NavLink>

        {/* Existing desktop navigation remains unchanged. */}
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

        {/* Mobile two-line menu button. */}
        <button
          type="button"
          onClick={() => setIsDrawerOpen(true)}
          className="flex md:hidden h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full bg-ink text-paper transition-transform duration-300 active:scale-95"
          aria-label="Open navigation menu"
          aria-expanded={isDrawerOpen}
          aria-controls="mobile-navigation-drawer"
        >
          <span className="block h-[2px] w-5 bg-paper" />
          <span className="block h-[2px] w-5 bg-paper" />
        </button>
      </header>

      {/* Mobile overlay. */}
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={closeDrawer}
        className={`fixed inset-0 z-[55] bg-black/40 transition-opacity duration-500 md:hidden ${isDrawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
      />

      {/* Mobile right-side drawer. */}
      <aside
        id="mobile-navigation-drawer"
        aria-label="Mobile navigation"
        aria-hidden={!isDrawerOpen}
        className={`fixed right-0 top-0 z-[60] flex h-full w-[min(86vw,380px)] flex-col bg-ink px-6 pb-8 pt-6 text-paper transition-transform duration-500 ease-in-out md:hidden ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between border-b border-white/20 pb-5">
          <span className="font-mono-label text-xs uppercase text-cream">
            Menu
          </span>
          <button
            type="button"
            onClick={closeDrawer}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-paper transition-colors duration-300 hover:bg-paper hover:text-ink"
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-3" aria-label="Mobile pages">
          {links.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={closeDrawer}
              className={({ isActive }) =>
                `flex items-center gap-4 border-b border-white/20 py-4 font-display text-4xl uppercase transition-transform duration-300 hover:translate-x-2 sm:text-5xl ${isActive ? "text-cream" : "text-paper"
                }`
              }
            >
              <span className="font-mono-label text-xs text-cream">
                {String(index + 1).padStart(2, "0")}
              </span>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-5 border-t border-white/20 pt-5 text-cream">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;

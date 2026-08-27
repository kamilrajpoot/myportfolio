import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

const NotFound = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-cream overflow-hidden relative">
    {/* Background Decorative Text (Subtle) */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
      <h2 className="font-display text-[60vw] leading-none uppercase">LOST</h2>
    </div>

    <div className="relative z-10 text-center">
      <span className="font-mono-label text-xs uppercase mb-4 block tracking-[0.3em] text-ink/50">
        Error 404
      </span>

      <div className="relative inline-block">
        <h1 className="font-display text-ink text-[30vw] md:text-[20vw] leading-[0.8] mb-0">
          404
        </h1>
        {/* A small "Not Found" label crossing the 404 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ink text-paper px-4 py-1 rotate-12">
          <span className="font-mono-label text-[10px] md:text-xs uppercase whitespace-nowrap tracking-widest">
            Page Not Found
          </span>
        </div>
      </div>

      <div className="mt-12 md:mt-6">
        <p className="font-body text-ink/70 max-w-sm mx-auto mb-10 text-sm md:text-base leading-relaxed">
          The link you followed might be broken, or the page may have been moved
          to a new location.
        </p>

        <Link
          to="/"
          className="group inline-flex items-center gap-3 bg-ink text-paper font-mono-label text-xs md:text-sm uppercase rounded-full px-8 py-5 border-2 border-ink hover:bg-transparent hover:text-ink transition-all duration-500"
        >
          <MoveLeft
            className="group-hover:-translate-x-2 transition-transform duration-500"
            size={18}
          />
          Return to Base
        </Link>
      </div>
    </div>
  </section>
);

export default NotFound;

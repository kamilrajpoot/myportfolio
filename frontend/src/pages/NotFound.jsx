import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="min-h-[75vh] flex flex-col justify-center px-6 pt-32">
    <span className="font-mono-label text-xs uppercase mb-6">Error 404</span>
    <h1 className="font-display text-ink text-[16vw] leading-[0.8]">Not Found</h1>
    <Link to="/" className="mt-10 bg-ink text-paper font-mono-label uppercase rounded-full px-7 py-4 w-fit hover:scale-105 transition-transform">Back Home</Link>
  </section>
);

export default NotFound;

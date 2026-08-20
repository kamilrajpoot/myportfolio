import ServiceCard from "../components/ServiceCard";
import GiantCTA from "../components/GiantCTA";
import { services } from "../data/portfolioData";

const Services = () => (
  <div>
    <section className="min-h-[50vh] flex flex-col justify-end px-6 pt-32 pb-16"><span className="font-mono-label text-xs uppercase mb-6">What I Do</span><h1 className="font-display text-ink text-[13vw] md:text-[10vw] leading-[0.85]">Services</h1></section>
    <section className="bg-ink px-6 md:px-10 py-10 min-h-[40vh]">{services.map((service) => <ServiceCard key={service.slug} {...service} />)}</section>
    <GiantCTA heading="Ready To Build?" buttonLabel="Contact Me" />
  </div>
);

export default Services;

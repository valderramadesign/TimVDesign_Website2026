import { projects } from "../data/projects.js";
import WorkCard from "../components/WorkCard.jsx";
import Footer from "../components/Footer.jsx";

export default function Work() {
  return (
    <main className="pt-16 md:pt-20">
      {/* Header */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">Work</p>
          <h1
            className="font-medium tracking-tight"
            style={{ fontSize: "clamp(36px, 6vw, 72px)", letterSpacing: "-0.025em", lineHeight: 1 }}
          >
            Selected projects
          </h1>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
            {projects.map((project, i) => (
              <WorkCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import { useParams, Link, Navigate } from "react-router-dom";
import { getProject, getNextProject } from "../data/projects.js";
import Footer from "../components/Footer.jsx";

function MetaItem({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-sm text-black">{value}</p>
    </div>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <Navigate to="/work" replace />;

  const next = getNextProject(slug);

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative">
        <div
          className="w-full aspect-[16/9] md:aspect-[21/9] max-h-[70vh]"
          style={{ background: project.heroGradient }}
        />
      </section>

      {/* Title + meta */}
      <section className="bg-white py-12 md:py-16 border-b border-gray-100">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-start">
            <div className="md:col-span-2">
              <Link to="/work" className="text-sm text-gray-400 hover:text-black transition-colors mb-4 inline-block">
                ← All work
              </Link>
              <h1
                className="font-medium tracking-tight"
                style={{ fontSize: "clamp(32px, 5vw, 60px)", letterSpacing: "-0.025em", lineHeight: 1.05 }}
              >
                {project.name}
              </h1>
              <p className="text-gray-500 text-base leading-relaxed mt-4 max-w-xl">{project.description}</p>
            </div>
            <div className="flex flex-col gap-5">
              <MetaItem label="Type" value={project.type} />
              <MetaItem label="Deliverables" value={project.deliverables} />
              <MetaItem label="Year" value={project.year} />
            </div>
          </div>
        </div>
      </section>

      {/* Case study body */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="max-w-2xl">

            {/* Intro */}
            <div className="mb-16 md:mb-24">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Overview</p>
              <p className="text-xl md:text-2xl font-medium tracking-tight leading-snug">
                {project.intro}
              </p>
            </div>

            {/* Image placeholder 1 */}
            <div
              className="w-full aspect-[16/9] mb-16 md:mb-24"
              style={{ background: project.heroGradient, opacity: 0.6 }}
            />

            {/* Vision */}
            <div className="mb-16 md:mb-24">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">The Vision</p>
              <p className="text-base text-gray-700 leading-relaxed">{project.vision}</p>
            </div>

            {/* Details */}
            <div className="mb-16 md:mb-24">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Design Details</p>
              <p className="text-base text-gray-700 leading-relaxed">{project.details}</p>
            </div>

            {/* Image placeholder 2 */}
            <div
              className="w-full aspect-[16/9] mb-16 md:mb-24"
              style={{ background: project.cardGradient, opacity: 0.5 }}
            />

            {/* Outcomes */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Outcomes</p>
              <p className="text-base text-gray-700 leading-relaxed">{project.outcomes}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="border-t border-gray-100">
        <Link
          to={`/work/${next.slug}`}
          className="group block bg-gray-50 hover:bg-gray-100 transition-colors duration-300 py-12 md:py-16"
        >
          <div className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Next project</p>
              <h3
                className="font-medium tracking-tight group-hover:opacity-60 transition-opacity"
                style={{ fontSize: "clamp(24px, 4vw, 40px)", letterSpacing: "-0.02em" }}
              >
                {next.name}
              </h3>
            </div>
            <span className="text-2xl text-gray-400 group-hover:text-black transition-colors">→</span>
          </div>
        </Link>
      </section>

      <Footer />
    </main>
  );
}

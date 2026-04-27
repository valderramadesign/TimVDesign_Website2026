import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import WorkCard from "../components/WorkCard.jsx";
import Footer from "../components/Footer.jsx";

const press = [
  { outlet: "Awwwards", title: "Site of the Day — V-Health Patient Portal", date: "March 2025" },
  { outlet: "Dribbble", title: "Top Shot of the Week — Healthcare UX", date: "January 2025" },
  { outlet: "UX Collective", title: "The Case for Calm Design in Healthcare", date: "November 2024" },
  { outlet: "Product Hunt", title: "#2 Product of the Day — Atlas Workspace", date: "August 2024" },
];

const stats = [
  { value: "12+", label: "Years of practice" },
  { value: "40+", label: "Products shipped" },
  { value: "8", label: "Industry awards" },
];

export default function Home() {
  return (
    <main>
      {/* ─── Hero — mirrors Metalab's HomepageHero structure ─── */}
      <section id="home-hero" className="hero">
        {/* Dark overlay — matches Metalab's --desktop-overlay-opacity:0.4 */}
        <div className="hero-overlay" style={{ "--overlay-opacity": 0.4 }} />

        {/* Background image placeholder (swap for <video> loop when you have footage) */}
        <div className="hero-bg" aria-hidden="true" />

        {/* Title — split exactly as Metalab does: line 1 + line 2 */}
        <div className="hero-title-container">
          <h1 className="hero-title">
            <span>I design</span>
            <span className="hero-title-line2">interfaces.</span>
          </h1>
        </div>

        {/* Description — bottom-left, separated from title like Metalab */}
        <div className="hero-description-container">
          <p className="hero-description">
            Since 2013, I've helped innovative startups and reputable brands design,
            build, and ship products worth talking about.
          </p>
        </div>
      </section>

      {/* ─── Work grid ─── */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Selected work</h2>
            <Link
              to="/work"
              className="text-sm text-gray-500 hover:text-black transition-colors hidden md:block"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-20">
            {projects.slice(0, 4).map((project, i) => (
              <WorkCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          <div className="mt-12 md:hidden">
            <Link to="/work" className="text-sm text-gray-500 hover:text-black transition-colors">
              View all work →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="bg-gray-50 py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p
                  className="font-medium tracking-tight text-black mb-2"
                  style={{ fontSize: "clamp(48px, 6vw, 80px)", letterSpacing: "-0.03em", lineHeight: 1 }}
                >
                  {value}
                </p>
                <p className="text-gray-500 text-sm uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Press ─── */}
      <section className="bg-white py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-10">Press & Recognition</p>
          <div className="divide-y divide-gray-100">
            {press.map(({ outlet, title, date }) => (
              <div
                key={title}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 py-5 group cursor-default"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xs text-gray-400 uppercase tracking-widest w-24 shrink-0">{outlet}</span>
                  <span className="text-base text-black group-hover:opacity-50 transition-opacity">{title}</span>
                </div>
                <span className="text-sm text-gray-400">{date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About teaser ─── */}
      <section className="bg-black text-white py-20 md:py-32">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-end">
            <div>
              <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">About</p>
              <h2
                className="font-medium tracking-tight leading-tight"
                style={{ fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "-0.02em" }}
              >
                Design is how you make someone feel in control.
              </h2>
            </div>
            <div>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                I'm a UX/UI designer with 12+ years of experience helping startups and established
                companies ship products their users love. I work across the full design process —
                from research and strategy to pixel-perfect UI and design system architecture.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/30 px-6 py-3 hover:border-white transition-colors duration-200"
              >
                More about me →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

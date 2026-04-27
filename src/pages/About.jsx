import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";

const skills = [
  { category: "Design", items: ["UX Research", "Information Architecture", "Interaction Design", "Visual Design", "Prototyping", "Design Systems"] },
  { category: "Product", items: ["Product Strategy", "0→1 Product Design", "Roadmap Facilitation", "User Testing", "Stakeholder Alignment"] },
  { category: "Tools", items: ["Figma", "FigJam", "Framer", "Principle", "Maze", "Notion"] },
];

const values = [
  { title: "Clarity first", body: "Good design removes confusion. I obsess over information hierarchy, language, and the moment a user understands exactly what to do next." },
  { title: "Ship, don't perfect", body: "Great products are built in cycles. I work toward the highest quality possible within real constraints — then improve from there." },
  { title: "Research-led", body: "I don't design from assumptions. Every major decision is grounded in user research, competitive analysis, or validated through testing." },
  { title: "System thinking", body: "I design components, patterns, and principles — not just screens. The goal is a design system that scales beyond the initial project." },
];

export default function About() {
  return (
    <main className="pt-16 md:pt-20">
      {/* Intro */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-6">About</p>
              <h1
                className="font-medium tracking-tight leading-tight mb-8"
                style={{ fontSize: "clamp(36px, 5.5vw, 64px)", letterSpacing: "-0.025em" }}
              >
                Design is how you make people feel in control.
              </h1>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors duration-200"
              >
                Get in touch →
              </Link>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-base text-gray-700 leading-relaxed">
                I'm Tomas Valderrama, a UX/UI designer with 12+ years of experience helping startups and established companies build products their users love and trust.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                I work across the full design process — from early research and strategy through to pixel-perfect UI and design system architecture. My approach is research-led, systems-oriented, and obsessively focused on the user's experience of clarity and control.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                I've designed for healthcare, fintech, B2B SaaS, and consumer mobile. My work has been recognized by Awwwards, Dribbble, and published in UX Collective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-12">How I work</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {values.map(({ title, body }) => (
              <div key={title} className="border-t border-gray-200 pt-6">
                <h3 className="text-base font-medium mb-3">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-12">Skills & Tools</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {skills.map(({ category, items }) => (
              <div key={category}>
                <p className="text-sm font-medium mb-4">{category}</p>
                <ul className="flex flex-col gap-2">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-gray-500">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-10 text-center">
          <h2
            className="font-medium tracking-tight mb-6"
            style={{ fontSize: "clamp(28px, 4.5vw, 56px)", letterSpacing: "-0.025em" }}
          >
            Working on something interesting?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/30 px-8 py-4 hover:border-white transition-colors duration-200"
          >
            Say hello →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

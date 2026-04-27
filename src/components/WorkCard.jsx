import { Link } from "react-router-dom";

export default function WorkCard({ project, index }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group block"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] mb-5">
        <div
          className="w-full h-full transition-transform duration-700 ease-out-expo group-hover:scale-105"
          style={{ background: project.cardGradient }}
        />
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-medium tracking-tight">{project.name}</h3>
          <span className="text-gray-400 text-sm shrink-0 mt-0.5">{project.year}</span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {project.disciplines.map((d) => (
            <span
              key={d}
              className="text-xs text-gray-400 uppercase tracking-widest"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

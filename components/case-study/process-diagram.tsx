import type { ReactNode } from "react";
import { cx } from "./types";

export type ProcessStepKey = "align" | "frame" | "design" | "build" | "launch";

export interface ProcessStep {
  /** What happened at this station, in this case study. One or two lines. */
  body: string;
  /** What AI carried at this station. A fragment, no full stop. */
  ai: string;
}

export interface ProcessDiagramProps {
  steps: Record<ProcessStepKey, ProcessStep>;
  className?: string;
}

const STATIONS: { key: ProcessStepKey; title: ReactNode; icon: ReactNode }[] = [
  {
    key: "align",
    title: "Align",
    icon: (
      <>
        <circle cx="11.8" cy="12.4" r="7.4" />
        <circle cx="20.2" cy="12.4" r="7.4" />
        <circle cx="16" cy="19.6" r="7.4" />
      </>
    ),
  },
  {
    key: "frame",
    title: "Frame",
    icon: (
      <>
        <path d="M3 9V6.4A3.4 3.4 0 0 1 6.4 3H9M23 3h2.6A3.4 3.4 0 0 1 29 6.4V9M29 23v2.6a3.4 3.4 0 0 1-3.4 3.4H23M9 29H6.4A3.4 3.4 0 0 1 3 25.6V23" />
        <rect x="8.5" y="10.5" width="15" height="11" rx="2.2" />
      </>
    ),
  },
  {
    key: "design",
    title: "Design",
    icon: (
      <>
        <path d="M8.3 24.5C16.5 24.5 15.5 7.5 23.7 7.5" />
        <rect x="4.7" y="22.7" width="3.6" height="3.6" rx=".8" />
        <rect x="23.7" y="5.7" width="3.6" height="3.6" rx=".8" />
      </>
    ),
  },
  {
    key: "build",
    title: "Build",
    icon: (
      <>
        <rect x="10.25" y="6.5" width="11.5" height="8.5" rx="2" />
        <rect x="3" y="18" width="11.5" height="8.5" rx="2" />
        <rect x="17.5" y="18" width="11.5" height="8.5" rx="2" />
      </>
    ),
  },
  {
    key: "launch",
    title: (
      <>
        Launch
        <br />+ learn
      </>
    ),
    icon: (
      <>
        <rect x="3" y="5" width="26" height="22" rx="3.6" />
        <path d="M8 21.5 13.2 15.5 17.6 18.6 24 10.5" />
        <path d="M20.6 10.5H24v3.4" />
      </>
    ),
  },
];

const TOOLS: { name: string; role: string }[] = [
  { name: "Figma", role: "the shared source of truth for the experience" },
  {
    name: "Claude + ChatGPT + Gemini",
    role: "synthesis, exploration, prototyping, documentation and QA",
  },
];

/* The diagram escapes the page gutter to sit 50px from each screen edge.
   From lg the five stations share one row, so the icon and title scale with
   the viewport (64px at 1024, 96px from ~1520) to keep the wire visible
   between them; the wire's top run sits on the icon's centre line. */
const FRAME_CLASS =
  "process-diagram relative mb-[6px] ml-[calc(50%-50vw+50px)] w-[calc(100vw-100px)] font-sans [--pd-icon:64px] lg:[--pd-icon:clamp(64px,6.3vw,96px)]";

const WIRE_CLASS =
  "pointer-events-none absolute inset-x-0 top-[calc(var(--pd-icon)/2)] bottom-0 rounded-[24px] border-[1.5px] border-[var(--pd-accent)]";

/* Each station masks the wire with the page background, so the wire reads as
   passing behind the icon and title and continuing to the next station. */
const NODE_CLASS = "-ml-[9px] flex w-max items-center gap-[10px] bg-black pr-[10px]";

/**
 * The working loop behind every case study: five stations on one wire, what
 * each one meant here, and what the tools carried. Static; the copy is the
 * only thing that changes between pages.
 */
export function ProcessDiagram({ steps, className }: ProcessDiagramProps) {
  return (
    <div className={cx(FRAME_CLASS, className)}>
      <div className={WIRE_CLASS} aria-hidden="true" />

      <ol className="relative grid grid-cols-1 gap-x-8 gap-y-12 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-[44px]">
        {STATIONS.map((station) => {
          const step = steps[station.key];
          return (
            <li key={station.key} className="flex flex-col">
              <div className={NODE_CLASS}>
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth=".5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[var(--pd-icon)] w-[var(--pd-icon)] shrink-0 text-[var(--pd-accent)]"
                  aria-hidden="true"
                >
                  {station.icon}
                </svg>
                <h3 className="font-serif text-[24px] font-normal leading-[1.05] tracking-[-0.012em] text-white lg:text-[clamp(22px,1.85vw,28px)]">
                  {station.title}
                </h3>
              </div>
              <p className="mt-4 text-[15px] font-light leading-[1.42] text-white/70 lg:mt-[18px] lg:text-[16px]">
                {step.body}
              </p>
              <p className="mt-3 text-[13px] font-light leading-[1.45] text-white/50 lg:text-[14px]">
                <b className="mr-2 text-[10px] font-normal tracking-[0.02em] opacity-80">AI</b>
                {step.ai}
              </p>
            </li>
          );
        })}
      </ol>

      <ul className="relative mt-14 flex flex-wrap items-baseline px-6 pb-16 lg:mt-[100px] lg:px-[44px] lg:pb-[78px]">
        <li className="pr-[13px] text-[10px] font-normal uppercase tracking-[0.14em] text-white/50">
          Tools
        </li>
        {TOOLS.map((tool, index) => (
          <li
            key={tool.name}
            className={cx(
              "pr-[13px] text-[12.5px] font-light leading-[1.45] text-white/70 lg:text-[13px]",
              index === 0 ? "pl-[11px]" : "border-l border-white/15 pl-[13px]",
            )}
          >
            <b className="mr-[6px] font-normal text-white">{tool.name}</b>
            {tool.role}
          </li>
        ))}
      </ul>

      <p className="absolute bottom-0 left-1/2 max-w-[calc(100%-48px)] -translate-x-1/2 translate-y-1/2 bg-black px-4 text-center text-[11px] font-normal leading-none tracking-[0.04em] text-[var(--pd-accent)]">
        What we learn becomes the next product decision
      </p>
    </div>
  );
}

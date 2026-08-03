"use client";

import PillButton from "@/components/ui/pill-button";
import { HOMEPAGE_EXPERIMENTS, HOMEPAGE_FLAGSHIPS, type Project } from "@/lib/content";

type LeftNavProps = {
  onHover?: (id: string | null) => void;
};

export default function LeftNav({ onHover }: LeftNavProps) {
  const pills = (projects: Project[]) =>
    projects.map(({ id, title, route }) => (
      <PillButton
        key={id}
        label={title}
        href={route}
        onMouseEnter={() => onHover?.(id)}
        onMouseLeave={() => onHover?.(null)}
      />
    ));

  return (
    <nav aria-label="Selected work" className="flex flex-col gap-3 items-start shrink-0">
      {pills(HOMEPAGE_FLAGSHIPS)}
      {HOMEPAGE_EXPERIMENTS.length > 0 && (
        <>
          <p className="mt-[18px] text-white/45 text-[11px] uppercase tracking-[0.18em] font-sans">
            Experiments
          </p>
          {pills(HOMEPAGE_EXPERIMENTS)}
        </>
      )}
    </nav>
  );
}

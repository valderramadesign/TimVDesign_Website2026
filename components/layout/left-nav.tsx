"use client";

import PillButton from "@/components/ui/pill-button";
import { PROJECTS } from "@/lib/content";

type LeftNavProps = {
  onHover?: (id: string | null) => void;
};

export default function LeftNav({ onHover }: LeftNavProps) {
  return (
    <nav aria-label="Selected work" className="flex flex-col gap-3 items-start shrink-0">
      {PROJECTS.map(({ id, navLabel, href }) => (
        <PillButton
          key={id}
          label={navLabel}
          href={href}
          onMouseEnter={() => onHover?.(id)}
          onMouseLeave={() => onHover?.(null)}
        />
      ))}
    </nav>
  );
}

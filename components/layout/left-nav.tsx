"use client";

import PillButton from "@/components/ui/pill-button";

const NAV_ITEMS = [
  { id: "paypal", label: "PayPal", href: "/work/paypal" },
  { id: "meta",   label: "Meta",   href: "/work/meta" },
  { id: "solo",   label: "Solo",   href: "/work/DailyReportingApp" },
];

type LeftNavProps = {
  onHover?: (id: string | null) => void;
};

export default function LeftNav({ onHover }: LeftNavProps) {
  return (
    <nav className="flex flex-col gap-3 items-start shrink-0">
      {NAV_ITEMS.map(({ id, label, href }) => (
        <PillButton
          key={id}
          label={label}
          href={href}
          onMouseEnter={() => onHover?.(id)}
          onMouseLeave={() => onHover?.(null)}
        />
      ))}
    </nav>
  );
}

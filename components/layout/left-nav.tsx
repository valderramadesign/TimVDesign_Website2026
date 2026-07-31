"use client";

import PillButton from "@/components/ui/pill-button";

const NAV_ITEMS = [
  { id: "paypalde", label: "PayPal Credit German Products", href: "/work/paypal-de" },
  { id: "paypal", label: "PayPal Credit Applications Optimization", href: "/work/paypal" },
  { id: "meta",   label: "Meta Monthly Invoicing Onboarding",   href: "/work/meta" },
  { id: "solo",   label: "Ms Sunshine App",   href: "/work/MsSunshineApp" },
  { id: "sutter", label: "Sutter Health Patient Portal",       href: "/work/PatientPortal" },
  { id: "doordash", label: "DoorDash Dashboard", href: "/work/DoorDashDashboard" },
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

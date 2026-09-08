"use client";

import ContactLine from "@/components/ui/contact-line";
import Logo from "@/components/ui/logo";
import ThemeToggle from "@/components/ui/theme-toggle";

interface HeaderProps {
  onResumeToggle?: () => void;
  resumeOpen?: boolean;
}

export default function Header({ onResumeToggle, resumeOpen }: HeaderProps) {
  return (
    <header className="flex items-center justify-between w-full shrink-0">
      {/* Split padding compensates League Spartan's high ascent so the label
          sits on the pill's midline; total height is unchanged. */}
      <div className="flex items-center gap-[24px]">
        <button
          type="button"
          onClick={onResumeToggle}
          aria-expanded={resumeOpen}
          aria-label={resumeOpen ? "Close résumé" : "Open résumé"}
          className="theme-pill bg-[#262626] text-white text-base font-normal font-sans leading-none px-4 pt-[10.28px] pb-[5.72px] rounded-full whitespace-nowrap border border-transparent hover:border-white transition-colors duration-150"
        >
          {resumeOpen ? "Close" : "Résumé"}
        </button>
        <ThemeToggle />
      </div>
      <div className="flex items-center gap-[24px]">
        <Logo />
        {/* Hidden while the résumé is open, since the panel already carries
            the same contact details. */}
        {!resumeOpen && <ContactLine />}
      </div>
    </header>
  );
}

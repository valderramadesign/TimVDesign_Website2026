"use client";

import { Fragment } from "react";
import Logo from "@/components/ui/logo";

interface HeaderProps {
  onResumeToggle?: () => void;
  resumeOpen?: boolean;
}

const EMAIL = "valderramadesign@gmail.com";
const PHONE = "415.685.3878";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "We are interested in next steps",
)}`;

/* Sampled from the dots in the logo mark, and already the accent the résumé
   panel and the German case study use. */
const LOGO_DOT_BLUE = "#00B0D8";

/**
 * Renders a string with its periods in the logo's blue, so the contact line
 * reads as an extension of the mark beside it rather than as loose text. Split
 * on the character rather than styling the whole string, because only the
 * periods carry the accent.
 */
function DottedText({ children }: { children: string }) {
  const parts = children.split(".");
  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {part}
          {index < parts.length - 1 && (
            <span style={{ color: LOGO_DOT_BLUE }}>.</span>
          )}
        </Fragment>
      ))}
    </>
  );
}

export default function Header({ onResumeToggle, resumeOpen }: HeaderProps) {
  return (
    <header className="flex items-center justify-between w-full shrink-0">
      {/* Split padding compensates League Spartan's high ascent so the label
          sits on the pill's midline; total height is unchanged. */}
      <button
        type="button"
        onClick={onResumeToggle}
        aria-expanded={resumeOpen}
        aria-label={resumeOpen ? "Close résumé" : "Open résumé"}
        className="bg-[#262626] text-white text-base font-normal font-sans leading-none px-4 pt-[10.28px] pb-[5.72px] rounded-full whitespace-nowrap border border-transparent hover:border-white transition-colors duration-150"
      >
        {resumeOpen ? "Close" : "Résumé"}
      </button>
      <div className="flex items-center gap-[24px]">
        <Logo />
        {/* Matches the pills above: 16px League Spartan, no leading. This header
            only ever renders in the desktop tree, so the line has room to sit
            on one row. */}
        <p className="text-base font-normal font-sans leading-none text-white whitespace-nowrap">
          <a
            href={MAILTO}
            className="rounded-sm transition-opacity duration-150 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70"
          >
            <DottedText>{EMAIL}</DottedText>
          </a>
          <span className="px-[10px]">|</span>
          <DottedText>{PHONE}</DottedText>
        </p>
      </div>
    </header>
  );
}

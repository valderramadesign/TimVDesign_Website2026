import { Fragment } from "react";
import { SITE } from "@/lib/content";

/* Sampled from the dots in the logo mark, and already the accent the résumé
   panel and the German case study use. */
const LOGO_DOT_BLUE = "#00B0D8";

const MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  "We are interested in next steps",
)}`;

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

/**
 * Email and phone as they sit beside the logo in the page chrome. Shared by the
 * homepage header and the case-study top bar so the two can never drift. The
 * line needs a full row of its own, which only the desktop chrome has, so
 * callers hide it below `lg` and the narrow layouts carry the details in their
 * footer instead.
 */
export default function ContactLine({ className }: { className?: string }) {
  return (
    <p
      className={`text-base font-normal font-sans leading-none text-white whitespace-nowrap${
        className ? ` ${className}` : ""
      }`}
    >
      <a
        href={MAILTO}
        className="rounded-sm transition-opacity duration-150 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70"
      >
        <DottedText>{SITE.email}</DottedText>
      </a>
      <span className="px-[10px]">|</span>
      <DottedText>{SITE.phone}</DottedText>
    </p>
  );
}

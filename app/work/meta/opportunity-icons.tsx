import type { SVGProps } from "react";

/* ── The Opportunity icons ───────────────────────────────────────────────

   Six line drawings, set at the size the panel rows actually render them:
   one idea each, no detail that survives only at full size. Everything is
   stroked in currentColor on a 32-unit grid with round caps and joins, so
   the weight reads the same across the set and the corners stay soft.

   The line is a hairline and stays one: a 32-unit drawing painted at 44 or
   52px would carry its stroke up with it, so the shapes opt out of the
   scaling and are stroked a literal pixel wide instead. vector-effect does
   not inherit, which is why the rule reaches the shapes as a descendant
   selector rather than sitting on the svg for them to pick up.

   The two columns rhyme deliberately. The buried envelope on the left is
   the same envelope carried across the top of the page on the right; the
   nine tiles that collect become the three that confirm. */

const GRID = 32;
const STROKE = 1;
const HAIRLINE = "[&_*]:[vector-effect:non-scaling-stroke]";

type IconProps = Omit<SVGProps<SVGSVGElement>, "viewBox" | "fill">;

function Icon({ children, className, ...props }: IconProps) {
  return (
    <svg
      viewBox={`0 0 ${GRID} ${GRID}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ? `${HAIRLINE} ${className}` : HAIRLINE}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/** A page with the invitation tucked into a corner of it. */
export function IconBuriedOffer(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="26" height="22" rx="3.6" />
      <path d="M3 11h26" />
      <rect x="17.5" y="16" width="8.5" height="6.6" rx="1.6" />
      <path d="M18.1 16.9 21.75 19.6l3.65-2.7" />
    </Icon>
  );
}

/** Nine tiles: the application that asked nine times. */
export function IconNineScreens(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="12.5" y="3" width="7" height="7" rx="2" />
      <rect x="22" y="3" width="7" height="7" rx="2" />
      <rect x="3" y="12.5" width="7" height="7" rx="2" />
      <rect x="12.5" y="12.5" width="7" height="7" rx="2" />
      <rect x="22" y="12.5" width="7" height="7" rx="2" />
      <rect x="3" y="22" width="7" height="7" rx="2" />
      <rect x="12.5" y="22" width="7" height="7" rx="2" />
      <rect x="22" y="22" width="7" height="7" rx="2" />
    </Icon>
  );
}

/** A card, paused. */
export function IconCardPaused(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="7" width="26" height="18" rx="3.6" />
      <path d="M3 12.8h26" />
      <path d="M19 17.6v4.6M23.2 17.6v4.6" />
    </Icon>
  );
}

/** The same envelope, carried across the top of the page instead. */
export function IconOfferUpstream(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="26" height="22" rx="3.6" />
      <rect x="6.6" y="8.6" width="18.8" height="9.4" rx="2.2" />
      <path d="M6.6 10.6 16 15.4l9.4-4.8" />
      <path d="M7 22.4h9.6" />
    </Icon>
  );
}

/** Verified already: a shield that has been checked. */
export function IconAlreadyVerified(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M16 3.2 27 7.1v8.6c0 6.4-4.5 10.7-11 13.1-6.5-2.4-11-6.7-11-13.1V7.1z" />
      <path d="M11.2 15.6 14.8 19.2 21.2 12.6" />
    </Icon>
  );
}

/** Three pages, the last one confirmed. */
export function IconThreePages(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2.6" y="7.5" width="8" height="17" rx="2.2" />
      <rect x="12" y="7.5" width="8" height="17" rx="2.2" />
      <rect x="21.4" y="7.5" width="8" height="17" rx="2.2" />
      <path d="M23.3 16.3 24.9 17.9 27.6 14.6" />
    </Icon>
  );
}

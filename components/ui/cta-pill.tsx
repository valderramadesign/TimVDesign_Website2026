/**
 * Type size and vertical padding for the paired CTA pills that close each case
 * study ("Back to Homepage" plus its prototype link).
 *
 * League Spartan's ascent overshoots its cap height, so a `leading-none` label
 * renders above the pill's optical centre. The padding below is split to
 * re-centre it, and each pair sums to the original symmetric padding (24px
 * under lg, 32px at lg) so no button changes height.
 *
 * The correction has to be stated per type size rather than in `em`: the
 * browser rounds the font's ascent to whole pixels, which makes the offset
 * non-proportional (1.94px at 18px, 1.60px at 20px, 3.56px at 32px).
 */
export const CTA_PILL_SIZE = {
  lg: "text-lg pt-[13.94px] pb-[10.06px] lg:text-[32px] lg:pt-[19.56px] lg:pb-[12.44px]",
  xl: "text-xl pt-[13.6px] pb-[10.4px] lg:text-[32px] lg:pt-[19.56px] lg:pb-[12.44px]",
} as const;

export type CtaPillSize = keyof typeof CTA_PILL_SIZE;

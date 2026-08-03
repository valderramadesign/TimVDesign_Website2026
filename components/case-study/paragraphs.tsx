import type { ReactNode } from "react";
import { cx } from "./types";

/**
 * Renders one or more paragraphs at a shared type scale. A single paragraph is
 * a bare `<p>`; several are separated by a gap sized to one blank line at that
 * scale, so a paragraph break lands exactly where it did as markup.
 *
 * Internal to the case study blocks — pages compose the blocks, not this.
 */
export function CaseStudyParagraphs({
  items,
  className,
  gapClassName,
}: {
  items: readonly ReactNode[];
  /** Type scale for the group. Applied to the wrapper so `em` gaps track it. */
  className?: string;
  /** Gap between paragraphs, sized to one blank line at `className`'s scale. */
  gapClassName?: string;
}) {
  if (items.length === 0) return null;
  if (items.length === 1) return <p className={className}>{items[0]}</p>;

  return (
    <div className={cx("flex flex-col", gapClassName, className)}>
      {items.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

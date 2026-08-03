import type { ReactNode } from "react";
import { CaseStudySection } from "./case-study-section";
import { CaseStudyParagraphs } from "./paragraphs";
import {
  CASE_STUDY_BODY_CLASS,
  CASE_STUDY_BODY_GAP_CLASS,
  CASE_STUDY_CAPTION_CLASS,
  CASE_STUDY_LABEL_CLASS,
  CASE_STUDY_LABEL_TIGHT_CLASS,
  cx,
  type CaseStudySectionLayout,
} from "./types";

export interface SystemFrameworkPrinciple {
  /** Stable key. */
  id: string;
  /** The rule, stated as a rule. */
  title: ReactNode;
  /** What the rule means in practice. */
  detail?: ReactNode;
}

interface SystemFrameworkBase extends CaseStudySectionLayout {
  /** Section label, e.g. "The system". */
  title?: ReactNode;
  /** What the system is, one entry per rendered paragraph. */
  summary?: readonly ReactNode[];
  /** The rules the system holds to. */
  principles?: readonly SystemFrameworkPrinciple[];
  principleTitleAs?: "h3" | "h4" | "h5";
  /** Extra classes on the figure wrapping the visual. */
  visualClassName?: string;
  captionClassName?: string;
}

/**
 * A visual can only be shown with a caption. A diagram that has to be decoded
 * from the picture alone is unreadable to anyone using a screen reader and
 * ambiguous to everyone else, so the type makes the caption non-optional the
 * moment a visual is passed.
 */
export type SystemFrameworkProps = SystemFrameworkBase &
  (
    | { visual: ReactNode; caption: ReactNode }
    | { visual?: undefined; caption?: ReactNode }
  );

const PRINCIPLES_CLASS = "flex flex-col gap-6 lg:gap-8";
const PRINCIPLE_CLASS = "flex flex-col gap-[6px]";
const FIGURE_CLASS = "mt-6 lg:mt-8 flex flex-col gap-3 lg:gap-4";

/**
 * The framework behind the work: the model the design followed and the rules it
 * held to, rather than a tour of the screens it produced.
 *
 * Every part is optional except the caption rule above — a page can show only
 * principles, only a captioned visual, or both.
 */
export function SystemFramework({
  title,
  summary,
  principles,
  principleTitleAs: PrincipleHeading = "h3",
  visual,
  caption,
  visualClassName,
  captionClassName,
  titleClassName = CASE_STUDY_LABEL_CLASS,
  ...layout
}: SystemFrameworkProps) {
  const hasPrinciples = Boolean(principles && principles.length > 0);
  const hasSummary = Boolean(summary && summary.length > 0);
  if (!hasSummary && !hasPrinciples && !visual) return null;

  return (
    <CaseStudySection {...layout} title={title} titleClassName={titleClassName}>
      {hasSummary && (
        <CaseStudyParagraphs
          items={summary ?? []}
          className={CASE_STUDY_BODY_CLASS}
          gapClassName={CASE_STUDY_BODY_GAP_CLASS}
        />
      )}
      {hasPrinciples && (
        <div className={PRINCIPLES_CLASS}>
          {(principles ?? []).map((principle) => (
            <div key={principle.id} className={PRINCIPLE_CLASS}>
              <PrincipleHeading className={CASE_STUDY_LABEL_TIGHT_CLASS}>
                {principle.title}
              </PrincipleHeading>
              {principle.detail != null && (
                <p className={CASE_STUDY_BODY_CLASS}>{principle.detail}</p>
              )}
            </div>
          ))}
        </div>
      )}
      {visual && (
        <figure className={cx(FIGURE_CLASS, visualClassName)}>
          {visual}
          <figcaption className={cx(CASE_STUDY_CAPTION_CLASS, captionClassName)}>
            {caption}
          </figcaption>
        </figure>
      )}
    </CaseStudySection>
  );
}

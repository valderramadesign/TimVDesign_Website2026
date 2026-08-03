import type { ReactNode } from "react";
import { CaseStudySection } from "./case-study-section";
import { CaseStudyParagraphs } from "./paragraphs";
import {
  CASE_STUDY_BODY_CLASS,
  CASE_STUDY_BODY_GAP_CLASS,
  CASE_STUDY_LABEL_CLASS,
  type CaseStudySectionLayout,
  type OneOrTwo,
} from "./types";

export interface ReflectionProps extends CaseStudySectionLayout {
  /** Section label, e.g. "What I'd do differently". */
  title?: ReactNode;
  /** One or two short paragraphs. */
  paragraphs: OneOrTwo<ReactNode>;
  paragraphClassName?: string;
  paragraphGapClassName?: string;
}

/**
 * What the work taught, in one or two paragraphs at the end of a case study.
 *
 * The two-paragraph cap is the whole point of the block. A reflection that runs
 * longer stops being a judgement and starts being a second case study, and the
 * type refuses the third paragraph rather than relying on restraint.
 */
export function Reflection({
  title,
  paragraphs,
  paragraphClassName = CASE_STUDY_BODY_CLASS,
  paragraphGapClassName = CASE_STUDY_BODY_GAP_CLASS,
  titleClassName = CASE_STUDY_LABEL_CLASS,
  ...layout
}: ReflectionProps) {
  return (
    <CaseStudySection {...layout} title={title} titleClassName={titleClassName}>
      <CaseStudyParagraphs
        items={paragraphs}
        className={paragraphClassName}
        gapClassName={paragraphGapClassName}
      />
    </CaseStudySection>
  );
}

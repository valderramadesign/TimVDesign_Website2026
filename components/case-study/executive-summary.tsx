import type { ReactNode } from "react";
import { CaseStudySection } from "./case-study-section";
import { CaseStudyParagraphs } from "./paragraphs";
import {
  CASE_STUDY_BODY_CLASS,
  CASE_STUDY_LABEL_CLASS,
  CASE_STUDY_LEAD_CLASS,
  CASE_STUDY_LEAD_GAP_CLASS,
  cx,
  type CaseStudySectionLayout,
  type OneOrTwo,
} from "./types";

export interface ExecutiveSummaryProps extends CaseStudySectionLayout {
  /** Section label, e.g. "Summary". */
  title?: ReactNode;
  /**
   * The summary itself: one paragraph, or two when the work has two halves.
   * Written to land around 60–90 words — the block renders exactly what it is
   * given and never trims, counts, or rewrites it.
   */
  summary: OneOrTwo<ReactNode>;
  /**
   * The single most important verified result, stated as it is stated
   * elsewhere. Omit it entirely when the work has no verified result; the block
   * never asks for one and never implies a missing one.
   */
  result?: ReactNode;
  /** The few things a reader should leave with if they read nothing else. */
  highlights?: readonly ReactNode[];
  summaryClassName?: string;
  resultClassName?: string;
  highlightsClassName?: string;
}

const HIGHLIGHTS_CLASS =
  "ml-[24px] mt-6 lg:mt-8 flex list-disc flex-col gap-3 lg:gap-[18px]";
const RESULT_CLASS = "mt-4 lg:mt-6";

/**
 * The whole case study in the space above the fold: what the work was and what
 * it changed, for a reader who will not scroll.
 *
 * Capped at two paragraphs on purpose — a summary that needs a third is the
 * case study, not a summary. The result and highlights are optional and stay
 * short.
 */
export function ExecutiveSummary({
  title,
  summary,
  result,
  highlights,
  summaryClassName = CASE_STUDY_LEAD_CLASS,
  resultClassName,
  highlightsClassName,
  titleClassName = CASE_STUDY_LABEL_CLASS,
  ...layout
}: ExecutiveSummaryProps) {
  return (
    <CaseStudySection {...layout} title={title} titleClassName={titleClassName}>
      <CaseStudyParagraphs
        items={summary}
        className={summaryClassName}
        gapClassName={CASE_STUDY_LEAD_GAP_CLASS}
      />
      {result != null && (
        <p className={cx(RESULT_CLASS, CASE_STUDY_BODY_CLASS, resultClassName)}>
          {result}
        </p>
      )}
      {highlights && highlights.length > 0 && (
        <ul className={cx(HIGHLIGHTS_CLASS, CASE_STUDY_BODY_CLASS, highlightsClassName)}>
          {highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      )}
    </CaseStudySection>
  );
}

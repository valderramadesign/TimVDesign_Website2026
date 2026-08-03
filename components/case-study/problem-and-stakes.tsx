import type { ReactNode } from "react";
import { CaseStudySection } from "./case-study-section";
import { CaseStudyParagraphs } from "./paragraphs";
import {
  CASE_STUDY_BODY_CLASS,
  CASE_STUDY_BODY_GAP_CLASS,
  CASE_STUDY_LABEL_CLASS,
  CASE_STUDY_LEAD_CLASS,
  CASE_STUDY_LEAD_GAP_CLASS,
  cx,
  type CaseStudySectionLayout,
} from "./types";

export interface ProblemAndStakesProps extends CaseStudySectionLayout {
  /** Section label, e.g. "Problem". */
  title?: ReactNode;
  /** The problem, one entry per rendered paragraph. */
  problem: readonly ReactNode[];
  /** What the problem costs if it goes unsolved, one entry per paragraph. */
  stakes?: readonly ReactNode[];
  /** Heading above the stakes. Required for stakes to be labelled. */
  stakesTitle?: ReactNode;
  stakesTitleAs?: "h3" | "h4" | "h5";
  /** Type scale for the problem paragraphs. Replaces the default. */
  paragraphClassName?: string;
  /** Gap between problem paragraphs, matched to `paragraphClassName`. */
  paragraphGapClassName?: string;
  /** Type scale for the stakes paragraphs. Replaces the default. */
  stakesClassName?: string;
  stakesGapClassName?: string;
}

/**
 * States the problem a case study set out to solve, and optionally what was at
 * stake in leaving it unsolved. Both take copy already approved for the page;
 * the block supplies structure and type scale, never wording.
 *
 * The stakes render one step down the scale from the problem so the opening
 * statement stays the loudest thing in the section.
 */
export function ProblemAndStakes({
  title,
  problem,
  stakes,
  stakesTitle,
  stakesTitleAs: StakesHeading = "h3",
  paragraphClassName = CASE_STUDY_LEAD_CLASS,
  paragraphGapClassName = CASE_STUDY_LEAD_GAP_CLASS,
  stakesClassName = CASE_STUDY_BODY_CLASS,
  stakesGapClassName = CASE_STUDY_BODY_GAP_CLASS,
  titleClassName = CASE_STUDY_LABEL_CLASS,
  ...layout
}: ProblemAndStakesProps) {
  const hasStakes = Boolean(stakes && stakes.length > 0);
  if (problem.length === 0 && !hasStakes) return null;

  return (
    <CaseStudySection {...layout} title={title} titleClassName={titleClassName}>
      <CaseStudyParagraphs
        items={problem}
        className={paragraphClassName}
        gapClassName={paragraphGapClassName}
      />
      {hasStakes && (
        <>
          {stakesTitle != null && (
            <StakesHeading className={cx(CASE_STUDY_LABEL_CLASS, "mt-6 lg:mt-8")}>
              {stakesTitle}
            </StakesHeading>
          )}
          <CaseStudyParagraphs
            items={stakes ?? []}
            className={stakesClassName}
            gapClassName={stakesGapClassName}
          />
        </>
      )}
    </CaseStudySection>
  );
}

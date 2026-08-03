import type { ReactNode } from "react";
import { CaseStudySection } from "./case-study-section";
import {
  CASE_STUDY_BODY_CLASS,
  CASE_STUDY_LABEL_CLASS,
  CASE_STUDY_LABEL_TIGHT_CLASS,
  CASE_STUDY_SUPPORTING_CLASS,
  type CaseStudySectionLayout,
  type TwoToFive,
} from "./types";

export interface RolloutStage {
  /** Stable key. */
  id: string;
  /** What the stage was. */
  title: ReactNode;
  /** What shipped in it. */
  detail?: ReactNode;
  /** When it ran, or what it was gated on. */
  timing?: ReactNode;
}

export interface ImplementationRolloutProps extends CaseStudySectionLayout {
  /** Section label, e.g. "Rollout". */
  title?: ReactNode;
  /**
   * Two to five stages. One stage is not a rollout, and six is a project plan
   * nobody reads on a case study.
   */
  stages: TwoToFive<RolloutStage>;
  stageTitleAs?: "h3" | "h4" | "h5";
}

const LIST_CLASS =
  "flex flex-col gap-8 lg:flex-row lg:gap-[48px] lg:[&>li]:flex-1";
const STAGE_CLASS = "flex flex-col gap-[6px]";
const STEP_NUMBER_CLASS =
  "font-serif text-[clamp(28px,6vw,48px)] lg:text-[48px] font-normal leading-none";

/**
 * How the work actually reached people: the stages it shipped in, in order.
 *
 * An ordered list, so the sequence survives being read aloud or with styles
 * off. The stage number is rendered as text rather than as a list marker, which
 * keeps it visible at the display size the rest of the page uses.
 */
export function ImplementationRollout({
  title,
  stages,
  stageTitleAs: StageHeading = "h3",
  titleClassName = CASE_STUDY_LABEL_CLASS,
  ...layout
}: ImplementationRolloutProps) {
  return (
    <CaseStudySection {...layout} title={title} titleClassName={titleClassName}>
      <ol className={LIST_CLASS}>
        {stages.map((stage, index) => (
          <li key={stage.id} className={STAGE_CLASS}>
            <p className={STEP_NUMBER_CLASS} aria-hidden="true">
              {index + 1}
            </p>
            <StageHeading className={CASE_STUDY_LABEL_TIGHT_CLASS}>
              {stage.title}
            </StageHeading>
            {stage.detail != null && (
              <p className={CASE_STUDY_BODY_CLASS}>{stage.detail}</p>
            )}
            {stage.timing != null && (
              <p className={CASE_STUDY_SUPPORTING_CLASS}>{stage.timing}</p>
            )}
          </li>
        ))}
      </ol>
    </CaseStudySection>
  );
}

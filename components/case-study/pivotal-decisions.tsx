import type { ReactNode } from "react";
import { CaseStudySection } from "./case-study-section";
import {
  CASE_STUDY_BODY_CLASS,
  CASE_STUDY_LABEL_CLASS,
  CASE_STUDY_LABEL_TIGHT_CLASS,
  type CaseStudySectionLayout,
  type OneToThree,
} from "./types";

export interface PivotalDecision {
  /** Stable key. */
  id: string;
  /** What the decision was about. */
  title: string;
  /** What was observed that forced the decision. */
  evidence: ReactNode;
  /** What could not be changed while making it. */
  constraints: ReactNode;
  /** What was decided. */
  decision: ReactNode;
  /** What the decision cost. */
  tradeoff: ReactNode;
  /** What happened afterwards. */
  result: ReactNode;
}

/** The field of a decision a step renders. */
type PivotalDecisionField = Exclude<keyof PivotalDecision, "id" | "title">;

/**
 * Fixed reading order. Evidence before decision so the reasoning is legible
 * rather than retrofitted, and tradeoff before result so the cost is stated
 * before the payoff.
 */
const DECISION_STEPS: readonly { field: PivotalDecisionField; label: string }[] = [
  { field: "evidence", label: "Evidence" },
  { field: "constraints", label: "Constraints" },
  { field: "decision", label: "Decision" },
  { field: "tradeoff", label: "Tradeoff" },
  { field: "result", label: "Result" },
];

export interface PivotalDecisionsProps extends CaseStudySectionLayout {
  /** Section label, e.g. "Decisions". */
  title?: ReactNode;
  /** One to three decisions. A fourth is a process log, not a pivotal decision. */
  decisions: OneToThree<PivotalDecision>;
  /** Overrides a step's label. */
  stepLabels?: Partial<Record<PivotalDecisionField, string>>;
  decisionTitleAs?: "h3" | "h4" | "h5";
}

const DECISION_LIST_CLASS = "flex flex-col gap-10 lg:gap-[56px]";
const DECISION_CLASS = "flex flex-col gap-[14px]";
const DECISION_TITLE_CLASS =
  "text-xl lg:text-[32px] font-light leading-snug lg:leading-[42px]";
const STEPS_CLASS = "flex flex-col gap-4 lg:gap-6";
const STEP_CLASS = "flex flex-col gap-[6px]";

/**
 * The handful of decisions that changed where the work ended up.
 *
 * Every decision reads in the same order — evidence, constraints, decision,
 * tradeoff, result — because a decision read in that order can be judged, and
 * one read in any other order can only be admired. The order is fixed in the
 * component, not left to the caller.
 *
 * There is deliberately no field for alternatives considered. A rejected option
 * is only worth the space when it is real, and a required field invites
 * inventing one.
 */
export function PivotalDecisions({
  title,
  decisions,
  stepLabels,
  decisionTitleAs: DecisionHeading = "h3",
  titleClassName = CASE_STUDY_LABEL_CLASS,
  ...layout
}: PivotalDecisionsProps) {
  return (
    <CaseStudySection {...layout} title={title} titleClassName={titleClassName}>
      <div className={DECISION_LIST_CLASS}>
        {decisions.map((decision) => (
          <article key={decision.id} className={DECISION_CLASS}>
            <DecisionHeading className={DECISION_TITLE_CLASS}>
              {decision.title}
            </DecisionHeading>
            <dl className={STEPS_CLASS}>
              {DECISION_STEPS.map((step) => (
                <div key={step.field} className={STEP_CLASS}>
                  <dt className={CASE_STUDY_LABEL_TIGHT_CLASS}>
                    {stepLabels?.[step.field] ?? step.label}
                  </dt>
                  <dd className={CASE_STUDY_BODY_CLASS}>{decision[step.field]}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </CaseStudySection>
  );
}

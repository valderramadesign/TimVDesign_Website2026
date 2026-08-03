/**
 * Reusable case study building blocks.
 *
 * Every block is optional and independently composable: a page imports the two
 * or three it needs and composes them in whatever order its story requires.
 * There is deliberately no component that renders a whole case study, and no
 * fixed section sequence anywhere in this folder — the outline lives on the
 * page, not in the system.
 *
 * Shared wrapper behaviour (element, spacing, scroll reveal, heading level,
 * heading styling, accessible name) lives once in `CaseStudySection`; the other
 * blocks compose it rather than repeating it.
 *
 * Project facts come from `lib/content.ts`. Narrative content is passed in by
 * the page. Neither is stored here.
 */

export { CaseStudySection } from "./case-study-section";
export type { CaseStudySectionProps } from "./case-study-section";

export { CaseStudyHeader } from "./case-study-header";
export type { CaseStudyHeaderProps } from "./case-study-header";

export { ExecutiveSummary } from "./executive-summary";
export type { ExecutiveSummaryProps } from "./executive-summary";

export { ProjectFacts } from "./project-facts";
export type { ProjectFactKey, ProjectFactsProps } from "./project-facts";

export { ProblemAndStakes } from "./problem-and-stakes";
export type { ProblemAndStakesProps } from "./problem-and-stakes";

export { Ownership } from "./ownership";
export type { OwnershipPartner, OwnershipProps } from "./ownership";

export { PivotalDecisions } from "./pivotal-decisions";
export type { PivotalDecision, PivotalDecisionsProps } from "./pivotal-decisions";

export { SystemFramework } from "./system-framework";
export type {
  SystemFrameworkPrinciple,
  SystemFrameworkProps,
} from "./system-framework";

export { LeadershipContribution } from "./leadership-contribution";
export type {
  LeadershipContributionField,
  LeadershipContributionProps,
} from "./leadership-contribution";

export { ImplementationRollout } from "./implementation-rollout";
export type {
  ImplementationRolloutProps,
  RolloutStage,
} from "./implementation-rollout";

export { OutcomeMetrics, outcomeMetricsFromResults } from "./outcome-metrics";
export type {
  OutcomeMetric,
  OutcomeMetricStatus,
  OutcomeMetricsProps,
} from "./outcome-metrics";

export { JourneyComparison } from "./journey-comparison";
export type {
  JourneyComparisonProps,
  JourneyStep,
  JourneyTrack,
} from "./journey-comparison";

export { ResultsVisualization } from "./results-visualization";
export type { ResultsVisualizationProps } from "./results-visualization";

export { Reflection } from "./reflection";
export type { ReflectionProps } from "./reflection";

export { SupportingAppendix } from "./supporting-appendix";
export type { SupportingAppendixProps } from "./supporting-appendix";

export { cx } from "./types";
export type {
  CaseStudyCopy,
  CaseStudyElement,
  CaseStudyHeadingLevel,
  CaseStudyReveal,
  CaseStudySectionLayout,
  OneOrTwo,
  OneToThree,
  TwoToFive,
} from "./types";
export {
  CASE_STUDY_BODY_CLASS,
  CASE_STUDY_BODY_GAP_CLASS,
  CASE_STUDY_CAPTION_CLASS,
  CASE_STUDY_FACT_VALUE_CLASS,
  CASE_STUDY_FOCUS_CLASS,
  CASE_STUDY_HEADLINE_CLASS,
  CASE_STUDY_LABEL_CLASS,
  CASE_STUDY_LABEL_TIGHT_CLASS,
  CASE_STUDY_LEAD_CLASS,
  CASE_STUDY_LEAD_GAP_CLASS,
  CASE_STUDY_METRIC_LABEL_CLASS,
  CASE_STUDY_METRIC_VALUE_CLASS,
  CASE_STUDY_STACK_CLASS,
  CASE_STUDY_SUPPORTING_CLASS,
} from "./types";

import type { ReactNode } from "react";
import { CaseStudySection } from "./case-study-section";
import {
  CASE_STUDY_BODY_CLASS,
  CASE_STUDY_LABEL_CLASS,
  CASE_STUDY_LABEL_TIGHT_CLASS,
  type CaseStudySectionLayout,
} from "./types";

/** The kinds of leadership evidence this block can state. */
export type LeadershipContributionField =
  | "directionShaped"
  | "systemCreated"
  | "teamsAligned"
  | "tradeoffResolved"
  | "qualityBarRaised"
  | "resultAchieved";

/** Fixed reading order: what was set, what was built, then what it produced. */
const LEADERSHIP_FIELDS: readonly {
  field: LeadershipContributionField;
  label: string;
}[] = [
  { field: "directionShaped", label: "Direction shaped" },
  { field: "systemCreated", label: "System created" },
  { field: "teamsAligned", label: "Teams aligned" },
  { field: "tradeoffResolved", label: "Tradeoff resolved" },
  { field: "qualityBarRaised", label: "Quality bar raised" },
  { field: "resultAchieved", label: "Result achieved" },
];

export interface LeadershipContributionProps extends CaseStudySectionLayout {
  /** Section label, e.g. "Leadership". */
  title?: ReactNode;
  /** The call that changed where the work was heading. */
  directionShaped?: ReactNode;
  /** What was built that outlasted the project. */
  systemCreated?: ReactNode;
  /** Who was brought to the same decision, and on what. */
  teamsAligned?: ReactNode;
  /** The disagreement or constraint that was settled, and how. */
  tradeoffResolved?: ReactNode;
  /** The standard that was held, and what it cost to hold it. */
  qualityBarRaised?: ReactNode;
  /** The verified outcome of leading, not of the project as a whole. */
  resultAchieved?: ReactNode;
  /** Overrides a statement's label. */
  labels?: Partial<Record<LeadershipContributionField, string>>;
  labelClassName?: string;
  valueClassName?: string;
}

const LIST_CLASS = "flex flex-col gap-6 lg:gap-8";
const ITEM_CLASS = "flex flex-col gap-[6px]";

/**
 * Leadership stated as specific things that were led, each under the kind of
 * evidence it is, rather than as adjectives about the person leading.
 *
 * Every field is optional and an absent one renders nothing — no label, no
 * empty row, no "n/a". A page shows the two or three kinds of evidence it can
 * actually support, which keeps the block from becoming a form to be filled in.
 */
export function LeadershipContribution({
  title,
  labels,
  labelClassName = CASE_STUDY_LABEL_TIGHT_CLASS,
  valueClassName = CASE_STUDY_BODY_CLASS,
  titleClassName = CASE_STUDY_LABEL_CLASS,
  ...props
}: LeadershipContributionProps) {
  const stated = LEADERSHIP_FIELDS.filter(({ field }) => props[field] != null);
  if (stated.length === 0) return null;

  const {
    directionShaped,
    systemCreated,
    teamsAligned,
    tradeoffResolved,
    qualityBarRaised,
    resultAchieved,
    ...layout
  } = props;
  const values: Record<LeadershipContributionField, ReactNode> = {
    directionShaped,
    systemCreated,
    teamsAligned,
    tradeoffResolved,
    qualityBarRaised,
    resultAchieved,
  };

  return (
    <CaseStudySection {...layout} title={title} titleClassName={titleClassName}>
      <dl className={LIST_CLASS}>
        {stated.map(({ field, label }) => (
          <div key={field} className={ITEM_CLASS}>
            <dt className={labelClassName}>{labels?.[field] ?? label}</dt>
            <dd className={valueClassName}>{values[field]}</dd>
          </div>
        ))}
      </dl>
    </CaseStudySection>
  );
}

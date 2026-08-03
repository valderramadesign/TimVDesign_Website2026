import type { ReactNode } from "react";
import { CaseStudySection } from "./case-study-section";
import {
  CASE_STUDY_BODY_CLASS,
  CASE_STUDY_LABEL_CLASS,
  CASE_STUDY_LABEL_TIGHT_CLASS,
  cx,
  type CaseStudySectionLayout,
} from "./types";

export interface OwnershipPartner {
  /** Stable key. */
  id: string;
  /** Who the work was shared with, e.g. a discipline or a named team. */
  partner: ReactNode;
  /** The part of the work that was shared, and who did what. */
  contribution: ReactNode;
}

export interface OwnershipProps extends CaseStudySectionLayout {
  /** Section label, e.g. "Ownership". */
  title?: ReactNode;
  /** Work carried end to end, with no shared credit. */
  owned?: readonly ReactNode[];
  /** Calls that were the designer's to make, not to influence. */
  decisions?: readonly ReactNode[];
  /** Work carried with someone else, each naming who. */
  partners?: readonly OwnershipPartner[];
  ownedTitle?: ReactNode;
  decisionsTitle?: ReactNode;
  partnersTitle?: ReactNode;
  groupTitleAs?: "h3" | "h4" | "h5";
}

const COLUMNS_CLASS = "flex flex-col gap-8 lg:flex-row lg:gap-[64px]";
const COLUMN_CLASS = "flex w-full flex-col gap-[14px] lg:flex-1";
const LIST_CLASS = "ml-[24px] flex list-disc flex-col gap-3 lg:gap-[18px]";
const PARTNER_LIST_CLASS = "flex flex-col gap-3 lg:gap-[18px]";

function Column({
  heading,
  Heading,
  children,
}: {
  heading: ReactNode;
  Heading: "h3" | "h4" | "h5";
  children: ReactNode;
}) {
  return (
    <div className={COLUMN_CLASS}>
      <Heading className={CASE_STUDY_LABEL_TIGHT_CLASS}>{heading}</Heading>
      {children}
    </div>
  );
}

/**
 * What the designer owned outright, what they decided, and what they shared —
 * kept in separate groups so the three cannot be read as one.
 *
 * A reader skimming a single list reads every item as owned, which is how
 * portfolios overclaim without saying anything untrue. Splitting the groups and
 * naming the partner on everything shared makes the boundary explicit. Nothing
 * is claimed by omission: a group with no entries renders nothing at all.
 */
export function Ownership({
  title,
  owned,
  decisions,
  partners,
  ownedTitle = "Work owned",
  decisionsTitle = "Decisions made",
  partnersTitle = "Partners involved",
  groupTitleAs: GroupHeading = "h3",
  titleClassName = CASE_STUDY_LABEL_CLASS,
  ...layout
}: OwnershipProps) {
  const hasOwned = Boolean(owned && owned.length > 0);
  const hasDecisions = Boolean(decisions && decisions.length > 0);
  const hasPartners = Boolean(partners && partners.length > 0);
  if (!hasOwned && !hasDecisions && !hasPartners) return null;

  return (
    <CaseStudySection {...layout} title={title} titleClassName={titleClassName}>
      <div className={COLUMNS_CLASS}>
        {hasOwned && (
          <Column heading={ownedTitle} Heading={GroupHeading}>
            <ul className={cx(LIST_CLASS, CASE_STUDY_BODY_CLASS)}>
              {(owned ?? []).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Column>
        )}
        {hasDecisions && (
          <Column heading={decisionsTitle} Heading={GroupHeading}>
            <ul className={cx(LIST_CLASS, CASE_STUDY_BODY_CLASS)}>
              {(decisions ?? []).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Column>
        )}
        {hasPartners && (
          <Column heading={partnersTitle} Heading={GroupHeading}>
            <dl className={cx(PARTNER_LIST_CLASS, CASE_STUDY_BODY_CLASS)}>
              {(partners ?? []).map((entry) => (
                <div key={entry.id} className="flex flex-col gap-1">
                  <dt className={CASE_STUDY_LABEL_TIGHT_CLASS}>{entry.partner}</dt>
                  <dd>{entry.contribution}</dd>
                </div>
              ))}
            </dl>
          </Column>
        )}
      </div>
    </CaseStudySection>
  );
}

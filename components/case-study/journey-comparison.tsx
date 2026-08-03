import type { ReactNode } from "react";
import { CaseStudySection } from "./case-study-section";
import {
  CASE_STUDY_BODY_CLASS,
  CASE_STUDY_LABEL_CLASS,
  CASE_STUDY_LABEL_TIGHT_CLASS,
  CASE_STUDY_SUPPORTING_CLASS,
  cx,
  type CaseStudySectionLayout,
} from "./types";

export interface JourneyStep {
  /** Stable key. */
  id: string;
  /** What the person does or sees at this point. */
  label: ReactNode;
  /** What it costs them, or what it changed. */
  detail?: ReactNode;
}

export interface JourneyTrack {
  /** Overrides the track's heading. Defaults to "Before" or "After". */
  title?: ReactNode;
  /** The steps, in the order a person meets them. Only verified steps. */
  steps: readonly JourneyStep[];
  /** A figure for the track as a whole, e.g. its step count. */
  summary?: ReactNode;
}

export interface JourneyComparisonProps extends CaseStudySectionLayout {
  /** Section label, e.g. "Before and after". */
  title?: ReactNode;
  /** The journey as it stood. */
  before: JourneyTrack;
  /** The journey after the work. */
  after: JourneyTrack;
  trackTitleAs?: "h3" | "h4" | "h5";
}

const TRACKS_CLASS = "flex flex-col gap-10 lg:flex-row lg:gap-[64px]";
const TRACK_CLASS = "flex w-full flex-col gap-[14px] lg:flex-1";
const STEPS_CLASS = "ml-[24px] flex list-decimal flex-col gap-3 lg:gap-[18px]";

function Track({
  track,
  defaultTitle,
  Heading,
}: {
  track: JourneyTrack;
  defaultTitle: string;
  Heading: "h3" | "h4" | "h5";
}) {
  if (track.steps.length === 0) return null;

  return (
    <div className={TRACK_CLASS}>
      <Heading className={CASE_STUDY_LABEL_TIGHT_CLASS}>
        {track.title ?? defaultTitle}
      </Heading>
      {track.summary != null && (
        <p className={CASE_STUDY_SUPPORTING_CLASS}>{track.summary}</p>
      )}
      <ol className={cx(STEPS_CLASS, CASE_STUDY_BODY_CLASS)}>
        {track.steps.map((step) => (
          <li key={step.id}>
            {step.label}
            {step.detail != null && (
              <span className={cx("block", CASE_STUDY_SUPPORTING_CLASS)}>
                {step.detail}
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * The same journey before and after the work, step for step. Side by side from
 * the large breakpoint up, stacked below it.
 *
 * Both tracks are ordered lists under their own "Before" and "After" headings,
 * so the comparison still reads as two sequences when the columns stack on a
 * phone or when the page is read aloud — the side-by-side layout is a
 * convenience, not the meaning. Steps are only ever the ones passed in; a track
 * with none renders nothing rather than being padded to match the other.
 */
export function JourneyComparison({
  title,
  before,
  after,
  trackTitleAs = "h3",
  titleClassName = CASE_STUDY_LABEL_CLASS,
  ...layout
}: JourneyComparisonProps) {
  if (before.steps.length === 0 && after.steps.length === 0) return null;

  return (
    <CaseStudySection {...layout} title={title} titleClassName={titleClassName}>
      <div className={TRACKS_CLASS}>
        <Track track={before} defaultTitle="Before" Heading={trackTitleAs} />
        <Track track={after} defaultTitle="After" Heading={trackTitleAs} />
      </div>
    </CaseStudySection>
  );
}

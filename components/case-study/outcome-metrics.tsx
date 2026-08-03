import type { ReactNode } from "react";
import { resultDetail, type ProjectResult } from "@/lib/content";
import { CaseStudySection } from "./case-study-section";
import {
  CASE_STUDY_LABEL_CLASS,
  CASE_STUDY_METRIC_LABEL_CLASS,
  CASE_STUDY_METRIC_VALUE_CLASS,
  cx,
  type CaseStudySectionLayout,
  type OneToThree,
} from "./types";

/**
 * What a figure actually is. Every metric declares one, and only "achieved"
 * means the number was measured after the work shipped.
 */
export type OutcomeMetricStatus =
  | "achieved"
  | "estimated"
  | "projected"
  | "target"
  | "baseline";

/**
 * Wording shown beside a figure that is not an achieved result. Text, never
 * colour alone, so the distinction survives greyscale, high contrast, and
 * screen readers.
 */
const STATUS_LABELS: Record<OutcomeMetricStatus, string> = {
  achieved: "Achieved",
  estimated: "Estimated",
  projected: "Projected",
  target: "Target",
  baseline: "Baseline",
};

export interface OutcomeMetric {
  /** Stable key. */
  id: string;
  /** The figure, formatted exactly as it should read. */
  value: string;
  /** What the figure measures. */
  label: ReactNode;
  status: OutcomeMetricStatus;
  /** Overrides the default status wording. */
  statusLabel?: string;
}

/**
 * Builds metrics from the shared results list, so a figure and its wording can
 * never diverge from the project record. Results in one list share a status;
 * build the array by hand when a section mixes achieved and unachieved figures.
 *
 * Throws when the count falls outside the one-to-three a results section shows,
 * because that is a wiring mistake rather than an empty state.
 */
export function outcomeMetricsFromResults(
  results: readonly ProjectResult[],
  status: OutcomeMetricStatus,
): OneToThree<OutcomeMetric> {
  if (results.length < 1 || results.length > 3) {
    throw new Error(
      `OutcomeMetrics shows one to three results; received ${results.length}.`,
    );
  }
  const metrics = results.map((result) => ({
    id: result.value,
    value: result.value,
    label: resultDetail(result),
    status,
  }));
  return metrics as unknown as OneToThree<OutcomeMetric>;
}

export interface OutcomeMetricsProps extends CaseStudySectionLayout {
  /** Section label, e.g. "Results". */
  title?: ReactNode;
  /** One to three figures. More than three stops being a result and starts being a report. */
  metrics: OneToThree<OutcomeMetric>;
  /** Extra classes on the row of figures. */
  metricsClassName?: string;
  valueClassName?: string;
  labelClassName?: string;
  statusClassName?: string;
  /** Supporting content under the figures, e.g. the list of what was done. */
  children?: ReactNode;
}

const METRICS_ROW_CLASS = "ml-[24px] flex flex-row gap-8 lg:gap-12";
const STATUS_CLASS = "mt-0 text-sm lg:text-[18px] font-light text-white/60";

/**
 * The outcome of the work: one to three figures, each declaring what it is.
 *
 * An achieved result is stated on its own, exactly as the page already states
 * it. Anything that has not been measured yet — an estimate, projection,
 * target, or baseline — carries that word beside it, so a target can never be
 * read, styled, or announced as a result. A page with nothing achieved yet can
 * still show what it has, and a page with no figures at all leaves the block
 * out: `metrics` requires at least one, so there is no empty state to render.
 */
export function OutcomeMetrics({
  title,
  metrics,
  metricsClassName,
  valueClassName,
  labelClassName,
  statusClassName,
  titleClassName = CASE_STUDY_LABEL_CLASS,
  children,
  ...layout
}: OutcomeMetricsProps) {
  return (
    <CaseStudySection {...layout} title={title} titleClassName={titleClassName}>
      <div className={cx(METRICS_ROW_CLASS, metricsClassName)}>
        {metrics.map((metric) => (
          <div key={metric.id}>
            <p className={cx(CASE_STUDY_METRIC_VALUE_CLASS, valueClassName)}>
              {metric.value}
            </p>
            <p className={cx(CASE_STUDY_METRIC_LABEL_CLASS, labelClassName)}>
              {metric.label}
            </p>
            {metric.status !== "achieved" && (
              <p className={cx(STATUS_CLASS, statusClassName)}>
                {metric.statusLabel ?? STATUS_LABELS[metric.status]}
              </p>
            )}
          </div>
        ))}
      </div>
      {children}
    </CaseStudySection>
  );
}

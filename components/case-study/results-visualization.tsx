import type { ReactNode } from "react";
import { CaseStudySection } from "./case-study-section";
import {
  CASE_STUDY_CAPTION_CLASS,
  CASE_STUDY_LABEL_CLASS,
  cx,
  type CaseStudySectionLayout,
} from "./types";

interface ResultsVisualizationBase extends CaseStudySectionLayout {
  /** The chart, graph, or image already approved for the page. */
  visual: ReactNode;
  /** Extra classes on the figure. */
  visualClassName?: string;
  captionClassName?: string;
}

/**
 * A chart has to say what it is in words somewhere. The union makes at least one
 * of title or caption required, so a figure can never ship as an unlabelled
 * picture that only makes sense to whoever plotted it.
 */
export type ResultsVisualizationProps = ResultsVisualizationBase &
  (
    | { title: ReactNode; caption?: ReactNode }
    | { title?: ReactNode; caption: ReactNode }
  );

const FIGURE_CLASS = "flex w-full flex-col gap-3 lg:gap-4";

/**
 * A result shown as a picture: the graph or chart, and the words that make it
 * readable without it.
 *
 * The caption is a real `<figcaption>` tied to the figure, not a paragraph that
 * happens to sit underneath, so the number and its explanation stay together
 * when the page is read aloud or reflowed.
 */
export function ResultsVisualization({
  title,
  caption,
  visual,
  visualClassName,
  captionClassName,
  titleClassName = CASE_STUDY_LABEL_CLASS,
  ...layout
}: ResultsVisualizationProps) {
  return (
    <CaseStudySection {...layout} title={title} titleClassName={titleClassName}>
      <figure className={cx(FIGURE_CLASS, visualClassName)}>
        {visual}
        {caption != null && (
          <figcaption className={cx(CASE_STUDY_CAPTION_CLASS, captionClassName)}>
            {caption}
          </figcaption>
        )}
      </figure>
    </CaseStudySection>
  );
}

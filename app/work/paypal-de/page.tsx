import Image from "next/image";
import Link from "next/link";
import NextCaseStudyTicker from "@/components/ui/next-case-study-ticker";
import CaseStudyTopBar from "@/components/ui/case-study-top-bar";
import {
  CaseStudyHeader,
  ProjectFacts,
  SupportingAppendix,
  CASE_STUDY_LABEL_TIGHT_CLASS,
  CASE_STUDY_SUPPORTING_CLASS,
  cx,
} from "@/components/case-study";
import { PROJECTS_BY_ID, imageSrc, previewOf } from "@/lib/content";
import workflowDiagram from "@/components/images/PayPal DE/PayPalDE_WorkflowDiagram.png";
import { caseStudyMetadata } from "@/lib/seo";
import TrustStory from "./trust-story";

const project = PROJECTS_BY_ID.paypalde;
const nextPayPal = PROJECTS_BY_ID.paypal;
const nextPayPalPreview = previewOf(nextPayPal);
const nextMeta = PROJECTS_BY_ID.meta;
const nextMetaPreview = previewOf(nextMeta);

export const metadata = caseStudyMetadata(
  project,
  "Designing PayPal Pay in 30 Days and Ratenzahlung for Germany — two responsible credit products driving a 63.7% increase in combined monthly total purchase volume.",
);

const leagueSpartan = "var(--font-league-spartan)";

/** Live prototype deployment for this case study. Leave empty to hide the button. */
const PROTOTYPE_URL: string = "https://german-credit-products.vercel.app/";

const ITERATIONS_PI30 = [
  "Iteration 2 — bank selection and add-bank moved inside checkout.",
  "Iteration 3 — streamlined checkout; legal disclosures moved to the review step.",
  "Iteration 4 — post-purchase rescheduling of an upcoming payment.",
  "Iteration 7 — new checkout framework: more options up front, more accurate estimates.",
];

const ITERATIONS_RZ = [
  "Iteration 2 — four installment terms added; checkout experiments.",
  "Iteration 3 — research-led rebuild on the new PayPal UI; the application went from four pages to one.",
  "Iteration 4 — latest checkout framework.",
];

export default function PayPalDePage() {
  return (
    <main
      className="relative flex w-full flex-col bg-black text-white"
      style={{ fontFamily: leagueSpartan }}
    >
      <CaseStudyTopBar />

      <div className="px-5 lg:px-[24px] pt-10 lg:pt-[78px]">
        <CaseStudyHeader project={project} />
        <ProjectFacts
          project={project}
          facts={[]}
          className="mt-6 lg:mt-[27px]"
          factClassName={{ role: "lg:w-[861px]" }}
        />
      </div>

      <TrustStory prototypeUrl={PROTOTYPE_URL} />

      <div className="px-5 lg:px-[24px]">
        <SupportingAppendix
          id="behind-the-work"
          className="mt-[50px]"
          title="Behind the work"
          summary="How the work ran: AI-assisted workflow, iteration history, and testing"
        >
          <p className="text-white/70">
            An end-to-end AI-assisted workflow shaped the strategy and accelerated iteration:
            discovery structured with ChatGPT from meeting notes and research, early options
            generated in Figma Make against the PayPal UI library, and working prototypes built
            in Claude Code.
          </p>
          <Image
            src={workflowDiagram}
            alt="The project workflow, left to right: personas, desktop research, and business requirements feed a design strategy document in ChatGPT; then discovery in ChatGPT and Figma Make; iteration in Figma and Claude Code, supported by context engineering and content design; then UER, evaluation and quality assurance, development with UED support, and measuring results."
            sizes="(max-width: 1024px) 100vw, 1552px"
            className="block h-auto w-full"
          />
          <p className="text-white/70">
            The iteration itself ran cross-functionally — checkout, product, engineering, legal,
            risk, compliance, and research — turning customer insight into two award-winning
            PayPal products.
          </p>
          <div className="flex flex-col gap-4 lg:gap-6 lg:flex-row lg:gap-x-[46px]">
            <div className="lg:w-1/2">
              <p className={CASE_STUDY_LABEL_TIGHT_CLASS}>Pay in 30 Days</p>
              <ul className="mt-3 lg:mt-4">
                {ITERATIONS_PI30.map((line) => (
                  <li
                    key={line}
                    className={cx(
                      CASE_STUDY_SUPPORTING_CLASS,
                      "border-b border-white/15 py-3 lg:py-4 text-white/70",
                    )}
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <p className={CASE_STUDY_LABEL_TIGHT_CLASS}>PayPal Ratenzahlung</p>
              <ul className="mt-3 lg:mt-4">
                {ITERATIONS_RZ.map((line) => (
                  <li
                    key={line}
                    className={cx(
                      CASE_STUDY_SUPPORTING_CLASS,
                      "border-b border-white/15 py-3 lg:py-4 text-white/70",
                    )}
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-white/70">A working prototype of both products is linked above.</p>
        </SupportingAppendix>
      </div>

      <section
        id="next-case-study-section"
        className="relative w-full overflow-hidden bg-black pb-24 lg:pb-[200px] pt-12 lg:pt-[78px] mt-24 lg:mt-[200px]"
      >
        <NextCaseStudyTicker color="#eb2f2f" />
        {/* Both cards keep their aspect ratio and shrink together rather than
            running under the 24px gutter: at their full 437 + 671 the 200px gap
            only fits from ~1356px up, so the gap steps down first and the pair
            scales after that. */}
        <div className="relative flex flex-col lg:flex-row items-center lg:justify-center gap-12 lg:gap-[100px] xl:gap-[200px] px-5 lg:px-[24px]">
          <Link
            href={nextPayPal.route}
            className="group flex w-full min-w-0 max-w-[437px] lg:w-[437px] flex-col gap-4 lg:gap-[27px] items-start"
          >
            <div className="aspect-[437/666] w-full relative rounded-[30px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={nextPayPalPreview.alt}
                src={imageSrc(nextPayPalPreview.image)}
                className="absolute pointer-events-none object-cover h-full"
                style={{ width: "270%", maxWidth: "none", left: "-88%" }}
              />
            </div>
            <p className="font-serif text-[clamp(36px,9vw,64px)] lg:text-[64px] leading-[1.1] lg:leading-[72px] text-white tracking-[-0.64px] transition-opacity duration-300 group-hover:opacity-70">
              {nextPayPal.cardLabel}
            </p>
          </Link>
          <Link
            href={nextMeta.route}
            className="group flex w-full min-w-0 max-w-[671px] lg:w-[671px] flex-col gap-4 lg:gap-[27px]"
          >
            <div className="relative aspect-[824/606] w-full overflow-hidden rounded-2xl lg:rounded-[30px]">
              <Image
                src={nextMetaPreview.image}
                alt={nextMetaPreview.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 671px"
              />
            </div>
            <p className="font-serif text-[clamp(36px,9vw,64px)] lg:text-[64px] leading-[1.1] lg:leading-[72px] tracking-[-0.64px] text-white transition-opacity duration-300 group-hover:opacity-70">
              {nextMeta.cardLabel}
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}

import type { ComponentType } from "react";
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
import {
  IconBankInCheckout,
  IconCheckoutUpgrade,
  IconDisclosuresAtReview,
  IconFourInstallments,
  IconOnePageApplication,
  IconOptionsUpfront,
  IconRescheduledPayment,
} from "./iteration-icons";
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
  "Designing PayPal Pay in 30 Days and Ratenzahlung for Germany — two responsible credit products that lifted monthly TPV 48.78% and 14.92% respectively.",
);

const leagueSpartan = "var(--font-league-spartan)";

/** Live prototype deployment for this case study. Leave empty to hide the button. */
const PROTOTYPE_URL: string = "https://german-credit-products.vercel.app/";

type Iteration = { Icon: ComponentType<{ className?: string }>; text: string };

const ITERATIONS_PI30: Iteration[] = [
  {
    Icon: IconBankInCheckout,
    text: "Moved preferred-bank selection and add-bank into checkout.",
  },
  { Icon: IconOptionsUpfront, text: "Made payment options, estimates, and terms visible earlier." },
  {
    Icon: IconRescheduledPayment,
    text: "Added post-purchase rescheduling with explicit cost and date confirmation.",
  },
  {
    Icon: IconCheckoutUpgrade,
    text: "Adopted the new checkout framework to support clearer comparisons.",
  },
];

const ITERATIONS_RZ: Iteration[] = [
  {
    Icon: IconFourInstallments,
    text: "Added four installment terms and tested how customers compared them.",
  },
  {
    Icon: IconOnePageApplication,
    text: "Rebuilt the application on PayPal\u2019s current UI, reducing four pages to one.",
  },
  {
    Icon: IconDisclosuresAtReview,
    text: "Used contextual disclosures in checkout and complete terms at commitment.",
  },
  { Icon: IconCheckoutUpgrade, text: "Migrated the experience to the latest checkout framework." },
];

/* The rows carry their own mark now, so nothing rules them off from each
   other: the icon column is the alignment, and the air between rows is the
   separation. Sized to the 18px supporting scale these rows are set in,
   which is a step down from the Meta panel's. */
const ITERATION_LIST_CLASS = "mt-3 flex flex-col gap-4 lg:mt-4 lg:gap-5";
const ITERATION_ROW_CLASS = "flex items-center gap-4 lg:gap-5";
const ITERATION_ICON_CLASS = "h-7 w-7 shrink-0 text-white lg:h-8 lg:w-8";

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
          title="Behind the Work"
          summary="How the strategy became repeatable across two products"
        >
          <div className="relative w-full">
            <Image
              src={workflowDiagram}
              alt="The project workflow, left to right: personas, desktop research, and business requirements feed a design strategy document in ChatGPT; then discovery in ChatGPT and Figma Make; iteration in Figma and Claude Code, supported by context engineering and content design; then UER, evaluation and quality assurance, development with UED support, and measuring results."
              sizes="(max-width: 1024px) 100vw, 1552px"
              className="block h-auto w-full"
            />
            {/* Desktop: parked in the empty quadrant under the tail of the
                spine, so it reads as part of the drawing rather than a stray
                note. Anchored from the bottom-right corner rather than the top,
                because the type is a fixed 18px while the box is a share of the
                width — the caption takes more lines as the window narrows, and
                growing upward into empty diagram keeps it off the section
                below. The measure is capped so it stops widening past a
                readable line on large displays. Mobile: the diagram is far too
                small to hold text, so the caption drops underneath it. */}
            <p className="mt-6 text-sm font-light leading-snug text-white/60 lg:absolute lg:bottom-[9%] lg:right-[1%] lg:mt-0 lg:w-[47%] lg:max-w-[620px] lg:text-[18px] lg:leading-[1.45] lg:text-white">
              AI accelerated discovery synthesis, early concepts, and working prototypes. The
              repeatable system was the shared trust rules, PayPal&rsquo;s UI and checkout
              frameworks, cross-functional review loop, customer testing, and{" "}
              <span className="whitespace-nowrap">post-launch measurement.</span>
            </p>
          </div>
          {/* The diagram ends on its lowest circle, so the iteration columns
              stand off it by a full 100px rather than the appendix's default
              24px gutter — enough that the drawing reads as finished before
              the two lists begin. */}
          {/* Who applied the rules, set as the lead-in to the two lists rather
              than inside the diagram: the drawing's empty quadrant only holds
              the caption above, and a second paragraph up there would run back
              into the spine at the narrower desktop widths. */}
          <p
            className={cx(
              CASE_STUDY_SUPPORTING_CLASS,
              "mt-10 max-w-[820px] text-white/70 lg:mt-[76px]",
            )}
          >
            Checkout, Product, Engineering, Legal, Risk, Compliance, Research, and Design used the
            same principles to evaluate decisions across checkout, application, and
            servicing&mdash;turning customer trust into a shared quality standard rather than a{" "}
            <span className="whitespace-nowrap">one-off design idea.</span>
          </p>
          <div className="mt-10 flex flex-col gap-4 lg:mt-[46px] lg:gap-6 lg:flex-row lg:gap-x-[46px]">
            <div className="lg:w-1/2">
              <p className={CASE_STUDY_LABEL_TIGHT_CLASS}>Pay in 30 Days</p>
              <ul className={ITERATION_LIST_CLASS}>
                {ITERATIONS_PI30.map((row) => (
                  <li key={row.text} className={ITERATION_ROW_CLASS}>
                    <row.Icon className={ITERATION_ICON_CLASS} />
                    <p className={cx(CASE_STUDY_SUPPORTING_CLASS, "text-white/70")}>{row.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <p className={CASE_STUDY_LABEL_TIGHT_CLASS}>PayPal Ratenzahlung</p>
              <ul className={ITERATION_LIST_CLASS}>
                {ITERATIONS_RZ.map((row) => (
                  <li key={row.text} className={ITERATION_ROW_CLASS}>
                    <row.Icon className={ITERATION_ICON_CLASS} />
                    <p className={cx(CASE_STUDY_SUPPORTING_CLASS, "text-white/70")}>{row.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SupportingAppendix>
      </div>

      <section
        id="next-case-study-section"
        className="relative w-full overflow-hidden bg-black pb-24 lg:pb-[200px] pt-12 lg:pt-[78px] mt-24 lg:mt-[200px]"
      >
        <NextCaseStudyTicker color="#00B0D8" />
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

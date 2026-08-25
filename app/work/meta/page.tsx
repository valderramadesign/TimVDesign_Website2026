import type { ComponentType } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import CaseStudyTopBar from "@/components/ui/case-study-top-bar";
import NextCaseStudyTicker from "@/components/ui/next-case-study-ticker";
import RevealSlider from "@/components/ui/reveal-slider";
import LegacyScreenGrid, { type LegacyScreen } from "./legacy-screen-grid";
import ScrollFade from "@/components/ui/scroll-fade";
import MiMacbookWalkthrough from "@/components/ui/mi-macbook-walkthrough";
import { AnimatedImpactRow } from "@/components/ui/animated-impact-row";
import { CTA_PILL_SIZE } from "@/components/ui/cta-pill";
import {
  CaseStudyHeader,
  ProjectFacts,
  SupportingAppendix,
  CASE_STUDY_BODY_CLASS,
  CASE_STUDY_FOCUS_CLASS,
  CASE_STUDY_LABEL_TIGHT_CLASS,
  CASE_STUDY_SUPPORTING_CLASS,
  cx,
} from "@/components/case-study";
import {
  IconAlreadyVerified,
  IconBuriedOffer,
  IconCardPaused,
  IconNineScreens,
  IconOfferUpstream,
  IconThreePages,
} from "./opportunity-icons";
import verificationEngine from "@/components/images/Monthly invoicing Images/Opportunity/verification-engine.png";
import oldScreen from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Screen.png";
import oldScreen1 from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Screen1.png";
import oldScreen2 from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Screen2.png";
import oldScreen3 from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Screen3.png";
import oldScreen4 from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Screen4.png";
import oldScreen5 from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Screen5.png";
import oldScreen6 from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Screen6.png";
import oldScreen7 from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Screen7.png";
import oldScreen8 from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Screen8.png";
import newFlowHowItWorks from "@/components/images/Monthly invoicing Images/Mi_New_Flow_Screens/new-flow-1-how-it-works.png";
import newFlowConfirm from "@/components/images/Monthly invoicing Images/Mi_New_Flow_Screens/new-flow-2-confirm-information.png";
import newFlowApproved from "@/components/images/Monthly invoicing Images/Mi_New_Flow_Screens/new-flow-3-approved.png";
import miWorkflowDiagram from "@/components/images/Monthly invoicing Images/Diagram/mi-workflow-diagram.webp";
import { PROJECTS_BY_ID, imageSrc, previewOf } from "@/lib/content";
import { caseStudyMetadata } from "@/lib/seo";

const project = PROJECTS_BY_ID.meta;
const nextPayPal = PROJECTS_BY_ID.paypal;
const nextPayPalPreview = previewOf(nextPayPal);
const nextSolo = PROJECTS_BY_ID.solo;
const nextSoloPreview = previewOf(nextSolo);

export const metadata = caseStudyMetadata(
  project,
  "Moving the Monthly Invoicing offer upstream and rebuilding its application from 9 screens to 3, against a target of lifting conversion from a 39% baseline to 97% and ~7.5%/yr in projected savings.",
);

const leagueSpartan = "var(--font-league-spartan)";

/* One value for the air between the page's major beats, matched to the
   PayPal case study so the two read as the same publication. */
const SECTION_GAP = "mt-24 md:mt-[140px] lg:mt-[200px]";
const PAGE_PAD = "px-5 lg:px-[24px]";

/* Section headings run longer here than PayPal's, so the ceiling steps down
   from 72px — the line still opens the section without swallowing it. */
const SECTION_TITLE_CLASS =
  "mt-4 max-w-[1100px] text-balance font-serif text-[clamp(32px,5.6vw,64px)] font-normal leading-[1.06] tracking-[-0.015em] lg:mt-[18px]";

/* Panel rows sit in a third-width column beside a 52px icon, so they step
   down from the page's body size to hold two lines instead of four. */
const PANEL_ROW_CLASS = "text-base lg:text-[20px] font-light leading-[1.35]";

/* The three columns sit directly on the page now: no cards, no rules. All
   that holds the row together is the shared top alignment and the type. */
const PANEL_CLASS = "flex flex-col";

/* All three columns state the same anatomy, so their rows have to start on
   the same line: the title reserves two lines whether or not it needs them. */
const PANEL_TITLE_CLASS =
  "mt-3 text-balance font-serif text-[clamp(24px,3.2vw,34px)] font-normal leading-[1.12] tracking-[-0.01em] lg:mt-[14px] lg:min-h-[2.24em]";

/* The strategy column is the only lit thing in the row, so its label takes
   the accent too. Written out rather than layered over the shared label
   class: the colour then never depends on which utility the sheet emits
   last. The scale is CASE_STUDY_LABEL_TIGHT_CLASS's, unchanged. */
const STRATEGY_LABEL_CLASS = "text-sm lg:text-[18px] font-light leading-none text-[#CEF252]";

/* One offset for everything that hangs below a panel title, so the icon
   rows and the illustration start on the same line across all three
   columns. */
const PANEL_BODY_TOP = "mt-7 lg:mt-[36px]";

/* On desktop each set of three rows is one block standing against the
   illustration: it starts on the same line and, by taking the column's
   remaining height and spacing itself across it, ends on the same line
   too — so the two share a centre as well as a top edge. The gap stays the
   floor, which is what a column too tall to distribute falls back to. */
const ROW_LIST_CLASS = cx(
  PANEL_BODY_TOP,
  "flex flex-col gap-6 lg:flex-1 lg:justify-between lg:gap-[30px]",
);
const ROW_ITEM_CLASS = "flex items-center gap-4 lg:gap-6";
const ROW_ICON_CLASS = "h-11 w-11 shrink-0 text-white lg:h-[52px] lg:w-[52px]";

/* The row gap is the generous one — every cell now carries a label under it,
   and the numbers want air between one row's caption and the next row's
   screen. */
const SLIDER_ROW_GRID =
  "md:grid md:grid-cols-3 md:gap-x-3 md:gap-y-9 lg:gap-x-4 lg:gap-y-[44px]";
/* The divider comes to rest on the wrapper's own edges, which — the rows
   standing on the page's full measure — is exactly where the outer screens
   end. This holds every row back off both ends of the wipe, so there is
   always black between the bar and the nearest screen. Scoped to lg and up,
   the only width where a divider exists at all. */
const SLIDER_ROW_PAD = "lg:px-5";
/* Below md the screens are landscape captures too wide to tile, so they
   become a swipeable strip that bleeds into the page gutter. */
const SLIDER_FILMSTRIP =
  "-mx-5 flex list-none snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden";
const SLIDER_CELL = "w-[90%] max-w-[440px] shrink-0 snap-start md:w-auto md:max-w-none";
const SCREEN_FRAME =
  "overflow-hidden rounded-[10px] border border-white/12 bg-white/[0.04] lg:rounded-[14px]";
/* Both rows number their screens the same way, so the count either side of
   the divider can be read off the captions alone. */
const SCREEN_CAPTION = cx(CASE_STUDY_SUPPORTING_CLASS, "mt-3 text-white/60 lg:mt-[16px]");

/* The figures the record already carries, each kept with the status it
   actually has: delivered, targeted, or projected. */
const HERO_FACTS: { label: string; value: string; note: string }[] = [
  { label: "Application", value: "9 → 3", note: "Screens, as delivered" },
  { label: "Conversion", value: "97%", note: "Target, from a 39% baseline" },
  { label: "Savings", value: "~7.5%", note: "Projected, annually" },
  { label: "Timeline", value: project.timeline, note: "Discovery through handoff" },
];

type PanelRow = { Icon: ComponentType<{ className?: string }>; text: string };

const PROBLEM_ROWS: PanelRow[] = [
  { Icon: IconBuriedOffer, text: "Invitation hidden in a low-traffic area" },
  { Icon: IconNineScreens, text: "Nine screens repeated known information" },
  { Icon: IconCardPaused, text: "Card limits and failures could pause campaigns" },
];

const OPPORTUNITY_ROWS: PanelRow[] = [
  { Icon: IconOfferUpstream, text: "Present the offer where advertisers already work" },
  { Icon: IconAlreadyVerified, text: "Pre-approve with existing verification records" },
  { Icon: IconThreePages, text: "Let customers verify or quickly edit in three pages" },
];

/* Two workstreams, one strategy — the shape of each decision in a
   sentence, not a diary of the weeks. They live in the appendix at the
   foot of the page: the method, one click off the argument. */
const WORKSTREAMS: { title: string; body: string }[] = [
  {
    title: "Increase Awareness",
    body: "Mapped high-traffic business surfaces and the teams that owned them, built partnerships for upstream banner placement, and moved the invitation into moments qualified advertisers already frequented.",
  },
  {
    title: "Increase Completion",
    body: "Audited existing customer data, compliance checks, and finance requirements, partnered with Product, Data Science, Legal, Finance, and Engineering, and reframed the flow around pre-approval, prefill, and quick correction.",
  },
];

/* The workflow as engineering received it: the qualifying checks that run
   upstream, and the path the advertiser actually walks once they pass.

   It is a wide drawing of small type. Squeezed into a phone's measure the
   labels stop being readable, so below the breakpoint it holds its width and
   scrolls sideways — the same move the nine screens make further up the page.
   Tabbable, because a scroll container Chrome will not focus is a scroll
   container a keyboard cannot reach. */
const DIAGRAM_FRAME = cx(
  "-mx-5 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
  "lg:mx-0 lg:overflow-visible lg:px-0",
  CASE_STUDY_FOCUS_CLASS,
);
const DIAGRAM_IMAGE = "h-auto w-[1040px] max-w-none lg:w-full";
const DIAGRAM_ALT =
  "Workflow diagram in two rows. The top row of checks runs from MI eligible, to Business verified, to Match LE with BV information, to Run Moody's API check on LE. Its result connects down to the row below, which runs from Pre-approved entry point, to How it works, to Display LE information plus terms and conditions, to Success, to Redirect to Accounts page.";

/* Two workstreams reading as two columns, split by a hairline. Above md there
   is no gutter to hang a rule in, so the divider lies down and becomes the
   rule between two stacked blocks. */
const WORKSTREAM_GRID = "mt-[50px] grid md:grid-cols-2";
const WORKSTREAM_COLUMN = "md:pr-8 lg:pr-10";
const WORKSTREAM_COLUMN_DIVIDED =
  "mt-8 border-t border-white/15 pt-8 md:mt-0 md:border-l md:border-t-0 md:pl-8 md:pt-0 lg:pl-10";

const LEGACY_SCREENS: LegacyScreen[] = [
  {
    src: oldScreen,
    title: "Banner",
    alt: "Step 1: the Billing and payments Accounts page, with the monthly invoicing banner sitting above the accounts table.",
  },
  {
    src: oldScreen1,
    title: "How it works",
    alt: "Step 2: an overview dialog listing the tax ID, business document, and payment terms the application will require.",
  },
  {
    src: oldScreen2,
    title: "Legal identity",
    alt: "Step 3: choosing the legal entity the invoice will be issued to, from a dropdown of registered organizations.",
  },
  {
    src: oldScreen3,
    title: "Business information",
    alt: "Step 4: a business information form asking for country, email, and phone number.",
  },
  {
    src: oldScreen4,
    title: "Legal address",
    alt: "Step 5: a legal address form asking for the registered business name, EIN, street address, city, state, and ZIP code.",
  },
  {
    src: oldScreen5,
    title: "Billing address",
    alt: "Step 6: a billing address form repeating the same address fields behind a same as legal address checkbox.",
  },
  {
    src: oldScreen6,
    title: "Add accounts for Monthly Invoicing",
    alt: "Step 7: selecting which ad accounts the credit line should cover, from a searchable checklist.",
  },
  {
    src: oldScreen7,
    title: "Upload documents",
    alt: "Step 8: uploading a legal document as a PDF and accepting the invoicing terms and conditions.",
  },
  {
    src: oldScreen8,
    title: "Application pending approval",
    alt: "Step 9: an application pending approval notice asking the advertiser to wait two to three business days for a decision.",
  },
];

const REDESIGN_SCREENS: { src: StaticImageData; title: string; alt: string }[] = [
  {
    src: newFlowHowItWorks,
    title: "How it works",
    alt: "Page 1: a request monthly invoicing dialog explaining that the advertiser confirms their business information, receives a credit line, and is billed once a month.",
  },
  {
    src: newFlowConfirm,
    title: "Confirm information",
    alt: "Page 2: legal and billing information already filled in from Meta's records, with a single edit control beside the submit button.",
  },
  {
    src: newFlowApproved,
    title: "Approved",
    alt: "Page 3: an approval notice confirming an initial credit line and telling the advertiser their active ad accounts can now use it.",
  },
];

export default function MetaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <CaseStudyTopBar />

      {/* Opening: eyebrow, headline, the shift in one sentence, then the
          figures the record carries — each labelled with the status it
          actually holds, so nothing planned reads as banked. */}
      <div
        className={cx(PAGE_PAD, "pt-10 lg:pt-[78px]")}
        style={{ fontFamily: leagueSpartan }}
      >
        <CaseStudyHeader project={project} />

        {/* One paragraph under the headline, carrying what the standfirst
            and the role block used to split between them: who I worked
            with, what moved, and how the work was run. It reads under its
            own label, at the measure and scale the PayPal headers use. */}
        <ProjectFacts
          project={project}
          facts={[]}
          className="mt-6 lg:mt-[27px]"
          factClassName={{ role: "lg:w-[861px]" }}
        />

        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 lg:mt-[30px] lg:grid-cols-4 lg:gap-x-[60px]">
          {HERO_FACTS.map((fact) => (
            <div key={fact.label} className="border-t border-white/15 pt-5 lg:pt-[28px]">
              <dt className={cx(CASE_STUDY_SUPPORTING_CLASS, "text-white/60")}>{fact.label}</dt>
              <dd className="mt-3 font-serif text-[clamp(32px,5vw,56px)] font-normal leading-none tracking-[-0.01em] lg:mt-[18px]">
                {fact.value}
              </dd>
              <dd className={cx(CASE_STUDY_SUPPORTING_CLASS, "mt-3 text-white/60 lg:mt-[14px]")}>
                {fact.note}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* The opportunity. Three columns of one sentence — where we started,
          the decision that connects them, what it becomes — all beginning on
          the same line. No cards and no rules: the type carries it, and the
          strategy in the middle stays the only lit thing on the page. */}
      <section
        aria-labelledby="meta-opportunity-title"
        className={cx(PAGE_PAD, SECTION_GAP)}
        style={{ fontFamily: leagueSpartan }}
      >
        <ScrollFade once>
          <p className={CASE_STUDY_LABEL_TIGHT_CLASS}>The Opportunity</p>
          <h2 id="meta-opportunity-title" className={SECTION_TITLE_CLASS}>
            A valuable product was hidden behind two kinds of friction
          </h2>
          <p className={cx(CASE_STUDY_BODY_CLASS, "mt-6 max-w-[900px] text-white/80 lg:mt-[32px]")}>
            {project.description[0]}
          </p>
        </ScrollFade>

        {/* Stacked in narrative order on small screens, and laid out as that
            same sentence, left to right, once there is room for it. The
            columns share a height on desktop, which is what lets the icon
            rows either side settle against the illustration between them. */}
        <div className="mt-12 flex flex-col gap-14 lg:mt-[80px] lg:grid lg:grid-cols-[1fr_minmax(300px,0.95fr)_1fr] lg:items-stretch lg:gap-12 xl:gap-[64px]">
          <div className={PANEL_CLASS}>
            <p className={CASE_STUDY_LABEL_TIGHT_CLASS}>Where We Started</p>
            <h3 className={PANEL_TITLE_CLASS}>High customer value, low product access</h3>
            <ul className={ROW_LIST_CLASS}>
              {PROBLEM_ROWS.map((row) => (
                <li key={row.text} className={ROW_ITEM_CLASS}>
                  <row.Icon className={ROW_ICON_CLASS} />
                  <p className={cx(PANEL_ROW_CLASS, "text-white/85")}>{row.text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* The strategy. It starts on the same line as the columns either
              side, with the illustration under it at the full width of the
              column — black hardware lit in the accent, so it reads on the
              page's own ground with nothing boxing it in. */}
          <div className={PANEL_CLASS}>
            <p className={STRATEGY_LABEL_CLASS}>The Strategy</p>
            {/* On desktop the illustration is measured off the line above
                it: the wrapper takes its width from the headline — whose
                breaks are explicit, so its widest line is "Reuse verified
                data." — and the image is laid out out of flow, which keeps
                it from feeding its own 384px back into that measurement.
                Stacked, there is no icon row beside it to answer to, so it
                takes the column instead of a 24px line's worth of it. */}
            <div className="w-full lg:w-fit">
              <h3 className={cx(PANEL_TITLE_CLASS, "text-[#CEF252]")}>
                Move upstream.
                <br />
                Reuse verified data.
              </h3>
              <div
                className={cx(
                  PANEL_BODY_TOP,
                  "relative aspect-square w-full max-w-[460px] lg:max-w-none",
                )}
              >
                <Image
                  src={verificationEngine}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 90vw, 32vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className={PANEL_CLASS}>
            <p className={CASE_STUDY_LABEL_TIGHT_CLASS}>What It Becomes</p>
            <h3 className={PANEL_TITLE_CLASS}>Turn collection into confirmation</h3>
            <ul className={ROW_LIST_CLASS}>
              {OPPORTUNITY_ROWS.map((row) => (
                <li key={row.text} className={ROW_ITEM_CLASS}>
                  <row.Icon className={ROW_ICON_CLASS} />
                  <p className={cx(PANEL_ROW_CLASS, "text-white/85")}>{row.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Before and after. The heading stays outside the frame so it
          survives the reveal; inside, nine screens are replaced in place by
          three, which is the whole argument of the redesign. */}
      <section
        aria-labelledby="meta-comparison-title"
        className={cx(PAGE_PAD, SECTION_GAP)}
        style={{ fontFamily: leagueSpartan }}
      >
        <ScrollFade once>
          <p className={CASE_STUDY_LABEL_TIGHT_CLASS}>Before and After</p>
          <h2 id="meta-comparison-title" className={SECTION_TITLE_CLASS}>
            From document collection to information confirmation
          </h2>
        </ScrollFade>

        <div className="mt-[50px]">
          <RevealSlider
            autoReveal
            framed={false}
            label="Compare the Monthly Invoicing application before and after the redesign"
            rows={[
              {
                align: "end",
                before: (
                  <div className={SLIDER_ROW_PAD}>
                    <p className={CASE_STUDY_LABEL_TIGHT_CLASS}>Before</p>
                    <h3 className="mt-3 text-balance font-serif text-[clamp(22px,3vw,32px)] font-normal leading-[1.15] tracking-[-0.01em] lg:mt-[14px]">
                      9 screens to collect what Meta already held
                    </h3>
                  </div>
                ),
                after: (
                  <div className={cx(SLIDER_ROW_PAD, "md:text-right")}>
                    <p className={CASE_STUDY_LABEL_TIGHT_CLASS}>After</p>
                    <h3 className="mt-3 text-balance font-serif text-[clamp(22px,3vw,32px)] font-normal leading-[1.15] tracking-[-0.01em] lg:mt-[14px]">
                      Three pages to confirm, correct, and approve
                    </h3>
                  </div>
                ),
              },
              {
                /* The nine arrive stacked on one another and fan out into
                   the table, which is the reader's first sight of how many
                   screens the old application really was. */
                before: (
                  <LegacyScreenGrid
                    label="The previous nine-screen Monthly Invoicing application"
                    screens={LEGACY_SCREENS}
                    className={cx(SLIDER_FILMSTRIP, SLIDER_ROW_GRID, SLIDER_ROW_PAD)}
                    cellClassName={SLIDER_CELL}
                    frameClassName={SCREEN_FRAME}
                    captionClassName={SCREEN_CAPTION}
                  />
                ),
                /* Three cells standing in a bed built for nine: the emptied
                   rows above and below are the point, so the row centres in
                   the space the old grid used to fill. */
                after: (
                  <ol
                    aria-label="The redesigned three-page confirmation flow"
                    className={cx(
                      SLIDER_FILMSTRIP,
                      SLIDER_ROW_GRID,
                      SLIDER_ROW_PAD,
                      "md:h-full md:content-center",
                    )}
                  >
                    {REDESIGN_SCREENS.map((screen, index) => (
                      <li key={screen.title} className={SLIDER_CELL}>
                        <div className={SCREEN_FRAME}>
                          <Image
                            src={screen.src}
                            alt={screen.alt}
                            sizes="(max-width: 768px) 80vw, 30vw"
                            className="h-auto w-full"
                          />
                        </div>
                        <p className={SCREEN_CAPTION}>
                          <span className="text-white/40">0{index + 1}</span> {screen.title}
                        </p>
                      </li>
                    ))}
                  </ol>
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* A breath between the flow and its outcome: the delivered
          application replaying on the surface it ships on, with the live
          prototype directly under it and nothing else competing. */}
      <div className={cx(PAGE_PAD, "mt-20 md:mt-[110px] lg:mt-[150px]")}>
        <MiMacbookWalkthrough className="mx-auto w-full max-w-[1200px]" />
        <div className="mt-[30px] flex justify-center">
          <a
            href="https://montly-invoicing-prototype.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center rounded-full border border-[#919191] px-6 lg:px-[30px] ${CTA_PILL_SIZE.xl} font-normal whitespace-nowrap text-white transition-colors duration-150 hover:border-white`}
            style={{ fontFamily: leagueSpartan, lineHeight: 1 }}
          >
            Prototype
          </a>
        </div>
      </div>

      {/* Customer impact. The bars are kept as they were: a baseline
          bar with the target growing out from under it, and every figure
          still carrying the word that says which one it is. */}
      <section
        aria-labelledby="meta-impact-title"
        className={cx(PAGE_PAD, "mt-20 md:mt-[110px] lg:mt-[150px] mx-auto w-full max-w-[1600px]")}
        style={{ fontFamily: leagueSpartan }}
      >
        <ScrollFade once>
          <p className={CASE_STUDY_LABEL_TIGHT_CLASS}>Customer Impact</p>
          <h2 id="meta-impact-title" className={SECTION_TITLE_CLASS}>
            More qualified advertisers could discover and complete the product
          </h2>
        </ScrollFade>

        {/* The scale's two ends sit on the baseline of the first bar, so one
            line reads across the top of the chart. Same header as the PayPal
            chart, so the two read as one system. */}
        <div className="mt-14 mb-[12px] grid grid-cols-[110px_1fr] items-baseline gap-x-4 lg:mt-[96px] lg:grid-cols-[280px_1fr] lg:gap-x-12">
          <span aria-hidden="true" />
          {/* This chart's right-hand label is long enough to close on the
              left one at 320, so the pair steps down a size until there is
              room for it. */}
          <div className="flex justify-between gap-x-4">
            <p className="text-[clamp(13px,4.4vw,16px)] font-light leading-[1.5] text-white/60 lg:text-[24px] lg:leading-[1.4]">
              Baseline
            </p>
            <p className="whitespace-nowrap text-[clamp(13px,4.4vw,16px)] font-light leading-[1.5] text-white/60 lg:text-[24px] lg:leading-[1.4]">
              H1 2026 target
            </p>
          </div>
        </div>

        {/* Wider than the PayPal chart's rhythm: every row here carries a
            sublabel under its bar, which needs room of its own before the
            next label starts. */}
        <div className="space-y-16 lg:space-y-20">
          <AnimatedImpactRow
            label="Expand eligibility"
            todayPct={27}
            futurePct={67}
            todayLabel="27%"
            futureLabel="67%"
            sublabel="$11M projected impact"
          />
          <AnimatedImpactRow
            label={"Improve\nawareness"}
            todayPct={8}
            futurePct={41}
            todayLabel="8%"
            futureLabel="41%"
            sublabel="Target: +33 percentage points"
          />
          <AnimatedImpactRow
            label={"Grow\nconversion"}
            todayPct={39}
            futurePct={97}
            todayLabel="39%"
            futureLabel="97%"
            sublabel="Target: +58 percentage points"
          />
          <div className="grid grid-cols-[110px_1fr] items-center gap-4 lg:grid-cols-[280px_1fr] lg:gap-12">
            <h3 className="font-serif text-[clamp(18px,4.5vw,32px)] font-normal leading-[1.15] tracking-[-0.01em] lg:text-[clamp(24px,2.6vw,32px)]">
              Projected savings
            </h3>
            <p className="font-serif text-[clamp(40px,10vw,96px)] leading-[1] tracking-[-0.96px] lg:text-[clamp(64px,8vw,96px)]">
              ~ 7.5%/yr.
            </p>
          </div>
        </div>
      </section>

      {/* Behind the work. How the change was led, kept one click off the
          spine of the page so the argument reads straight through and the
          method is there for anyone who wants it. */}
      <div className={cx(PAGE_PAD, SECTION_GAP)} style={{ fontFamily: leagueSpartan }}>
        <SupportingAppendix
          id="behind-the-work"
          title="Behind the Work"
          summary="How I led the change: one coordinated strategy across discovery and conversion"
        >
          <div>
            <figure className={DIAGRAM_FRAME} tabIndex={0}>
              <Image
                src={miWorkflowDiagram}
                alt={DIAGRAM_ALT}
                sizes="(min-width: 1024px) 100vw, 1040px"
                className={DIAGRAM_IMAGE}
              />
            </figure>

            <div className={WORKSTREAM_GRID}>
              {WORKSTREAMS.map((stream, index) => (
                <div
                  key={stream.title}
                  className={index === 0 ? WORKSTREAM_COLUMN : WORKSTREAM_COLUMN_DIVIDED}
                >
                  <h3 className="font-serif text-[clamp(24px,3.2vw,34px)] font-normal leading-[1.14] tracking-[-0.01em]">
                    {stream.title}
                  </h3>
                  <p className="mt-3 text-white/70 lg:mt-[14px]">{stream.body}</p>
                </div>
              ))}
            </div>
          </div>
        </SupportingAppendix>
      </div>

      {/* Next Case Studies */}
      <section id="next-case-study-section" className="relative w-full bg-black overflow-hidden flex flex-col items-center justify-center pb-24 lg:pb-[200px] pt-16 lg:pt-[78px] mt-20 md:mt-[110px] lg:mt-[150px]">
        <NextCaseStudyTicker color="#CEF252" />

        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-12 lg:gap-[200px] relative px-5 lg:px-0">
          {/* PayPal */}
          <Link href={nextPayPal.route} className="group flex w-full max-w-[437px] lg:w-[437px] flex-col gap-4 lg:gap-[27px] items-start">
            <div className="aspect-[437/666] w-full lg:h-[666px] lg:w-[437px] relative lg:shrink-0 rounded-[30px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={nextPayPalPreview.alt}
                src={imageSrc(nextPayPalPreview.image)}
                className="absolute pointer-events-none object-cover h-full"
                style={{ width: "270%", maxWidth: "none", left: "-88%" }}
              />
            </div>
            <p className="font-serif text-[clamp(36px,9vw,64px)] lg:text-[64px] leading-[1.1] lg:leading-[72px] text-white tracking-[-0.64px]">
              {nextPayPal.cardLabel}
            </p>
          </Link>

          {/* Solo */}
          <Link href={nextSolo.route} className="group flex w-full max-w-[437px] lg:w-[437px] lg:shrink-0 flex-col gap-4 lg:gap-[27px] items-start">
            <div className="aspect-[437/666] w-full lg:h-[666px] lg:w-[438px] relative rounded-[30px] lg:shrink-0 overflow-hidden">
              <Image
                src={nextSoloPreview.image}
                alt={nextSoloPreview.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 437px"
              />
            </div>
            <p className="font-serif text-[clamp(36px,9vw,60px)] lg:text-[60px] leading-[1.1] lg:leading-[72px] text-white tracking-[-0.64px] whitespace-nowrap">
              {nextSolo.cardLabel}
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}

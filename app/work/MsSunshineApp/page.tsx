import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import CaseStudyTopBar from "@/components/ui/case-study-top-bar";
import NextCaseStudyTicker from "@/components/ui/next-case-study-ticker";
import ScrollFade from "@/components/ui/scroll-fade";
import SunshinePhoneWalkthrough from "@/components/ui/sunshine-phone-walkthrough";
import { SunshineParentFeed } from "@/components/ui/sunshine-parent-feed";
import { CTA_PILL_SIZE } from "@/components/ui/cta-pill";
import {
  CaseStudyHeader,
  ProjectFacts,
  SupportingAppendix,
  CASE_STUDY_BODY_CLASS,
  CASE_STUDY_FOCUS_CLASS,
  CASE_STUDY_LABEL_TIGHT_CLASS,
  CASE_STUDY_METRIC_LABEL_CLASS,
  CASE_STUDY_STACK_CLASS,
  CASE_STUDY_SUPPORTING_CLASS,
  cx,
} from "@/components/case-study";
import teacherWorkingLate from "@/components/images/Teacher'sApp/TeacherWorkingLate.png";
import { PROJECTS_BY_ID, imageSrc, previewOf } from "@/lib/content";
import { caseStudyMetadata } from "@/lib/seo";
import {
  IconDraftedSummary,
  IconEndOfDay,
  IconFewTaps,
  IconLiveFeed,
  IconOneToMany,
  IconUnseen,
  IconWrittenTwice,
} from "./opportunity-icons";

const project = PROJECTS_BY_ID.solo;
const nextPayPal = PROJECTS_BY_ID.paypal;
const nextPayPalPreview = previewOf(nextPayPal);
const nextMeta = PROJECTS_BY_ID.meta;
const nextMetaPreview = previewOf(nextMeta);

export const metadata = caseStudyMetadata(
  project,
  "Turning a preschool's two-hour manual end-of-day report into one continuous flow — classroom activity to parent update to daily summary — as a tested MVP built in three weeks.",
);

const leagueSpartan = "var(--font-league-spartan)";

/* The same rhythm the PayPal and Meta case studies keep, so the three read
   as one publication. */
const SECTION_GAP = "mt-24 md:mt-[140px] lg:mt-[200px]";
const PAGE_PAD = "px-5 lg:px-[24px]";

const SECTION_TITLE_CLASS =
  "mt-4 max-w-[1100px] text-balance font-serif text-[clamp(32px,5.6vw,64px)] font-normal leading-[1.06] tracking-[-0.015em] lg:mt-[18px]";

/* The hero figure stands on the movie rather than across the page, so
   it steps down from CASE_STUDY_METRIC_VALUE_CLASS's 72px: at 48px it
   holds one line inside the corner it is feathered into. The text-box trim
   class stays, which is what keeps the figure and its label 17px apart
   whatever the size. */
const HERO_METRIC_VALUE_CLASS =
  "metric-figure font-serif text-[clamp(32px,4.4vw,48px)] font-normal leading-none tracking-[-0.01em]";

/* Below and right of the teacher the frame is only fence, lawn and the
   climbing frame — nothing the argument needs, and the one part of the shot
   that stays quiet as it plays. A radial settled into that corner and a
   shallow wash along the bottom edge take it to near-black so the figure can
   sit on it for the whole ten seconds; both have faded out well before they
   reach the teacher, the phone she is holding, or the app screen that rises
   on the right at the end. */
const HERO_FEATHER =
  "radial-gradient(112% 46% at 100% 100%, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.42) 60%, rgba(0,0,0,0) 88%)," +
  " linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.6) 14%, rgba(0,0,0,0.2) 26%, rgba(0,0,0,0) 36%)";

/* The before photograph is lit by one pendant lamp in the top right, and
   the wall it throws into shadow underneath is the darkest part of the
   frame. The scrim only deepens what is already dark there, and clears the
   teacher and her laptop entirely. */
const BEFORE_FEATHER =
  "radial-gradient(118% 74% at 100% 4%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.78) 32%, rgba(0,0,0,0.44) 60%, rgba(0,0,0,0) 86%)," +
  " linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.32) 34%, rgba(0,0,0,0) 64%)";

/* Panel rows sit in a third-width column, so they step down from the page's
   body size the way Meta's do. */
const PANEL_ROW_CLASS = "text-base lg:text-[20px] font-light leading-[1.35]";
const PANEL_CLASS = "flex flex-col";
const PANEL_TITLE_CLASS =
  "mt-3 text-balance font-serif text-[clamp(24px,3.2vw,34px)] font-normal leading-[1.12] tracking-[-0.01em] lg:mt-[14px] lg:min-h-[2.24em]";

/* The strategy column is the only lit thing in the row. The colour is the
   app's own — the teal the product already ships in — written out rather
   than layered over the shared label class, so it never depends on which
   utility the sheet emits last. The scale is CASE_STUDY_LABEL_TIGHT_CLASS's,
   unchanged. */
const ACCENT = "#91dfdf";
const STRATEGY_LABEL_CLASS = "text-sm lg:text-[18px] font-light leading-none text-[#91dfdf]";

/* One offset for everything hanging below a panel title, so all three
   columns start their body on the same line. */
const PANEL_BODY_TOP = "mt-7 lg:mt-[36px]";
/* On desktop each column of rows is one block standing against the one
   beside it: it starts on the same line and, by taking the column's
   remaining height and spacing itself across it, ends on the same line
   too. The gap stays the floor, which is what a column too tall to
   distribute falls back to. */
const ROW_LIST_CLASS = cx(
  PANEL_BODY_TOP,
  "flex flex-col gap-6 lg:flex-1 lg:justify-between lg:gap-[30px]",
);
/* No cards and no rules: a drawing and a sentence, the way Meta's read. */
const ROW_ITEM_CLASS = "flex items-center gap-4 lg:gap-6";
const ROW_ICON_CLASS = "h-11 w-11 shrink-0 text-white lg:h-[52px] lg:w-[52px]";

const COMPARE_HEADING_CLASS =
  "mt-3 text-balance font-serif text-[clamp(22px,3vw,32px)] font-normal leading-[1.15] tracking-[-0.01em] lg:mt-[14px]";

/* The figure the estimate produces, read off the corner of the
   movie. The year is the one that carries the argument; the daily
   number it is built from is stated in full under Impact. */
const HERO_METRIC = { value: "~480 hours/year", label: "Estimated time savings returned" };

type PanelRow = { Icon: ComponentType<{ className?: string }>; text: string };

const STARTED_ROWS: PanelRow[] = [
  { Icon: IconEndOfDay, text: "Teachers reconstructed each child’s day at pickup." },
  { Icon: IconWrittenTwice, text: "The same information was documented, then summarized again." },
  { Icon: IconUnseen, text: "Parents had no visibility between drop-off and pickup." },
];

const BECOMES_ROWS: PanelRow[] = [
  { Icon: IconFewTaps, text: "Teachers log an activity in a few taps" },
  { Icon: IconOneToMany, text: "One update can be applied to multiple children" },
  { Icon: IconLiveFeed, text: "Parents see their child's activity as it happens" },
  { Icon: IconDraftedSummary, text: "At child checkout, AI drafts an editable daily summary" },
];

/* The three changes the product actually makes, numbered so the captions
   under the redesigned screens above can be read straight into them. */
const CHANGES: { number: string; title: string; body: string }[] = [
  {
    number: "01",
    title: "Log once",
    body: "Select an activity, choose the children involved, and add a note only when needed.",
  },
  {
    number: "02",
    title: "Keep parents current",
    body: "Publish the update to each child's private feed, where parents can view it and reply.",
  },
  {
    number: "03",
    title: "AI summary",
    body: "At checkout, the AI generates a daily summary for the teacher to review and edit before sharing.",
  },
];

/* Every screen the story still needs. Nothing is drawn in their place: each
   box names the capture that belongs there. */
/* Two estimates and one change in experience, each carrying the word that
   says which it is. Nothing here was measured after launch. */
const IMPACT: { label: string; value: string; note: string }[] = [
  {
    label: "Teacher Impact",
    value: "~2 hours/day",
    note: "Estimated administrative time removed from the head teacher's schedule.",
  },
  {
    label: "Parent Impact",
    value: "Real-time visibility",
    note: "Parents gain real-time visibility and a direct conversation with teachers instead of waiting until pickup.",
  },
  {
    label: "Business Impact",
    value: "~480 hours/year",
    note: "Estimated staff capacity returned to classroom care, parent service, and school operations.",
  },
];

/* How the three weeks actually ran — one click off the argument, in the
   same disclosure the other case studies use. */
const BEHIND_THE_WORK: { title: string; body: ReactNode }[] = [
  {
    title: "Discovery",
    body: "Mapped the school's reporting workflow and identified the delay between classroom activity, staff documentation, and parent communication.",
  },
  {
    title: "Competitive Analysis",
    body: (
      <>
        Reviewed childcare and school applications to identify five foundations: fast logging,
        bulk actions, flexible workflows, parent communication, and clear daily summaries.{" "}
        <a
          href="/Competitive Analysis - Children Activity Apps.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={cx(
            "text-white underline decoration-white/40 underline-offset-4",
            "transition-colors duration-150 hover:decoration-white",
            CASE_STUDY_FOCUS_CLASS,
          )}
        >
          Read the full analysis (PDF)
        </a>
        .
      </>
    ),
  },
  {
    title: "Product Definition",
    body: "Converted the findings into requirements for teacher logging, private parent feeds, comments, notifications, checkout, and summary generation.",
  },
  {
    title: "Rapid Design and Build",
    body: "Used an AI-assisted workflow across research, product definition, prototyping, and development, moving from early exploration to a working MVP.",
  },
  {
    title: "Validation and Iteration",
    body: "Tested concepts with the client, then refined the working product using feedback from the client and test users.",
  },
];

export default function SoloPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <CaseStudyTopBar />

      {/* Opening: eyebrow, headline, the role in one sentence, then the
          movie across the full measure with the year the work is estimated
          to return feathered into its lower corner. */}
      <div className={cx(PAGE_PAD, "pt-10 lg:pt-[78px]")} style={{ fontFamily: leagueSpartan }}>
        <CaseStudyHeader project={project} />

        <ProjectFacts
          project={project}
          facts={[]}
          className="mt-6 lg:mt-[27px]"
          factClassName={{ role: "lg:w-[861px]" }}
        />

        {/* The movie runs the page's full measure, the way the other two
            case studies open, and is masked by the same rounded frame.
            Portrait on a handset, widescreen from lg; the frame owns the
            aspect ratio, so it reserves its space before the movie loads. */}
        <div className="relative mt-6 aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/15 lg:mt-[27px] lg:aspect-[16/9] lg:rounded-[30px]">
          <video
            src="/videos/TeacherRecordingActivity/TeacherRecordingActivity2.mp4"
            aria-label="A teacher logging a child’s activity in the Ms. Sunshine app on her phone."
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          <div aria-hidden className="absolute inset-0" style={{ background: HERO_FEATHER }} />
          <div className="absolute bottom-0 right-0 p-6 text-right lg:p-12">
            <p className={HERO_METRIC_VALUE_CLASS}>{HERO_METRIC.value}</p>
            <p className={cx(CASE_STUDY_METRIC_LABEL_CLASS, "text-white/60")}>
              {HERO_METRIC.label}
            </p>
          </div>
        </div>
      </div>

      {/* The opportunity. Three columns of one idea — where we started, the
          decision that connects them, what it becomes — all beginning on the
          same line, with the strategy in the middle the only lit thing. */}
      <section
        aria-labelledby="solo-opportunity-title"
        className={cx(PAGE_PAD, SECTION_GAP)}
        style={{ fontFamily: leagueSpartan }}
      >
        <ScrollFade once>
          <p className={CASE_STUDY_LABEL_TIGHT_CLASS}>The Opportunity</p>
          <h2 id="solo-opportunity-title" className={SECTION_TITLE_CLASS}>
            A daily report consumed the time teachers needed elsewhere
          </h2>
          <p className={cx(CASE_STUDY_BODY_CLASS, "mt-6 max-w-[900px] text-white/80 lg:mt-[32px]")}>
            {project.description[0]}
          </p>
        </ScrollFade>

        <div className="mt-12 flex flex-col gap-14 lg:mt-[80px] lg:grid lg:grid-cols-[1fr_minmax(300px,0.95fr)_1fr] lg:items-stretch lg:gap-12 xl:gap-[64px]">
          <div className={PANEL_CLASS}>
            <p className={CASE_STUDY_LABEL_TIGHT_CLASS}>Where We Started</p>
            <h3 className={PANEL_TITLE_CLASS}>Reporting started when the day ended</h3>
            <ul className={ROW_LIST_CLASS}>
              {STARTED_ROWS.map(({ Icon, text }) => (
                <li key={text} className={ROW_ITEM_CLASS}>
                  <Icon className={ROW_ICON_CLASS} />
                  <p className={cx(PANEL_ROW_CLASS, "text-white/85")}>{text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={PANEL_CLASS}>
            <p className={STRATEGY_LABEL_CLASS}>The Strategy</p>
            <h3 className={cx(PANEL_TITLE_CLASS, "text-[#91dfdf]")}>
              Capture the day once.
              <br />
              Use it twice.
            </h3>
            <p className={cx(PANEL_BODY_TOP, PANEL_ROW_CLASS, "text-white/85")}>
              Turn each classroom update into both a real-time parent notification and part of the
              child&rsquo;s end-of-day summary.
            </p>
          </div>

          <div className={PANEL_CLASS}>
            <p className={CASE_STUDY_LABEL_TIGHT_CLASS}>What It Becomes</p>
            <h3 className={PANEL_TITLE_CLASS}>One update, two jobs</h3>
            <ul className={ROW_LIST_CLASS}>
              {BECOMES_ROWS.map(({ Icon, text }) => (
                <li key={text} className={ROW_ITEM_CLASS}>
                  <Icon className={ROW_ICON_CLASS} />
                  <p className={cx(PANEL_ROW_CLASS, "text-white/85")}>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Before and after. One photograph of the work as it was, the
          statement set into the shadow the lamp leaves on the wall behind
          her; against it the delivered flow, replaying on a handset — one
          snack logged for three children and their parents at once. */}
      <section
        aria-labelledby="solo-comparison-title"
        className={cx(PAGE_PAD, SECTION_GAP)}
        style={{ fontFamily: leagueSpartan }}
      >
        <ScrollFade once>
          <p className={CASE_STUDY_LABEL_TIGHT_CLASS}>Before and After</p>
          <h2 id="solo-comparison-title" className={SECTION_TITLE_CLASS}>
            From end-of-day reconstruction to a live record
          </h2>
        </ScrollFade>

        {/* The statement only moves onto the photograph once the frame is wide
            enough to hold it clear of her: below md the crop is a portrait and
            the caption sits beneath it, from md up the frame opens to 3:2 and
            the copy takes the shadow the lamp leaves on the wall. */}
        <ScrollFade once>
          <figure className="relative mt-[50px]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/15 md:aspect-[3/2] lg:rounded-[30px]">
              <Image
                src={teacherWorkingLate}
                alt="A teacher at a dining table after dark, writing up the day's reports on a laptop by lamplight."
                fill
                sizes="(max-width: 1024px) 100vw, calc(100vw - 48px)"
                className="object-cover object-[52%_center] md:object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0 hidden md:block"
                style={{ background: BEFORE_FEATHER }}
              />
            </div>
            <figcaption className="mt-7 md:absolute md:right-0 md:top-[9%] md:mt-0 md:w-full md:max-w-[440px] md:px-6 md:text-right lg:max-w-[520px] lg:px-12">
              <p className={CASE_STUDY_LABEL_TIGHT_CLASS}>Before</p>
              <h3 className={COMPARE_HEADING_CLASS}>The day was written up after it ended</h3>
              <p className={cx(CASE_STUDY_SUPPORTING_CLASS, "mt-4 text-white/70 lg:mt-[18px]")}>
                Teachers completed the reporting work after the day was already over, repeating
                information across individual reports.
              </p>
            </figcaption>
          </figure>
        </ScrollFade>

        {/* After: the flow itself, running. The handset carries the argument
            so it leads the row, and everything the change amounts to — the
            statement, the three moves, the prototype — stands in the column
            beside it. */}
        <div className="mt-16 lg:mt-[96px] lg:grid lg:grid-cols-[minmax(260px,340px)_minmax(0,1fr)] lg:items-center lg:gap-12 xl:gap-[64px]">
          <ScrollFade once>
            <SunshinePhoneWalkthrough className="mx-auto w-[min(280px,66vw)] lg:w-full" />
          </ScrollFade>

          <div className="mt-14 lg:mt-0">
            <ScrollFade once>
              <p className={CASE_STUDY_LABEL_TIGHT_CLASS}>After</p>
              <h3 className={COMPARE_HEADING_CLASS}>The day records itself as it happens</h3>
              <p
                className={cx(
                  CASE_STUDY_SUPPORTING_CLASS,
                  "mt-4 max-w-[520px] text-white/70 lg:mt-[18px]",
                )}
              >
                Each activity becomes a reusable record the moment it happens&mdash;keeping parents
                informed and building the daily report automatically.
              </p>
            </ScrollFade>

            {/* The three changes stated in full, in the order the
                walkthrough beside them performs — PayPal's "three changes
                that mattered" list exactly: number set into the heading, the
                body 18px under it, 39px between items, read down the column
                beside the phone. It sits closer to the paragraph above than
                PayPal's does because a statement introduces it here rather
                than a section title. */}
            <ol className="mt-5 grid list-none grid-cols-1 gap-y-7 lg:mt-[28px] lg:gap-y-[39px]">
              {CHANGES.map((change) => (
                <li key={change.number}>
                  <h4 className="text-balance font-serif text-[clamp(24px,2.6vw,32px)] font-normal leading-[1.15] tracking-[-0.01em] text-white">
                    <span className="whitespace-nowrap text-white/40">
                      {change.number}&nbsp;&mdash;&nbsp;
                    </span>
                    {change.title}
                  </h4>
                  <p className={cx(CASE_STUDY_BODY_CLASS, "mt-3 max-w-[46ch] text-white/70 lg:mt-[18px]")}>
                    {change.body}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex lg:mt-[56px]">
              <a
                href="https://ms-sunshine-app-prototype.vercel.app/home"
                target="_blank"
                rel="noopener noreferrer"
                className={cx(
                  "inline-flex items-center justify-center rounded-full border border-[#919191]",
                  `px-6 lg:px-[30px] ${CTA_PILL_SIZE.xl}`,
                  "font-normal whitespace-nowrap text-white transition-colors duration-150 hover:border-white",
                  CASE_STUDY_FOCUS_CLASS,
                )}
                style={{ fontFamily: leagueSpartan, lineHeight: 1 }}
              >
                Prototype
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact. Two estimates and one change in experience, each labelled
          with the status it actually has. */}
      <section
        aria-labelledby="solo-impact-title"
        className={cx(PAGE_PAD, SECTION_GAP)}
        style={{ fontFamily: leagueSpartan }}
      >
        {/* The last section closes to the right: label, title and every
            figure under them are set flush to the same right edge the
            handset stands on, so the whole argument leans toward the screen
            that proves it. */}
        <ScrollFade once className="lg:text-right">
          <p className={CASE_STUDY_LABEL_TIGHT_CLASS}>Impact</p>
          <h2 id="solo-impact-title" className={cx(SECTION_TITLE_CLASS, "lg:ml-auto")}>
            Less time reporting. More time for children and families.
          </h2>
        </ScrollFade>

        {/* The mirror of the Before and After row: there the handset led and
            the argument stood beside it, here the argument leads and the
            handset closes the page on the right. The three figures and the
            phone share a centre line, so the column reads against it. */}
        <div className="mt-12 lg:mt-[80px] lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(260px,340px)] lg:items-center lg:gap-12 xl:gap-[64px]">
          <div className="lg:text-right">
            <dl className="flex flex-col gap-10 lg:gap-[48px]">
              {IMPACT.map((item) => (
                <div key={item.label}>
                  <dt className={CASE_STUDY_LABEL_TIGHT_CLASS}>{item.label}</dt>
                  <dd className={cx(HERO_METRIC_VALUE_CLASS, "mt-3 lg:mt-[18px]")}>{item.value}</dd>
                  <dd
                    className={cx(
                      CASE_STUDY_METRIC_LABEL_CLASS,
                      "max-w-[520px] text-white/70 lg:ml-auto",
                    )}
                  >
                    {item.note}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Live, not a screenshot: Mei's feed as her guardians actually
              receive it, which is the parent half of the claim above.

              On the wide layout the caption is lifted out of the flow so the
              column measures the handset alone; otherwise the caption's own
              height pushes the phone half a line above the row's centre. */}
          <ScrollFade once className="lg:relative">
            <SunshineParentFeed className="mx-auto mt-14 w-[min(280px,66vw)] lg:mt-0 lg:w-full" />
            <p
              className={cx(
                CASE_STUDY_SUPPORTING_CLASS,
                "mt-6 text-center text-white/50 lg:absolute lg:inset-x-0 lg:top-full lg:mt-[28px]",
              )}
            >
              The parent view, running live.
            </p>
          </ScrollFade>
        </div>
      </section>

      {/* Behind the work. Method and tools, kept one click off the spine of
          the page so the argument reads straight through. */}
      <div className={cx(PAGE_PAD, SECTION_GAP)} style={{ fontFamily: leagueSpartan }}>
        <SupportingAppendix
          id="behind-the-work"
          title="Behind the Work"
          summary="How I moved from a manual workflow to a tested MVP in three weeks"
        >
          {BEHIND_THE_WORK.map((step) => (
            <div key={step.title} className={CASE_STUDY_STACK_CLASS}>
              <p className={CASE_STUDY_LABEL_TIGHT_CLASS}>{step.title}</p>
              <p className="text-white/70">{step.body}</p>
            </div>
          ))}
        </SupportingAppendix>
      </div>

      {/* Next Case Studies */}
      <section
        id="next-case-study-section"
        className="relative w-full overflow-hidden bg-black pb-24 lg:pb-[200px] pt-16 lg:pt-[78px] mt-20 md:mt-[110px] lg:mt-[150px]"
      >
        <NextCaseStudyTicker color={ACCENT} />

        <div className="relative flex flex-col lg:flex-row items-center lg:justify-center gap-12 lg:gap-[200px] px-5 lg:px-0">
          {/* PayPal card */}
          <Link href={nextPayPal.route} className="group flex w-full max-w-[437px] lg:w-[437px] flex-col gap-4 lg:gap-[27px] items-start">
            <div className="relative aspect-[437/666] w-full lg:w-[437px] lg:h-[666px] rounded-[30px] overflow-hidden lg:shrink-0">
              <img
                src={imageSrc(nextPayPalPreview.image)}
                alt={nextPayPalPreview.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="font-serif text-[clamp(36px,9vw,64px)] lg:text-[64px] text-white leading-[1.1] lg:leading-[72px] tracking-[-0.64px]">
              {nextPayPal.cardLabel}
            </p>
          </Link>

          {/* Meta card */}
          <Link href={nextMeta.route} className="group flex w-full max-w-[671px] lg:w-[671px] flex-col gap-4 lg:gap-[27px] items-start">
            <div
              className="relative rounded-[30px] overflow-hidden w-full"
              style={{ aspectRatio: "824 / 606" }}
            >
              <div className="absolute h-full top-0" style={{ left: "-3.69%", width: "130.67%" }}>
                <Image
                  src={nextMetaPreview.image}
                  alt={nextMetaPreview.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="font-serif text-[clamp(36px,9vw,64px)] lg:text-[64px] text-white leading-[1.1] lg:leading-[72px] tracking-[-0.64px] w-full">
              {nextMeta.cardLabel}
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}

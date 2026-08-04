import Link from "next/link";
import Image from "next/image";
import NextCaseStudyTicker from "@/components/ui/next-case-study-ticker";
import CaseStudyTopBar from "@/components/ui/case-study-top-bar";

import daySchedule from "@/components/images/Teacher'sApp/DaySchedule.png";

import competitiveAnalysisCover from "@/components/images/Teacher'sApp/CompetitiveAnalysisCover.png";
import middleCopyVideoBg from "@/components/images/Teacher'sApp/AppFlow/MiddleCopyVideoBg.png";
import home from "@/components/images/Teacher'sApp/NewHomeScreenV2.png";
import backgroundHandYellow from "@/components/images/Teacher'sApp/AppFlow/BackgroundhandYellow.png";
import activityFlow1 from "@/components/images/Teacher'sApp/AppFlow/ActivityFlow1.png";
import activityFlow3 from "@/components/images/Teacher'sApp/AppFlow/ActivityFlow3.png";
import activityFlow5 from "@/components/images/Teacher'sApp/AppFlow/ActivityFlow5.png";
import activityFlow6 from "@/components/images/Teacher'sApp/AppFlow/ActivityFlow6.png";
import { ActivityFlowCarousel } from "@/components/ui/activity-flow-carousel";
import BackToHomeButton from "@/components/ui/back-to-home-button";
import { CTA_PILL_SIZE } from "@/components/ui/cta-pill";
import {
  CASE_STUDY_METRIC_LABEL_CLASS,
  CASE_STUDY_METRIC_VALUE_CLASS,
} from "@/components/case-study";
import {
  PROJECTS_BY_ID,
  caseStudyResults,
  caseStudyEyebrowText,
  imageSrc,
  previewOf,
  resultDetail,
} from "@/lib/content";
import { caseStudyMetadata } from "@/lib/seo";

const project = PROJECTS_BY_ID.solo;
const results = caseStudyResults(project);
const nextPayPal = PROJECTS_BY_ID.paypal;
const nextPayPalPreview = previewOf(nextPayPal);
const nextMeta = PROJECTS_BY_ID.meta;
const nextMetaPreview = previewOf(nextMeta);

export const metadata = caseStudyMetadata(
  project,
  "A solo, AI-assisted build of the Ms. Sunshine App — automating a preschool's daily activity reporting and saving the head teacher an estimated 480 hours a year.",
);

const leagueSpartan = "var(--font-league-spartan)";

const activityFlowItems = [
  { id: 1, src: activityFlow1, alt: "App flow screen 1" },
  { id: 3, src: activityFlow3, alt: "App flow screen 3" },
  { id: 5, src: activityFlow5, alt: "App flow screen 5" },
  { id: 6, src: activityFlow6, alt: "App flow screen 6" },
];

export default function SoloPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <CaseStudyTopBar />
      {/* Top section */}
      <section className="w-full bg-black px-5 pb-5 lg:px-[24px] lg:pb-[24px]">
        <div className="flex flex-col gap-10 lg:gap-[62px]">

          <div className="flex w-full lg:w-[1335px] max-w-full flex-col gap-[14px]" style={{ fontFamily: leagueSpartan }}>
            <p className="text-[18px] font-light leading-none text-white/60">{caseStudyEyebrowText(project)}</p>
            <h1 className="font-serif text-[clamp(40px,10vw,96px)] lg:text-[96px] leading-[1.04] lg:leading-[96px] tracking-[-0.015em]">
              {project.caseStudyHeadline}
            </h1>
          </div>

          <div className="flex w-full flex-col lg:flex-row items-start gap-10 lg:gap-[184px] py-0 lg:py-[42px]" style={{ fontFamily: leagueSpartan }}>
            <div className="flex w-full lg:w-[861px] max-w-full flex-col gap-[14px]">
              <p className="text-[18px] font-light leading-none text-white/60">My Role</p>
              <p className="text-[clamp(20px,4.5vw,32px)] lg:text-[32px] font-light leading-[1.32] lg:leading-[42px]">
                {project.role}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-[80px] lg:ml-auto">
              <div className="flex flex-col gap-[14px]">
                <p className="text-[18px] font-light leading-none text-white/60">Timeline</p>
                <p className="text-[clamp(20px,4.5vw,32px)] lg:text-[32px] font-light leading-[1.32] lg:leading-[42px]">{project.timeline}</p>
              </div>
              <div className="flex flex-col gap-[14px]">
                <p className="text-[18px] font-light leading-none text-white/60">Platforms</p>
                <p className="text-[clamp(20px,4.5vw,32px)] lg:text-[32px] font-light leading-[1.32] lg:leading-[42px]">{project.scope.platforms.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DaySchedule — full bleed */}
      <section className="w-full">
        <Image
          src={daySchedule}
          alt="A teacher's daily schedule"
          priority
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Introduction / Problem */}
      <section className="w-full px-5 lg:px-[24px] pt-10 lg:pt-[24px]" style={{ fontFamily: leagueSpartan }}>
        <div className="flex w-full max-w-[1539px] flex-col gap-[14px]">
          <p className="text-[18px] font-light leading-none text-white/60">Problem</p>
          <div className="text-[clamp(20px,4.5vw,48px)] lg:text-[48px] font-light leading-[1.2] lg:leading-[56px] space-y-8 lg:space-y-[56px]">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="w-full flex flex-col lg:items-end gap-[45px] lg:gap-[110px] pt-16 lg:pt-[200px] pb-[67px] lg:pb-[140px]">
        <div className="flex flex-col gap-[14px] w-full max-w-[1476px] px-5 lg:pl-0 lg:pr-[24px]" style={{ fontFamily: leagueSpartan }}>
          <p className="text-[18px] font-light leading-none text-white/60">Competitive Analysis</p>
          <div className="text-[clamp(20px,4.5vw,32px)] lg:text-[32px] font-light leading-[1.32] lg:leading-[42px] w-full max-w-[700px]">
            <p>
              Using ChatGPT and Claude, I ran a structured teardown of children&rsquo;s activity and school apps (full analysis linked below). Key patterns:
            </p>
            <ul className="list-disc pl-8 lg:pl-[48px]">
              <li>Fast teacher logging</li>
              <li>Strong parent communication</li>
              <li>Bulk actions for efficiency</li>
              <li>Simple but flexible workflows</li>
              <li>Clear end-of-day summaries</li>
            </ul>
          </div>
        </div>

        <div
          className="relative w-full max-w-[1476px] aspect-[1476/916] overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: "#91dfdf" }}
        >
          <Image
            src={middleCopyVideoBg}
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
          <div className="relative z-10 w-full h-full flex items-center justify-center px-6 lg:px-[114px] py-6 lg:py-[109px]">
            <a
              href="/Competitive Analysis - Children Activity Apps.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <Image
                src={competitiveAnalysisCover}
                alt="Competitive analysis cover — Children Activity & School Activity Apps"
                className="rounded-[10px] w-full h-full object-cover opacity-95 cursor-pointer"
                width={1248}
                height={698}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Design & prototype — ActivityFlow carousel */}
      <section className="w-full pb-24 lg:pb-[200px] pt-7 lg:pt-[28px]" style={{ fontFamily: leagueSpartan }}>
        <div className="flex flex-col items-center gap-[14px] px-5 lg:px-[24px] mb-8 lg:mb-10 text-center">
          <p className="text-[18px] font-light leading-none text-white/60">Design &amp; Prototype</p>
          <p className="text-[clamp(18px,2.2vw,22px)] font-light leading-[1.32] max-w-[700px]">
            From the PRD, I used Google Stitch and Figma First Draft to accelerate early exploration, then refined an MVP in Figma and Replit for usability testing.
          </p>
        </div>
        <ActivityFlowCarousel items={activityFlowItems} />
      </section>

      {/* End — yellow-hand panel + closing copy */}
      <section className="w-full flex flex-col lg:flex-row items-start gap-10 lg:gap-[24px] pb-20 lg:pb-[120px] px-5 lg:px-0 lg:pr-[24px]">
        {/* Left: yellow background + phone + QR code */}
        <div
          className="relative w-full lg:w-[45%] aspect-[985/1230] lg:shrink-0 overflow-hidden"
        >
          <Image
            src={backgroundHandYellow}
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
          <div className="relative z-10 w-full h-full flex items-start justify-center pt-[7%]">
            <a
              href="https://ms-sunshine-app.vercel.app/home"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[46%] aspect-[450/944]"
            >
              <Image
                src={home}
                alt="App home screen"
                fill
                className="object-cover"
              />
            </a>
          </div>
        </div>

        {/* Right: closing copy */}
        <div
          className="flex flex-col items-start min-w-0 w-full"
          style={{ fontFamily: leagueSpartan }}
        >
          <div className="flex flex-col gap-10 lg:gap-[56px] w-full">
            <div className="flex flex-col gap-[14px] text-white">
              <p className="text-[18px] font-light leading-none text-white/60">Things I Did:</p>
              {results.map((result) => (
                <div key={result.value}>
                  <p className={`${CASE_STUDY_METRIC_VALUE_CLASS} text-white`}>{result.value}</p>
                  <p className={`${CASE_STUDY_METRIC_LABEL_CLASS} text-white/70`}>{resultDetail(result)}</p>
                </div>
              ))}
              <p className="text-[clamp(18px,2.2vw,22px)] font-light leading-[1.32]">
                Once concepts were validated with the client, I used Replit to turn designs into a working build, then iterated on real feedback from the client and test users. The shipped app removes manual end-of-day reporting &mdash; an estimated 2 hours of the head teacher&rsquo;s day, or roughly 480 hours across a ~240-day working year. It does the following:
              </p>
              <ul className="text-[clamp(18px,2.2vw,22px)] font-light leading-[1.32] list-disc pl-6 lg:pl-[36px] space-y-4 sm:space-y-5 lg:space-y-[24px]">
                <li>
                  Automates activity reporting through a simple teacher workflow that allows staff to select an activity, choose the child or children involved, and add a note when needed. Once submitted, the update is automatically logged in each child&rsquo;s activity feed for parents to view.
                </li>
                <li>
                  Triggered by the check-out action, the app automatically generates an AI-powered end-of-day summary of the child&rsquo;s activities. The head teacher can review and edit the summary as needed before it is shared with parents.
                </li>
                <li>
                  In the parent portal, parents can only view their own child&rsquo;s feed and communicate with teachers in real time through comments on activity updates, with notifications sent for each reply.
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:gap-[25px] lg:pl-[42px]">
              <BackToHomeButton
                className="justify-center"
                size="xl"
                fontFamily={leagueSpartan}
              />
              <a
                href="https://ms-sunshine-app.vercel.app/home"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center rounded-full border border-[#919191] px-6 lg:px-[30px] ${CTA_PILL_SIZE.xl} font-normal leading-none whitespace-nowrap text-white transition-colors duration-150 hover:border-white`}
                style={{ fontFamily: leagueSpartan }}
              >
                Prototype
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Next Case Study section */}
      <section id="next-case-study-section" className="relative w-full bg-black overflow-hidden pt-16 lg:pt-[78px] pb-24 lg:pb-[200px]">
        <NextCaseStudyTicker color="#066c84" />

        {/* Cards row */}
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

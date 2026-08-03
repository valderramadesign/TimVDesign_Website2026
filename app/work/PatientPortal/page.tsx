import Link from "next/link";
import Image from "next/image";
import NextCaseStudyTicker from "@/components/ui/next-case-study-ticker";
import CaseStudyTopBar from "@/components/ui/case-study-top-bar";
import BackToHomeButton from "@/components/ui/back-to-home-button";
import { CTA_PILL_SIZE } from "@/components/ui/cta-pill";

import conceptGuidedConcierge from "@/components/images/Patient Portal/Concept_GuidedConcierge.png";
import conceptNextBestAction from "@/components/images/Patient Portal/Concept_NextBestAction.png";
import conceptMyCareJourney from "@/components/images/Patient Portal/Concept_MyCareJourney.png";
import workflowDiagram from "@/components/images/Patient Portal/WorkflowDiagram.svg";
import macbookSutter from "@/components/images/Patient Portal/MacbookSutter.png";

import carousel01 from "@/components/images/Patient Portal/Carousel_01.png";
import carousel02 from "@/components/images/Patient Portal/Carousel_02.png";
import carousel03 from "@/components/images/Patient Portal/Carousel_03.png";
import carousel04 from "@/components/images/Patient Portal/Carousel_04_nurse.png";
import carousel05 from "@/components/images/Patient Portal/Carousel_05.png";
import carousel06 from "@/components/images/Patient Portal/Carousel_06.png";
import carousel07 from "@/components/images/Patient Portal/Carousel_07.png";
import carousel08 from "@/components/images/Patient Portal/Carousel_08_teal.png";
import carousel09 from "@/components/images/Patient Portal/Carousel_09.png";
import carousel10 from "@/components/images/Patient Portal/Carousel_10.png";

import {
  PROJECTS_BY_ID,
  caseStudyEyebrowText,
  imageSrc,
  previewOf,
} from "@/lib/content";
import { caseStudyMetadata } from "@/lib/seo";

const project = PROJECTS_BY_ID.sutter;
const nextPayPal = PROJECTS_BY_ID.paypal;
const nextPayPalPreview = previewOf(nextPayPal);
const nextMeta = PROJECTS_BY_ID.meta;
const nextMetaPreview = previewOf(nextMeta);

export const metadata = caseStudyMetadata(
  project,
  "A 2.5-day design exercise reimagining the Sutter Health MyHealthOnline portal around a simpler appointment-booking flow.",
);

const leagueSpartan = "var(--font-league-spartan)";

const carouselItems = [
  { id: 1, src: carousel01, orientation: "landscape" },
  { id: 2, src: carousel02, orientation: "portrait" },
  { id: 3, src: carousel03, orientation: "landscape" },
  { id: 4, src: carousel04, orientation: "portrait" },
  { id: 5, src: carousel05, orientation: "landscape" },
  { id: 6, src: carousel06, orientation: "portrait" },
  { id: 7, src: carousel07, orientation: "landscape" },
  { id: 8, src: carousel08, orientation: "portrait" },
  { id: 9, src: carousel09, orientation: "landscape" },
  { id: 10, src: carousel10, orientation: "portrait" },
] as const;

export default function PatientPortalPage() {
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

      {/* Hero — full bleed */}
      <section className="w-full">
        <video
          src="/videos/PatientPortal/PatientPortalTransformation.mp4"
          className="w-full h-auto object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </section>

      {/* Problem */}
      <section className="w-full px-5 lg:px-[24px] pt-10 lg:pt-[125px] pb-16 lg:pb-[125px]" style={{ fontFamily: leagueSpartan }}>
        <div className="flex w-full max-w-[1539px] flex-col gap-[14px]">
          <p className="text-[18px] font-light leading-none text-white/60">Problem</p>
          <div className="text-[clamp(20px,4.5vw,48px)] lg:text-[48px] font-light leading-[1.2] lg:leading-[56px] space-y-8 lg:space-y-[56px]">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery — three concepts */}
      <section className="w-full px-5 lg:px-[24px] pb-16 lg:pb-[200px]" style={{ fontFamily: leagueSpartan }}>
        <div className="flex w-full max-w-[1805px] flex-col gap-10 lg:gap-[62px]">
          <div className="flex w-full max-w-[1476px] flex-col gap-[14px]">
            <p className="text-[18px] font-light leading-none text-white/60">Discovery</p>
            <p className="text-[clamp(20px,4.5vw,32px)] lg:text-[32px] font-light leading-[1.32] lg:leading-[42px] max-w-[1100px]">
              I explored three distinctly different approaches to improving the portal &mdash; a prioritized task dashboard, a guided conversational experience, and a chronological care journey &mdash; each aimed at reducing cognitive load and helping patients understand what needs attention, what their health information means, and what to do next.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-[26px]">
            {/* Large concept */}
            <div className="relative w-full lg:w-[1186px] lg:shrink-0 aspect-[1186/818] rounded-[24px] overflow-hidden">
              <Image src={conceptGuidedConcierge} alt="Guided Concierge concept" fill className="object-cover" />
            </div>

            {/* Stacked concepts — combined height matches the large concept */}
            <div className="flex flex-col gap-6 lg:gap-[26px] w-full lg:flex-1 lg:min-w-0">
              <div className="relative w-full aspect-[590/390] lg:aspect-auto lg:flex-1 rounded-[24px] overflow-hidden">
                <Image src={conceptNextBestAction} alt="Next Best Action concept" fill className="object-cover object-left-top" />
              </div>
              <div className="relative w-full aspect-[590/401] lg:aspect-auto lg:flex-1 rounded-[24px] overflow-hidden">
                <Image src={conceptMyCareJourney} alt="My Care Journey concept" fill className="object-cover object-left-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-assisted workflow */}
      <section className="w-full px-5 lg:px-[24px] pb-16 lg:pb-[200px]" style={{ fontFamily: leagueSpartan }}>
        <div className="flex w-full flex-col gap-10 lg:gap-[62px]">
          <p className="text-[18px] font-light leading-none text-white/60 lg:self-end lg:ml-auto lg:w-[calc(100%-276px)]">AI-Assisted Workflow</p>
          <div className="relative w-full aspect-[1468/795] lg:ml-auto lg:w-[calc(100%-276px)]">
            <Image src={workflowDiagram} alt="End-to-end AI-assisted design workflow diagram" fill className="object-contain object-right" />
            <p className="absolute right-0 bottom-[4%] lg:bottom-[9%] w-[55%] max-w-[420px] text-[12px] sm:text-base lg:text-[18px] font-light leading-[1.4] lg:leading-[1.5] text-white">
              I used an end-to-end AI-assisted workflow to shape the design strategy, accelerate iteration, and prototype a frictionless doctor appointment experience for patients.
            </p>
          </div>
        </div>
      </section>

      {/* Prototype carousel — auto-scrolling marquee */}
      <section className="w-full pb-16 lg:pb-[200px]" style={{ fontFamily: leagueSpartan }}>
        <div className="group relative w-full overflow-hidden">
          <div
            className="flex w-max items-center gap-[150px] group-hover:[animation-play-state:paused]"
            style={{ animation: "ticker-scroll 60s linear infinite", willChange: "transform" }}
          >
            {[...carouselItems, ...carouselItems].map((item, i) => (
              <div
                key={`${item.id}-${i}`}
                className="shrink-0 flex items-center h-[300px] sm:h-[380px] lg:h-[500px]"
              >
                <img
                  src={item.src.src}
                  alt=""
                  aria-hidden
                  className={`w-auto rounded-[20px] object-cover ${
                    item.orientation === "portrait" ? "h-full" : "h-[78%]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing — Things I did + Macbook */}
      <section className="w-full flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-[80px] px-5 lg:px-[24px] pb-20 lg:pb-[200px]">
        <div className="flex flex-col items-start min-w-0 w-full lg:flex-1" style={{ fontFamily: leagueSpartan }}>
          <div className="flex flex-col gap-10 lg:gap-[56px] w-full">
            <div className="flex flex-col gap-[14px] text-white">
              <p className="text-[18px] font-light leading-none text-white/60">Things I Did:</p>
              <ul className="text-[clamp(18px,2.2vw,22px)] font-light leading-[1.4] list-disc pl-6 lg:pl-[36px] space-y-4 sm:space-y-5 lg:space-y-[24px]">
                <li>
                  After thoroughly researching the industry, key personas, and their pain points, I used an AI-assisted, context-engineered workflow to accelerate the design process from discovery to a working appointment-booking prototype.
                </li>
                <li>
                  Drawing on my research and an AI-assisted design-strategy brief, I combined the Next Best Action, Care Journey, and Guided Concierge concepts into a cleaner, more efficient dashboard that removes unnecessary content and prioritizes patients&rsquo; needs based on their key friction points and jobs to be done.
                </li>
                <li>
                  For the MVP, I focused on a simple, intuitive appointment-booking flow designed to feel effortless &mdash; even when patients aren&rsquo;t feeling their best.
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap items-center gap-4 lg:gap-[24px]">
              <BackToHomeButton
                className="justify-center"
                size="xl"
                fontFamily={leagueSpartan}
              />
              <a
                href="https://v-health-patient-portal-kysfsc4lp.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center rounded-full border border-white/30 px-6 lg:px-[30px] ${CTA_PILL_SIZE.xl} font-normal leading-none whitespace-nowrap text-white transition-colors duration-150 hover:border-white`}
                style={{ fontFamily: leagueSpartan }}
              >
                Prototype
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[52%] lg:shrink-0">
          <a
            href="https://v-health-patient-portal-kysfsc4lp.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full aspect-[1138/696] rounded-[24px] overflow-hidden"
          >
            <Image src={macbookSutter} alt="The redesigned patient portal on desktop" fill className="object-cover" />
          </a>
        </div>
      </section>

      {/* Next Case Study section */}
      <section id="next-case-study-section" className="relative w-full bg-black overflow-hidden pt-16 lg:pt-[78px] pb-24 lg:pb-[200px]">
        <NextCaseStudyTicker color="#167975" />

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

import Image from "next/image";
import closingImage from "@/components/images/DoorDash Dashboard/TableWithLaptopAndPhone.png";
import Link from "next/link";
import NextCaseStudyTicker from "@/components/ui/next-case-study-ticker";
import CaseStudyTopBar from "@/components/ui/case-study-top-bar";
import ScrollFade from "@/components/ui/scroll-fade";
import DashboardAssembleReveal from "@/components/ui/dashboard-assemble-reveal";
import phoneWithAppRollover from "@/components/images/Teacher'sApp/PhoneWithApp_Rollover.png";
import workflow from "@/components/images/DoorDash Dashboard/WorkflowDiagram.svg";
import actionFirstDashboard from "@/components/images/DoorDash Dashboard/minimal-action-first-dashboard-negative-transparent.png";
import decisionBriefDashboard from "@/components/images/DoorDash Dashboard/decision-brief-dashboard-negative-transparent.png";
import missionControlDashboard from "@/components/images/DoorDash Dashboard/promotion-profitability-console-negative-transparent.png";
import personaMarketplaceOps from "@/components/images/DoorDash Dashboard/persona-marketplace-ops.png";
import personaMerchantSuccess from "@/components/images/DoorDash Dashboard/persona-merchant-success.png";
import personaGrowthFinance from "@/components/images/DoorDash Dashboard/persona-growth-finance.png";

export const metadata = {
  title: "DoorDash Dashboard — Timothy Valderrama",
};

const leagueSpartan = "var(--font-league-spartan)";

function PersonaRow({ dotColor, label, copy }: { dotColor: string; label: string; copy: string }) {
  return (
    <div className="flex items-start gap-[14px]">
      <span
        className="mt-[7px] size-[6px] shrink-0 rounded-[3px]"
        style={{ backgroundColor: dotColor }}
      />
      <div className="flex flex-col gap-1">
        <p className="text-[14px] font-bold uppercase leading-none tracking-[0.077em] text-white/35">
          {label}
        </p>
        <p className="text-lg lg:text-[24px] font-normal leading-snug lg:leading-[30px] text-white/80">
          {copy}
        </p>
      </div>
    </div>
  );
}

const PERSONAS = [
  {
    role: "Marketplace Operations Manager",
    avatar: personaMarketplaceOps,
    mainJob: "Keep the marketplace balanced in real time",
    dashboardNeed: "See where demand, Dasher supply, and delivery reliability are breaking",
    friction: "Too much data, slow loading, unclear root cause",
  },
  {
    role: "Merchant Success Manager",
    avatar: personaMerchantSuccess,
    mainJob: "Improve merchant/store performance",
    dashboardNeed: "Identify merchants causing delays, refunds, cancellations, or missing items",
    friction: "Merchant issues buried in broad dashboards, weak storytelling",
  },
  {
    role: "Growth, Promotions & Finance Analyst",
    avatar: personaGrowthFinance,
    mainJob: "Evaluate growth efficiency and profitability",
    dashboardNeed: "Understand whether promos and incentives create profitable lift",
    friction: "Hard to connect growth metrics, margin, incrementality, and cost",
  },
];

const DISCOVERY_CONCEPTS = [
  {
    title: "Priority + Action Operating System",
    description: "Connects planning, variance, action, and outcome.",
    image: actionFirstDashboard,
    alt: "Minimal action-first dashboard concept",
    variant: "action" as const,
  },
  {
    title: "Decision Brief Dashboard",
    description: "Turns data into a clear business story and decision path.",
    image: decisionBriefDashboard,
    alt: "Decision brief dashboard concept",
    variant: "brief" as const,
  },
  {
    title: "Role-Based Mission Control",
    description: "Gives each user a dashboard designed around their job.",
    image: missionControlDashboard,
    alt: "Role-based mission control dashboard concept",
    variant: "console" as const,
  },
];

export default function DoorDashDashboardCaseStudy() {
  return (
    <main className="bg-black text-white">
      <CaseStudyTopBar />

      {/* Top: nav, title, specs (above hero image) */}
      <section className="w-full bg-black px-5 pb-5 lg:px-[24px] lg:pb-[24px]">
        <div className="flex flex-col gap-10 lg:gap-[62px]">
          {/* Title block */}
          <ScrollFade direction="left" once={true}>
            <div
              className="flex w-full lg:w-[1335px] max-w-full flex-col gap-[14px]"
              style={{ fontFamily: leagueSpartan }}
            >
              <p className="text-sm lg:text-[18px] font-light leading-none text-white/60">
                See the Signal. Seize the Opportunity.
              </p>
              <h1 className="font-serif leading-[1.02] lg:leading-[96px] tracking-[-0.015em] text-[clamp(36px,9vw,96px)] lg:text-[96px]">
                Turning marketplace signals into confident action.
              </h1>
            </div>
          </ScrollFade>

          {/* Project specs */}
          <div
            className="flex flex-col lg:flex-row w-full items-start gap-10 lg:gap-[64px] py-6 lg:py-[42px]"
            style={{ fontFamily: leagueSpartan }}
          >
            <ScrollFade direction="left" once={true}>
              <div className="flex w-full lg:w-[861px] max-w-full flex-col gap-[14px]">
                <p className="text-sm lg:text-[18px] font-light leading-none text-white/60">My Role</p>
                <p className="text-lg lg:text-[32px] font-light leading-snug lg:leading-[42px]">
                  By combining AI-driven insights with rapid design iteration, I transformed a cluttered dashboard into a clear, scannable experience &mdash; surfacing critical information so users can quickly identify and resolve operational friction.
                </p>
              </div>
            </ScrollFade>
            <ScrollFade direction="right" once={true} className="lg:ml-auto w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10 lg:gap-[80px]">
                <div className="flex flex-col gap-[14px]">
                  <p className="text-sm lg:text-[18px] font-light leading-none text-white/60">Timeline</p>
                  <p className="text-lg lg:text-[32px] font-light leading-snug lg:leading-[42px]">
                    2 days
                  </p>
                </div>
                <div className="flex w-full sm:w-[486px] lg:w-[260px] flex-col gap-[14px]">
                  <p className="text-sm lg:text-[18px] font-light leading-none text-white/60">Platforms</p>
                  <p className="text-lg lg:text-[32px] font-light leading-snug lg:leading-[42px]">
                    Mobile &amp; desktop
                  </p>
                </div>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="relative w-full">
        <div className="relative aspect-[1837/953] w-full overflow-hidden">
          <video
            src="/videos/DoorDashDashboard/DoorDashDashboardHeroMovie_v2.mp4"
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>

      {/* Body */}
      <section className="relative w-full px-5 lg:px-[37px] pt-8 lg:pt-[36px]">
        {/* Introduction */}
        <ScrollFade direction="left">
          <div
            className="flex w-full max-w-[1563px] flex-col gap-[14px]"
            style={{ fontFamily: leagueSpartan }}
          >
            <p className="text-sm lg:text-[18px] font-light text-white/60">Problem</p>
            <p className="text-[clamp(20px,4.5vw,48px)] lg:text-[48px] font-light leading-[1.3]">
              Operations, merchant success, and finance teams all rely on the same marketplace data, but the signals that matter most to each of them are buried across cluttered, one-size-fits-all reporting. By the time an issue is spotted, it&apos;s already cost the business time, revenue, or merchant trust.
              <br />
              <br />
              This self-initiated concept explores how a single dashboard experience could surface the right signal, to the right person, at the right moment &mdash; and turn that signal directly into action.
            </p>
          </div>
        </ScrollFade>

        {/* Personas */}
        <div className="mt-24 lg:mt-[200px] flex flex-col gap-10 lg:gap-[54px]">
          <ScrollFade direction="left">
            <p className="text-sm lg:text-[18px] font-light text-white/60" style={{ fontFamily: leagueSpartan }}>
              Personas and Jobs-to-be-done
            </p>
          </ScrollFade>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[68px] lg:gap-[81px]">
            {PERSONAS.map((persona, i) => (
              <ScrollFade
                key={persona.role}
                direction={i % 2 === 0 ? "left" : "right"}
                className="flex flex-col gap-6 lg:gap-[28px] w-[80.5%] mx-auto"
                style={{ fontFamily: leagueSpartan }}
              >
                <Image
                  src={persona.avatar}
                  alt={`${persona.role} persona portrait`}
                  className="h-[200px] w-[200px] lg:h-[260px] lg:w-[260px] self-center rounded-full object-cover"
                  sizes="260px"
                />
                <div className="flex flex-col gap-4 lg:gap-[15px]">
                  <h3 className="text-[22px] lg:text-[28px] font-bold leading-tight tracking-[-0.15px]">
                    {persona.role}
                  </h3>
                  <div className="h-px w-full bg-white/[0.08]" />
                </div>
                <div className="flex flex-col gap-7 lg:gap-[34px]">
                  <PersonaRow dotColor="#60a5fa" label="Main Job" copy={persona.mainJob} />
                  <PersonaRow dotColor="#34d399" label="Primary Dashboard Need" copy={persona.dashboardNeed} />
                  <PersonaRow dotColor="#f87171" label="Friction Point" copy={persona.friction} />
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>

        {/* Workflow + commentary */}
        <div className="mt-24 lg:mt-[200px] flex w-full flex-col gap-10 lg:gap-[62px]" style={{ fontFamily: leagueSpartan }}>
          <p className="text-sm lg:text-[18px] font-light leading-none text-white/60 lg:self-end lg:ml-auto lg:w-[calc(100%-276px)]">
            AI-Assisted Workflow
          </p>
          <div className="relative w-full aspect-[1482/795] lg:ml-auto lg:w-[calc(100%-276px)]">
            <Image
              src={workflow}
              alt="Workflow diagram"
              fill
              className="object-contain object-right"
            />
            <p className="absolute right-0 bottom-[4%] lg:bottom-[9%] w-[55%] max-w-[420px] text-[12px] sm:text-base lg:text-[18px] font-light leading-[1.4] lg:leading-[1.5] text-white">
              I used an end-to-end AI-assisted workflow &mdash; from ChatGPT-structured
              discovery through Figma iteration and Claude Code prototyping &mdash; to
              shape the design strategy, accelerate iteration, and turn scattered
              signals into a clear, actionable dashboard experience.
            </p>
          </div>
        </div>

        {/* Discovery */}
        <div className="mt-24 lg:mt-[200px] flex flex-col gap-16 lg:gap-[100px]">
          <ScrollFade direction="left">
            <p className="text-sm lg:text-[18px] font-light text-white/60" style={{ fontFamily: leagueSpartan }}>
              Discovery
            </p>
          </ScrollFade>

          {DISCOVERY_CONCEPTS.map((concept, i) => (
            <div
              key={concept.title}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 lg:gap-[60px]`}
            >
              <DashboardAssembleReveal
                image={concept.image}
                alt={concept.alt}
                variant={concept.variant}
                className="relative w-full lg:w-[54%] shrink-0 overflow-hidden rounded-2xl lg:rounded-[24px] bg-white/5"
                style={{ aspectRatio: `${concept.image.width} / ${concept.image.height}` }}
              />
              <ScrollFade
                direction={i % 2 === 0 ? "right" : "left"}
                className="flex w-full lg:w-[40%] flex-col gap-[14px]"
                style={{ fontFamily: leagueSpartan }}
              >
                <h3
                  className="text-[clamp(34px,6.3vw,67px)] lg:text-[67px] leading-[1.04] tracking-[-0.01em] text-[#f5006e]"
                  style={{ fontFamily: "var(--font-pt-serif)" }}
                >
                  {concept.title}
                </h3>
                <p className="text-[17px] lg:text-[28px] font-normal leading-snug lg:leading-[34px] text-white/95">
                  {concept.description}
                </p>
              </ScrollFade>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="relative w-full px-5 lg:px-[37px] mt-24 lg:mt-[200px]">
        <div className="relative w-full overflow-hidden rounded-2xl lg:rounded-[24px]">
          <div className="relative aspect-[1726/911] w-full">
            <a
              href="https://door-dash-dashboard-amber.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the DoorDash dashboard prototype"
              className="absolute inset-0 z-10 block"
            >
              <Image
                src={closingImage}
                alt="DoorDash dashboard shown across laptop and phone"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
            </a>
          </div>

          <ScrollFade
            direction="left"
            className="pointer-events-none absolute inset-x-0 z-20 flex flex-col gap-10 lg:gap-[56px] px-6 py-10 sm:px-10 lg:px-[64px] lg:py-0 lg:top-[9.7%]"
            style={{ fontFamily: leagueSpartan }}
          >
            <div className="pointer-events-auto flex flex-col gap-6 lg:gap-8 max-w-[560px]">
              <p className="text-sm lg:text-[18px] font-light">Things I Did:</p>
              <ul className="ml-[24px] flex list-disc flex-col gap-3 lg:gap-[18px] text-base lg:text-[22px] font-light leading-[1.5] lg:leading-[1.4]">
                <li>
                  By combining the personas&apos; pain points and jobs-to-be-done with
                  the strongest ideas from the discovery phase, I created a cleaner,
                  more scannable dashboard homepage that highlights the day&apos;s most
                  important issues requiring the user&apos;s attention.
                </li>
                <li>
                  Once users select an issue, the AI quickly summarizes its cause,
                  then guides them through a step-by-step resolution process &mdash;
                  acting as a collaborator to help solve the problem efficiently and
                  effectively.
                </li>
              </ul>
            </div>

            <div className="pointer-events-auto flex flex-wrap items-center gap-3 lg:gap-[25px]">
              <Link
                href="/"
                className="inline-flex items-center rounded-full bg-[#484848] px-6 lg:px-[30px] py-3 lg:py-[16px] text-lg lg:text-[32px] font-normal leading-none whitespace-nowrap text-white transition-colors duration-150 hover:bg-[#606060]"
                style={{ fontFamily: "var(--font-league-spartan)" }}
              >
                Back to Homepage
              </Link>
              <a
                href="https://door-dash-dashboard-amber.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-[#919191] px-6 lg:px-[30px] py-3 lg:py-[16px] text-lg lg:text-[32px] font-normal leading-none whitespace-nowrap text-white transition-colors duration-150 hover:border-white"
                style={{ fontFamily: "var(--font-league-spartan)" }}
              >
                Prototype
              </a>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Next Case Studies */}
      <section id="next-case-study-section" className="relative w-full overflow-hidden bg-black pb-24 lg:pb-[200px] pt-12 lg:pt-[78px] mt-16 lg:mt-[100px]">
        <NextCaseStudyTicker color="#f5006e" />

        <div className="relative flex flex-col lg:flex-row items-center lg:justify-center gap-12 lg:gap-[200px] px-5 lg:px-0">
          {/* PayPal */}
          <Link href="/work/paypal" className="group flex w-full max-w-[437px] lg:w-[437px] flex-col gap-4 lg:gap-[27px] items-start">
            <div className="aspect-[437/666] w-full lg:h-[666px] lg:w-[437px] relative lg:shrink-0 rounded-2xl lg:rounded-[30px] overflow-hidden">
              <img
                alt="PayPal case study"
                src="/images/next-case-studies/paypal-hero.jpg"
                className="absolute pointer-events-none object-cover h-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                style={{ width: "270%", maxWidth: "none", left: "-88%" }}
              />
            </div>
            <p className="font-serif text-[clamp(36px,9vw,64px)] lg:text-[64px] leading-[1.1] lg:leading-[72px] text-white tracking-[-0.64px] transition-opacity duration-300 group-hover:opacity-70">
              PayPal
            </p>
          </Link>

          {/* Solo */}
          <Link href="/work/MsSunshineApp" className="group flex w-full max-w-[437px] lg:w-[437px] lg:shrink-0 flex-col gap-4 lg:gap-[27px]">
            <div className="relative aspect-[437/666] lg:aspect-auto lg:h-[666px] w-full overflow-hidden rounded-2xl lg:rounded-[30px]">
              <Image
                src={phoneWithAppRollover}
                alt="Ms. Sunshine App case study preview"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 437px"
              />
            </div>
            <p className="font-serif text-[clamp(36px,9vw,64px)] lg:text-[64px] leading-[1.1] lg:leading-[72px] tracking-[-0.64px] text-white transition-opacity duration-300 group-hover:opacity-70 whitespace-nowrap">
              Ms. Sunshine App
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import NextCaseStudyTicker from "@/components/ui/next-case-study-ticker";
import logo from "@/components/images/Logo.png";
import montlyInvoicingHeroOnTable from "@/components/images/Monthly invoicing Images/MontlyInvoicingHeroScreen_OnTable.png";

import daySchedule from "@/components/images/Teacher'sApp/DaySchedule.png";

import competitiveAnalysisCover from "@/components/images/Teacher'sApp/CompetitiveAnalysisCover.png";
import middleCopyVideoBg from "@/components/images/Teacher'sApp/AppFlow/MiddleCopyVideoBg.png";
import home from "@/components/images/Teacher'sApp/NewHomeScreenV2.png";
import backgroundHandYellow from "@/components/images/Teacher'sApp/AppFlow/BackgroundhandYellow.png";
import qrCode from "@/components/images/Teacher'sApp/QR_Code.png";
import activityFlow1 from "@/components/images/Teacher'sApp/AppFlow/ActivityFlow1.png";
import activityFlow3 from "@/components/images/Teacher'sApp/AppFlow/ActivityFlow3.png";
import activityFlow5 from "@/components/images/Teacher'sApp/AppFlow/ActivityFlow5.png";
import activityFlow6 from "@/components/images/Teacher'sApp/AppFlow/ActivityFlow6.png";
import { ActivityFlowCarousel } from "@/components/ui/activity-flow-carousel";

export const metadata = {
  title: "Streamlining and Automating Daily Reporting — Timothy Valderrama",
};

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
      {/* Top section */}
      <section className="w-full bg-black p-5 lg:p-[24px]">
        <div className="flex flex-col gap-10 lg:gap-[62px]">
          <header className="flex w-full items-center justify-between shrink-0">
            <Link
              href="/"
              className="rounded-full border border-transparent bg-[#484848] px-4 py-2 text-base font-normal leading-none whitespace-nowrap text-white transition-colors duration-150 hover:border-white"
              style={{ fontFamily: leagueSpartan }}
            >
              Menu
            </Link>
            <Link href="/" aria-label="Home">
              <Image src={logo} alt="TiM.V" width={69} height={29} />
            </Link>
          </header>

          <div className="flex w-full lg:w-[1335px] max-w-full flex-col gap-[14px]" style={{ fontFamily: leagueSpartan }}>
            <p className="text-[18px] font-light leading-none">Rapid App Innovation</p>
            <h1 className="font-serif text-[clamp(40px,10vw,96px)] lg:text-[96px] leading-[1.04] lg:leading-[96px] tracking-[-0.015em]">
              Streamlining and Automating Daily Reporting
            </h1>
          </div>

          <div className="flex w-full flex-col lg:flex-row items-start gap-10 lg:gap-[184px] py-0 lg:py-[42px]" style={{ fontFamily: leagueSpartan }}>
            <div className="flex w-full lg:w-[861px] max-w-full flex-col gap-[14px]">
              <p className="text-[18px] font-light leading-none">My Role</p>
              <p className="text-[clamp(20px,4.5vw,32px)] lg:text-[32px] font-light leading-[1.32] lg:leading-[42px]">
                Solo end-to-end AI workflow: research with ChatGPT and Claude, PRD generation with ChatGPT, design with Google Stitch and Figma, build with Replit &mdash; concept to tested MVP in 3 weeks.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-[80px] lg:ml-auto">
              <div className="flex flex-col gap-[14px]">
                <p className="text-[18px] font-light leading-none">Timeline</p>
                <p className="text-[clamp(20px,4.5vw,32px)] lg:text-[32px] font-light leading-[1.32] lg:leading-[42px]">3 weeks</p>
              </div>
              <div className="flex flex-col gap-[14px]">
                <p className="text-[18px] font-light leading-none">Platforms</p>
                <p className="text-[clamp(20px,4.5vw,32px)] lg:text-[32px] font-light leading-[1.32] lg:leading-[42px]">Mobile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero video — full bleed */}
      <section className="w-full">
        <video
          src="/videos/TeacherRecordingActivity/TeacherRecordingActivity2.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Introduction / Problem */}
      <section className="w-full px-5 lg:px-[24px] pt-10 lg:pt-[24px] pb-16 lg:pb-[125px]" style={{ fontFamily: leagueSpartan }}>
        <div className="flex w-full max-w-[1539px] flex-col gap-[14px]">
          <p className="text-[18px] font-light leading-none">Problem</p>
          <div className="text-[clamp(20px,4.5vw,48px)] lg:text-[48px] font-light leading-[1.2] lg:leading-[56px] space-y-8 lg:space-y-[56px]">
            <p>
              Schools need a more efficient, scalable way to document and communicate each child&rsquo;s daily activities without relying on a labor-intensive end-of-day reporting process. Parents need timely visibility into their child&rsquo;s school day so they feel informed, reassured, and confident about their child&rsquo;s safety and well-being.
            </p>
            <p>
              The app solves both needs by giving parents real-time updates throughout the day while automating activity tracking and report generation for school staff.
            </p>
          </div>
        </div>
      </section>

      {/* DaySchedule — full bleed */}
      <section className="w-full">
        <Image
          src={daySchedule}
          alt="A teacher's daily schedule"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Meeting Movie — interview image + caption */}
      <section className="w-full flex flex-col lg:items-end gap-6 lg:gap-[24px] pt-16 lg:pt-[167px] pb-12 lg:pb-[100px]">
        <video
          src="/videos/TeacherInterview/TeacherAppInterview_3.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-auto object-cover"
        />
        <div
          className="flex flex-col items-start px-5 lg:px-0 lg:pr-[24px]"
          style={{ fontFamily: leagueSpartan }}
        >
          <div className="w-full max-w-[466px] lg:w-[466px] text-[18px] font-light text-white leading-[21px] space-y-[21px]">
            <p className="text-white/60">Research &amp; Synthesis</p>
            <p>
              I used ChatGPT to build a detailed research plan, then ran interviews with teachers and school owners. ChatGPT synthesized the findings into five clear needs:
            </p>
            <ul className="list-disc pl-[27px]">
              <li>Fast, simple logging</li>
              <li>Better parent communication</li>
              <li>Bulk actions for multiple children</li>
              <li>Flexible editing and deletion</li>
              <li>Stronger child-record management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="w-full flex flex-col lg:items-end pb-[67px] lg:pb-[140px]">
        <div className="flex w-full max-w-[1476px] flex-col gap-[45px] lg:gap-[110px] px-5 lg:px-0 lg:pr-[24px]">
          <div className="flex flex-col gap-[14px] w-full max-w-[1279px]" style={{ fontFamily: leagueSpartan }}>
            <p className="text-[18px] font-light leading-none">Competitive Analysis</p>
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
        </div>
      </section>

      {/* PRD & build plan */}
      <section className="w-full px-5 lg:px-[24px] pb-[67px] lg:pb-[140px]" style={{ fontFamily: leagueSpartan }}>
        <div className="flex w-full max-w-[1279px] flex-col gap-[14px]">
          <p className="text-[18px] font-light leading-none">PRD &amp; Build Plan</p>
          <p className="text-[clamp(20px,4.5vw,32px)] lg:text-[32px] font-light leading-[1.32] lg:leading-[42px] w-full max-w-[700px]">
            I turned research and competitive insights into a ChatGPT-generated product requirements document, which became the single source of truth for scope, user roles (teacher / head teacher / parent), and the MVP feature set.
          </p>
        </div>
      </section>

      {/* Design & prototype — ActivityFlow carousel */}
      <section className="w-full pb-24 lg:pb-[200px] pt-7 lg:pt-[28px]" style={{ fontFamily: leagueSpartan }}>
        <div className="flex flex-col items-center gap-[14px] px-5 lg:px-[24px] mb-8 lg:mb-10 text-center">
          <p className="text-[18px] font-light leading-none">Design &amp; Prototype</p>
          <p className="text-[clamp(18px,2.2vw,22px)] font-light leading-[1.32] max-w-[700px]">
            From the PRD, I used Google Stitch and Figma First Draft to accelerate early exploration, then refined an MVP in Figma for usability testing.
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
            <div className="relative w-[46%] aspect-[450/944]">
              <Image
                src={home}
                alt="App home screen"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div
            className="absolute z-20 w-[15%] aspect-square right-[2.5%] bottom-[2.5%]"
          >
            <Image
              src={qrCode}
              alt="QR code to view the prototype"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: closing copy */}
        <div
          className="flex flex-col items-start min-w-0 w-full"
          style={{ fontFamily: leagueSpartan }}
        >
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[32px] w-full">
            <div className="flex flex-col gap-[14px] text-white">
              <p className="text-[18px] font-light leading-none">Build &amp; Iteration</p>
              <p className="text-[clamp(18px,2.2vw,22px)] font-light leading-[1.32]">
                Once concepts were validated with the client, I used Replit to turn designs into a working build, then iterated on real feedback from the client and test users. The shipped MVP, a 257% efficiency gain over manual end-of-day reporting, does the following:
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
            <div className="flex items-center lg:pl-[42px]">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-[#484848] px-6 lg:px-[24px] py-3 lg:py-[14px] text-xl lg:text-[22px] font-normal whitespace-nowrap text-white transition-colors duration-150 hover:bg-[#606060]"
                style={{
                  fontFamily: leagueSpartan,
                  lineHeight: 1,
                }}
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Next Case Study section */}
      <section className="relative w-full bg-black overflow-hidden pt-16 lg:pt-[78px] pb-24 lg:pb-[200px]">
        <NextCaseStudyTicker color="#066c84" />

        {/* Cards row */}
        <div className="relative flex flex-col lg:flex-row items-center lg:justify-center gap-12 lg:gap-[200px] px-5 lg:px-0">
          {/* PayPal card */}
          <Link href="/work/paypal" className="group flex w-full max-w-[437px] lg:w-[437px] flex-col gap-4 lg:gap-[27px] items-start">
            <div className="relative aspect-[437/666] w-full lg:w-[437px] lg:h-[666px] rounded-[30px] overflow-hidden lg:shrink-0">
              <img
                src="/images/next-case-studies/paypal-hero.jpg"
                alt="PayPal case study"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="font-serif text-[clamp(36px,9vw,64px)] lg:text-[64px] text-white leading-[1.1] lg:leading-[72px] tracking-[-0.64px]">
              PayPal
            </p>
          </Link>

          {/* Meta card */}
          <Link href="/work/meta" className="group flex w-full max-w-[671px] lg:w-[671px] flex-col gap-4 lg:gap-[27px] items-start">
            <div
              className="relative rounded-[30px] overflow-hidden w-full"
              style={{ aspectRatio: "824 / 606" }}
            >
              <div className="absolute h-full top-0" style={{ left: "-3.69%", width: "130.67%" }}>
                <Image
                  src={montlyInvoicingHeroOnTable}
                  alt="Meta case study"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="font-serif text-[clamp(36px,9vw,64px)] lg:text-[64px] text-white leading-[1.1] lg:leading-[72px] tracking-[-0.64px] w-full">
              Meta
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}

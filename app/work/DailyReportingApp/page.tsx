import Link from "next/link";
import Image from "next/image";
import NextCaseStudyTicker from "@/components/ui/next-case-study-ticker";
import logo from "@/components/images/Logo.png";
import montlyInvoicingHeroOnTable from "@/components/images/Monthly invoicing Images/MontlyInvoicingHeroScreen_OnTable.png";

import daySchedule from "@/components/images/Teacher'sApp/DaySchedule.png";

import competitiveAnalysisCover from "@/components/images/Teacher'sApp/CompetitiveAnalysisCover.png";
import middleCopyVideoBg from "@/components/images/Teacher'sApp/AppFlow/MiddleCopyVideoBg.png";
import home from "@/components/images/Teacher'sApp/AppFlow/Home.png";
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
      <section className="w-full bg-black p-[24px]">
        <div className="flex flex-col gap-[62px]">
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

          <div className="flex w-[1335px] max-w-full flex-col gap-[14px]" style={{ fontFamily: leagueSpartan }}>
            <p className="text-[18px] font-light leading-none">Rapid App Innovation</p>
            <h1 className="font-serif text-[96px] leading-[96px] tracking-[-0.015em]">
              Streamlining and Automating Daily Reporting
            </h1>
          </div>

          <div className="flex w-full items-start gap-[184px] py-[42px]" style={{ fontFamily: leagueSpartan }}>
            <div className="flex w-[861px] max-w-full flex-col gap-[14px]">
              <p className="text-[18px] font-light leading-none">My Role</p>
              <p className="text-[32px] font-light leading-[42px]">
                Research, design, and development Replit, Claude, and Chat GPT
              </p>
            </div>
            <div className="flex items-start gap-[80px] ml-auto">
              <div className="flex flex-col gap-[14px]">
                <p className="text-[18px] font-light leading-none">Timeline</p>
                <p className="text-[32px] font-light leading-[42px]">3 weeks</p>
              </div>
              <div className="flex flex-col gap-[14px]">
                <p className="text-[18px] font-light leading-none">Platforms</p>
                <p className="text-[32px] font-light leading-[42px]">Mobile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero video — full bleed */}
      <section className="w-full">
        <video
          src="/videos/TeacherRecordingActivity/TeacherRecordingActivity.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Introduction / Problem */}
      <section className="w-full px-[24px] pt-[24px] pb-[125px]" style={{ fontFamily: leagueSpartan }}>
        <div className="flex w-full max-w-[1539px] flex-col gap-[14px]">
          <p className="text-[18px] font-light leading-none">Problem</p>
          <div className="text-[48px] font-light leading-[56px] space-y-[56px]">
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
      <section className="w-full flex flex-col items-end gap-[24px] pt-[167px] pb-[200px]">
        <video
          src="/videos/TeacherAppInterview.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover"
        />
        <div
          className="flex flex-col items-start pr-[24px]"
          style={{ fontFamily: leagueSpartan }}
        >
          <div className="w-[466px] text-[18px] font-light text-white leading-[21px] space-y-[21px]">
            <p>
              Used ChatGPT to develop a detailed research plan, then carried it out by interviewing teachers and school owners. I also used ChatGPT to synthesize the findings into clear takeaways that informed multiple design solutions.
            </p>
            <div>
              <p>These are what I gathered from participants:</p>
              <ul className="list-disc pl-[27px]">
                <li>Fast, simple logging</li>
                <li>Better parent communication</li>
                <li>Bulk actions for multiple children</li>
                <li>Flexible editing and deletion</li>
                <li>Stronger child record management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="w-full flex flex-col items-end pb-[200px]">
        <div className="flex w-[1476px] max-w-full flex-col gap-[157px] pr-[24px]">
          <div className="flex flex-col gap-[14px] w-full max-w-[1279px]" style={{ fontFamily: leagueSpartan }}>
            <p className="text-[18px] font-light leading-none">Competitive analysis</p>
            <div className="text-[32px] font-light leading-[42px] w-full max-w-[700px]">
              <p>
                Competitive analysis with ChatGPT and Claude Cowork. These were some high-level quick takeaways.
              </p>
              <ul className="list-disc pl-[48px]">
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
            <div className="relative z-10 w-full h-full flex items-center justify-center px-[114px] py-[109px]">
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

      {/* ActivityFlow carousel */}
      <section className="w-full pb-[200px] pt-[40px]">
        <ActivityFlowCarousel items={activityFlowItems} />
      </section>

      {/* End — yellow-hand panel + closing copy */}
      <section className="w-full flex items-start gap-[24px] pb-[120px] pr-[24px]">
        {/* Left: yellow background + phone + QR code */}
        <div
          className="relative shrink-0 overflow-hidden"
          style={{ width: "985px", height: "1230px" }}
        >
          <Image
            src={backgroundHandYellow}
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
          <div className="relative z-10 w-full h-full flex items-start justify-center pt-[92px]">
            <div className="relative" style={{ width: "450px", height: "943.792px" }}>
              <Image
                src={home}
                alt="App home screen"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div
            className="absolute z-20"
            style={{ width: "146px", height: "145px", right: "24px", bottom: "24px" }}
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
          className="flex flex-col items-start min-w-0 w-full max-w-[740px]"
          style={{ fontFamily: leagueSpartan }}
        >
          <div className="flex flex-col gap-[32px] w-full">
            <div className="flex flex-col gap-[14px] text-white">
              <p className="text-[18px] font-light leading-none">Things I did:</p>
              <ul className="text-[32px] font-light leading-[42px] list-disc pl-[48px] space-y-[42px]">
                <li>
                  Automate activity reporting through a simple teacher workflow that allows staff to select an activity, choose the child or children involved, and add a note when needed. Once submitted, the update is automatically logged in each child&rsquo;s activity feed for parents to view.
                </li>
                <li>
                  Triggered by the check-out action, the app automatically generates an AI-powered end-of-day summary of the child&rsquo;s activities. The head teacher can review and edit the summary as needed before it is shared with parents.
                </li>
                <li>
                  In the parent portal, parents can only view their own child&rsquo;s feed and communicate with teachers in real time through comments on activity updates, with notifications sent for each reply.
                </li>
                <li>
                  Using screens and components created in Figma, I created a fully functional MVP with Replit for client testing that allows staff to log activities, manage students and items, and communicate across teacher and parent versions on different mobile devices, then continued iterating on the product based on feedback from the client and other test users.
                </li>
              </ul>
            </div>
            <div className="flex h-[61px] items-center pl-[42px]">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-[#484848] px-[30px] py-[16px] text-[32px] font-normal whitespace-nowrap text-white transition-colors duration-150 hover:bg-[#606060]"
                style={{
                  fontFamily: leagueSpartan,
                  lineHeight: 1,
                  paddingTop: "18px",
                  paddingBottom: "14px",
                }}
              >
                More work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Next Case Study section */}
      <section className="relative w-full bg-black overflow-hidden pt-[78px] pb-[200px]">
        <NextCaseStudyTicker color="#066c84" />

        {/* Cards row */}
        <div className="relative flex gap-[200px] items-center justify-center">
          {/* PayPal card */}
          <Link href="/work/paypal" className="flex flex-col gap-[27px] items-start w-[437px]">
            <div className="relative w-[437px] h-[666px] rounded-[30px] overflow-hidden shrink-0">
              <img
                src="/images/next-case-studies/paypal-hero.jpg"
                alt="PayPal case study"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="font-serif text-[64px] text-white leading-[72px] tracking-[-0.64px]">
              PayPal
            </p>
          </Link>

          {/* Meta card */}
          <Link href="/work/meta" className="flex flex-col gap-[27px] items-start w-[671px]">
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
            <p className="font-serif text-[64px] text-white leading-[72px] tracking-[-0.64px] w-full">
              Meta
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}

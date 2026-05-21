import Link from "next/link";
import Image from "next/image";
import NextCaseStudyTicker from "@/components/ui/next-case-study-ticker";
import logo from "@/components/images/Logo.png";
import { CardStack, type CardStackItem } from "@/components/ui/card-stack";
import { AnimatedImpactRow } from "@/components/ui/animated-impact-row";
import MiNewFlowSlideshow from "@/components/ui/mi-new-flow-slideshow";
import ImageSpotlight from "@/components/ui/image-spotlight";
import singlePage from "@/components/images/Monthly invoicing Images/SinglePage.png";
import oldScreen from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Screen.png";
import oldScreen1 from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Screen1.png";
import oldScreen2 from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Screen2.png";
import oldScreen3 from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Screen3.png";
import oldScreen4 from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Screen4.png";
import oldScreen5 from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Screen5.png";
import oldScreen6 from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Screen6.png";
import oldScreen7 from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Screen7.png";
import oldScreen8 from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Screen8.png";
import oldUnderstanding from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Understanding1.png";
import oldFrustrated from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Fraustrated3.png";
import oldConfused from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/Confused2.png";
import oldWalkingAway from "@/components/images/Monthly invoicing Images/MI_Old_Flow_Screens/WalkingAway4.png";
import imgEyeBackground from "@/components/images/Monthly invoicing Images/FigmaAssets/EyeBackground.png";
import imgPsychedelicBackground from "@/components/images/Monthly invoicing Images/FigmaAssets/PsychedelicBackground.png";
import imgPromoIllustration from "@/components/images/Monthly invoicing Images/FigmaAssets/PromoIllustration.png";

const oldFlowItems: CardStackItem[] = [
  { id: 1, title: "Old flow — screen 1", imageSrc: oldScreen.src },
  { id: 2, title: "Advertiser — exploring", imageSrc: oldUnderstanding.src },
  { id: 3, title: "Old flow — screen 2", imageSrc: oldScreen1.src },
  { id: 4, title: "Old flow — screen 3", imageSrc: oldScreen2.src },
  { id: 5, title: "Old flow — screen 4", imageSrc: oldScreen3.src },
  { id: 6, title: "Advertiser — frustrated", imageSrc: oldFrustrated.src },
  { id: 7, title: "Old flow — screen 5", imageSrc: oldScreen4.src },
  { id: 8, title: "Old flow — screen 6", imageSrc: oldScreen5.src },
  { id: 9, title: "Old flow — screen 7", imageSrc: oldScreen6.src },
  { id: 10, title: "Advertiser — confused", imageSrc: oldConfused.src },
  { id: 11, title: "Old flow — screen 8", imageSrc: oldScreen7.src },
  { id: 12, title: "Old flow — screen 9", imageSrc: oldScreen8.src },
  { id: 13, title: "Advertiser — walking away", imageSrc: oldWalkingAway.src },
];

export const metadata = {
  title: "Boosting Visibility and Applications Through Onboarding Optimization — Timothy Valderrama",
};

function PromoCard() {
  return (
    <div className="bg-white rounded-[8px] shadow-[0px_2px_2px_rgba(0,0,0,0.1),0px_8px_24px_rgba(0,0,0,0.1)] flex overflow-hidden w-full max-w-[680px]">
      <div className="w-[180px] flex-shrink-0 relative">
        <Image src={imgPromoIllustration} alt="" fill className="object-cover" />
      </div>
      <div className="flex-1 p-5 pt-3 flex flex-col gap-3">
        <h4 className="font-[family-name:var(--font-league-spartan)] text-[16px] font-bold text-black/75 leading-[22px] pt-1">
          Get easier billing with one invoice per month
        </h4>
        <div className="text-[13px] text-[#080809] font-[family-name:var(--font-league-spartan)] leading-[18px] space-y-1.5">
          <p>As one of our most trusted advertisers, you may be eligible for monthly invoicing.</p>
          <ul className="list-disc pl-5 space-y-0.5">
            <li>Reduce the number of charges each month</li>
            <li>Avoid credit card payment issues that may stop ads from running</li>
            <li>Access a higher spending limit that can be shared across ad accounts</li>
          </ul>
        </div>
        <div className="flex justify-end pt-1">
          <span className="bg-[#1877f2] text-white text-[13px] font-bold px-3 py-1.5 rounded-[6px] font-[family-name:var(--font-league-spartan)]">
            See how it works
          </span>
        </div>
      </div>
    </div>
  );
}

function ModalMockup() {
  const rows = [
    { label: "Legal business name", value: "Apparel World" },
    { label: "Legal business address", value: "12345 Tech Way, Suite 500, Encinitas, California 92024" },
  ];
  const billingRows = [
    { label: "Billing contact email", value: "timvalderrama@meta.com" },
    { label: "Billing contact phone number", value: "+598 (858) 447-1386" },
    { label: "Billing address", value: "12345 Tech Way, Suite 500, Encinitas, California 92024" },
    { label: "Tax ID", value: "12-3456789" },
  ];
  return (
    <div className="bg-white rounded-[8px] shadow-[0px_16px_32px_rgba(0,0,0,0.18)] w-[520px] max-w-full overflow-hidden font-[family-name:var(--font-league-spartan)]">
      <div className="flex items-center justify-between px-3 py-3 border-b border-[#c9ccd1]/60">
        <span className="w-9 h-9 rounded-full bg-[#e4e6eb] flex items-center justify-center text-[#080809] text-xl leading-none">‹</span>
        <span className="text-[18px] font-bold text-[#080809] tracking-[0.2px]">Request monthly invoicing</span>
        <span className="w-9 h-9 rounded-full bg-[#e4e6eb] flex items-center justify-center text-[#080809] text-base leading-none">×</span>
      </div>
      <div className="px-5 py-4 space-y-3">
        <p className="text-[15px] font-semibold text-[#080809]">Confirm information</p>
        <p className="text-[13px] text-[#65686c] leading-[18px]">
          If your application is approved, you'll be issued a credit line. You'll receive monthly invoices for ad accounts set up to use your credit line as a payment method.
        </p>
        <div className="h-px bg-[#c9ccd1]" />
        <p className="text-[15px] font-semibold text-[#080809]">Legal information</p>
        {rows.map((r) => (
          <div key={r.label} className="flex items-start gap-3 py-1">
            <div className="w-9 h-9 rounded-full bg-[#e4e6eb] flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[12px] text-[#65676b] leading-[16px]">{r.label}</p>
              <p className="text-[15px] text-[#050505] leading-[20px]">{r.value}</p>
            </div>
          </div>
        ))}
        <p className="text-[15px] font-semibold text-[#080809] pt-1">Billing information</p>
        {billingRows.map((r) => (
          <div key={r.label} className="flex items-start gap-3 py-1">
            <div className="w-9 h-9 rounded-full bg-[#e4e6eb] flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[12px] text-[#65676b] leading-[16px]">{r.label}</p>
              <p className="text-[15px] text-[#050505] leading-[20px]">{r.value}</p>
            </div>
          </div>
        ))}
        <div className="h-px bg-[#c9ccd1]" />
        <p className="text-[12px] text-[#65686c] leading-[16px]">
          Credit lines are a payment setting where you pay us based on monthly invoices. The amounts shown are not credit or financing.
        </p>
        <p className="text-[12px] text-[#65686c] leading-[16px]">
          By clicking Submit, you agree to Meta's <span className="text-[#0064d1] font-semibold">Terms and conditions</span>. If Meta approves your application, you'll be bound by the <span className="text-[#0064d1] font-semibold">Online invoicing terms</span> and the <span className="text-[#0064d1] font-semibold">Self-serve ad terms</span>.
        </p>
      </div>
      <div className="flex items-center justify-end gap-2 px-4 py-3 border-t border-[#c9ccd1]/60">
        <span className="text-[#1763cf] font-semibold text-[14px] px-3 py-1.5">Edit</span>
        <span className="bg-[#1b74e4] text-white font-semibold text-[14px] px-3 py-1.5 rounded-[6px]">Submit</span>
      </div>
    </div>
  );
}

const leagueSpartan = "var(--font-league-spartan)";

export default function MetaPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <section className="w-full bg-black p-5 lg:p-[24px]">
        <div className="flex flex-col gap-10 lg:gap-[62px]">
          <header className="flex w-full items-center justify-between shrink-0">
            <Link
              href="/"
              className="rounded-full border border-transparent bg-[#484848] px-4 py-2 text-base font-normal leading-none whitespace-nowrap text-white transition-colors duration-150 hover:border-white"
              style={{ fontFamily: "var(--font-league-spartan)" }}
            >
              Menu
            </Link>
            <Link href="/" aria-label="Home">
              <Image src={logo} alt="TiM.V" width={69} height={29} />
            </Link>
          </header>

          <div className="flex w-full lg:w-[1335px] max-w-full flex-col gap-[14px]" style={{ fontFamily: leagueSpartan }}>
            <p className="text-[18px] font-light leading-none">
              Driving the Shift to Monthly Invoicing
            </p>
            <h1 className="font-serif text-[clamp(36px,9vw,96px)] lg:text-[96px] leading-[1.04] lg:leading-[96px] tracking-[-0.015em]">
              Boosting Visibility and Applications Through Onboarding Optimization
            </h1>
          </div>

          <div className="flex w-full flex-col lg:flex-row items-start gap-10 lg:gap-[184px] py-0 lg:py-[42px]" style={{ fontFamily: leagueSpartan }}>
            <div className="flex w-full lg:w-[861px] max-w-full flex-col gap-[14px]">
              <p className="text-[18px] font-light leading-none">My Role</p>
              <p className="text-[clamp(20px,4.5vw,32px)] lg:text-[32px] font-light leading-[1.32] lg:leading-[42px]">
                Using an AI first workflow with Metamate AI, I partnered with engineering, finance, and cross-functional design teams to drive broader adoption of Monthly Invoicing.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-[80px] lg:ml-auto">
              <div className="flex flex-col gap-[14px]">
                <p className="text-[18px] font-light leading-none">Timeline</p>
                <p className="text-[clamp(20px,4.5vw,32px)] lg:text-[32px] font-light leading-[1.32] lg:leading-[42px]">1.5 months</p>
              </div>
              <div className="flex flex-col gap-[14px]">
                <p className="text-[18px] font-light leading-none">Platforms</p>
                <p className="text-[clamp(20px,4.5vw,32px)] lg:text-[32px] font-light leading-[1.32] lg:leading-[42px]">Desktop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <video
          src="/CreditCardDeclineMOV.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-auto object-cover"
        />
      </section>

      <section className="relative w-full px-5 lg:px-[37px] pt-10 lg:pt-[36px] pb-16 lg:pb-[125px]">
        <div className="flex w-full max-w-[1563px] flex-col gap-[14px]" style={{ fontFamily: leagueSpartan }}>
          <p className="text-[18px] font-light">Problem</p>
          <p className="text-[clamp(20px,4.5vw,48px)] lg:text-[48px] font-light leading-[1.3]">
            High-spend advertisers risk costly campaign pauses from card failures and funding gaps. Monthly Invoicing helps prevent disruptions while reducing Meta&rsquo;s credit card processing costs, currently $2.46B annually and projected to reach $4.2B. Increasing adoption is expected to save at least $20M annually.
          </p>
        </div>
      </section>

      <section className="w-full pb-24 lg:pb-[310px] px-5 lg:px-8">
        <CardStack
          items={oldFlowItems}
          cardWidth={520}
          cardHeight={371}
          mobileCardWidth={300}
          mobileCardHeight={214}
          mobileMaxVisible={1}
          initialIndex={0}
          loop
          showDots
        />
      </section>

      <section className="w-full">
        <video
          src="/MI_Presentation_Video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-auto object-cover"
        />
      </section>

      <section className="px-5 lg:px-[37px] pt-12 pb-20 lg:pb-32 w-full flex lg:justify-end">
        <div className="max-w-[480px] font-light text-[18px] leading-[1.4] space-y-4 text-white" style={{ fontFamily: leagueSpartan }}>
          <p>
            I met with Data Science, Product, Engineering, and Finance to evaluate the current onboarding workflow and identify optimization opportunities. We found that the application flow created unnecessary friction through excessive steps and unclear fields. User research also showed that combining screens could improve usability and increase completion confidence.
          </p>
          <p>
            Additionally, the account-selection dialog introduced interaction friction, with many admins struggling to add their advertising account during onboarding.
          </p>
        </div>
      </section>

      <section className="px-5 lg:px-8 pb-24 lg:pb-[178px] max-w-[1600px] mx-auto w-full -mt-5">
        <p className="font-light text-[18px] mb-8" style={{ fontFamily: leagueSpartan }}>Impact</p>

        {/* Column headers */}
        <div className="grid grid-cols-[110px_1fr] lg:grid-cols-[280px_1fr] gap-4 lg:gap-12 mb-6">
          <div />
          <div className="flex justify-between">
            <p className="font-[family-name:var(--font-league-spartan)] font-bold text-base lg:text-[24px] text-white/60 tracking-[-0.24px]">Today</p>
            <p className="font-[family-name:var(--font-league-spartan)] font-bold text-base lg:text-[24px] text-white/60 tracking-[-0.24px]">H1 2025</p>
          </div>
        </div>

        <div className="space-y-10 lg:space-y-14">
          <AnimatedImpactRow
            label="Expand eligibility"
            todayPct={27}
            futurePct={67}
            todayLabel="27%"
            futureLabel="67%"
            sublabel="$11M impact"
          />
          <AnimatedImpactRow
            label={"Improve\nawareness"}
            todayPct={8}
            futurePct={41}
            todayLabel="8%"
            futureLabel="41%"
            sublabel="Increase of 27%"
          />
          <AnimatedImpactRow
            label={"Grow\nconversion"}
            todayPct={39}
            futurePct={97}
            todayLabel="39%"
            futureLabel="97%"
          />
          <div className="grid grid-cols-[110px_1fr] lg:grid-cols-[280px_1fr] gap-4 lg:gap-12 items-center pt-4">
            <h3 className="font-[family-name:var(--font-league-spartan)] text-[clamp(20px,5vw,40px)] lg:text-[40px] leading-[1.1] font-normal">
              Savings
            </h3>
            <p className="font-serif text-[clamp(40px,10vw,96px)] lg:text-[clamp(64px,8vw,96px)] leading-[1] tracking-[-0.96px]">
              ~ $20M/yr.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center pb-20 lg:pb-32 px-5 lg:px-8">
        <div className="w-full max-w-[1417px]">
          <MiNewFlowSlideshow />
        </div>
      </section>

      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-7 px-5 lg:px-7 pb-20 lg:pb-32 max-w-[1857px] mx-auto">
        <div className="flex flex-col gap-10 lg:gap-12">
          <div
            className="relative h-[320px] sm:h-[420px] lg:h-[512px] rounded-[8px] overflow-hidden flex items-center justify-center"
            style={{
              background:
                "radial-gradient(circle at 50% 100%, #4d1590 0%, #6630a3 25%, #804bb7 50%, #9965ca 75%, #b280dd 100%)",
            }}
          >
            <Image
              src={imgEyeBackground}
              alt=""
              fill
              className="object-cover opacity-90"
              aria-hidden
            />
            <div className="relative z-10 px-5 lg:px-12 w-full flex justify-center">
              <PromoCard />
            </div>
          </div>

          <div className="flex flex-col gap-10 lg:gap-[56px]" style={{ fontFamily: leagueSpartan }}>
            <div className="flex flex-col gap-[14px]">
              <p className="text-[18px] font-light">Things I did:</p>
              <ul className="ml-[24px] flex list-disc flex-col gap-4 lg:gap-[24px] text-lg lg:text-[24px] font-light leading-[1.4]">
                <li>
                  Collaborate with the Content team to optimize banner copy for stronger value articulation and resonance with high-spend advertisers.
                </li>
                <li>
                  Partner with cross-functional teams to surface the banner in higher-traffic areas, increasing visibility among high-spend advertisers.
                </li>
                <li>
                  Simplified the application experience (9 → 3 screens) with backend engineers, boosting conversion from 32% to 93%.
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap items-center gap-4 lg:gap-[25px]">
              <Link
                href="/#work"
                className="inline-flex items-center justify-center rounded-full bg-[#484848] px-6 lg:px-[30px] py-3 lg:py-[16px] text-xl lg:text-[32px] font-normal whitespace-nowrap text-white transition-colors duration-150 hover:bg-[#606060]"
                style={{ fontFamily: "var(--font-league-spartan)", lineHeight: 1 }}
              >
                Back to homepage
              </Link>
              <a
                href="https://www.figma.com/proto/LO1NMWmDmQ6TcWvLxsARqK/MI-Onboarding-Prototype?node-id=1-54809&viewport=348%2C433%2C0.25&t=ptwstdDv4kXxMR8m-8&scaling=contain&content-scaling=fixed&page-id=0%3A1&hide-ui=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#919191] px-6 lg:px-[30px] py-3 lg:py-[16px] text-xl lg:text-[32px] font-normal whitespace-nowrap text-white transition-colors duration-150 hover:border-white"
                style={{ fontFamily: "var(--font-league-spartan)", lineHeight: 1 }}
              >
                Prototype
              </a>
            </div>
          </div>
        </div>

        <ImageSpotlight config={{ className: 'rounded-[8px] bg-[#6425b5] min-h-[520px] sm:min-h-[720px] lg:min-h-[1116px] w-full', spotlightSize: 104 }}>
          <Image
            src={imgPsychedelicBackground}
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
          <div className="relative z-10 flex items-start justify-center pt-12 lg:pt-40 px-4 w-full h-full">
            <Image
              src={singlePage}
              alt="Monthly invoicing single page"
              width={620}
              height={798}
              className="h-auto w-full max-w-[260px] sm:max-w-[420px] lg:max-w-[620px]"
              draggable={false}
            />
          </div>
        </ImageSpotlight>
      </section>
      {/* Next Case Studies */}
      <section className="relative w-full bg-black overflow-hidden flex flex-col items-center justify-center pb-24 lg:pb-[200px] pt-16 lg:pt-[78px]">
        <NextCaseStudyTicker color="#5f7611" />

        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-12 lg:gap-[200px] relative px-5 lg:px-0">
          {/* PayPal */}
          <Link href="/work/paypal" className="group flex w-full max-w-[437px] lg:w-[437px] flex-col gap-4 lg:gap-[27px] items-start">
            <div className="aspect-[437/666] w-full lg:h-[666px] lg:w-[437px] relative lg:shrink-0 rounded-[30px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="PayPal case study"
                src="/images/next-case-studies/paypal-hero.jpg"
                className="absolute pointer-events-none object-cover h-full"
                style={{ width: "270%", maxWidth: "none", left: "-88%" }}
              />
            </div>
            <p className="font-serif text-[clamp(36px,9vw,64px)] lg:text-[64px] leading-[1.1] lg:leading-[72px] text-white tracking-[-0.64px]">
              PayPal
            </p>
          </Link>

          {/* Solo */}
          <Link href="/work/MsSunshineApp" className="group flex w-full max-w-[437px] lg:w-[437px] flex-col gap-4 lg:gap-[27px] items-start">
            <div className="aspect-[437/666] w-full lg:h-[666px] lg:w-[438px] relative rounded-[30px] lg:shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src="/images/next-case-studies/solo-phone.png"
                className="absolute max-w-none pointer-events-none"
                style={{ height: "113.36%", left: "-0.03%", top: "-6.61%", width: "129.28%" }}
              />
            </div>
            <p className="font-serif text-[clamp(36px,9vw,64px)] lg:text-[64px] leading-[1.1] lg:leading-[72px] text-white tracking-[-0.64px] whitespace-nowrap">
              Ms. Sunshine App
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}

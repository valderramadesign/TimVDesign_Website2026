import Image from "next/image";
import Link from "next/link";
import NextCaseStudyTicker from "@/components/ui/next-case-study-ticker";
import Logo from "@/components/ui/logo";
import VideoOverlay from "@/components/ui/video-overlay";
import ScrollFade from "@/components/ui/scroll-fade";
import HeroVideo from "@/components/ui/hero-video";
import CounterNumber from "@/components/ui/counter-number";
import { AnimatedImpactRow } from "@/components/ui/animated-impact-row";
import ImageSpotlight from "@/components/ui/image-spotlight";
import competition from "@/components/images/paypal1-competition.png";
import montlyInvoicingHeroOnTable from "@/components/images/Monthly invoicing Images/MontlyInvoicingHeroScreen_OnTable.png";
import phoneWithAppRollover from "@/components/images/Teacher'sApp/PhoneWithApp_Rollover.png";
import workflow from "@/components/images/WorkflowDiagram.svg";
import circleLg from "@/components/images/paypal1-circle-lg.png";
import squareBottomLeft from "@/components/images/SquareBottomLeft.png";
import flow1 from "@/components/images/1StepFlow_1.png";
import flow2 from "@/components/images/1StepFlow_2.png";
import flow3 from "@/components/images/1StepFlow_3.png";
import payMonthlyScreens from "@/components/images/PayMonthlyScreens.png";
import payPalCreditScreens from "@/components/images/PayPalCreditScreens.png";
import payPalMastercardScreens from "@/components/images/PayPalMastercardScreens.png";
import payPalCreditUKScreens from "@/components/images/PayPalCreditUKScreens.png";
import payIn3UKScreens from "@/components/images/PayIn3UKScreens.png";
import cardArtPayIn4 from "@/components/images/PayIn4_CardArt.png";
import cardArtPayMonthly from "@/components/images/PayMonthly_CardArt.png";
import cardArtPayPalCredit from "@/components/images/PayPalCredit_CardArt.png";
import cardArtPayPalMastercard from "@/components/images/PayPalMastercard_CardArt.png";
import cardArtPayIn3 from "@/components/images/PayIn3_CardArt.png";

export const metadata = {
  title: "Optimizing Loan Application Flows in PayPal Checkout — Timothy Valderrama",
};

const leagueSpartan = "var(--font-league-spartan)";

function ImpactCard({
  art,
  product,
  amount,
  prefix = "$",
  suffix,
  decimals = 0,
  label,
}: {
  art: React.ReactNode;
  product: string;
  amount: number;
  prefix?: string;
  suffix: string;
  decimals?: number;
  label: string;
}) {
  return (
    <div
      className="flex flex-col items-start gap-[4px] text-white"
      style={{ fontFamily: "var(--font-league-spartan)" }}
    >
      {art}
      <p className="mt-2 text-xl lg:text-[32px] font-light leading-snug lg:leading-[42px] tracking-[-0.32px]">
        {product}
      </p>
      <div className="mt-[10px] flex items-baseline gap-3 lg:gap-[16px]">
        <p className="font-serif text-[clamp(40px,10vw,64px)] lg:text-[64px] font-normal leading-none tracking-[-0.64px] whitespace-nowrap">
          <CounterNumber
            to={amount}
            prefix={prefix}
            suffix={suffix}
            decimals={decimals}
          />
        </p>
        <p className="text-lg lg:text-[24px] font-normal leading-none tracking-[-0.24px]">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function PayPal1CaseStudy() {
  return (
    <main className="bg-black text-white">
      {/* Top: nav, title, specs (above hero image) */}
      <section className="w-full bg-black p-5 lg:p-[24px]">
        <div className="flex flex-col gap-10 lg:gap-[62px]">
          {/* Navigation */}
          <header className="flex w-full items-center justify-between shrink-0">
            <Link
              href="/"
              className="rounded-full border border-transparent bg-[#484848] px-4 py-2 text-base font-normal leading-none whitespace-nowrap text-white transition-colors duration-150 hover:border-white"
              style={{ fontFamily: "var(--font-league-spartan)" }}
            >
              Menu
            </Link>
            <Logo />
          </header>

          {/* Title block */}
          <ScrollFade direction="left" once={true}>
            <div
              className="flex w-full lg:w-[1335px] max-w-full flex-col gap-[14px]"
              style={{ fontFamily: leagueSpartan }}
            >
              <p className="text-sm lg:text-[18px] font-light leading-none">
                Reducing Friction
              </p>
              <h1 className="font-serif leading-[1.02] lg:leading-[96px] tracking-[-0.015em] text-[clamp(36px,9vw,96px)] lg:text-[96px]">
                Optimizing Loan Application Flows in PayPal Checkout
              </h1>
            </div>
          </ScrollFade>

          {/* Project specs */}
          <div
            className="flex flex-col lg:flex-row w-full items-start gap-10 lg:gap-[184px] py-6 lg:py-[42px]"
            style={{ fontFamily: leagueSpartan }}
          >
            <ScrollFade direction="left" once={true}>
              <div className="flex w-full lg:w-[861px] max-w-full flex-col gap-[14px]">
                <p className="text-sm lg:text-[18px] font-light leading-none">My Role</p>
                <p className="text-lg lg:text-[32px] font-light leading-snug lg:leading-[42px]">
                  This initiative, driven from the highest levels, aimed to completely redesign the PayPal checkout experience. I led the redesign of all US and UK credit products, ensuring they were optimized for the new framework and delivered a seamless user experience.
                </p>
              </div>
            </ScrollFade>
            <ScrollFade direction="right" once={true} className="lg:ml-auto w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10 lg:gap-[80px]">
                <div className="flex flex-col gap-[14px]">
                  <p className="text-sm lg:text-[18px] font-light leading-none">Timeline</p>
                  <p className="text-lg lg:text-[32px] font-light leading-snug lg:leading-[42px]">
                    1.5 months
                  </p>
                </div>
                <div className="flex w-full sm:w-[486px] flex-col gap-[14px]">
                  <p className="text-sm lg:text-[18px] font-light leading-none">Platforms</p>
                  <p className="text-lg lg:text-[32px] font-light leading-snug lg:leading-[42px]">
                    iOS/Android mobile and desktop
                  </p>
                </div>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Hero video */}
      <section className="relative w-full">
        <div className="relative aspect-[16/10] lg:aspect-auto lg:h-[1034px] w-full overflow-hidden">
          <HeroVideo src="/WomanPhoneShopping.mp4" />
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
            <p className="text-sm lg:text-[18px] font-light">Problem</p>
            <p className="text-[clamp(20px,4.5vw,48px)] lg:text-[48px] font-light leading-[1.3]">
              Paying with a credit card is seamless and nearly instant, while using a PayPal installment credit product requires customers to complete a rigorous, multi-step application at every checkout. This added friction disrupts the purchase flow, hurting conversion, repeat usage, and adoption of one of PayPal&apos;s key revenue-driving products.
              <br />
              <br />
              While this CEO-prioritized initiative optimized six credit products across the United States and United Kingdom, this case study highlights Pay in 4, which saw the most significant product and design changes.
            </p>
          </div>
        </ScrollFade>

        {/* Analysis */}
        <div className="mt-16 lg:mt-[125px] lg:-mr-[37px] flex w-full lg:w-[calc(100%+37px)] flex-col overflow-hidden">
          {/* Text aligned to movie's left edge via calc(100% - 1524px) */}
          <ScrollFade
            direction="right"
            className="flex flex-col gap-[14px] pb-10 lg:pb-[157px]"
            style={{ fontFamily: leagueSpartan }}
          >
            <p className="text-sm lg:text-[18px] font-light">Competitive analysis</p>
            <p className="w-full lg:w-[1279px] max-w-full text-lg lg:text-[32px] font-light leading-snug lg:leading-[42px]">
              Pay in 4, a top installment product, faced tough competition. We
              analyzed competitor screens and combined insights with research
              to create the most streamlined flow for returning customers.
            </p>
          </ScrollFade>

          {/* 3D UI Reveal animation — flush to right edge */}
          <div className="hidden lg:flex justify-end">
            <iframe
              src="/compositions/ui-3d-reveal.html"
              width="1524"
              height="916"
              scrolling="no"
              className="block shrink-0 border-0"
              style={{ height: "916px" }}
            />
          </div>
          {/* Mobile fallback — still image of competitor analysis */}
          <div className="lg:hidden -mx-5 mt-2">
            <Image
              src={competition}
              alt="Pay in 4 competitive analysis"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Workflow + commentary */}
        <div className="mt-16 lg:mt-[100px] flex flex-col lg:flex-row items-start lg:justify-end gap-10 lg:gap-[71px]">
          <div className="relative aspect-[1240/940] w-full lg:aspect-auto lg:h-[940px] lg:w-[1240px] lg:max-w-full">
            <Image
              src={workflow}
              alt="Workflow diagram"
              fill
              className="object-contain object-left"
            />
          </div>
          <ScrollFade direction="right">
            <p
              className="w-full lg:w-[339px] text-sm lg:text-[18px] font-light leading-[1.5] lg:leading-[1.4]"
              style={{ fontFamily: leagueSpartan }}
            >
              The biggest challenge was coordinating across a large group of
              stakeholders, including my immediate team, cross-functional
              partners, product owners, and leadership.
              <br />
              <br />
              Because PayPal UI 4.0 was not available for this initiative, we
              often had to create components ourselves. This required several
              rounds of iteration and review before the components were approved
              by all stakeholders.
            </p>
          </ScrollFade>
        </div>

        {/* Hero video */}
        <div className="mt-16 lg:mt-[157px] relative aspect-[16/10] lg:aspect-auto lg:h-[1034px] w-[calc(100%+40px)] lg:w-[calc(100%+74px)] -mx-5 lg:-mx-[37px] overflow-hidden pb-12 lg:pb-[100px]">
          <HeroVideo src="/videos/HeroPayPal1_Video.mp4" />
        </div>

      </section>

      {/* Impact graphs */}
      <section className="mt-20 lg:mt-[160px] max-w-[1600px] w-full pb-24 lg:pb-[200px] mx-auto px-5 lg:px-[37px]">
          <p className="font-light text-sm lg:text-[18px] mb-6 lg:mb-8" style={{ fontFamily: leagueSpartan }}>Impact</p>
          <div className="grid grid-cols-[100px_1fr] lg:grid-cols-[280px_1fr] gap-4 lg:gap-12 mb-4 lg:mb-6">
            <div />
            <div className="flex justify-between">
              <p className="font-[family-name:var(--font-league-spartan)] font-bold text-base lg:text-[24px] text-white/60 tracking-[-0.24px]">2023</p>
              <p className="font-[family-name:var(--font-league-spartan)] font-bold text-base lg:text-[24px] text-white/60 tracking-[-0.24px]">H1 2024</p>
            </div>
          </div>
          <div className="space-y-10 lg:space-y-14">
            <AnimatedImpactRow
              label={"Credit product\nutilization"}
              todayPct={38}
              futurePct={47}
              todayLabel="38%"
              futureLabel="47%"
            />
            <AnimatedImpactRow
              label={"Credit product\nconversion"}
              todayPct={51}
              futurePct={79}
              todayLabel="51%"
              futureLabel="79%"
              sublabel="Increase of 27%"
            />
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-3 lg:gap-12 items-baseline lg:items-center pt-4">
              <h3 className="font-[family-name:var(--font-league-spartan)] text-2xl lg:text-[40px] leading-[1.1] font-normal whitespace-pre-line">{"Increase in\nannual revenue"}</h3>
              <p className="font-serif text-[clamp(48px,12vw,96px)] lg:text-[clamp(64px,8vw,96px)] leading-[1] tracking-[-0.96px]">$784M</p>
            </div>
          </div>
      </section>

      <section className="relative w-full px-5 lg:px-[37px]">
        {/* Closing grid */}
        <div className="mt-0 grid grid-cols-1 lg:grid-cols-2 gap-x-5 lg:gap-x-[34px] gap-y-6 lg:gap-y-[36px] pb-16 lg:pb-[100px]">
          {/* Top Left: SquareBottomLeft image with spotlight */}
          <ImageSpotlight config={{ className: 'aspect-square w-full', spotlightSize: 160 }}>
            <Image src={squareBottomLeft} alt="" fill className="object-cover" />
          </ImageSpotlight>

          {/* Top Right: app-showcase animation */}
          <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-[#00b0d8] to-[#4d757d]">
            <iframe
              src="/compositions/app-showcase.html"
              width="866"
              height="846"
              scrolling="no"
              allowTransparency
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0 w-[866px] h-[846px] origin-center scale-[0.4] sm:scale-[0.55] md:scale-[0.7] lg:scale-100"
              style={{ display: "block", background: "transparent" }}
            />
          </div>

          {/* Bottom Left: slideshow video — click opens prototype overlay */}
          <VideoOverlay />

          {/* Bottom Right: closing copy */}
          <ScrollFade direction="right" className="flex flex-col justify-center gap-10 lg:gap-[56px] pl-0 lg:pl-[24px]" style={{ fontFamily: leagueSpartan }}>
            <div>
              <p className="font-serif text-[clamp(48px,11vw,72px)] lg:text-[72px] font-normal leading-none">208%</p>
              <p className="mt-1 text-sm lg:text-[18px] font-light">
                Increase in conversion
              </p>
            </div>
            <div>
              <p className="font-serif text-[clamp(48px,11vw,72px)] lg:text-[72px] font-normal leading-none">
                $598M/mo.
              </p>
              <p className="mt-1 text-sm lg:text-[18px] font-light">
                Trending total purchase volume
              </p>
            </div>
            <div className="flex flex-col gap-[14px]">
              <p className="text-sm lg:text-[18px] font-light">What did I do?</p>
              <ul className="ml-[24px] flex list-disc flex-col gap-4 lg:gap-[24px] text-base lg:text-[24px] font-light leading-[1.5] lg:leading-[1.4]">
                <li>
                  Drove cross-functional collaboration across Content, Product,
                  and leadership to optimize onboarding and purchase flows for
                  six credit products in the new PayPal checkout, contributing
                  ~$784M to PayPal&apos;s bottom line.
                </li>
                <li>
                  Reduced the Pay in 4 funnel from three steps to one across
                  U.S. and U.K. markets, removing friction and improving the
                  experience for repeat users.
                </li>
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 lg:gap-[25px]">
              <Link
                href="/"
                className="inline-flex items-center rounded-full bg-[#484848] px-6 lg:px-[30px] py-3 lg:py-[16px] text-lg lg:text-[32px] font-normal leading-none whitespace-nowrap text-white transition-colors duration-150 hover:bg-[#606060]"
                style={{ fontFamily: "var(--font-league-spartan)" }}
              >
                Back to homepage
              </Link>
              <a
                href="https://www.figma.com/proto/D9bFYkGXUZiIliqQ8Fyvv2/Pi4-Prototype-Ai?node-id=30102-13987&p=f&viewport=-1816%2C-1683%2C0.06&t=iwyrQi9R85uJhpV1-8&scaling=scale-down&content-scaling=fixed&starting-point-node-id=30102%3A13987&page-id=18168%3A28543&hotspot-hints=0&disable-default-keyboard-nav=1&hide-ui=1"
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

      {/* Pay Monthly */}
      <section className="relative w-full overflow-hidden bg-black">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-[51px] px-5 lg:px-[24px] py-12 lg:py-[75px]">
          <ScrollFade
            direction="left"
            className="flex w-full lg:w-[688px] lg:shrink-0 flex-col items-start gap-10 lg:gap-[92px]"
            style={{ fontFamily: leagueSpartan }}
          >
            <div className="flex flex-col gap-4 lg:gap-[64px]">
              <p className="font-light text-[18px] leading-normal text-white" style={{ fontFamily: leagueSpartan }}>Overall impact</p>
              <h2 className="font-serif text-[clamp(40px,10vw,64px)] lg:text-[64px] leading-none text-white">
                Pay Monthly
              </h2>
            </div>
            <div className="flex w-full flex-col gap-8 lg:gap-[46px]">
              <div className="flex w-full lg:w-[200px] flex-col gap-[5px] text-white">
                <p className="font-serif text-[clamp(44px,12vw,72px)] lg:text-[72px] font-normal leading-none">2.3%</p>
                <p className="text-sm lg:text-[18px] font-light leading-none">
                  Increase in conversion
                </p>
              </div>
              <div className="h-px w-full bg-white/25" />
              <div className="flex w-full lg:w-[408px] flex-col gap-[5px] text-white">
                <p className="font-serif text-[clamp(44px,12vw,72px)] lg:text-[72px] font-normal leading-none">$167M</p>
                <p className="text-sm lg:text-[18px] font-light leading-none">
                  Annual iRev
                </p>
              </div>
              <div className="h-px w-full bg-white/25" />
            </div>
          </ScrollFade>
          <ScrollFade direction="right" className="w-full lg:w-auto lg:shrink-0">
            <Image
              src={payMonthlyScreens}
              alt="Pay Monthly application screens"
              width={1333}
              height={852}
              sizes="(max-width: 1024px) 100vw, 1333px"
              className="block w-full h-auto lg:w-[1333px]"
            />
          </ScrollFade>
        </div>
      </section>

      {/* PayPal Credit US */}
      <section className="relative w-full overflow-hidden bg-black">
        <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center lg:justify-end gap-10 lg:gap-[51px] px-5 lg:px-[24px] py-12 lg:py-[75px]">
          <ScrollFade direction="left" className="w-full lg:w-auto lg:shrink-0">
            <Image
              src={payPalCreditScreens}
              alt="PayPal Credit application screens"
              width={1333}
              height={932}
              sizes="(max-width: 1024px) 100vw, 1333px"
              className="block w-full h-auto lg:w-[1333px]"
            />
          </ScrollFade>
          <ScrollFade
            direction="right"
            className="flex w-full lg:w-[688px] lg:shrink-0 flex-col items-start gap-10 lg:gap-[92px]"
            style={{ fontFamily: leagueSpartan }}
          >
            <h2 className="font-serif text-[clamp(40px,10vw,64px)] lg:text-[64px] leading-none text-white">
              PayPal Credit US
            </h2>
            <div className="flex w-full flex-col gap-8 lg:gap-[46px]">
              <div className="flex w-full lg:w-[200px] flex-col gap-[5px] text-white">
                <p className="font-serif text-[clamp(44px,12vw,72px)] lg:text-[72px] font-normal leading-none">6.3%</p>
                <p className="text-sm lg:text-[18px] font-light leading-none">
                  Increase in conversion
                </p>
              </div>
              <div className="h-px w-full bg-white/25" />
              <div className="flex w-full lg:w-[408px] flex-col gap-[5px] text-white">
                <p className="font-serif text-[clamp(44px,12vw,72px)] lg:text-[72px] font-normal leading-none">$316M</p>
                <p className="text-sm lg:text-[18px] font-light leading-none">
                  Annual iRev
                </p>
              </div>
              <div className="h-px w-full bg-white/25" />
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* PayPal Mastercard */}
      <section className="relative w-full overflow-hidden bg-black">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-[51px] px-5 lg:px-[24px] py-12 lg:py-[75px]">
          <ScrollFade
            direction="left"
            className="flex w-full lg:w-[688px] lg:shrink-0 flex-col items-start gap-10 lg:gap-[92px]"
            style={{ fontFamily: leagueSpartan }}
          >
            <h2 className="font-serif text-[clamp(40px,10vw,64px)] lg:text-[64px] leading-none text-white">
              PayPal Mastercard
            </h2>
            <div className="flex w-full flex-col gap-8 lg:gap-[46px]">
              <div className="flex w-full lg:w-[200px] flex-col gap-[5px] text-white">
                <p className="font-serif text-[clamp(44px,12vw,72px)] lg:text-[72px] font-normal leading-none">3.1%</p>
                <p className="text-sm lg:text-[18px] font-light leading-none">
                  Increase in conversion
                </p>
              </div>
              <div className="h-px w-full bg-white/25" />
              <div className="flex w-full lg:w-[408px] flex-col gap-[5px] text-white">
                <p className="font-serif text-[clamp(44px,12vw,72px)] lg:text-[72px] font-normal leading-none">$233M</p>
                <p className="text-sm lg:text-[18px] font-light leading-none">
                  Annual iRev
                </p>
              </div>
              <div className="h-px w-full bg-white/25" />
            </div>
          </ScrollFade>
          <ScrollFade direction="right" className="w-full lg:w-auto lg:shrink-0">
            <Image
              src={payPalMastercardScreens}
              alt="PayPal Mastercard application screens"
              width={1333}
              height={852}
              sizes="(max-width: 1024px) 100vw, 1333px"
              className="block w-full h-auto lg:w-[1333px]"
            />
          </ScrollFade>
        </div>
      </section>

      {/* PayPal Credit UK */}
      <section className="relative w-full overflow-hidden bg-black">
        <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center lg:justify-end gap-10 lg:gap-[51px] px-5 lg:px-[24px] py-12 lg:py-[75px]">
          <ScrollFade direction="left" className="w-full lg:w-auto lg:shrink-0">
            <Image
              src={payPalCreditUKScreens}
              alt="PayPal Credit UK application screens"
              width={1333}
              height={852}
              sizes="(max-width: 1024px) 100vw, 1333px"
              className="block w-full h-auto lg:w-[1333px]"
            />
          </ScrollFade>
          <ScrollFade
            direction="right"
            className="flex w-full lg:w-[688px] lg:shrink-0 flex-col items-start gap-10 lg:gap-[92px]"
            style={{ fontFamily: leagueSpartan }}
          >
            <h2 className="font-serif text-[clamp(40px,10vw,64px)] lg:text-[64px] leading-none text-white">
              PayPal Credit UK
            </h2>
            <div className="flex w-full flex-col gap-8 lg:gap-[46px]">
              <div className="flex w-full lg:w-[200px] flex-col gap-[5px] text-white">
                <p className="font-serif text-[clamp(44px,12vw,72px)] lg:text-[72px] font-normal leading-none">5.3%</p>
                <p className="text-sm lg:text-[18px] font-light leading-none">
                  Increase in conversion
                </p>
              </div>
              <div className="h-px w-full bg-white/25" />
              <div className="flex w-full lg:w-[408px] flex-col gap-[5px] text-white">
                <p className="font-serif text-[clamp(44px,12vw,72px)] lg:text-[72px] font-normal leading-none">$68M</p>
                <p className="text-sm lg:text-[18px] font-light leading-none">
                  Annual iRev
                </p>
              </div>
              <div className="h-px w-full bg-white/25" />
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Pay in 3 UK */}
      <section className="relative w-full overflow-hidden bg-black">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-[51px] px-5 lg:px-[24px] py-12 lg:py-[75px]">
          <ScrollFade
            direction="left"
            className="flex w-full lg:w-[688px] lg:shrink-0 flex-col items-start gap-10 lg:gap-[92px]"
            style={{ fontFamily: leagueSpartan }}
          >
            <h2 className="font-serif text-[clamp(40px,10vw,64px)] lg:text-[64px] leading-none text-white">
              Pay in 3 UK
            </h2>
            <div className="flex w-full flex-col gap-8 lg:gap-[46px]">
              <div className="flex w-full lg:w-[200px] flex-col gap-[5px] text-white">
                <p className="font-serif text-[clamp(44px,12vw,72px)] lg:text-[72px] font-normal leading-none">78%</p>
                <p className="text-sm lg:text-[18px] font-light leading-none">
                  Increase in conversion
                </p>
              </div>
              <div className="h-px w-full bg-white/25" />
              <div className="flex w-full lg:w-[408px] flex-col gap-[5px] text-white">
                <p className="font-serif text-[clamp(44px,12vw,72px)] lg:text-[72px] font-normal leading-none">$110M</p>
                <p className="text-sm lg:text-[18px] font-light leading-none">
                  Average monthly TPV
                </p>
              </div>
              <div className="h-px w-full bg-white/25" />
            </div>
          </ScrollFade>
          <ScrollFade direction="right" className="w-full lg:w-auto lg:shrink-0">
            <Image
              src={payIn3UKScreens}
              alt="Pay in 3 UK application screens"
              width={842}
              height={852}
              sizes="(max-width: 1024px) 100vw, 842px"
              className="block w-full h-auto lg:w-[842px]"
            />
          </ScrollFade>
        </div>
      </section>

      {/* Overall Impact */}
      <section
        className="bg-black max-w-[1600px] w-full mx-auto px-5 lg:px-[37px] pt-20 lg:pt-[120px] pb-24 lg:pb-[150px]"
        style={{ fontFamily: leagueSpartan }}
      >
        <div>
        <div className="flex flex-col gap-12 lg:gap-[73px]">
          {/* US Credit */}
          <div className="flex flex-col gap-8 lg:gap-[42px]">
            <h2 className="font-serif text-[clamp(40px,10vw,64px)] lg:text-[64px] leading-none text-white">
              US Credit
            </h2>
            <div className="flex flex-wrap gap-x-12 lg:gap-x-[204px] gap-y-10 lg:gap-y-[64px]">
              <ImpactCard
                art={<Image src={cardArtPayIn4} alt="Pay in 4" width={96} height={96} />}
                product="Pay in 4"
                amount={7.1}
                prefix="$"
                suffix="B"
                decimals={1}
                label="TPV"
              />
              <ImpactCard
                art={<Image src={cardArtPayMonthly} alt="Pay Monthly" width={96} height={96} />}
                product="Pay Monthly"
                amount={167}
                prefix="$"
                suffix="M"
                label="Rev"
              />
              <ImpactCard
                art={<Image src={cardArtPayPalCredit} alt="PayPal Credit" width={96} height={96} />}
                product="PayPal Credit"
                amount={316}
                prefix="$"
                suffix="M"
                label="Rev"
              />
              <ImpactCard
                art={<Image src={cardArtPayPalMastercard} alt="PayPal Mastercard" width={96} height={96} />}
                product="PayPal Mastercard"
                amount={233}
                prefix="$"
                suffix="M"
                label="Rev"
              />
            </div>
          </div>

          {/* UK Credit */}
          <div className="flex flex-col gap-8 lg:gap-[42px]">
            <h2 className="font-serif text-[clamp(40px,10vw,64px)] lg:text-[64px] leading-none text-white">
              UK Credit
            </h2>
            <div className="flex flex-col lg:flex-row items-start lg:items-end gap-10 lg:gap-0">
              <div className="flex flex-wrap w-full lg:w-[862px] lg:shrink-0 items-end gap-x-12 gap-y-8 lg:gap-x-[155px]">
                <ImpactCard
                  art={<Image src={cardArtPayIn3} alt="Pay in 3" width={96} height={96} />}
                  product="Pay in 3"
                  amount={1.32}
                  prefix="$"
                  suffix="B"
                  decimals={2}
                  label="TPV"
                />
                <ImpactCard
                  art={<Image src={cardArtPayPalCredit} alt="PayPal Credit" width={96} height={96} />}
                  product="PayPal Credit"
                  amount={68}
                  prefix="$"
                  suffix="M"
                  label="Rev"
                />
              </div>
              <div className="flex w-full lg:h-[144px] lg:w-[477px] flex-col items-start gap-3 lg:gap-0 lg:justify-between text-white">
                <p className="text-lg lg:text-[32px] font-light leading-snug lg:leading-[42px] tracking-[-0.32px]">
                  Total revenue
                </p>
                <CounterNumber
                  to={784}
                  prefix="$"
                  suffix="M/yr."
                  className="font-serif text-[clamp(56px,14vw,96px)] lg:text-[96px] font-normal leading-[1] lg:leading-[72px] tracking-[-0.96px] whitespace-nowrap"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Next Case Studies */}
      <section className="relative w-full overflow-hidden bg-black pb-24 lg:pb-[200px] pt-12 lg:pt-[78px]">
        <NextCaseStudyTicker color="#4d2d8d" />

        <div className="relative flex flex-col lg:flex-row items-center lg:justify-center gap-12 lg:gap-[200px] px-5 lg:px-0">
          {/* Meta */}
          <Link href="/work/meta" className="group flex w-full max-w-[671px] lg:w-[671px] lg:shrink-0 flex-col gap-4 lg:gap-[27px]">
            <div className="relative aspect-[824/606] w-full overflow-hidden rounded-2xl lg:rounded-[30px]">
              <Image
                src={montlyInvoicingHeroOnTable}
                alt="Meta case study preview"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 671px"
              />
            </div>
            <p className="font-serif text-[clamp(36px,9vw,64px)] lg:text-[64px] leading-[1.1] lg:leading-[72px] tracking-[-0.64px] text-white transition-opacity duration-300 group-hover:opacity-70">
              Meta
            </p>
          </Link>

          {/* Solo */}
          <Link href="/work/MsSunshineApp" className="group flex w-full max-w-[437px] lg:w-[437px] lg:shrink-0 flex-col gap-4 lg:gap-[27px]">
            <div className="relative aspect-[437/666] lg:aspect-auto lg:h-[666px] w-full overflow-hidden rounded-2xl lg:rounded-[30px]">
              <Image
                src={phoneWithAppRollover}
                alt="Solo case study preview"
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

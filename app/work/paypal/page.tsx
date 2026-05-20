import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/ui/logo";
import VideoOverlay from "@/components/ui/video-overlay";
import ScrollFade from "@/components/ui/scroll-fade";
import HeroVideo from "@/components/ui/hero-video";
import CounterNumber from "@/components/ui/counter-number";
import { AnimatedImpactRow } from "@/components/ui/animated-impact-row";
import ImageSpotlight from "@/components/ui/image-spotlight";
import competition from "@/components/images/paypal1-competition.png";
import montlyInvoicingHeroOnTable from "@/components/images/Monthly invoicing Images/MontlyInvoicingHeroScreen_OnTable.png";
import phoneWithApp from "@/components/images/Teacher'sApp/PhoneWithApp.png";
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

export default function PayPal1CaseStudy() {
  return (
    <main className="bg-black text-white">
      {/* Top: nav, title, specs (above hero image) */}
      <section className="w-full bg-black p-[24px]">
        <div className="flex flex-col gap-[62px]">
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
              className="flex w-[1335px] max-w-full flex-col gap-[14px]"
              style={{ fontFamily: leagueSpartan }}
            >
              <p className="text-[18px] font-light leading-none">
                Reducing Friction
              </p>
              <h1 className="font-serif text-[96px] leading-[96px] tracking-[-0.015em]">
                Optimizing Loan Application Flows in PayPal Checkout
              </h1>
            </div>
          </ScrollFade>

          {/* Project specs */}
          <div
            className="flex w-full items-start gap-[184px] py-[42px]"
            style={{ fontFamily: leagueSpartan }}
          >
            <ScrollFade direction="left" once={true}>
              <div className="flex w-[861px] max-w-full flex-col gap-[14px]">
                <p className="text-[18px] font-light leading-none">My Role</p>
                <p className="text-[32px] font-light leading-[42px]">
                  This initiative, driven from the highest levels, aimed to completely redesign the PayPal checkout experience. I led the redesign of all US and UK credit products, ensuring they were optimized for the new framework and delivered a seamless user experience.
                </p>
              </div>
            </ScrollFade>
            <ScrollFade direction="right" once={true} className="ml-auto">
              <div className="flex items-start gap-[80px]">
                <div className="flex flex-col gap-[14px]">
                  <p className="text-[18px] font-light leading-none">Timeline</p>
                  <p className="text-[32px] font-light leading-[42px]">
                    1.5 months
                  </p>
                </div>
                <div className="flex w-[486px] flex-col gap-[14px]">
                  <p className="text-[18px] font-light leading-none">Platforms</p>
                  <p className="text-[32px] font-light leading-[42px]">
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
        <div className="relative h-[1034px] w-full overflow-hidden">
          <HeroVideo src="/WomanPhoneShopping.mp4" />
        </div>
      </section>

      {/* Body */}
      <section className="relative w-full px-[37px] pt-[36px]">
        {/* Introduction */}
        <ScrollFade direction="left">
          <div
            className="flex w-full max-w-[1563px] flex-col gap-[14px]"
            style={{ fontFamily: leagueSpartan }}
          >
            <p className="text-[18px] font-light">Problem</p>
            <p className="text-[48px] font-light leading-[1.3]">
              Paying with a credit card is seamless and nearly instant, while using a PayPal installment credit product requires customers to complete a rigorous, multi-step application at every checkout. This added friction disrupts the purchase flow, hurting conversion, repeat usage, and adoption of one of PayPal&apos;s key revenue-driving products.
              <br />
              <br />
              In this case study, I&apos;ll highlight our Pay in 4 product, which experienced the most impactful changes.
            </p>
          </div>
        </ScrollFade>

        {/* Analysis */}
        <div className="mt-[125px] -mr-[37px] flex w-[calc(100%+37px)] flex-col overflow-hidden">
          {/* Text aligned to movie's left edge via calc(100% - 1524px) */}
          <ScrollFade direction="right" className="flex flex-col gap-[14px] pb-[157px]" style={{ paddingLeft: "calc(100% - 1524px)", fontFamily: leagueSpartan }}>
            <p className="text-[18px] font-light">Competitive analysis</p>
            <p className="w-[1279px] max-w-full text-[32px] font-light leading-[42px]">
              Pay in 4, our top installment product, faced tough competition. We
              analyzed competitor screens and combined insights with our research
              to create the most streamlined flow for returning customers.
            </p>
          </ScrollFade>

          {/* 3D UI Reveal animation — flush to right edge */}
          <div className="flex justify-end">
            <iframe
              src="/compositions/ui-3d-reveal.html"
              width="1524"
              height="916"
              scrolling="no"
              className="block shrink-0 border-0"
              style={{ height: "916px" }}
            />
          </div>
        </div>

        {/* Workflow + commentary */}
        <div className="mt-[100px] flex items-start justify-end gap-[71px]">
          <div className="relative h-[940px] w-[1240px] max-w-full">
            <Image
              src={workflow}
              alt="Workflow diagram"
              fill
              className="object-contain object-left"
            />
          </div>
          <ScrollFade direction="right">
            <p
              className="w-[339px] text-[18px] font-light leading-[1.4]"
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
        <div className="mt-[157px] relative h-[1034px] w-full -mx-[37px] overflow-hidden pb-[100px]" style={{ width: 'calc(100% + 74px)' }}>
          <HeroVideo src="/videos/HeroPayPal1_Video.mp4" />
        </div>

      </section>

      {/* Impact graphs */}
      <section className="mt-[160px] max-w-[1600px] w-full pb-[200px] mx-auto px-[37px]">
          <p className="font-light text-[18px] mb-8" style={{ fontFamily: leagueSpartan }}>Impact</p>
          <div className="grid grid-cols-[280px_1fr] gap-12 mb-6">
            <div />
            <div className="flex justify-between">
              <p className="font-[family-name:var(--font-league-spartan)] font-bold text-[24px] text-white/60 tracking-[-0.24px]">2023</p>
              <p className="font-[family-name:var(--font-league-spartan)] font-bold text-[24px] text-white/60 tracking-[-0.24px]">H1 2024</p>
            </div>
          </div>
          <div className="space-y-14">
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
            <div className="grid grid-cols-[280px_1fr] gap-12 items-center pt-4">
              <h3 className="font-[family-name:var(--font-league-spartan)] text-[40px] leading-[1.1] font-normal whitespace-pre-line">{"Increase in\nannual revenue"}</h3>
              <p className="font-serif text-[clamp(64px,8vw,96px)] leading-[1] tracking-[-0.96px]">$784M</p>
            </div>
          </div>
      </section>

      <section className="relative w-full px-[37px]">
        {/* Closing grid */}
        <div className="mt-[0px] grid grid-cols-2 gap-x-[34px] gap-y-[36px] pb-[100px]">
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
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0"
              style={{ display: "block", background: "transparent" }}
            />
          </div>

          {/* Bottom Left: slideshow video — click opens prototype overlay */}
          <VideoOverlay />

          {/* Bottom Right: closing copy */}
          <ScrollFade direction="right" className="flex flex-col justify-center gap-[56px] pl-[24px]" style={{ fontFamily: leagueSpartan }}>
            <div>
              <p className="font-serif text-[72px] font-semibold leading-none">208%</p>
              <p className="mt-1 text-[18px] font-light">
                Increase in conversion
              </p>
            </div>
            <div>
              <p className="font-serif text-[72px] font-semibold leading-none">
                $598M/mo.
              </p>
              <p className="mt-1 text-[18px] font-light">
                Trending total purchase volume
              </p>
            </div>
            <div className="flex flex-col gap-[14px]">
              <p className="text-[18px] font-light">What did I do?</p>
              <ul className="ml-[24px] flex list-disc flex-col gap-[24px] text-[24px] font-light leading-[1.4]">
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
            <div className="flex items-center gap-[25px]">
              <Link
                href="/"
                className="inline-flex items-center rounded-full bg-[#484848] px-[30px] py-[16px] text-[32px] font-normal leading-none whitespace-nowrap text-white transition-colors duration-150 hover:bg-[#606060]"
                style={{ fontFamily: "var(--font-league-spartan)" }}
              >
                More work
              </Link>
              <a
                href="https://www.figma.com/proto/D9bFYkGXUZiIliqQ8Fyvv2/Pi4-Prototype-Ai?node-id=30102-13987&p=f&viewport=-1816%2C-1683%2C0.06&t=iwyrQi9R85uJhpV1-8&scaling=scale-down&content-scaling=fixed&starting-point-node-id=30102%3A13987&page-id=18168%3A28543&hotspot-hints=0&disable-default-keyboard-nav=1&hide-ui=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-[#919191] px-[30px] py-[16px] text-[32px] font-normal leading-none whitespace-nowrap text-white transition-colors duration-150 hover:border-white"
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
        <div className="flex items-center gap-[51px] px-[24px] py-[75px]">
          <ScrollFade
            direction="left"
            className="flex w-[688px] shrink-0 flex-col items-start gap-[92px]"
            style={{ fontFamily: leagueSpartan }}
          >
            <h2 className="font-serif text-[64px] leading-none text-white">
              Pay Monthly
            </h2>
            <div className="flex w-full flex-col gap-[46px]">
              <div className="flex w-[200px] flex-col gap-[5px] text-white">
                <p className="font-serif text-[72px] font-semibold leading-none">2.3%</p>
                <p className="text-[18px] font-light leading-none">
                  Increase in conversion
                </p>
              </div>
              <div className="h-px w-full bg-white/25" />
              <div className="flex w-[408px] flex-col gap-[5px] text-white">
                <p className="font-serif text-[72px] font-semibold leading-none">$167M</p>
                <p className="text-[18px] font-light leading-none">
                  Annual iRev
                </p>
              </div>
              <div className="h-px w-full bg-white/25" />
            </div>
          </ScrollFade>
          <ScrollFade direction="right" className="shrink-0">
            <Image
              src={payMonthlyScreens}
              alt="Pay Monthly application screens"
              width={1333}
              height={852}
              sizes="1333px"
              className="block"
            />
          </ScrollFade>
        </div>
      </section>

      {/* PayPal Credit US */}
      <section className="relative w-full overflow-hidden bg-black">
        <div className="flex items-center justify-end gap-[51px] px-[24px] py-[75px]">
          <ScrollFade direction="left" className="shrink-0">
            <Image
              src={payPalCreditScreens}
              alt="PayPal Credit application screens"
              width={1333}
              height={932}
              sizes="1333px"
              className="block"
            />
          </ScrollFade>
          <ScrollFade
            direction="right"
            className="flex w-[688px] shrink-0 flex-col items-start gap-[92px]"
            style={{ fontFamily: leagueSpartan }}
          >
            <h2 className="font-serif text-[64px] leading-none text-white">
              PayPal Credit US
            </h2>
            <div className="flex w-full flex-col gap-[46px]">
              <div className="flex w-[200px] flex-col gap-[5px] text-white">
                <p className="font-serif text-[72px] font-semibold leading-none">6.3%</p>
                <p className="text-[18px] font-light leading-none">
                  Increase in conversion
                </p>
              </div>
              <div className="h-px w-full bg-white/25" />
              <div className="flex w-[408px] flex-col gap-[5px] text-white">
                <p className="font-serif text-[72px] font-semibold leading-none">$316M</p>
                <p className="text-[18px] font-light leading-none">
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
        <div className="flex items-center gap-[51px] px-[24px] py-[75px]">
          <ScrollFade
            direction="left"
            className="flex w-[688px] shrink-0 flex-col items-start gap-[92px]"
            style={{ fontFamily: leagueSpartan }}
          >
            <h2 className="font-serif text-[64px] leading-none text-white">
              PayPal Mastercard
            </h2>
            <div className="flex w-full flex-col gap-[46px]">
              <div className="flex w-[200px] flex-col gap-[5px] text-white">
                <p className="font-serif text-[72px] font-semibold leading-none">3.1%</p>
                <p className="text-[18px] font-light leading-none">
                  Increase in conversion
                </p>
              </div>
              <div className="h-px w-full bg-white/25" />
              <div className="flex w-[408px] flex-col gap-[5px] text-white">
                <p className="font-serif text-[72px] font-semibold leading-none">$233M</p>
                <p className="text-[18px] font-light leading-none">
                  Annual iRev
                </p>
              </div>
              <div className="h-px w-full bg-white/25" />
            </div>
          </ScrollFade>
          <ScrollFade direction="right" className="shrink-0">
            <Image
              src={payPalMastercardScreens}
              alt="PayPal Mastercard application screens"
              width={1333}
              height={852}
              sizes="1333px"
              className="block"
            />
          </ScrollFade>
        </div>
      </section>

      {/* PayPal Credit UK */}
      <section className="relative w-full overflow-hidden bg-black">
        <div className="flex items-center justify-end gap-[51px] px-[24px] py-[75px]">
          <ScrollFade direction="left" className="shrink-0">
            <Image
              src={payPalCreditUKScreens}
              alt="PayPal Credit UK application screens"
              width={1333}
              height={852}
              sizes="1333px"
              className="block"
            />
          </ScrollFade>
          <ScrollFade
            direction="right"
            className="flex w-[688px] shrink-0 flex-col items-start gap-[92px]"
            style={{ fontFamily: leagueSpartan }}
          >
            <h2 className="font-serif text-[64px] leading-none text-white">
              PayPal Credit UK
            </h2>
            <div className="flex w-full flex-col gap-[46px]">
              <div className="flex w-[200px] flex-col gap-[5px] text-white">
                <p className="font-serif text-[72px] font-semibold leading-none">5.3%</p>
                <p className="text-[18px] font-light leading-none">
                  Increase in conversion
                </p>
              </div>
              <div className="h-px w-full bg-white/25" />
              <div className="flex w-[408px] flex-col gap-[5px] text-white">
                <p className="font-serif text-[72px] font-semibold leading-none">$68M</p>
                <p className="text-[18px] font-light leading-none">
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
        <div className="flex items-center gap-[51px] px-[24px] py-[75px]">
          <ScrollFade
            direction="left"
            className="flex w-[688px] shrink-0 flex-col items-start gap-[92px]"
            style={{ fontFamily: leagueSpartan }}
          >
            <h2 className="font-serif text-[64px] leading-none text-white">
              Pay in 3 UK
            </h2>
            <div className="flex w-full flex-col gap-[46px]">
              <div className="flex w-[200px] flex-col gap-[5px] text-white">
                <p className="font-serif text-[72px] font-semibold leading-none">78%</p>
                <p className="text-[18px] font-light leading-none">
                  Increase in conversion
                </p>
              </div>
              <div className="h-px w-full bg-white/25" />
              <div className="flex w-[408px] flex-col gap-[5px] text-white">
                <p className="font-serif text-[72px] font-semibold leading-none">$110M</p>
                <p className="text-[18px] font-light leading-none">
                  Average monthly TPV
                </p>
              </div>
              <div className="h-px w-full bg-white/25" />
            </div>
          </ScrollFade>
          <ScrollFade direction="right" className="shrink-0">
            <Image
              src={payIn3UKScreens}
              alt="Pay in 3 UK application screens"
              width={842}
              height={852}
              sizes="842px"
              className="block"
            />
          </ScrollFade>
        </div>
      </section>

      {/* Overall Impact */}
      <div className="px-[250px] mt-[150px]">
        <div className="h-px w-full bg-white/30" />
      </div>
      <section
        className="bg-black px-[24px] pt-[50px] pb-[150px] flex flex-col items-center"
        style={{ fontFamily: leagueSpartan }}
      >
        <div className="w-full max-w-[1600px]">
        <p className="text-[18px] font-light leading-[28px] tracking-[-0.18px] text-white">
          OVERALL IMPACT
        </p>
        <div className="mt-[16px] flex flex-col gap-[143px]">
          {/* US Credit */}
          <div className="flex flex-col gap-[105px]">
            <h2 className="font-serif text-[64px] leading-none text-white">
              US Credit
            </h2>
            <div className="flex flex-wrap gap-x-[204px] gap-y-[64px]">
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
          <div className="flex flex-col gap-[105px]">
            <h2 className="font-serif text-[64px] leading-none text-white">
              UK Credit
            </h2>
            <div className="flex items-end">
              <div className="flex w-[862px] shrink-0 items-end gap-[155px]">
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
              <div className="flex h-[144px] w-[477px] flex-col items-start justify-between text-white">
                <p className="text-[32px] font-light leading-[42px] tracking-[-0.32px]">
                  Total revenue
                </p>
                <CounterNumber
                  to={784}
                  prefix="$"
                  suffix="M/yr."
                  className="font-serif text-[96px] font-semibold leading-[72px] tracking-[-0.96px] whitespace-nowrap"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <div className="px-[250px]">
        <div className="h-px bg-white/30 mb-[50px]" />
      </div>

      {/* Next Case Studies */}
      <section className="relative w-full overflow-hidden bg-black pb-[200px] pt-[78px]">
        {/* Watermark */}
        <p
          className="pointer-events-none absolute left-[29px] select-none text-[#4d2d8d]"
          style={{
            fontFamily: leagueSpartan,
            fontSize: "250px",
            lineHeight: "1",
            top: "296px",
          }}
        >
          Next Case Study.
        </p>

        <div className="relative flex items-center justify-center gap-[200px]">
          {/* Meta */}
          <Link href="/work/meta" className="group flex w-[671px] shrink-0 flex-col gap-[27px]">
            <div className="relative aspect-[824/606] w-full overflow-hidden rounded-[30px]">
              <Image
                src={montlyInvoicingHeroOnTable}
                alt="Meta case study preview"
                fill
                className="object-cover"
                sizes="671px"
              />
            </div>
            <p className="font-serif text-[64px] leading-[72px] tracking-[-0.64px] text-white">
              Meta
            </p>
          </Link>

          {/* Solo */}
          <Link href="/work/DailyReportingApp" className="group flex w-[437px] shrink-0 flex-col gap-[27px]">
            <div className="relative h-[666px] w-full overflow-hidden rounded-[30px]">
              <Image
                src={phoneWithApp}
                alt="Solo case study preview"
                fill
                className="object-cover"
                sizes="437px"
              />
            </div>
            <p className="font-serif text-[64px] leading-[72px] tracking-[-0.64px] text-white">
              Solo
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}


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
      <p className="mt-[8px] text-[32px] font-light leading-[42px] tracking-[-0.32px]">
        {product}
      </p>
      <div className="mt-[10px] flex items-baseline gap-[16px]">
        <p className="font-serif text-[64px] font-semibold leading-none tracking-[-0.64px] whitespace-nowrap">
          <CounterNumber
            to={amount}
            prefix={prefix}
            suffix={suffix}
            decimals={decimals}
          />
        </p>
        <p className="text-[24px] font-normal leading-none tracking-[-0.24px]">
          {label}
        </p>
      </div>
    </div>
  );
}

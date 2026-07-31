import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import NextCaseStudyTicker from "@/components/ui/next-case-study-ticker";
import CaseStudyTopBar from "@/components/ui/case-study-top-bar";
import ScrollFade from "@/components/ui/scroll-fade";
import HeroVideo from "@/components/ui/hero-video";
import CounterNumber from "@/components/ui/counter-number";
import BackToHomeButton from "@/components/ui/back-to-home-button";
import DragScroll from "@/components/ui/drag-scroll";
import montlyInvoicingHeroOnTable from "@/components/images/Monthly invoicing Images/MontlyInvoicingHeroScreen_OnTable.png";
import workflowDiagram from "@/components/images/PayPal DE/PayPalDE_WorkflowDiagram.png";
import phoneOrange from "@/components/images/PayPal DE/v1-PayIn30Days/paypal-pay-in-30-days-iphone-17-pro-max-cosmic-orange.png";
import phoneBlue from "@/components/images/PayPal DE/v1-Ratenzahlung/paypal-ratenzahlung-status-bar-iphone-17-pro-max-deep-blue.png";
import pi30AndroidFan from "@/components/images/PayPal DE/v1-PayIn30Days/paypal_android_phone_fan_v1.png";
import pi30ThreePhoneRow from "@/components/images/PayPal DE/v1-PayIn30Days/paypal_de_v2_android_s26_ultra_three_phone_row_v2.png";
import pi30AndroidVFan from "@/components/images/PayPal DE/v1-PayIn30Days/paypal_de_v3_android_s26_ultra_v_fan_v3.png";
import pi30TwoPhoneRow from "@/components/images/PayPal DE/v1-PayIn30Days/paypal_de_v4_iphone17_two_phone_row.png";
import pi30FivePhoneRow from "@/components/images/PayPal DE/v1-PayIn30Days/iphone17_five_phone_row_v6.png";
import pi30CheckoutFan from "@/components/images/PayPal DE/v1-PayIn30Days/iphone17_checkout_three_phone_fan_v7png.png";
import rzFourPhoneRow from "@/components/images/PayPal DE/v1-Ratenzahlung/paypal_de_v2_android_s26_ultra_four_phone_row.png";
import rzFivePhoneRow from "@/components/images/PayPal DE/v1-Ratenzahlung/paypal_de_v3_android_s26_ultra_five_phone_row.png";
import rzThreePhoneFan from "@/components/images/PayPal DE/v1-Ratenzahlung/paypal_de_v4_android_s26_ultra_three_phone_fan.png";
import rzSevenPhoneRow from "@/components/images/PayPal DE/v1-Ratenzahlung/paypal_de_v5_iphone17_seven_phone_row_centered.png";
import rzThreePhoneFanIphone from "@/components/images/PayPal DE/v1-Ratenzahlung/paypal_de_v6_iphone17_three_phone_fan.png";
import closingMacbook from "@/components/images/PayPal DE/macbook-paypal-4k.png";

export const metadata = {
  title: "Building Trust Through Responsible Credit — Timothy Valderrama",
};

const leagueSpartan = "var(--font-league-spartan)";
const ptSerif = "var(--font-pt-serif)";

const CYAN = "#00b0d8";
const PANEL = "#2a2e33";

/** Live prototype deployment for this case study. Leave empty to hide the button. */
const PROTOTYPE_URL: string = "https://german-credit-products.vercel.app/";

/**
 * The Figma frame is 1853px wide with a 24px gutter, so the design canvas is 1805px.
 * Timeline canvases are far wider than the viewport, so they scroll horizontally at a
 * fixed scale: 1em === 1 design pixel at a 1853px viewport, with a legibility floor.
 */
const DESIGN_UNIT = "clamp(0.47px, calc((100vw - 48px) / 1805), 1px)";

/** Positions a node on a design canvas where 1em === 1 Figma pixel. */
function box(x: number, y: number, w?: number, h?: number): React.CSSProperties {
  return {
    position: "absolute",
    left: `${x}em`,
    top: `${y}em`,
    ...(w === undefined ? null : { width: `${w}em` }),
    ...(h === undefined ? null : { height: `${h}em` }),
  };
}

function TimelineCanvas({
  width,
  height,
  label,
  children,
}: {
  width: number;
  height: number;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <DragScroll label={label}>
      <div
        className="relative"
        style={{ fontSize: DESIGN_UNIT, width: `${width}em`, height: `${height}em` }}
      >
        {children}
      </div>
    </DragScroll>
  );
}

function TimelineShape({
  x,
  y,
  w,
  h,
  fill,
  circle = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
  circle?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={circle ? "rounded-full" : "rounded-[16em]"}
      style={{ ...box(x, y, w, h), backgroundColor: fill }}
    />
  );
}

function TimelineShot({
  x,
  y,
  w,
  h,
  src,
  alt,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  src: StaticImageData;
  alt: string;
}) {
  return (
    <div style={box(x, y, w, h)}>
      <Image
        src={src}
        alt={alt}
        fill
        draggable={false}
        sizes={`(max-width: 1024px) ${Math.round(w * 0.47)}px, ${w}px`}
        className="object-cover"
      />
    </div>
  );
}

function TimelineTitle({
  x,
  y,
  w,
  lines,
}: {
  x: number;
  y: number;
  w: number;
  lines: string[];
}) {
  return (
    <h3 style={{ ...box(x, y, w), fontFamily: ptSerif }}>
      {lines.map((line) => (
        <span
          key={line}
          className="block text-[82em] leading-[1.2195] tracking-[-0.01em]"
        >
          {line}
        </span>
      ))}
    </h3>
  );
}

function TimelineCopy({
  x,
  y,
  w,
  bodyW,
  label,
  body,
  align = "left",
}: {
  x: number;
  y: number;
  w: number;
  bodyW: number;
  label: string;
  body: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`flex flex-col gap-[14em] ${
        align === "right" ? "items-end text-right" : "items-start"
      }`}
      style={{ ...box(x, y, w), fontFamily: leagueSpartan }}
    >
      <p className="text-[18em] font-light leading-none">{label}</p>
      {/* width lives on a wrapper so `em` resolves against the canvas unit, not the 32em text */}
      <div style={{ width: `${bodyW}em` }}>
        <p className="text-[32em] font-light leading-[1.3125]">{body}</p>
      </div>
    </div>
  );
}

const iterationOneCopy =
  "Used ChatGPT to integrate meeting notes and research information into a prompt + PayPal UI library for Figma Make to create various options.";
const usabilityCopy =
  "Partnered with the Globalization team and our German research office to test three design concepts with local users.";

export default function PayPalGermanCreditCaseStudy() {
  return (
    <main className="bg-black text-white">
      <CaseStudyTopBar />

      {/* Top: title + specs */}
      <section className="w-full bg-black px-5 pb-5 lg:px-[24px] lg:pb-[24px]">
        <div className="flex flex-col gap-10 lg:gap-[62px]">
          <ScrollFade direction="left" once={true}>
            <div
              className="flex w-full lg:w-[1335px] max-w-full flex-col gap-[14px]"
              style={{ fontFamily: leagueSpartan }}
            >
              <p className="text-sm lg:text-[18px] font-light leading-none">
                Turning Credit Caution Into Customer Adoption
              </p>
              <h1 className="font-serif leading-[1.02] lg:leading-[92px] tracking-[-0.015em] text-[clamp(36px,9vw,96px)] lg:text-[96px] lg:max-w-[1151px]">
                Building Trust Through Responsible Credit
              </h1>
            </div>
          </ScrollFade>

          <div
            className="flex flex-col lg:flex-row w-full items-start gap-10 lg:gap-[64px] py-6 lg:py-[42px]"
            style={{ fontFamily: leagueSpartan }}
          >
            <ScrollFade direction="left" once={true}>
              <div className="flex w-full lg:w-[1045px] max-w-full flex-col gap-[14px]">
                <p className="text-sm lg:text-[18px] font-light leading-none">My Role</p>
                <p className="text-lg lg:text-[32px] font-light leading-snug lg:leading-[42px]">
                  I led the product design from 0&rarr;1, turning an ambiguous idea into a validated,
                  polished digital experience. I owned the end-to-end process&mdash;from early concepts
                  and complex AI workflows to final UI and developer handoff&mdash;working closely with
                  product and engineering to move quickly, navigate trade-offs, and make the product
                  clear and useful for non-expert users.
                </p>
              </div>
            </ScrollFade>
            <ScrollFade direction="right" once={true} className="lg:ml-auto w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10 lg:gap-[80px]">
                <div className="flex flex-col gap-[14px] lg:w-[170px]">
                  <p className="text-sm lg:text-[18px] font-light leading-none">Timeline</p>
                  <p className="text-lg lg:text-[32px] font-light leading-snug lg:leading-[42px]">
                    3 months
                  </p>
                </div>
                <div className="flex w-full sm:w-[486px] lg:w-[254px] flex-col gap-[14px]">
                  <p className="text-sm lg:text-[18px] font-light leading-none">Platforms</p>
                  <p className="text-lg lg:text-[32px] font-light leading-snug lg:leading-[42px]">
                    Mobile &amp; desktop
                  </p>
                </div>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* Hero video */}
      <section className="relative w-full">
        <div className="relative aspect-[16/10] lg:aspect-auto lg:h-[1043px] w-full overflow-hidden">
          <HeroVideo src="/videos/PayPalDE/HeroMovie_PayPalDE.mp4" />
        </div>
      </section>

      {/* Problem */}
      <section className="relative w-full px-5 lg:px-[24px] pt-6 lg:pt-[24px]">
        <ScrollFade direction="left">
          <div
            className="flex w-full max-w-[1649px] flex-col gap-[14px]"
            style={{ fontFamily: leagueSpartan }}
          >
            <p className="text-sm lg:text-[18px] font-light leading-none">Problem</p>
            <p className="text-[clamp(20px,4.5vw,48px)] lg:text-[48px] font-light leading-[1.3] lg:leading-[56px]">
              German customers were hesitant to use credit because existing payment options felt
              risky, inflexible, or inconsistent with responsible spending habits. They needed a way
              to inspect online purchases before money left their bank account, while still having the
              flexibility to spread the cost of larger purchases into manageable payments.
            </p>
          </div>
        </ScrollFade>
      </section>

      {/* Impact — single-row composition on the 1805px design canvas */}
      <section
        className="relative w-full px-5 lg:px-[24px] mt-20 lg:mt-[167px]"
        style={{ containerType: "inline-size" }}
      >
        <div className="flex flex-col items-center gap-14 lg:relative lg:block lg:h-[895em] lg:[font-size:0.05540166cqw]">
          <ScrollFade
            direction="left"
            className="w-full self-start lg:absolute lg:left-0 lg:top-0 lg:w-[1805em]"
          >
            {/* section labels stay at a fixed 18px like every other section, not on the canvas scale */}
            <p
              className="text-sm font-light leading-none lg:text-[18px]"
              style={{ fontFamily: leagueSpartan }}
            >
              Impact
            </p>
          </ScrollFade>

          {/* Pay in 30 Days */}
          <ScrollFade
            direction="left"
            className="flex w-full flex-col items-start gap-6 lg:absolute lg:left-0 lg:top-[44em] lg:w-[331em] lg:items-end lg:gap-[42em] lg:px-[24em] lg:py-[20em] lg:text-right"
            style={{ fontFamily: leagueSpartan }}
          >
            <h2 className="lg:w-[283em]" style={{ fontFamily: ptSerif }}>
              <span className="block text-[clamp(40px,8vw,82px)] leading-[1.2195] tracking-[-0.01em] text-[#e5652a] lg:text-[82em]">
                Pay in 30 Days
              </span>
            </h2>
            <div className="flex flex-col gap-1 lg:w-[289em] lg:gap-[5em]">
              <p className="font-serif text-[clamp(56px,12vw,96px)] leading-[1.135] tracking-[-0.01em] lg:text-[96em]">
                <CounterNumber to={19.2} prefix="$" suffix="M" decimals={1} />
              </p>
              <p className="text-sm font-light leading-none lg:text-[24em]">Average annual revenue</p>
            </div>
          </ScrollFade>

          <a
            href={PROTOTYPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block aspect-[419/851] w-[72%] max-w-[320px] lg:absolute lg:left-[357em] lg:top-[44em] lg:aspect-auto lg:h-[851em] lg:w-[419em] lg:max-w-none"
          >
            <Image
              src={phoneOrange}
              alt="Pay in 30 Days shown on an iPhone"
              fill
              sizes="(max-width: 1024px) 72vw, 419px"
              className="object-contain"
            />
          </a>

          {/* PayPal Ratenzahlung */}
          <ScrollFade
            direction="right"
            className="flex w-full flex-col items-start gap-6 lg:absolute lg:left-[1271em] lg:top-[403em] lg:w-[560em] lg:gap-[42em] lg:px-[24em] lg:py-[20em]"
            style={{ fontFamily: leagueSpartan }}
          >
            <h2 className="lg:w-[536em]" style={{ fontFamily: ptSerif }}>
              {["PayPal", "Ratenzahlung"].map((line) => (
                <span
                  key={line}
                  className="block text-[clamp(40px,8vw,82px)] leading-[1.2195] tracking-[-0.01em] text-[#00b0d8] lg:text-[82em]"
                >
                  {line}
                </span>
              ))}
            </h2>
            <div className="flex flex-col gap-1 lg:w-[408em] lg:gap-[5em]">
              <p className="font-serif text-[clamp(56px,12vw,96px)] leading-[1.135] tracking-[-0.01em] lg:text-[96em]">
                <CounterNumber to={27.5} prefix="$" suffix="M" decimals={1} />
              </p>
              <p className="text-sm font-light leading-none lg:text-[24em]">Average annual revenue</p>
            </div>
          </ScrollFade>

          <a
            href={PROTOTYPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block aspect-[419/851] w-[72%] max-w-[320px] lg:absolute lg:left-[826em] lg:top-[44em] lg:aspect-auto lg:h-[851em] lg:w-[419em] lg:max-w-none"
          >
            <Image
              src={phoneBlue}
              alt="PayPal Ratenzahlung shown on an iPhone"
              fill
              sizes="(max-width: 1024px) 72vw, 419px"
              className="object-contain"
            />
          </a>
        </div>
      </section>

      {/* AI-assisted workflow */}
      <section
        className="relative w-full px-5 lg:px-[24px] mt-20 lg:mt-[167px]"
        style={{ containerType: "inline-size" }}
      >
        <div className="flex flex-col gap-8 lg:relative lg:block lg:h-[793em] lg:[font-size:0.05540166cqw]">
          <div className="relative aspect-[1682/793] w-full lg:absolute lg:left-[99em] lg:top-0 lg:aspect-auto lg:h-[793em] lg:w-[1682em]">
            <Image
              src={workflowDiagram}
              alt="End-to-end AI-assisted design workflow, from discovery through development"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1682px"
            />
          </div>
          <ScrollFade
            direction="right"
            className="w-full lg:absolute lg:left-[1401em] lg:top-[580em] lg:w-[380em]"
            style={{ fontFamily: leagueSpartan }}
          >
            <p className="text-sm font-light leading-[1.47] lg:text-[18em]">
              I used an end-to-end AI-assisted workflow &mdash; from ChatGPT-structured discovery
              through Figma iteration and Claude Code prototyping &mdash; to shape the design
              strategy and accelerate iteration. In the end, creating a seamless application for
              both credit products.
            </p>
          </ScrollFade>
        </div>
      </section>

      {/* Iteration intro */}
      <section className="relative w-full px-5 lg:px-[24px] mt-20 lg:mt-[167px]">
        <ScrollFade direction="left">
          <div
            className="flex w-full max-w-[1231px] flex-col gap-[14px]"
            style={{ fontFamily: leagueSpartan }}
          >
            <p className="text-sm lg:text-[18px] font-light leading-none">Iteration</p>
            <p className="text-lg lg:text-[32px] font-light leading-snug lg:leading-[42px]">
              I led rapid, cross-functional iteration across checkout, product, engineering, legal,
              risk, compliance, and research&mdash;turning customer insights into two award-winning
              PayPal products.
            </p>
          </div>
        </ScrollFade>
      </section>

      {/* Pay in 30 Days timeline.
          Figma nests the "Iteration" intro inside this canvas at (24, 0); it is kept outside so it
          stays readable at mobile widths instead of scrolling horizontally with the rail. */}
      <section className="relative w-full mt-10 lg:mt-[24px]">
        <TimelineCanvas width={9358} height={904} label="Pay in 30 Days timeline">
          <TimelineCopy
            x={7420}
            y={180}
            w={544}
            bodyW={542}
            label="Iteration 4"
            body="Introduced a servicing snooze feature that transformed a non-revenue-generating gateway product into a new revenue stream averaging $19.2M annually."
          />
          <TimelineShot
            x={5815}
            y={166}
            w={1584}
            h={679.5}
            src={pi30FivePhoneRow}
            alt="Servicing flow for rescheduling a Pay in 30 Days payment"
          />
          <TimelineCopy
            x={4284}
            y={222}
            w={504}
            bodyW={490}
            align="right"
            label="Iteration 3"
            body="Applied research insights to streamline checkout, allowing users to update their bank preferences in-flow and moving legal disclosures to the review page for greater transparency."
          />
          <TimelineTitle x={930} y={248} w={542} lines={["Pay in 30 Days", "Timeline"]} />
          <TimelineShape x={294} y={494} w={1232} h={330} fill={CYAN} />
          <TimelineShape x={3930} y={514} w={1232} h={310} fill={PANEL} />
          <TimelineShape x={7750} y={514} w={1584} h={310} fill={PANEL} />
          <TimelineCopy
            x={8763}
            y={549}
            w={540}
            bodyW={534}
            label="Iteration 7"
            body="Integrated the design into the new checkout framework, introducing more upfront options that improved user choice and enabled more accurate loan estimates from the start."
          />
          <TimelineShot
            x={8077}
            y={279}
            w={690}
            h={534.4}
            src={pi30CheckoutFan}
            alt="Pay in 30 Days inside the new checkout framework"
          />
          <TimelineShape x={2363} y={514} w={107} h={310} fill={CYAN} />
          <TimelineShape x={2363} y={180} w={107} h={310} fill={CYAN} />
          <TimelineShape x={2494} y={514} w={107} h={310} fill={CYAN} />
          <TimelineShape x={2494} y={180} w={107} h={310} fill={CYAN} />
          <TimelineShape x={2625} y={514} w={107} h={310} fill={CYAN} />
          <TimelineShape x={2625} y={180} w={1565} h={310} fill={CYAN} />
          <TimelineCopy
            x={3304}
            y={551}
            w={506}
            bodyW={347}
            label="Usability Research in Germany"
            body={usabilityCopy}
          />
          <TimelineShape x={5162} y={512} w={309} h={310} fill={CYAN} circle />
          <TimelineShape x={5492} y={512} w={309} h={310} fill={CYAN} circle />
          <TimelineShape x={7420} y={512} w={309} h={310} fill={CYAN} circle />
          <div className="text-right" style={box(7420, 609, 289)}>
            <p className="font-serif text-[92em] leading-[1.14] tracking-[-0.01em]">$19.2M</p>
          </div>
          <TimelineShape x={5492} y={180} w={309} h={310} fill={CYAN} circle />
          <TimelineShape x={1592} y={180} w={640} h={644} fill={PANEL} />
          <TimelineCopy
            x={1640}
            y={498}
            w={350}
            bodyW={240}
            label="Iteration 2"
            body="Enabled users to select a different bank that is not on file or add a new bank directly within the flow."
          />
          <TimelineCopy
            x={930}
            y={582}
            w={439}
            bodyW={548}
            label="Iteration 1"
            body={iterationOneCopy}
          />
          <TimelineShot
            x={86}
            y={180}
            w={824}
            h={644}
            src={pi30AndroidFan}
            alt="Early Pay in 30 Days concepts explored on Android"
          />
          <TimelineShot
            x={1900}
            y={0}
            w={1150}
            h={789}
            src={pi30ThreePhoneRow}
            alt="Bank selection and add-a-bank screens tested in checkout"
          />
          <TimelineShot
            x={3603}
            y={309}
            w={489}
            h={491}
            src={pi30AndroidVFan}
            alt="Three concepts taken into German usability research"
          />
          <TimelineShot
            x={4803}
            y={198}
            w={554}
            h={595}
            src={pi30TwoPhoneRow}
            alt="Streamlined checkout with in-flow bank preferences"
          />
        </TimelineCanvas>
      </section>

      {/* PayPal Ratenzahlung timeline */}
      <section className="relative w-full mt-20 lg:mt-[167px]">
        <TimelineCanvas width={10732} height={1017} label="PayPal Ratenzahlung timeline">
          <TimelineShape x={5270} y={74} w={4420} h={316} fill={PANEL} />
          <TimelineShape x={1929} y={57} w={340} h={341} fill={PANEL} circle />
          <TimelineShape x={1929} y={422} w={340} h={341} fill={PANEL} circle />
          <TimelineShape x={2292} y={422} w={340} h={341} fill={PANEL} circle />
          <TimelineTitle x={47} y={51} w={542} lines={["PayPal Ratenzahlung", "Timeline"]} />
          <TimelineCopy
            x={39}
            y={455}
            w={506}
            bodyW={493}
            label="Iteration 1"
            body={iterationOneCopy}
          />
          <TimelineShot
            x={555}
            y={43}
            w={1349}
            h={720}
            src={rzFourPhoneRow}
            alt="First PayPal Ratenzahlung installment concepts"
          />
          <TimelineShot
            x={2422}
            y={43}
            w={1685}
            h={720}
            src={rzFivePhoneRow}
            alt="Expanded set of installment options in checkout"
          />
          <TimelineCopy
            x={4165}
            y={52.5}
            w={537}
            bodyW={386}
            label="Iteration 2"
            body="Added 4 other installment options. Collaborated with my cross-functional counterpart to integrate PayPal Ratenzahlung into checkout teams&rsquo; many experiments."
          />
          <TimelineShape x={4173} y={404.5} w={340} h={341} fill={CYAN} circle />
          <TimelineShape x={4561} y={403} w={1013} h={330} fill={CYAN} />
          <TimelineCopy
            x={5613}
            y={492}
            w={365}
            bodyW={347}
            label="Usability Research in Germany"
            body={usabilityCopy}
          />
          <TimelineShot
            x={4799}
            y={0}
            w={764}
            h={717}
            src={rzThreePhoneFan}
            alt="Concepts taken into German usability research"
          />
          <TimelineShot
            x={6203}
            y={118}
            w={2930}
            h={899}
            src={rzSevenPhoneRow}
            alt="Single-page loan application and servicing screens"
          />
          <TimelineCopy
            x={9160}
            y={118}
            w={544}
            bodyW={494}
            label="Iteration 3"
            body="Integrated research findings into new PayPal UI for checkout and servicing. Optimized loan application from 4&rarr;1 page flow."
          />
          <TimelineCopy
            x={9268}
            y={715}
            w={540}
            bodyW={534}
            align="right"
            label="Iteration 4"
            body="Optimized to fit within the latest checkout framework."
          />
          <TimelineShot
            x={9808}
            y={118}
            w={924}
            h={823}
            src={rzThreePhoneFanIphone}
            alt="PayPal Ratenzahlung in the latest checkout framework"
          />
        </TimelineCanvas>
      </section>

      {/* Closing */}
      <section className="relative w-full mt-20 lg:mt-[167px]">
        <div className="relative">
          <a
            href={PROTOTYPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full aspect-[16/9]"
          >
            <Image
              src={closingMacbook}
              alt="PayPal German checkout shown on a laptop"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 hidden bg-gradient-to-l from-black/85 via-black/40 to-transparent lg:block" />
          </a>

          <ScrollFade
            direction="right"
            className="static z-10 ml-6 flex w-[calc(100%-48px)] flex-col gap-10 py-10 sm:w-2/3 sm:gap-12 lg:absolute lg:right-0 lg:top-0 lg:ml-0 lg:w-[41vw] lg:max-w-[653px] lg:gap-[56px] lg:py-0 lg:pr-[24px] lg:pt-[5%]"
            style={{ fontFamily: leagueSpartan }}
          >
            <div className="flex flex-col gap-6 lg:gap-8">
              <p className="text-sm lg:text-[18px] font-light">Things I Did:</p>

              <div className="flex flex-wrap gap-x-10 gap-y-6 lg:flex-nowrap lg:gap-x-[24px]">
                <div className="lg:w-[289px]">
                  <p className="font-serif text-[clamp(40px,9vw,72px)] lg:text-[72px] font-normal leading-none">
                    $19.2M
                  </p>
                  <p className="mt-0 text-sm lg:text-[18px] font-light">
                    Pay in 30 Days avg. annual iRev
                  </p>
                </div>
                <div className="lg:w-[301px]">
                  <p className="font-serif text-[clamp(40px,9vw,72px)] lg:text-[72px] font-normal leading-none">
                    $27.5M
                  </p>
                  <p className="mt-0 text-sm lg:text-[18px] font-light">
                    PayPal Ratenzahlung avg. annual iRev
                  </p>
                </div>
              </div>

              <ul className="ml-[24px] flex list-disc flex-col gap-3 lg:gap-[18px] text-base lg:text-[22px] font-light leading-[1.5] lg:leading-[1.4]">
                <li>
                  Designed and scaled an award-winning, interest-free credit product from concept to
                  maturity, leading the design strategy and collaboration behind a seamless one-click
                  application that generated nearly $2M in monthly revenue in a credit-averse market.
                </li>
                <li>
                  Designed and scaled an installment product from concept to maturity, giving German
                  consumers flexible payment options through an optimized single-page application.
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:gap-[25px]">
              <BackToHomeButton className="text-lg lg:text-[32px]" fontFamily={leagueSpartan} />
              {PROTOTYPE_URL ? (
                <a
                  href={PROTOTYPE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-[#919191] px-6 lg:px-[30px] py-3 lg:py-[16px] text-lg lg:text-[32px] font-normal leading-none whitespace-nowrap text-white transition-colors duration-150 hover:border-white"
                  style={{ fontFamily: leagueSpartan }}
                >
                  Prototype
                </a>
              ) : null}
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Next Case Studies */}
      <section
        id="next-case-study-section"
        className="relative w-full overflow-hidden bg-black pb-24 lg:pb-[200px] pt-12 lg:pt-[78px] mt-16 lg:mt-[167px]"
      >
        <NextCaseStudyTicker color="#eb2f2f" />

        <div className="relative flex flex-col lg:flex-row items-center lg:justify-center gap-12 lg:gap-[200px] px-5 lg:px-0">
          {/* PayPal */}
          <Link
            href="/work/paypal"
            className="group flex w-full max-w-[437px] lg:w-[437px] flex-col gap-4 lg:gap-[27px] items-start"
          >
            <div className="aspect-[437/666] w-full lg:h-[666px] lg:w-[437px] relative lg:shrink-0 rounded-[30px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="PayPal case study"
                src="/images/next-case-studies/paypal-hero.jpg"
                className="absolute pointer-events-none object-cover h-full"
                style={{ width: "270%", maxWidth: "none", left: "-88%" }}
              />
            </div>
            <p className="font-serif text-[clamp(36px,9vw,64px)] lg:text-[64px] leading-[1.1] lg:leading-[72px] text-white tracking-[-0.64px] transition-opacity duration-300 group-hover:opacity-70">
              PayPal
            </p>
          </Link>

          {/* Meta */}
          <Link
            href="/work/meta"
            className="group flex w-full max-w-[671px] lg:w-[671px] lg:shrink-0 flex-col gap-4 lg:gap-[27px]"
          >
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
        </div>
      </section>
    </main>
  );
}

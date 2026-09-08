"use client";

import { Fragment, type ReactNode } from "react";

import {
  PAYPAL_PAY_IN_4_TPV_INCREASE,
  SITE,
  SOLO_ANNUAL_HOURS_SAVED,
  SOLO_TIME_SAVED_ARITHMETIC,
} from "@/lib/content";

const jb = "var(--font-jetbrains-mono)";

const yellowHL = { background: "rgba(255,180,0,0.3)", borderRadius: "2px" };
const blueHL = { background: "rgba(0,176,216,0.18)", borderRadius: "2px" };

/*
 * Every `.ln` is one logical line of the file: the gutter numeral comes from a
 * CSS counter, and a soft-wrapped paragraph keeps a single number, as it does
 * in an editor. The `/ ""` form hides the numeral from assistive tech; browsers
 * without that syntax keep the plain declaration above it.
 */
const editorCss = `
  .resume-editor { counter-reset: line; }
  .resume-editor .ln {
    counter-increment: line;
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    min-height: 21px;
  }
  @media (min-width: 640px) {
    .resume-editor .ln { grid-template-columns: 56px minmax(0, 1fr); }
  }
  .resume-editor .ln::before {
    content: counter(line);
    content: counter(line) / "";
    align-self: start;
    padding-right: 14px;
    text-align: right;
    color: #b5a47a;
    font-size: 12px;
    line-height: 21px;
    font-variant-numeric: tabular-nums;
    user-select: none;
    pointer-events: none;
  }
`;

type LineTag = "div" | "p" | "li" | "h2" | "h3";

function Line({
  as: Tag = "div",
  children,
}: {
  as?: LineTag;
  children?: ReactNode;
}) {
  return (
    <Tag className="ln m-0">
      <span className="block min-w-0 pr-[20px] sm:pr-[32px]">{children}</span>
    </Tag>
  );
}

/* A comment line that rules across the panel: `// LABEL ────────` */
function SectionHeader({ label }: { label: string }) {
  return (
    <Line as="h2">
      <span className="flex h-[21px] items-center gap-[10px] text-[#7c8896]">
        <span className="text-[13px]">{`//`}</span>
        <span className="pt-[1px] text-[11px] uppercase tracking-[0.14em]">
          {label}
        </span>
        <span className="h-px flex-1 bg-[#e0d3a3]" aria-hidden />
      </span>
    </Line>
  );
}

function Tag({ children, wrap }: { children: ReactNode; wrap?: boolean }) {
  return (
    <span className={wrap ? undefined : "whitespace-nowrap"}>
      <span className="text-[#7c8896]">[</span>
      <span className="text-[#00b0d8]">{children}</span>
      <span className="text-[#7c8896]">]</span>
    </span>
  );
}

function Job({
  company,
  title,
  type,
  dates,
  bullets,
}: {
  company: string;
  title: string;
  type: string;
  dates: string;
  bullets: ReactNode[];
}) {
  return (
    <>
      <Line as="h3">
        <span className="flex flex-wrap items-baseline gap-x-[16px] text-[14px] leading-[21px]">
          <span className="font-semibold text-black">{company}</span>
          <span className="whitespace-nowrap text-[#7c8896] sm:ml-auto">
            {`// ${dates}`}
          </span>
        </span>
      </Line>
      <Line>
        <span className="block pl-[2ch] text-[14px] leading-[21px]">
          <span className="text-[#e5652a]">{title}</span> <Tag>{type}</Tag>
        </span>
      </Line>
      <ul>
        {bullets.map((bullet, i) => (
          <Fragment key={i}>
            {i > 0 && <Line as="li" />}
            <Line as="li">
              <span className="grid grid-cols-[16px_minmax(0,1fr)] pl-[2ch] text-[14px] leading-[21px] text-black">
                <span className="text-[#7c8896]" aria-hidden>
                  -
                </span>
                <span>{bullet}</span>
              </span>
            </Line>
          </Fragment>
        ))}
      </ul>
    </>
  );
}

function School({
  school,
  degree,
  field,
}: {
  school: string;
  degree: string;
  field: string;
}) {
  return (
    <>
      <Line as="h3">
        <span className="block text-[14px] font-semibold leading-[21px] text-black">
          {school}
        </span>
      </Line>
      <Line>
        <span className="block pl-[2ch] text-[14px] leading-[21px] text-black">
          {degree} <Tag wrap>{field}</Tag>
        </span>
      </Line>
    </>
  );
}

function Skill({ name, children }: { name: string; children: ReactNode }) {
  return (
    <Line as="p">
      <span className="grid sm:grid-cols-[13ch_minmax(0,1fr)] text-[14px] leading-[21px] text-black">
        <span>
          <span className="font-semibold">{name}</span>
          <span className="text-[#7c8896]">:</span>
        </span>
        <span>{children}</span>
      </span>
    </Line>
  );
}

const EMPTY = <Line />;

export default function ResumePanel() {
  return (
    <div className="lg:h-screen w-full overflow-y-auto overflow-x-hidden bg-[#fcf5e0] shrink-0">
      <style>{editorCss}</style>

      {/* Window chrome — traffic lights + filename + print */}
      <div className="sticky top-0 z-20 flex items-center justify-between h-[36px] px-[16px] bg-[#f0e4b8] border-b border-[#e0d3a3]">
        <div className="flex items-center gap-[8px]">
          <div className="flex gap-[8px]">
            <div className="w-[12px] h-[12px] rounded-full bg-[#ff5f57]" />
            <div className="w-[12px] h-[12px] rounded-full bg-[#febc2e]" />
            <div className="w-[12px] h-[12px] rounded-full bg-[#28c840]" />
          </div>
          <div
            className="ml-[16px] text-[12px] text-[#7c8896]"
            style={{ fontFamily: jb }}
          >
            resume.tsx
          </div>
        </div>
        <a
          href={SITE.resumeFile}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-[#7c8896] hover:text-black transition-colors duration-150"
          style={{ fontFamily: jb }}
        >
          PRINT
        </a>
      </div>

      {/* Editor body */}
      <div
        className="resume-editor pt-[20px] pb-[56px]"
        style={{ fontFamily: jb }}
      >
        {/* Identity */}
        <Line as="p">
          <span className="block pt-[10px] text-[26px] leading-[36px] sm:text-[32px] sm:leading-[42px]">
            <span className="text-black">Tim</span>
            <span className="text-[#7c8896]">othy </span>
            <span className="text-black">Valderrama</span>
          </span>
        </Line>
        <Line as="p">
          <span className="block text-[14px] leading-[21px] text-[#e5652a]">
            {SITE.resumeTitle}
          </span>
        </Line>
        <Line as="p">
          <span className="flex flex-wrap gap-x-[12px] text-[13px] leading-[21px] text-black">
            <a href={`mailto:${SITE.email}`} className="hover:underline">
              <span className="text-[#7c8896]">{`<mailto:`}</span>
              {SITE.email}
              <span className="text-[#7c8896]">{`>`}</span>
            </a>
            <a href={`tel:${SITE.phoneTel}`} className="hover:underline">
              <span className="text-[#7c8896]">{`<tel:`}</span>
              {SITE.phone}
              <span className="text-[#7c8896]">{`>`}</span>
            </a>
            <span>
              <span className="text-[#7c8896]">{`<`}</span>
              {SITE.url.replace(/^https?:\/\//, "")}
              <span className="text-[#7c8896]">{`>`}</span>
            </span>
            <span>
              <span className="text-[#7c8896]">{`<`}</span>
              {SITE.location}
              <span className="text-[#7c8896]">{`>`}</span>
            </span>
          </span>
        </Line>

        {EMPTY}

        {/* Summary */}
        <SectionHeader label="Summary" />
        <Line as="p">
          <span className="block text-[14px] leading-[21px] text-black">
            {SITE.resumeSummaryLead} {SITE.resumeSummaryDetail}
          </span>
        </Line>
        {EMPTY}
        <Line as="p">
          <span className="block text-[14px] leading-[21px] text-black">
            <span className="text-[#7c8896]">next_role:</span> Seeking a lead
            product design role owning end-to-end UX initiatives that drive
            business impact and elevate product quality, using{" "}
            <span style={blueHL}>
              AI-assisted workflows to accelerate research, prototyping, and
              execution
            </span>
            .
          </span>
        </Line>

        {EMPTY}
        {EMPTY}

        {/* Experience */}
        <SectionHeader label="Experience" />
        <Job
          company="Valderrama Design"
          title="Principal Product Designer"
          type="Freelance"
          dates="Feb 2026 – Present"
          bullets={[
            <>
              Professional development, deepening expertise in{" "}
              <span style={blueHL}>AI-assisted product design workflows</span>{" "}
              across strategy, interface design, prototyping, and app
              development.
            </>,
            <>
              Designed and developed an{" "}
              <span style={blueHL}>
                AI-powered preschool activity reporting app
              </span>{" "}
              for Sunshine Little House of Learning, automating real-time parent
              updates and end-of-day summaries while{" "}
              <span style={yellowHL}>
                returning an estimated {SOLO_ANNUAL_HOURS_SAVED} hours of staff
                capacity annually
              </span>{" "}
              ({SOLO_TIME_SAVED_ARITHMETIC}).
            </>,
          ]}
        />
        {EMPTY}
        <Job
          company="Meta FinTech"
          title="Product Designer V, Staff-level"
          type="Consultant"
          dates="Dec 2024 – Aug 2025"
          bullets={[
            <>
              Led design strategy to reduce checkout payment friction through
              credential sharing and autopay, using{" "}
              <span style={blueHL}>
                Metamate AI for research synthesis, product framing, and
                opportunity analysis
              </span>
              ;{" "}
              <span style={yellowHL}>
                increased iRev by 6.3% and boosted credential coverage by 36%
              </span>
              .
            </>,
            <>
              Designed solutions to reduce ad billing credit card costs by
              promoting Monthly Invoicing and optimizing the{" "}
              <span style={blueHL}>
                AI- and automation-driven application flow
              </span>
              ;{" "}
              <span style={yellowHL}>
                lifting conversion from a 39% baseline to 97% and saving ~7.5%
                annually
              </span>{" "}
              in credit card fees.
            </>,
          ]}
        />
        {EMPTY}
        <Job
          company="PayPal"
          title="Lead Product Designer"
          type="FTE"
          dates="Oct 2016 – Apr 2024"
          bullets={[
            <>
              Modernized PayPal&apos;s installment products, a top-priority
              leadership initiative, by migrating to UI 4.0 and the Checkout
              Product System; used{" "}
              <span style={blueHL}>
                Figma, ChatGPT, and Claude for research synthesis, UX writing
                variants, flow critique, and product narrative development
              </span>
              ,{" "}
              <span style={yellowHL}>
                lifting Pay in 4 application completion to 208% of its
                pre-redesign baseline and driving a{" "}
                {PAYPAL_PAY_IN_4_TPV_INCREASE} increase in Pay in 4 average
                monthly TPV
              </span>
              ; application conversion across all six US and UK credit products
              rose from 51% to 79%.
            </>,
            <>
              Led design strategy and end-to-end implementation across all
              German installment products, translating complex regulatory,
              customer, and business requirements into scalable product
              experiences that{" "}
              <span style={yellowHL}>
                drove a 48.78% increase in monthly TPV and 17.33% in annual iRev
                for Pay in 30 Days, and 14.92% in monthly TPV and 25.44% in
                annual iRev for PayPal Ratenzahlung
              </span>
              .
            </>,
            <>
              Advanced global installment design quality through Figma design
              systems,{" "}
              <span style={blueHL}>
                AI-assisted competitive pattern analysis, rapid UX copy
                refinement
              </span>
              , structured critique, and data-informed decision-making across
              markets.
            </>,
            <>
              Mentored senior designers and improved team-wide design maturity
              by introducing practical{" "}
              <span style={blueHL}>
                AI workflows for research synthesis, divergent ideation, UX
                writing, critique, stakeholder storytelling
              </span>
              , and faster alignment with product and engineering partners.
            </>,
          ]}
        />
        {EMPTY}
        <Job
          company="Cisco Systems"
          title="Senior UX Designer"
          type="Design Consultant"
          dates="Feb 2015 – Sep 2016"
          bullets={[
            <>
              Drove end-to-end design for Cisco&apos;s premier mobile app,
              modernizing the experience with updated accessibility and UI
              standards and delivering a{" "}
              <span style={yellowHL}>43% increase in user comprehension</span>.
            </>,
            <>
              Partnered in developing a scalable UI component library and UX
              standards that standardized and improved Cisco&apos;s intranet
              navigation.
            </>,
            <>
              Served as a UX advisor in the Cisco UE Clinic, delivering
              twice-weekly design guidance to departments seeking support for
              their web pages and applications.
            </>,
          ]}
        />

        {EMPTY}
        {EMPTY}

        {/* Education */}
        <SectionHeader label="Education" />
        <School
          school="Nielsen Norman Group"
          degree="Master Certificate"
          field="Human Computer Interaction, AI assisted design and product strategy for AI experiences"
        />
        {EMPTY}
        <School
          school="Academy of Art University"
          degree="Bachelor of Fine Arts"
          field="Graphic Design"
        />
        {EMPTY}
        <School
          school="De La Salle University"
          degree="Bachelor of Arts and Science"
          field="Business Marketing"
        />

        {EMPTY}
        {EMPTY}

        {/* Skills */}
        <SectionHeader label="Skills" />
        <Skill name="leadership">
          Product vision, design strategy, platform-scale systems, complex
          problem framing, decision-making, prioritization, stakeholder
          influence, executive storytelling, mentorship, and cross-functional
          leadership.
        </Skill>
        {EMPTY}
        <Skill name="ai_workflow">
          Research synthesis, opportunity framing, divergent ideation, UX
          writing, edge-case analysis, rapid prototyping, structured critique,
          design-to-code exploration, and stakeholder storytelling using{" "}
          <span style={blueHL}>
            ChatGPT, Claude, Figma AI-tools, Google Stitch, and Metamate AI
          </span>
          .
        </Skill>
        {EMPTY}
        <Skill name="ux_craft">
          Figma, mobile and web systems thinking, interaction design, visual
          design, design systems, component libraries, accessibility, user
          research, insight synthesis, checkout experiences, FinTech flows,
          billing systems, credit products, and conversion optimization.
        </Skill>
      </div>
    </div>
  );
}

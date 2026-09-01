"use client";

import {
  PAYPAL_PAY_IN_4_TPV_INCREASE,
  SITE,
  SOLO_ANNUAL_HOURS_SAVED,
  SOLO_TIME_SAVED_ARITHMETIC,
} from "@/lib/content";

const jb = "var(--font-jetbrains-mono)";

const yellowHL = { background: "rgba(255,180,0,0.3)", borderRadius: "2px" };
const blueHL = { background: "rgba(0,176,216,0.18)", borderRadius: "2px" };

export default function ResumePanel() {
  return (
    <div className="lg:h-screen w-full lg:w-[717px] overflow-y-auto overflow-x-hidden bg-[#fcf5e0] shrink-0">
      {/* Editor-window line-number styling — CSS counter per <p> */}
      <style>{`
        .resume-editor { counter-reset: line; }
        .resume-editor p {
          counter-increment: line;
          position: relative;
        }
        .resume-editor p::before {
          content: counter(line);
          position: absolute;
          left: -32px;
          top: 0;
          width: 24px;
          text-align: right;
          color: #b5a47a;
          font-size: 12px;
          line-height: 21px;
          font-variant-numeric: tabular-nums;
          user-select: none;
          pointer-events: none;
        }
      `}</style>

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

      {/* Editor body: gutter + content */}
      <div className="flex items-stretch">
        <div
          className="resume-editor relative flex flex-col gap-[28px] items-start pb-[48px] pt-[12px] pl-[48px] flex-1 min-w-0"
          style={{ fontFamily: jb }}
        >

          {/* Contact Info */}
          <div className="flex flex-col gap-[10px] px-[24px] pt-[24px] w-full">
            <p className="text-[32px] leading-normal">
              <span className="text-black">Tim</span>
              <span className="text-[#7c8896]">othy </span>
              <span className="text-black">Valderrama</span>
            </p>
            <p className="text-[14px] leading-normal">
              <a href="mailto:valderramadesign@gmail.com" className="hover:underline cursor-pointer">
                <span className="text-[#7c8896]">{`<mailto:`}</span>
                <span className="text-black">valderramadesign@gmail.com</span>
                <span className="text-[#7c8896]">{`>`}</span>
              </a>
              <span className="text-[#7c8896]">{` <`}</span>
              <span className="text-black">tim-ai-design.com</span>
              <span className="text-[#7c8896]">{`>`}</span>
              <span className="text-[#7c8896]">{` <`}</span>
              <span className="text-black">San Mateo, CA</span>
              <span className="text-[#7c8896]">{`>`}</span>
            </p>
          </div>

          {/* Who? */}
          <div className="flex flex-col gap-[14px] items-start px-[24px] w-full">
            <p className="text-[14px] leading-[20px]">
              <span className="text-[#7c8896]">who am I</span>
              <span className="text-black">=</span>
              <span className="text-[#fd0]">{`{`}</span>
              <span className="text-black">&quot;{SITE.resumeSummaryLead}&quot;</span>
              <span className="text-[#fd0]">{`}`}</span>
            </p>

            <p className="text-[14px] leading-[20px]">
              <span className="text-[#7c8896]">what I do</span>
              <span className="text-black">=</span>
              <span className="text-[#fd0]">{`{`}</span>
              <span className="text-black">&quot;{SITE.resumeSummaryDetail}&quot;</span>
              <span className="text-[#fd0]">{`}`}</span>
            </p>

            <p className="text-[14px] leading-[20px]">
              <span className="text-[#7c8896]">Next role</span>
              <span className="text-black">=</span>
              <span className="text-[#fd0]">{`{`}</span>
              <span className="text-black">&quot;Seeking a lead product design role owning end-to-end UX initiatives that optimize customer experience, drive business impact, mentor designers, and elevate product quality—while using{` `}<span style={blueHL}>AI-assisted workflows to accelerate research, ideation, prototyping, and design execution</span>.&quot;</span>
              <span className="text-[#fd0]">{`}`}</span>
            </p>

          </div>

          {/* Jobs */}
          <div className="flex flex-col gap-[14px] items-start px-[24px] w-full">

            {/* Valderrama Design */}
            <div className="flex flex-col gap-[14px] w-full">
              <p className="text-[14px] leading-[21px]">
                <span className="text-[#7c8896]">2/2026–Current : Valderrama Design</span>
                <span className="text-black">=</span>
                <span className="text-[#e5652a]">Principal Product Designer</span>
                <span>{` `}</span>
                <span className="text-[#7c8896]">:</span>
                <span>{` `}</span>
                <span className="text-[#00b0d8]">Freelance</span>
              </p>
              <div className="text-[14px] leading-[21px] text-black">
                <p className="mb-0">
                  <span className="text-[#fd0]">{`{`}</span>
                  &quot;2025–2026 — planned career break and professional development, deepening expertise in{` `}
                  <span style={blueHL}>AI-assisted product design workflows</span>
                  {` `}across strategy, interface design, prototyping, and app development.&quot;
                  <span className="text-[#fd0]">{`}`}</span>
                </p>
                <p>
                  <span className="text-[#fd0]">{`{`}</span>
                  &quot;Designed and developed an{` `}
                  <span style={blueHL}>AI-powered preschool activity reporting app</span>{` `}
                  for Sunshine Little House of Learning, automating real-time parent updates and end-of-day summaries while{` `}
                  <span style={yellowHL}>returning an estimated {SOLO_ANNUAL_HOURS_SAVED} hours of staff capacity annually</span> ({SOLO_TIME_SAVED_ARITHMETIC}).&quot;
                  <span className="text-[#fd0]">{`}`}</span>
                </p>
              </div>
            </div>

            {/* Meta FinTech */}
            <div className="flex flex-col gap-[14px] w-full">
              <p className="text-[14px] leading-[21px]">
                <span className="text-[#7c8896]">12/2024–8/2025 : Meta FinTech</span>
                <span className="text-black">=</span>
                <span className="text-[#e5652a]">Product Designer V, Staff-level</span>
                <span>{` `}</span>
                <span className="text-[#7c8896]">:</span>
                <span>{` `}</span>
                <span className="text-[#00b0d8]">Consultant</span>
              </p>
              <div className="text-[14px] leading-[21px] text-black">
                <p className="mb-0">
                  <span className="text-[#fd0]">{`{`}</span>
                  &quot;Led design strategy to reduce checkout payment friction through credential sharing and autopay, using{` `}
                  <span style={blueHL}>Metamate AI for research synthesis, product framing, and opportunity analysis</span>;{` `}
                  <span style={yellowHL}>increased iRev by 6.3% and boosted credential coverage by 36%</span>.&quot;
                  <span className="text-[#fd0]">{`}`}</span>
                </p>
                <p className="mb-0">
                  <span className="text-[#fd0]">{`{`}</span>
                  &quot;Designed solutions to reduce ad billing credit card costs by promoting Monthly Invoicing and optimizing the{` `}
                  <span style={blueHL}>AI- and automation-driven application flow</span>;{` `}
                  <span style={yellowHL}>lifting conversion from a 39% baseline to 97% and saving ~7.5% annually</span> in credit card fees.&quot;
                  <span className="text-[#fd0]">{`}`}</span>
                </p>
              </div>
            </div>

            {/* PayPal */}
            <div className="flex flex-col gap-[14px] w-full">
              <p className="text-[14px] leading-[21px]">
                <span className="text-[#7c8896]">10/2016–4/2024 : PayPal</span>
                <span className="text-black">=</span>
                <span className="text-[#e5652a]">Lead Product Designer</span>
                <span>{` `}</span>
                <span className="text-[#7c8896]">:</span>
                <span>{` `}</span>
                <span className="text-[#00b0d8]">FTE</span>
              </p>
              <div className="text-[14px] leading-[21px] text-black">
                <p className="mb-0">
                  <span className="text-[#fd0]">{`{`}</span>
                  &quot;Modernized PayPal&apos;s installment products, a top-priority leadership initiative, by migrating to UI 4.0 and the Checkout Product System; used{` `}
                  <span style={blueHL}>Figma, ChatGPT, and Claude for research synthesis, UX writing variants, flow critique, and product narrative development</span>,{` `}
                  <span style={yellowHL}>lifting Pay in 4 application completion to 208% of its pre-redesign baseline and driving a {PAYPAL_PAY_IN_4_TPV_INCREASE} increase in Pay in 4 average monthly TPV</span>; application conversion across all six US and UK credit products rose from 51% to 79%.&quot;
                  <span className="text-[#fd0]">{`}`}</span>
                </p>
                <p className="mb-0">
                  <span className="text-[#fd0]">{`{`}</span>
                  &quot;Led design strategy and end-to-end implementation across all German installment products, translating complex regulatory, customer, and business requirements into scalable product experiences that{` `}
                  <span style={yellowHL}>drove a 48.78% increase in monthly TPV and 17.33% in annual iRev for Pay in 30 Days, and 14.92% in monthly TPV and 25.44% in annual iRev for PayPal Ratenzahlung</span>.&quot;
                  <span className="text-[#fd0]">{`}`}</span>
                </p>
                <p className="mb-0">
                  <span className="text-[#fd0]">{`{`}</span>
                  &quot;Advanced global installment design quality through Figma design systems,{` `}
                  <span style={blueHL}>AI-assisted competitive pattern analysis, rapid UX copy refinement</span>, structured critique, and data-informed decision-making across markets.&quot;
                  <span className="text-[#fd0]">{`}`}</span>
                </p>
                <p>
                  <span className="text-[#fd0]">{`{`}</span>
                  &quot;Mentored senior designers and improved team-wide design maturity by introducing practical{` `}
                  <span style={blueHL}>AI workflows for research synthesis, divergent ideation, UX writing, critique, stakeholder storytelling</span>, and faster alignment with product and engineering partners.&quot;
                  <span className="text-[#fd0]">{`}`}</span>
                </p>
              </div>
            </div>

            {/* Cisco */}
            <div className="flex flex-col gap-[14px] w-full">
              <p className="text-[14px] leading-[21px]">
                <span className="text-[#7c8896]">2/2015–9/2016 : Cisco Systems</span>
                <span className="text-black">=</span>
                <span className="text-[#e5652a]">Senior UX Designer</span>
                <span>{` `}</span>
                <span className="text-[#7c8896]">:</span>
                <span>{` `}</span>
                <span className="text-[#00b0d8]">Design Consultant</span>
              </p>
              <div className="text-[14px] leading-[21px] text-black">
                <p className="mb-0">
                  <span className="text-[#fd0]">{`{`}</span>
                  &quot;Drove end-to-end design for Cisco&apos;s premier mobile app, modernizing the experience with updated accessibility and UI standards and delivering a{` `}
                  <span style={yellowHL}>43% increase in user comprehension</span>.&quot;
                  <span className="text-[#fd0]">{`}`}</span>
                </p>
                <p className="mb-0">
                  <span className="text-[#fd0]">{`{`}</span>
                  &quot;Partnered in developing a scalable UI component library and UX standards that standardized and improved Cisco&apos;s intranet navigation.&quot;
                  <span className="text-[#fd0]">{`}`}</span>
                </p>
                <p>
                  <span className="text-[#fd0]">{`{`}</span>
                  &quot;Served as a UX advisor in the Cisco UE Clinic, delivering twice-weekly design guidance to departments seeking support for their web pages and applications.&quot;
                  <span className="text-[#fd0]">{`}`}</span>
                </p>
              </div>
            </div>

          </div>

          {/* Education */}
          <div className="flex flex-col gap-[14px] items-start px-[24px] w-full">
            <div className="flex flex-col gap-[14px] w-full">
              <p className="text-[14px] leading-[21px]">
                <span className="text-[#7c8896]">Education</span>
                <span className="text-black">=</span>
                <span className="text-[#e5652a]">Nielsen Norman Group</span>
                <span>{` `}</span>
                <span className="text-[#fd0]">{`{`}</span>
                <span className="text-black">&quot;Master Certificate&quot;</span>
                <span className="text-[#fd0]">{`}`}</span>
                <span>{` `}</span>
                <span className="text-[#00b0d8]">Human Computer Interaction, AI assisted design and product strategy for AI experiences</span>
              </p>
              <p className="text-[14px] leading-[21px]">
                <span className="text-[#7c8896]">Education</span>
                <span className="text-black">=</span>
                <span className="text-[#e5652a]">Academy of Art University</span>
                <span>{` `}</span>
                <span className="text-[#fd0]">{`{`}</span>
                <span className="text-black">&quot;Bachelor of Fine Arts&quot;</span>
                <span className="text-[#fd0]">{`}`}</span>
                <span>{` `}</span>
                <span className="text-[#00b0d8]">Graphic Design</span>
              </p>
              <p className="text-[14px] leading-[21px]">
                <span className="text-[#7c8896]">Education</span>
                <span className="text-black">=</span>
                <span className="text-[#e5652a]">De La Salle University</span>
                <span>{` `}</span>
                <span className="text-[#fd0]">{`{`}</span>
                <span className="text-black">&quot;Bachelor of Arts and Science&quot;</span>
                <span className="text-[#fd0]">{`}`}</span>
                <span>{` `}</span>
                <span className="text-[#00b0d8]">Business Marketing</span>
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-[14px] items-start px-[24px] w-full">
            <div className="flex flex-col gap-[14px] w-full">
              <p className="text-[14px] leading-[21px]">
                <span className="text-[#7c8896]">skills.leadership</span>
                <span className="text-black">=</span>
                <span className="text-[#fd0]">{`{`}</span>
                <span className="text-black">&quot;Product vision, design strategy, platform-scale systems, complex problem framing, decision-making, prioritization, stakeholder influence, executive storytelling, mentorship, and cross-functional leadership.&quot;</span>
                <span className="text-[#fd0]">{`}`}</span>
              </p>
              <p className="text-[14px] leading-[21px]">
                <span className="text-[#7c8896]">skills.ai_workflow</span>
                <span className="text-black">=</span>
                <span className="text-[#fd0]">{`{`}</span>
                <span className="text-black">&quot;Research synthesis, opportunity framing, divergent ideation, UX writing, edge-case analysis, rapid prototyping, structured critique, design-to-code exploration, and stakeholder storytelling using </span>
                <span style={blueHL}>ChatGPT, Claude, Figma AI-tools, Google Stitch, and Metamate AI</span>
                <span className="text-black">.&quot;</span>
                <span className="text-[#fd0]">{`}`}</span>
              </p>
              <p className="text-[14px] leading-[21px]">
                <span className="text-[#7c8896]">skills.ux_craft</span>
                <span className="text-black">=</span>
                <span className="text-[#fd0]">{`{`}</span>
                <span className="text-black">&quot;Figma, mobile and web systems thinking, interaction design, visual design, design systems, component libraries, accessibility, user research, insight synthesis, checkout experiences, FinTech flows, billing systems, credit products, and conversion optimization.&quot;</span>
                <span className="text-[#fd0]">{`}`}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

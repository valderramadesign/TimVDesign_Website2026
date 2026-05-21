"use client";

const jb = "var(--font-jetbrains-mono)";

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
          href="/resume/print"
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
        {/* Code content — line numbers rendered as ::before via CSS counter */}
        <div
          className="resume-editor relative flex flex-col gap-[28px] items-start pb-[48px] pt-[12px] pl-[48px] flex-1 min-w-0"
          style={{ fontFamily: jb }}
        >

          {/* Contact Info */}
          <div className="flex flex-col gap-[10px] p-[24px] w-full">
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
              <span className="text-black">San Mateo,CA</span>
              <span className="text-[#7c8896]">{`>`}</span>
              <span className="text-[#7c8896]">{` <`}</span>
              <span className="text-black">US Citizen</span>
              <span className="text-[#7c8896]">{`>`}</span>
            </p>
          </div>

          {/* Who? */}
          <div className="flex flex-col gap-[14px] items-start px-[24px] w-full">
            <p className="text-[14px] leading-[20px]">
              <span className="text-[#7c8896]">who am I</span>
              <span className="text-black">=</span>
              <span className="text-[#fd0]">{`{`}</span>
              <span className="text-black">{`"`}I&apos;m a design leader specializing in complex experiences, shaping platform-scale systems that balance customer trust, business outcomes, and AI-enabled innovation.&quot;</span>
              <span className="text-[#fd0]">{`}`}</span>
              <span>{` `}</span>
              <span className="text-[#fd0]">{`{`}</span>
              <span className="text-black">!</span>
              <span className="text-[#00b0d8]">20+ years in design experience total, 9+ years in UX</span>
              <span className="text-[#d9be0f]">{`}`}</span>
            </p>

            <p className="text-[14px] leading-[20px]">
              <span className="text-[#7c8896]">what I do</span>
              <span className="text-black">=</span>
              <span className="text-[#fd0]">{`{`}</span>
              <span className="text-black">&quot;I turn complex customer, business, and technical problems into clear product direction. I use an AI workflow with tools such as Figma, Claude, Replit, and ChatGPT for a more efficient and effective delivery process.&quot;</span>
              <span className="text-[#fd0]">{`}`}</span>
            </p>

            <p className="text-[14px] leading-[20px]">
              <span className="text-[#7c8896]">Next role</span>
              <span className="text-black">=</span>
              <span className="text-[#fd0]">{`{`}</span>
              <span className="text-black">&quot;I am looking to drive product vision and design strategy, aligning user needs with business goals while mentoring teams and elevating design quality across the organization.&quot;</span>
              <span className="text-[#fd0]">{`}`}</span>
            </p>

            <p className="text-[14px] leading-[20px]">
              <span className="text-[#7c8896]">9/2025-12/2025 Career Break: </span>
              <span className="text-[#e5652a]">Lost use of my right arm temporarily from sport injury surgery. Cleared by doctor Feb 3, 2026.</span>
            </p>
          </div>

          {/* Jobs */}
          <div className="flex flex-col gap-[14px] items-start px-[24px] w-full">

            {/* Meta */}
            <div className="flex flex-col gap-[14px] w-full">
              <p className="text-[14px] leading-[21px]">
                <span className="text-[#7c8896]">12/2024-8/2025 : Meta FinTech</span>
                <span className="text-black">=</span>
                <span className="text-[#e5652a]">Product Designer V</span>
                <span>{` `}</span>
                <span className="text-[#fd0]">{`{`}</span>
                <span className="text-black">Staff Designer</span>
                <span className="text-[#fd0]">{`}`}</span>
                <span>{` `}</span>
                <span className="text-[#00b0d8]">Design Consultant</span>
              </p>
              <div className="text-[14px] leading-[21px] text-black">
                <p className="mb-0">
                  <span className="text-[#fd0]">{`{`}</span>
                  &quot;Led design strategy to reduce checkout payment friction through credential sharing and autopay, <span style={{ background: "rgba(255,180,0,0.3)", borderRadius: "2px" }}>increasing iRev by 6.3% and a boost in credential coverage of 36%</span> using Metamate AI.&quot;
                  <span className="text-[#fd0]">{`}`}</span>
                </p>
                <p>
                  <span className="text-[#fd0]">{`{`}</span>
                  &quot;Designed solutions to reduce ad billing credit card costs by promoting Monthly Invoicing and optimizing the AI- and automation-driven application flow, <span style={{ background: "rgba(255,180,0,0.3)", borderRadius: "2px" }}>increasing conversion by 41% and delivering an estimated 20% annual savings</span> in credit card fees.&quot;
                  <span className="text-[#fd0]">{`}`}</span>
                </p>
              </div>
            </div>

            {/* PayPal */}
            <div className="flex flex-col gap-[14px] w-full">
              <p className="text-[14px] leading-[21px]">
                <span className="text-[#7c8896]">10/2016-4/2024 : PayPal</span>
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
                  &quot;Modernized PayPal&apos;s installment products (top priority project for leadership) by migrating to UI 4.0 and the Checkout Product System, enhancing user experience and visual design to <span style={{ background: "rgba(255,180,0,0.3)", borderRadius: "2px" }}>lift conversion to 208% and grow monthly TPV to $598M</span> for Pay in 4.&quot;
                  <span className="text-[#fd0]">{`}`}</span>
                </p>
                <p className="mb-0">
                  <span className="text-[#fd0]">{`{`}</span>
                  &quot;Led design strategy and end-to-end implementation across all German products, <span style={{ background: "rgba(255,180,0,0.3)", borderRadius: "2px" }}>generating $181M in monthly TPV for PayPal Monthly Installments and $529M for Pay in 30 Days</span>; this impact directly contributed to my promotion to Lead Designer for Global Installment products.&quot;
                  <span className="text-[#fd0]">{`}`}</span>
                </p>
                <p>
                  <span className="text-[#fd0]">{`{`}</span>
                  &quot;Provided mentorship and strategic guidance to senior designers, upholding high design standards while driving scalable, data-informed solutions; introduced innovative AI-workflow improvements to elevate team-wide design quality and maturity.&quot;
                  <span className="text-[#fd0]">{`}`}</span>
                </p>
              </div>
            </div>

            {/* Cisco */}
            <div className="flex flex-col gap-[14px] w-full">
              <p className="text-[14px] leading-[21px]">
                <span className="text-[#7c8896]">2/2015-9/2016 : Cisco Systems</span>
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
                  &quot;Drove end-to-end design for Cisco&apos;s premier mobile app, modernizing the experience with updated accessibility and UI standards and delivering a <span style={{ background: "rgba(255,180,0,0.3)", borderRadius: "2px" }}>43% increase in user comprehension</span>.&quot;
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

            {/* Education */}
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
                <span className="text-[#00b0d8]">Human Computer Interaction</span>
              </p>
              <p className="text-[14px] leading-[21px]">
                <span className="text-[#7c8896]">Education</span>
                <span className="text-black">=</span>
                <span className="text-[#e5652a]">Academy of Art University</span>
                <span>{` `}</span>
                <span className="text-[#fd0]">{`{`}</span>
                <span className="text-black">&quot;Bachelors in Fine Arts&quot;</span>
                <span className="text-[#fd0]">{`}`}</span>
                <span>{` `}</span>
                <span className="text-[#00b0d8]">Major in Graphic Design</span>
              </p>
              <p className="text-[14px] leading-[21px]">
                <span className="text-[#7c8896]">Education</span>
                <span className="text-black">=</span>
                <span className="text-[#e5652a]">De La Salle University</span>
                <span>{` `}</span>
                <span className="text-[#fd0]">{`{`}</span>
                <span className="text-black">&quot;Bachelors in Arts and Science&quot;</span>
                <span className="text-[#fd0]">{`}`}</span>
                <span>{` `}</span>
                <span className="text-[#00b0d8]">Major in Business Marketing</span>
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-[14px] w-full">
              <p className="text-[14px] leading-[21px]">
                <span className="text-[#7c8896]">Expert level skills</span>
                <span className="text-black">=</span>
                <span className="text-[#fd0]">{`{`}</span>
                <span className="text-black">&quot;Figma, AI design process (Claude, Antigravity, ChatGPT, Replit, etc.), systems thinking for both mobile (Android/iOS) and web, UX and interaction design, visual design and design systems mastery, user research and insight synthesis, stakeholder communication and influence, leadership and mentorship, cross-functional collaboration, decision-making and prioritization.&quot;</span>
                <span className="text-[#fd0]">{`}`}</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";

const jb = "var(--font-jetbrains-mono)";

export default function ResumePrintPage() {
  useEffect(() => {
    window.print();
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <style>{`
        @media print {
          @page { margin: 0.5in; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
        .resume-print { counter-reset: line; }
        .resume-print p {
          counter-increment: line;
          position: relative;
        }
        .resume-print p::before {
          content: counter(line);
          position: absolute;
          left: -28px;
          top: 0;
          width: 20px;
          text-align: right;
          color: #b5a47a;
          font-size: 9px;
          line-height: 17px;
          font-variant-numeric: tabular-nums;
          user-select: none;
        }
      `}</style>

      <div
        className="resume-print flex flex-col gap-[16px] items-start pb-[24px] pt-[10px] pl-[48px] pr-[24px] max-w-[720px] mx-auto"
        style={{ fontFamily: jb }}
      >

        {/* Contact Info */}
        <div className="flex flex-col gap-[6px] p-[12px] w-full">
          <p className="leading-normal" style={{ fontSize: 26 }}>
            <span className="text-black">Tim</span>
            <span className="text-[#7c8896]">othy </span>
            <span className="text-black">Valderrama</span>
          </p>
          <p className="leading-[17px]" style={{ fontSize: 12 }}>
            <a href="mailto:valderramadesign@gmail.com" className="hover:underline">
              <span className="text-[#7c8896]">{`<mailto:`}</span>
              <span className="text-black">valderramadesign@gmail.com</span>
              <span className="text-[#7c8896]">{`>`}</span>
            </a>
            <span className="text-[#7c8896]">{` <`}</span>
            <span className="text-black">San Mateo, CA</span>
            <span className="text-[#7c8896]">{`>`}</span>
            <span className="text-[#7c8896]">{` <`}</span>
            <span className="text-black">US Citizen</span>
            <span className="text-[#7c8896]">{`>`}</span>
          </p>
        </div>

        {/* Who? */}
        <div className="flex flex-col gap-[8px] items-start px-[12px] w-full">
          <p className="leading-[17px]" style={{ fontSize: 12 }}>
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

          <p className="leading-[17px]" style={{ fontSize: 12 }}>
            <span className="text-[#7c8896]">what I do</span>
            <span className="text-black">=</span>
            <span className="text-[#fd0]">{`{`}</span>
            <span className="text-black">&quot;I turn complex customer, business, and technical problems into clear product direction using an AI-first workflow.&quot;</span>
            <span className="text-[#fd0]">{`}`}</span>
          </p>

          <p className="leading-[17px]" style={{ fontSize: 12 }}>
            <span className="text-[#7c8896]">Next role</span>
            <span className="text-black">=</span>
            <span className="text-[#fd0]">{`{`}</span>
            <span className="text-black">&quot;I am looking to drive product vision and design strategy, aligning user needs with business goals while mentoring teams and elevating design quality across the organization.&quot;</span>
            <span className="text-[#fd0]">{`}`}</span>
          </p>

        </div>

        {/* Jobs */}
        <div className="flex flex-col gap-[8px] items-start px-[12px] w-full">

          {/* Valderrama Design */}
          <div className="flex flex-col gap-[6px] w-full">
            <p className="leading-[17px]" style={{ fontSize: 12 }}>
              <span className="text-[#7c8896]">2/2026–Current : Valderrama Design</span>
              <span className="text-black">=</span>
              <span className="text-[#e5652a]">Principal Product Designer</span>
              <span>{` `}</span>
              <span className="text-[#7c8896]">:</span>
              <span>{` `}</span>
              <span className="text-[#00b0d8]">Freelance</span>
            </p>
            <div className="text-black" style={{ fontSize: 12 }}>
              <p className="mb-0 leading-[17px]">
                <span className="text-[#fd0]">{`{`}</span>
                &quot;Returned to full professional capacity in February 2026 after surgery and rehabilitation, building an AI-assisted product design workflow with Figma Make, ChatGPT, Claude, and Replit across strategy, interface design, prototyping, and app development.&quot;
                <span className="text-[#fd0]">{`}`}</span>
              </p>
              <p className="leading-[17px]">
                <span className="text-[#fd0]">{`{`}</span>
                &quot;Designed and developed an AI-powered preschool activity reporting app for Sunshine Little House of Learning, automating real-time parent updates and end-of-day summaries while <span style={{ background: "rgba(255,180,0,0.3)", borderRadius: "2px" }}>saving the head teacher approximately 2 hours per day</span>.&quot;
                <span className="text-[#fd0]">{`}`}</span>
              </p>
            </div>
          </div>

          {/* Meta */}
          <div className="flex flex-col gap-[6px] w-full">
            <p className="leading-[17px]" style={{ fontSize: 12 }}>
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
            <div className="text-black" style={{ fontSize: 12 }}>
              <p className="mb-0 leading-[17px]">
                <span className="text-[#fd0]">{`{`}</span>
                &quot;Led design strategy to reduce checkout payment friction through credential sharing and autopay, <span style={{ background: "rgba(255,180,0,0.3)", borderRadius: "2px" }}>increasing iRev by 6.3% and a boost in credential coverage of 36%</span>.
                <span className="text-[#fd0]">{`}`}</span>
              </p>
              <p className="leading-[17px]">
                <span className="text-[#fd0]">{`{`}</span>
                &quot;Designed solutions to reduce ad billing credit card costs by promoting Monthly Invoicing and optimizing the AI- and automation-driven application flow, <span style={{ background: "rgba(255,180,0,0.3)", borderRadius: "2px" }}>increasing conversion by 41% and delivering an estimated 20% annual savings</span> in credit card fees.&quot;
                <span className="text-[#fd0]">{`}`}</span>
              </p>
            </div>
          </div>

          {/* PayPal */}
          <div className="flex flex-col gap-[6px] w-full">
            <p className="leading-[17px]" style={{ fontSize: 12 }}>
              <span className="text-[#7c8896]">10/2016-4/2024 : PayPal</span>
              <span className="text-black">=</span>
              <span className="text-[#e5652a]">Lead Product Designer</span>
              <span>{` `}</span>
              <span className="text-[#7c8896]">:</span>
              <span>{` `}</span>
              <span className="text-[#00b0d8]">FTE</span>
            </p>
            <div className="text-black" style={{ fontSize: 12 }}>
              <p className="mb-0 leading-[17px]">
                <span className="text-[#fd0]">{`{`}</span>
                &quot;Modernized PayPal&apos;s installment products (top priority project for leadership) by migrating to UI 4.0 and the Checkout Product System, enhancing user experience and visual design to <span style={{ background: "rgba(255,180,0,0.3)", borderRadius: "2px" }}>lift conversion to 208% and grow monthly TPV to $598M</span> for Pay in 4.&quot;
                <span className="text-[#fd0]">{`}`}</span>
              </p>
              <p className="mb-0 leading-[17px]">
                <span className="text-[#fd0]">{`{`}</span>
                &quot;Led design strategy and end-to-end implementation across all German products, <span style={{ background: "rgba(255,180,0,0.3)", borderRadius: "2px" }}>generating $181M in monthly TPV for PayPal Monthly Installments and $529M for Pay in 30 Days</span>; this impact directly contributed to my promotion to Lead Designer for Global Installment products.&quot;
                <span className="text-[#fd0]">{`}`}</span>
              </p>
              <p className="leading-[17px]">
                <span className="text-[#fd0]">{`{`}</span>
                &quot;Provided mentorship and strategic guidance to senior designers, upholding high design standards while driving scalable, data-informed solutions; introduced innovative concepts and process improvements to elevate team-wide design quality and maturity.&quot;
                <span className="text-[#fd0]">{`}`}</span>
              </p>
            </div>
          </div>

          {/* Cisco */}
          <div className="flex flex-col gap-[6px] w-full">
            <p className="leading-[17px]" style={{ fontSize: 12 }}>
              <span className="text-[#7c8896]">2/2015-9/2016 : Cisco Systems</span>
              <span className="text-black">=</span>
              <span className="text-[#e5652a]">Senior UX Designer</span>
              <span>{` `}</span>
              <span className="text-[#7c8896]">:</span>
              <span>{` `}</span>
              <span className="text-[#00b0d8]">Design Consultant</span>
            </p>
            <div className="text-black" style={{ fontSize: 12 }}>
              <p className="mb-0 leading-[17px]">
                <span className="text-[#fd0]">{`{`}</span>
                &quot;Drove end-to-end design for Cisco&apos;s premier mobile app, modernizing the experience with updated accessibility and UI standards and delivering a <span style={{ background: "rgba(255,180,0,0.3)", borderRadius: "2px" }}>43% increase in user comprehension</span>.&quot;
                <span className="text-[#fd0]">{`}`}</span>
              </p>
              <p className="mb-0 leading-[17px]">
                <span className="text-[#fd0]">{`{`}</span>
                &quot;Partnered in developing a scalable UI component library and UX standards that standardized and improved Cisco&apos;s intranet navigation.&quot;
                <span className="text-[#fd0]">{`}`}</span>
              </p>
              <p className="leading-[17px]">
                <span className="text-[#fd0]">{`{`}</span>
                &quot;Served as a UX advisor in the Cisco UE Clinic, delivering twice-weekly design guidance to departments seeking support for their web pages and applications.&quot;
                <span className="text-[#fd0]">{`}`}</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

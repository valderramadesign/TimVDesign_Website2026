"use client";

import { useEffect } from "react";

import { SITE } from "@/lib/content";

const jb = "var(--font-jetbrains-mono)";

const rule = {
  borderTop: "1px solid #000",
  marginBottom: 10,
  marginTop: 2,
};

function Section({ label }: { label: string }) {
  return (
    <div style={{ marginBottom: 4 }}>
      <div style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 4 }}>
        {label}
      </div>
      <div style={rule} />
    </div>
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
  type?: string;
  dates: string;
  bullets: string[];
}) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 2 }}>
        <span style={{ fontSize: 11, fontWeight: "bold" }}>{company}</span>
        <span style={{ fontSize: 10, color: "#555" }}>{dates}</span>
      </div>
      <div style={{ fontSize: 10, color: "#444", marginBottom: 6 }}>
        {title}{type ? ` · ${type}` : ""}
      </div>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ fontSize: 10, lineHeight: "15px", marginBottom: 4, paddingLeft: 10, position: "relative" }}>
            <span style={{ position: "absolute", left: 0 }}>–</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ResumePrintPage() {
  // Only auto-open the print dialog when linked with ?print=1 (the "PRINT" action
  // in the résumé panel). The mobile footer links here to read the résumé.
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("print") === "1") {
      window.print();
    }
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#000", fontFamily: jb }}>
      <style>{`
        @media print {
          @page { margin: 0.5in; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          /* The page margin supplies the frame in print; the on-screen padding
             would otherwise push Education onto a second sheet. */
          .sheet { padding-top: 0 !important; padding-bottom: 0 !important; }
          .avoid-break { break-inside: avoid; }
        }
      `}</style>

      <div className="sheet" style={{ maxWidth: 680, margin: "0 auto", padding: "32px 24px 40px 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 22, fontWeight: "bold", marginBottom: 4 }}>{SITE.name}</div>
          <div style={{ fontSize: 11, marginBottom: 4 }}>{SITE.resumeTitle}</div>
          <div style={{ fontSize: 10, color: "#444" }}>
            {SITE.email} &nbsp;·&nbsp; {SITE.url.replace(/^https?:\/\//, "")} &nbsp;·&nbsp; {SITE.location}
          </div>
        </div>

        {/* Summary */}
        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: 10, lineHeight: "15px", margin: 0 }}>
            {SITE.resumeSummaryLead} {SITE.resumeSummaryDetail}
          </p>
        </div>

        <div className="no-print" style={{ marginBottom: 20 }}>
          <button
            type="button"
            onClick={() => window.print()}
            style={{
              fontFamily: jb,
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "8px 16px",
              borderRadius: 999,
              border: "1px solid #000",
              background: "transparent",
              color: "#000",
              cursor: "pointer",
            }}
          >
            Print / Save as PDF
          </button>
        </div>

        {/* Experience */}
        <div style={{ marginBottom: 20 }}>
          <Section label="Experience" />

          <Job
            company="Valderrama Design"
            title="Principal Product Designer"
            type="Freelance"
            dates="Feb 2026 – Present"
            bullets={[
              "2025–2026 — Planned career break and professional development: deepened expertise in AI-assisted product design workflows across strategy, interface design, prototyping, and app development.",
              "Designed and developed an AI-powered preschool activity reporting app for Sunshine Little House of Learning, automating real-time parent updates and end-of-day summaries while returning an estimated 480 hours of staff capacity annually (2 hrs/day × 240 school days).",
            ]}
          />

          <Job
            company="Meta FinTech"
            title="Product Designer V, Staff-level"
            type="Consultant"
            dates="Dec 2024 – Aug 2025"
            bullets={[
              "Led design strategy to reduce checkout payment friction through credential sharing and autopay, increasing iRev by 6.3% and credential coverage by 36%.",
              "Designed solutions to reduce ad billing credit card costs by promoting Monthly Invoicing and optimizing the AI- and automation-driven application flow, targeting a lift in conversion from a 39% baseline to 97% and ~7.5% in projected annual savings in credit card fees.",
            ]}
          />

          <Job
            company="PayPal"
            title="Lead Product Designer"
            type="FTE"
            dates="Oct 2016 – Apr 2024"
            bullets={[
              "Modernized PayPal's installment products (top leadership priority) by migrating to UI 4.0 and the Checkout Product System, lifting Pay in 4 application completion to 208% of its pre-redesign baseline and driving a 67% increase in Pay in 4 average monthly TPV; application conversion across all six US and UK credit products rose from 51% to 79%.",
              "Led design strategy and end-to-end implementation across all German products, driving a 48.78% increase in monthly TPV and 17.33% in annual iRev for Pay in 30 Days, and 14.92% in monthly TPV and 25.44% in annual iRev for PayPal Ratenzahlung; directly contributed to promotion to Lead Designer for Global Installments.",
              "Provided mentorship and strategic guidance to senior designers, introducing scalable, data-informed solutions and process improvements to elevate team-wide design quality and maturity.",
            ]}
          />

          <Job
            company="Cisco Systems"
            title="Senior UX Designer"
            type="Design Consultant"
            dates="Feb 2015 – Sep 2016"
            bullets={[
              "Drove end-to-end design for Cisco's premier mobile app, modernizing the experience with updated accessibility and UI standards and delivering a 43% increase in user comprehension.",
              "Partnered in developing a scalable UI component library and UX standards that standardized and improved Cisco's intranet navigation.",
              "Served as a UX advisor in the Cisco UE Clinic, delivering twice-weekly design guidance to departments seeking support for their web pages and applications.",
            ]}
          />
        </div>

        {/* Education */}
        <div className="avoid-break">
          <Section label="Education" />
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              [
                "Nielsen Norman Group",
                "Master Certificate, Human Computer Interaction, AI assisted design and product strategy for AI experiences",
              ],
              ["Academy of Art University", "Bachelor of Fine Arts, Graphic Design"],
              ["De La Salle University", "Bachelor of Arts and Science, Business Marketing"],
            ].map(([school, degree]) => (
              <div
                key={school}
                style={{ display: "flex", justifyContent: "space-between", gap: 16, fontSize: 10, lineHeight: "15px" }}
              >
                <span style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>{school}</span>
                <span style={{ color: "#555", textAlign: "right" }}>{degree}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

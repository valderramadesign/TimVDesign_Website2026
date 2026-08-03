/**
 * Single source of truth for site positioning and project metadata.
 *
 * Anything that appears in more than one place — navigation labels, project
 * titles, headlines, roles, problem statements, statuses, results, card
 * imagery, and the homepage's order and grouping — lives here so the homepage,
 * the case studies, and the metadata surfaces cannot drift apart. Page-specific
 * narrative, layout, animation, and imagery stay in the page that renders them.
 */

import type { StaticImageData } from "next/image";

import paypalDeRollover from "@/components/images/PayPal DE/PayPalDE_RolloverPhone.png";
import paypalRollover from "@/components/images/PayPal1_RolloverImage_WithBackground.png";
import metaHeroOnTable from "@/components/images/Monthly invoicing Images/MontlyInvoicingHeroScreen_OnTable.png";
import soloPhoneWithApp from "@/components/images/Teacher'sApp/PhoneWithApp_Rollover.png";
import patientAppRollover from "@/components/images/Patient Portal/PatientApp_Rollover.png";
import doorDashRollover from "@/components/images/DoorDash Dashboard/headquarters-laptop-command-center-cropped-1837x953.png";

export const SITE = {
  name: "Timothy Valderrama",
  /** Primary positioning line. Used in metadata, structured data, and résumé. */
  title: "Principal Product Designer for regulated FinTech and AI-enabled systems.",
  /** Homepage-only positioning line. Kept separate from `title` so the résumé and metadata surfaces are unaffected. */
  homeTitle: "Lead Product Designer for regulated FinTech and AI-enabled systems.",
  /** Supporting positioning line. */
  supporting: "Former PayPal design lead and Meta FinTech consultant.",
  /** Closing positioning sentence. Rendered directly after `supporting`. */
  practice:
    "I turn ambiguous, multi-market workflows into scalable products that improve conversion, revenue and customer trust.",
  shortBio:
    "Principal Product Designer for regulated FinTech and AI-enabled systems. Former PayPal design lead and Meta FinTech consultant.",
  url: "https://tim-ai-design.com",
  email: "valderramadesign@gmail.com",
  /** Downloadable résumé, served from `public/`. */
  resumeFile: "/TimV_Resume_2026.pdf",
  location: "San Mateo, CA",
  citizenship: "US Citizen",
} as const;

/**
 * Capability signals shown under the homepage introduction. Deliberately kept
 * to short labels: they are scan targets beside the positioning line, not
 * content sections of their own.
 */
export const CAPABILITIES = [
  "Product strategy",
  "Complex systems",
  "0→1 products",
  "AI product UX",
  "Cross-functional leadership",
] as const;

/**
 * Project status vocabulary. Every project uses exactly one of these labels,
 * and the same label is shown on the card, the case study, and any list view.
 */
export type ProjectStatus =
  | "Shipped"
  | "Shipped pilot"
  | "Client product"
  | "Self-initiated concept"
  | "Design exercise";

/** How the work is grouped. A shipped product can still be a client product. */
export type ProjectCategory =
  | "Shipped and scaled"
  | "Client products"
  | "Experiments";

/**
 * The two selected-work sections on the homepage. Flagships lead; experiments
 * are self-initiated or exploratory work shown underneath them.
 */
export type HomepageSection = "flagship" | "experiments";

/**
 * A figure exactly as it is displayed. Qualifiers ("estimated", "projected",
 * "target", "baseline", "~") are part of the copy and are never stripped.
 */
export type ProjectResult = {
  /** The figure, formatted as shown. */
  value: string;
  /** Definition of the figure. Used where space is tight, e.g. cards. */
  label: string;
  /** Longer wording used where there is room, e.g. case study and rollover. */
  detailLabel?: string;
};

/** Only the facts the case study itself states. Nothing is inferred. */
export type ProjectScope = {
  /** Platform wording exactly as the case study header displays it. */
  platforms: string[];
  products?: string[];
  markets?: string[];
};

export type ProjectThumbnail = {
  image: StaticImageData;
  alt: string;
  /** CSS object-position used by the homepage card crop. */
  objectPosition: string;
};

/** Imagery for the "next case study" cards other case studies link out with. */
export type ProjectPreview = {
  /** Static import, or a /public path for the cards that use a plain <img>. */
  image: StaticImageData | string;
  alt: string;
};

export type Project = {
  /** Permanent internal identifier. Never changes when visible copy changes. */
  id: string;
  /** Concise project name used in homepage navigation and project previews. */
  title: string;
  /** H1 displayed on the case study page, and the page + social metadata title. */
  caseStudyHeadline: string;
  company: string;
  status: ProjectStatus;
  /** Complete "My Role" text from the case study header. */
  role: string;
  scope: ProjectScope;
  /** "Problem" text from the case study, one entry per rendered paragraph. */
  description: string[];
  /** The one verified headline outcome, or null when there isn't one. */
  primaryResult: ProjectResult | null;
  /** Additional existing results. Never combined into a calculated total. */
  supportingResults: ProjectResult[];
  thumbnail: ProjectThumbnail;
  route: string;
  category: ProjectCategory;

  /* ── Additional surfaces the existing pages render ─────────────────── */

  /** Timeline shown in the case study header. */
  timeline: string;
  /** Homepage hero eyebrow, one entry per rendered line. */
  homepageEyebrowLines: string[];
  /**
   * Case study header eyebrow, one entry per rendered line. Omitted when the
   * case study uses the same eyebrow as the homepage, so the two only diverge
   * where a project actually has two approved lines.
   */
  caseStudyEyebrowLines?: string[];
  /** Short client/product label used on homepage cards. */
  cardLabel: string;
  /** Short descriptor shown on homepage cards. */
  cardTitle: string;
  /**
   * Role compressed to one scannable line for the card. Distinct from `role`,
   * which is the full case study text. Required on every homepage flagship.
   */
  cardRole?: string;
  /** Scope compressed to one scannable line. Required on every flagship. */
  cardScope?: string;
  /**
   * The problem in a single sentence, taken verbatim from `description` where
   * one sentence already states it. Required on every homepage flagship.
   */
  cardProblem?: string;
  /** Headline figure shown on the homepage card. */
  cardResult: ProjectResult | null;
  /** Figures stacked in the desktop rollover panel, top to bottom. */
  panelResults: ProjectResult[];
  /** Imagery used when another case study links here. Omitted if never linked. */
  preview?: ProjectPreview;
};

/* ── Results ─────────────────────────────────────────────────────────────
   Authored once and referenced from every field that displays them, so a
   figure and its wording can never diverge between surfaces. */

/**
 * The German products report separately, and each per-product figure is the one
 * stated on the résumé. `$710M` is their arithmetic sum, shown only on the
 * homepage card where a single combined figure is needed.
 */
const PAYPAL_DE_COMBINED_TPV: ProjectResult = {
  value: "$710M",
  label: "Combined monthly TPV",
};
const PAYPAL_DE_PAY_IN_30_TPV: ProjectResult = {
  value: "$529M",
  label: "Monthly TPV",
  detailLabel: "Pay in 30 Days monthly TPV",
};
const PAYPAL_DE_RATENZAHLUNG_TPV: ProjectResult = {
  value: "$181M",
  label: "Monthly TPV",
  detailLabel: "PayPal Ratenzahlung monthly TPV",
};

/** 208% is Pay in 4 only, so every surface names the product. */
const PAYPAL_PAY_IN_4_CONVERSION: ProjectResult = {
  value: "208%",
  label: "Of baseline Pay in 4 conversion",
};
const PAYPAL_TRENDING_TPV: ProjectResult = {
  value: "$598M/mo.",
  label: "Trending total purchase volume",
};

/** Both Meta figures are H1 2025 targets/projections, never achieved results. */
const META_TARGET_CONVERSION: ProjectResult = {
  value: "97%",
  label: "Target conversion, up from 39%",
};
const META_PROJECTED_SAVINGS: ProjectResult = {
  value: "~$20M/yr.",
  label: "Projected annual savings",
};

const SOLO_TIME_SAVED: ProjectResult = {
  value: "480 hrs",
  label: "Estimated annual time saved",
};

/** Durations, not outcomes. Shown where the other cards show a result. */
const SUTTER_SPRINT_LENGTH: ProjectResult = {
  value: "2.5 days",
  label: "From concept to prototype",
};
const DOORDASH_SPRINT_LENGTH: ProjectResult = {
  value: "2 days",
  label: "Concept sprint",
};

export const PROJECTS: Project[] = [
  {
    id: "paypalde",
    title: "PayPal Credit German Products",
    caseStudyHeadline: "Building Trust Through Responsible Credit",
    company: "PayPal",
    status: "Shipped",
    role: "I led the product design from 0→1, turning an ambiguous idea into a validated, polished digital experience. I owned the end-to-end process—from early concepts and complex AI workflows to final UI and developer handoff—working closely with product and engineering to move quickly, navigate trade-offs, and make the product clear and useful for non-expert users.",
    scope: {
      platforms: ["Mobile & desktop"],
      products: ["Pay in 30 Days", "PayPal Ratenzahlung"],
      markets: ["Germany"],
    },
    description: [
      "German customers were hesitant to use credit because existing payment options felt risky, inflexible, or inconsistent with responsible spending habits. They needed a way to inspect online purchases before money left their bank account, while still having the flexibility to spread the cost of larger purchases into manageable payments.",
    ],
    // Two products report separately and neither is identified as the primary
    // outcome, so both are supporting results and no total is derived.
    primaryResult: null,
    supportingResults: [PAYPAL_DE_PAY_IN_30_TPV, PAYPAL_DE_RATENZAHLUNG_TPV],
    thumbnail: {
      image: paypalDeRollover,
      alt: "PayPal Germany checkout screen on a phone",
      objectPosition: "center",
    },
    route: "/work/paypal-de",
    category: "Shipped and scaled",
    timeline: "3 months",
    homepageEyebrowLines: ["Turning Credit Caution", "Into Customer Adoption"],
    cardLabel: "PayPal Germany",
    cardTitle: "PayPal Credit Products for Germany",
    cardRole: "Lead Product Designer",
    cardScope: "Pay in 30 Days & Ratenzahlung · Germany · Mobile & desktop",
    cardProblem:
      "German customers were hesitant to use credit because existing payment options felt risky, inflexible, or inconsistent with responsible spending habits.",
    cardResult: PAYPAL_DE_COMBINED_TPV,
    panelResults: [PAYPAL_DE_COMBINED_TPV],
  },
  {
    id: "paypal",
    title: "PayPal Credit Applications Optimization",
    caseStudyHeadline: "Optimizing Loan Application Flows in PayPal Checkout",
    company: "PayPal",
    status: "Shipped",
    role: "Led the redesign of all six US and UK PayPal credit products for the new checkout framework. I ran the project on an AI-assisted workflow — using ChatGPT and Figma's AI tools at each stage — to move from discovery to stakeholder-ready designs in 1.5 months across six products.",
    scope: {
      platforms: ["iOS/Android mobile and desktop"],
      // Six product instances across two markets; PayPal Credit ships in both,
      // so five distinct names cover the six products named on the page.
      products: [
        "Pay in 4",
        "Pay Monthly",
        "PayPal Credit",
        "PayPal Mastercard",
        "Pay in 3",
      ],
      markets: ["United States", "United Kingdom"],
    },
    description: [
      "Paying with a credit card is seamless and nearly instant, while using a PayPal installment credit product requires customers to complete a rigorous, multi-step application at every checkout. This added friction disrupts the purchase flow, hurting conversion, repeat usage, and adoption of one of PayPal's key revenue-driving products.",
      "While this CEO-prioritized initiative optimized six credit products across the United States and United Kingdom, this case study highlights Pay in 4, which saw the most significant product and design changes.",
    ],
    primaryResult: PAYPAL_PAY_IN_4_CONVERSION,
    supportingResults: [PAYPAL_TRENDING_TPV],
    thumbnail: {
      image: paypalRollover,
      alt: "PayPal Pay in 4 application screen",
      objectPosition: "center",
    },
    route: "/work/paypal",
    category: "Shipped and scaled",
    timeline: "1.5 months",
    homepageEyebrowLines: ["Reducing Friction"],
    cardLabel: "PayPal",
    cardTitle: "Optimizing Loan Application Flows",
    cardRole: "Lead Product Designer",
    cardScope: "6 credit products · US & UK · Mobile and desktop",
    cardProblem:
      "Paying with a credit card is seamless and nearly instant, while using a PayPal installment credit product requires customers to complete a rigorous, multi-step application at every checkout.",
    cardResult: PAYPAL_PAY_IN_4_CONVERSION,
    panelResults: [PAYPAL_PAY_IN_4_CONVERSION, PAYPAL_TRENDING_TPV],
    preview: {
      image: "/images/next-case-studies/paypal-hero.jpg",
      alt: "PayPal case study preview",
    },
  },
  {
    id: "meta",
    title: "Meta Monthly Invoicing Onboarding",
    caseStudyHeadline:
      "Boosting Visibility and Applications Through Onboarding Optimization",
    company: "Meta",
    status: "Client product",
    role: "Partnered with engineering, finance, and cross-functional design teams to drive adoption of Monthly Invoicing — running an AI-first workflow with Metamate AI from discovery through handoff.",
    scope: {
      platforms: ["Desktop"],
      products: ["Monthly Invoicing"],
    },
    description: [
      "High-spend advertisers risk costly campaign pauses from card failures and funding gaps. Monthly Invoicing helps prevent disruptions while reducing Meta’s credit card processing costs, currently $2.46B annually and projected to reach $4.2B. Increasing adoption is expected to save at least $20M annually.",
    ],
    // Every Meta figure is an H1 2025 target or a projection, so none of them
    // qualifies as a verified result.
    primaryResult: null,
    supportingResults: [META_TARGET_CONVERSION, META_PROJECTED_SAVINGS],
    thumbnail: {
      image: metaHeroOnTable,
      alt: "Meta Monthly Invoicing hero screen on table",
      objectPosition: "center",
    },
    route: "/work/meta",
    category: "Client products",
    timeline: "1.5 months",
    homepageEyebrowLines: ["Designing Onboarding", "That Drives Adoption"],
    caseStudyEyebrowLines: ["Driving the Shift to Monthly Invoicing"],
    cardLabel: "Meta",
    cardTitle: "Monthly Invoicing for Meta Ads",
    cardRole: "Staff Product Designer (consultant)",
    cardScope: "Monthly Invoicing onboarding · Desktop",
    cardProblem:
      "High-spend advertisers risk costly campaign pauses from card failures and funding gaps.",
    cardResult: META_TARGET_CONVERSION,
    panelResults: [META_TARGET_CONVERSION, META_PROJECTED_SAVINGS],
    preview: {
      image: metaHeroOnTable,
      alt: "Meta case study preview",
    },
  },
  {
    id: "solo",
    title: "Ms. Sunshine App",
    caseStudyHeadline: "Streamlining and Automating Daily Reporting",
    company: "Ms. Sunshine",
    status: "Shipped",
    role: "Solo end-to-end AI workflow: research with ChatGPT and Claude, PRD generation with ChatGPT, design with Google Stitch and Figma, build with Replit — concept to tested MVP in the first 3 weeks.",
    scope: {
      platforms: ["Mobile"],
    },
    description: [
      "Schools need a more efficient, scalable way to document and communicate each child’s daily activities without relying on a labor-intensive end-of-day reporting process. Parents need timely visibility into their child’s school day so they feel informed, reassured, and confident about their child’s safety and well-being.",
      "The app solves both needs by giving parents real-time updates throughout the day while automating activity tracking and report generation for school staff.",
    ],
    primaryResult: SOLO_TIME_SAVED,
    supportingResults: [],
    thumbnail: {
      image: soloPhoneWithApp,
      alt: "Daily reporting app shown on phone",
      objectPosition: "top",
    },
    route: "/work/MsSunshineApp",
    category: "Client products",
    timeline: "2 months",
    homepageEyebrowLines: ["Rapid App Innovation"],
    cardLabel: "Ms. Sunshine App",
    cardTitle: "Daily Reporting App for Teachers",
    cardRole: "Solo designer and developer",
    cardScope: "Daily reporting app · Mobile",
    cardProblem:
      "Schools need a more efficient, scalable way to document and communicate each child’s daily activities without relying on a labor-intensive end-of-day reporting process.",
    cardResult: SOLO_TIME_SAVED,
    panelResults: [SOLO_TIME_SAVED],
    preview: {
      image: soloPhoneWithApp,
      alt: "Ms. Sunshine App case study preview",
    },
  },
  {
    id: "sutter",
    title: "Sutter Health Patient Portal",
    caseStudyHeadline: "A Simpler Patient Portal for Faster Access to Care",
    company: "Sutter Health",
    status: "Design exercise",
    role: "Using AI-assisted research and rapid design workflows to create a clear, functional prototype for a simplified patient portal—making it easier for patients to schedule appointments with their doctors.",
    scope: {
      platforms: ["Mobile & desktop"],
      products: ["MyHealthOnline"],
    },
    description: [
      "Patients who are already feeling unwell struggle to book appointments through the MyHealthOnline portal. Research shows the experience feels overly complicated, and analytics confirm significant drop-off throughout the booking flow, with only a 67% completion rate.",
      "How might we simplify the appointment booking experience so patients can quickly and confidently get the care they need?",
    ],
    // The 67% completion rate is the problem baseline, not an outcome of this
    // design exercise, so there is no verified result to report.
    primaryResult: null,
    supportingResults: [],
    thumbnail: {
      image: patientAppRollover,
      alt: "Sutter Health patient portal app on phone",
      objectPosition: "top",
    },
    route: "/work/PatientPortal",
    category: "Experiments",
    timeline: "2.5 days",
    homepageEyebrowLines: ["Less Portal. More Care."],
    cardLabel: "Sutter Health",
    cardTitle: "Redesigning the Patient Portal",
    cardResult: SUTTER_SPRINT_LENGTH,
    panelResults: [],
  },
  {
    id: "doordash",
    title: "DoorDash Dashboard",
    caseStudyHeadline: "Turning Marketplace Signals Into Confident Action",
    company: "DoorDash",
    status: "Self-initiated concept",
    role: "By combining AI-driven insights with rapid design iteration, I transformed a cluttered dashboard into a clear, scannable experience — surfacing critical information so users can quickly identify and resolve operational friction.",
    scope: {
      platforms: ["Mobile & desktop"],
    },
    description: [
      "Operations, merchant success, and finance teams all rely on the same marketplace data, but the signals that matter most to each of them are buried across cluttered, one-size-fits-all reporting. By the time an issue is spotted, it's already cost the business time, revenue, or merchant trust.",
      "This self-initiated concept explores how a single dashboard experience could surface the right signal, to the right person, at the right moment — and turn that signal directly into action.",
    ],
    // Self-initiated concept with no shipped outcome.
    primaryResult: null,
    supportingResults: [],
    thumbnail: {
      image: doorDashRollover,
      alt: "DoorDash headquarters command center dashboard on laptop",
      objectPosition: "center",
    },
    route: "/work/DoorDashDashboard",
    category: "Experiments",
    timeline: "2 days",
    homepageEyebrowLines: ["See the Signal.", "Seize the Opportunity."],
    cardLabel: "DoorDash Dashboard",
    cardTitle: "Turning Marketplace Signals Into Action",
    cardResult: DOORDASH_SPRINT_LENGTH,
    panelResults: [],
  },
];

export const PROJECTS_BY_ID: Record<string, Project> = Object.fromEntries(
  PROJECTS.map((p) => [p.id, p]),
);

/** How many projects the homepage's primary selected-work section may show. */
export const MAX_HOMEPAGE_FLAGSHIPS = 4;

/**
 * The homepage's selected-work layout: the single declaration of which projects
 * appear, in which section, and in what order. Every breakpoint renders from
 * this, so desktop, tablet, and mobile cannot fall out of sync.
 *
 * A project not named here never reaches the homepage, so adding or hiding work
 * is a one-line change and a secondary project cannot drift into the flagship
 * section by inheriting a stale flag.
 */
const HOMEPAGE_LAYOUT = {
  flagship: ["paypal", "meta", "paypalde", "solo"],
  experiments: ["sutter", "doordash"],
} as const satisfies Record<HomepageSection, readonly string[]>;

function homepageSection(section: HomepageSection): Project[] {
  return HOMEPAGE_LAYOUT[section].map((id) => {
    const project = PROJECTS_BY_ID[id];
    if (!project) {
      throw new Error(`Homepage ${section} layout names unknown project "${id}".`);
    }
    return project;
  });
}

/** The primary selected-work section, in the order the homepage shows it. */
export const HOMEPAGE_FLAGSHIPS: Project[] = homepageSection("flagship");

/** Self-initiated and exploratory work, shown below the flagships. */
export const HOMEPAGE_EXPERIMENTS: Project[] = homepageSection("experiments");

/** Every project on the homepage, flagships first. Order matches the page. */
export const HOMEPAGE_PROJECTS: Project[] = [
  ...HOMEPAGE_FLAGSHIPS,
  ...HOMEPAGE_EXPERIMENTS,
];

/* Authoring guards. A misconfigured homepage fails the build rather than
   shipping an over-long flagship row or a flagship card missing its facts. */
if (HOMEPAGE_FLAGSHIPS.length > MAX_HOMEPAGE_FLAGSHIPS) {
  throw new Error(
    `The homepage shows at most ${MAX_HOMEPAGE_FLAGSHIPS} flagships; the layout names ${HOMEPAGE_FLAGSHIPS.length}.`,
  );
}
for (const project of HOMEPAGE_FLAGSHIPS) {
  if (project.category === "Experiments") {
    throw new Error(`"${project.id}" is an experiment and cannot be a flagship.`);
  }
  if (!project.cardRole || !project.cardScope || !project.cardProblem) {
    throw new Error(
      `Flagship "${project.id}" needs cardRole, cardScope, and cardProblem.`,
    );
  }
}

/** Homepage hero eyebrow, one entry per rendered line. */
export function homepageEyebrow(project: Project): string[] {
  return project.homepageEyebrowLines;
}

/** Single-line form of the homepage eyebrow, for surfaces that don't break lines. */
export function homepageEyebrowText(project: Project): string {
  return homepageEyebrow(project).join(" ");
}

/**
 * Case study header eyebrow, one entry per rendered line. Falls back to the
 * homepage lines so a project only carries a second value when its case study
 * eyebrow actually differs.
 */
export function caseStudyEyebrow(project: Project): string[] {
  return project.caseStudyEyebrowLines ?? project.homepageEyebrowLines;
}

/** Single-line form of the case study eyebrow, for surfaces that don't break lines. */
export function caseStudyEyebrowText(project: Project): string {
  return caseStudyEyebrow(project).join(" ");
}

/** Result wording for surfaces with room for the longer label. */
export function resultDetail(result: ProjectResult): string {
  return result.detailLabel ?? result.label;
}

/**
 * Results a case study lists in its own right, most important first. Empty when
 * the project has no verified result, so callers render nothing rather than an
 * empty figure.
 */
export function caseStudyResults(project: Project): ProjectResult[] {
  return project.primaryResult
    ? [project.primaryResult, ...project.supportingResults]
    : project.supportingResults;
}

/** Resolves a static import or a /public path to a plain <img> src. */
export function imageSrc(image: StaticImageData | string): string {
  return typeof image === "string" ? image : image.src;
}

/**
 * Card art for a project another case study links out to. Only the projects the
 * next-case-study rows currently point at define one, so asking for a preview
 * that does not exist is a wiring mistake rather than an empty card.
 */
export function previewOf(project: Project): ProjectPreview {
  if (!project.preview) {
    throw new Error(`No next-case-study preview is defined for "${project.id}".`);
  }
  return project.preview;
}

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
  /** Homepage-only wordmark. Kept separate from `name` so metadata, structured data, and the résumé keep the legal name. */
  homeName: "Tim Valderrama",
  /** Primary positioning line. Used on the homepage, in metadata, and in structured data. */
  title: "3X Spot Award-Winning Lead Product Designer for FinTech and AI‑enabled systems.",
  /** Supporting positioning line. */
  supporting: "Former PayPal design lead and Meta FinTech consultant.",
  /** Closing positioning sentence. Rendered directly after `supporting`. */
  practice:
    "I turn ambiguous, multi-market workflows into scalable products that improve conversion, revenue and customer trust.",
  shortBio:
    "Lead Product Designer for regulated FinTech and AI-enabled systems. Former PayPal design lead and Meta FinTech consultant.",
  /**
   * Résumé-only copy, mirroring `resumeFile`. Kept separate from the
   * positioning fields above, which are written as full sentences for the
   * homepage and metadata; the résumé needs the bare title and its own summary.
   */
  resumeTitle: "Lead Product Designer",
  /**
   * Two sentences: what the work is, then how it runs. Certifications are
   * evidence and stay in Education — leading with them put the credential
   * ahead of the practice it supports.
   */
  resumeSummaryLead:
    "Lead Product Designer with 9+ years of experience turning complex, regulated workflows into scalable products that improve adoption, revenue, and customer trust.",
  resumeSummaryDetail:
    "I lead strategy through delivery, align cross-functional teams, and use AI-assisted workflows to accelerate research, iteration, and prototyping.",
  url: "https://tim-ai-design.com",
  email: "valderramadesign@gmail.com",
  /**
   * The résumé as it should leave the site: the typeset PDF is the print and
   * download artefact, so every PRINT affordance opens this rather than
   * printing the HTML page, which is only the readable web version.
   */
  resumeFile: "/TimValderrama-ResumePrint.pdf",
  location: "San Mateo, CA",
  citizenship: "US Citizen",
} as const;

/**
 * Capability signals shown under the homepage introduction. Deliberately kept
 * to short labels: they are scan targets beside the positioning line, not
 * content sections of their own.
 */
export const CAPABILITIES = [
  "Design strategy",
  "Complex systems",
  "0→1 products",
  "AI product UX",
  "Cross-functional collaboration",
] as const;

/**
 * Project status vocabulary. Every project uses exactly one of these labels,
 * and the same label is shown on the card, the case study, and any list view.
 *
 * The set is deliberately small and unambiguous: a visitor should be able to
 * tell shipped client work from an independent exercise at a glance, without
 * reading the case study. "Delivered" means the work was handed over and its
 * launch is not something I can attest to; `statusNote` says so out loud.
 */
export type ProjectStatus =
  | "Shipped"
  | "Shipped MVP"
  | "Delivered"
  | "Independent concept";

/** How the work is grouped. A shipped product can still be a client product. */
export type ProjectCategory =
  | "Shipped and scaled"
  | "Client products"
  | "Experiments";

/**
 * The two selected-work sections on the homepage. Flagships lead; experiments
 * are self-initiated or exploratory work shown underneath them.
 */
type HomepageSection = "flagship" | "experiments";

/**
 * What kind of claim a figure is. Required on every result and rendered beside
 * it on every surface, so a target or a projection can never be read as money
 * already banked. "Measured" is reserved for figures observed after launch.
 */
export type ProjectEvidence = "Measured" | "Target" | "Projected" | "Estimated";

/**
 * A figure exactly as it is displayed. Qualifiers ("estimated", "projected",
 * "target", "baseline", "~") are part of the copy and are never stripped.
 *
 * A figure also names the population it measures. Two results that sound alike
 * but count different products or markets carry that difference in their own
 * label rather than relying on the surrounding copy to draw it.
 */
export type ProjectResult = {
  /** The figure, formatted as shown. */
  value: string;
  /** Definition of the figure. Used where space is tight, e.g. cards. */
  label: string;
  /** Longer wording used where there is room, e.g. case study and rollover. */
  detailLabel?: string;
  /** Measured, Target, Projected, or Estimated. Never omitted. */
  evidence: ProjectEvidence;
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
  /** One line qualifying the status, where the bare label would overstate it. */
  statusNote?: string;
  /**
   * Affiliation notice for independent work, shown on the case study. Present
   * on exactly the projects that name a company I was never engaged by.
   */
  disclaimer?: string;
  /** Complete "My Role" text from the case study header. */
  role: string;
  scope: ProjectScope;
  /** "Problem" text from the case study, one entry per rendered paragraph. */
  description: string[];
  /**
   * The homepage's own statement of the problem, shown on the cards and in the
   * desktop rollover. Authored separately from `description` because the two
   * surfaces answer different questions: the case study opens by setting the
   * scene, while the homepage has one paragraph to name the problem and the
   * work in the same breath.
   */
  homepageProblem: string;
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
   * Headline figure shown on the homepage card. Null on the experiments: a
   * self-directed sprint has no measured outcome to put a number against, and
   * quoting its duration there read as one.
   */
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
 * Germany's two products report separately and are never added together. A
 * percentage lift on Pay in 30 Days and one on Ratenzahlung are measured against
 * different baselines and different volumes, so their sum is not a figure that
 * exists — every surface shows the pair.
 */
const PAYPAL_DE_PAY_IN_30_TPV_LIFT: ProjectResult = {
  value: "+48.78%",
  label: "Pay in 30 Days monthly TPV",
  evidence: "Measured",
};
const PAYPAL_DE_RATENZAHLUNG_TPV_LIFT: ProjectResult = {
  value: "+14.92%",
  label: "Ratenzahlung monthly TPV",
  detailLabel: "PayPal Ratenzahlung monthly TPV",
  evidence: "Measured",
};
const PAYPAL_DE_PAY_IN_30_IREV_LIFT: ProjectResult = {
  value: "+17.33%",
  label: "Pay in 30 Days annual iRev",
  evidence: "Measured",
};
const PAYPAL_DE_RATENZAHLUNG_IREV_LIFT: ProjectResult = {
  value: "+25.44%",
  label: "Ratenzahlung annual iRev",
  detailLabel: "PayPal Ratenzahlung annual iRev",
  evidence: "Measured",
};
const PAYPAL_DE_PAY_IN_30_TPV: ProjectResult = {
  value: "$529M",
  label: "Monthly TPV",
  detailLabel: "Pay in 30 Days monthly TPV",
  evidence: "Measured",
};
const PAYPAL_DE_RATENZAHLUNG_TPV: ProjectResult = {
  value: "$181M",
  label: "Monthly TPV",
  detailLabel: "PayPal Ratenzahlung monthly TPV",
  evidence: "Measured",
};

/**
 * Two conversion figures, two different populations, so each names its own.
 * 2.08x is Pay in 4 application completion measured against its own
 * pre-redesign baseline, written as a multiple because the absolute before
 * and after rates are not published; the 28-point gain is application
 * conversion across all six redesigned credit products in the US and UK.
 * Neither restates the other.
 */
const PAYPAL_PAY_IN_4_CONVERSION: ProjectResult = {
  value: "2.08\u00d7",
  label: "Pay in 4 completion vs. baseline",
  detailLabel: "Pay in 4 application completion vs. pre-redesign baseline",
  evidence: "Measured",
};
const PAYPAL_PORTFOLIO_CONVERSION: ProjectResult = {
  value: "+28 pts",
  label: "Credit portfolio conversion",
  detailLabel: "Application conversion across 6 products, 51% → 79%",
  evidence: "Measured",
};
const PAYPAL_TPV_INCREASE: ProjectResult = {
  value: "67%",
  label: "Increase in Pay in 4 monthly TPV",
  detailLabel: "Increase in average monthly Pay in 4 TPV",
  evidence: "Measured",
};

const META_CONVERSION: ProjectResult = {
  value: "97%",
  label: "Conversion, from a 39% baseline",
  evidence: "Measured",
};
const META_ANNUAL_SAVINGS: ProjectResult = {
  value: "7.5%",
  label: "Annual savings",
  evidence: "Measured",
};

/** An estimate with its arithmetic attached, so a reader can check it. */
const SOLO_TIME_SAVED: ProjectResult = {
  value: "524 hrs",
  label: "Estimated annual time saved",
  evidence: "Estimated",
};

export const PROJECTS: Project[] = [
  {
    id: "paypalde",
    title: "PayPal Credit German Products",
    caseStudyHeadline: "Building Trust Through Responsible Credit",
    company: "PayPal",
    status: "Shipped",
    role: "Led the 0→1 design of two German PayPal credit products on one bet: adoption grows when credit is easier to understand and control—not more persuasive. Monthly TPV rose 48.78% for Pay in 30 and 14.92% for Ratenzahlung.",
    scope: {
      platforms: ["Mobile & desktop"],
      products: ["Pay in 30 Days", "PayPal Ratenzahlung"],
      markets: ["Germany"],
    },
    description: [
      "German customers hesitated to use credit: the options available felt risky, rigid, and at odds with responsible spending. They wanted to inspect a purchase before money left their account — and still spread larger costs into manageable payments.",
    ],
    homepageProblem:
      "German shoppers hesitated to use credit that felt risky and rigid. I designed flexible PayPal products that preserved control—letting customers inspect purchases before paying or split larger costs into installments.",
    // Two products report separately and neither is identified as the primary
    // outcome, so every figure is a supporting result and no total is derived.
    primaryResult: null,
    supportingResults: [
      PAYPAL_DE_PAY_IN_30_TPV_LIFT,
      PAYPAL_DE_RATENZAHLUNG_TPV_LIFT,
      PAYPAL_DE_PAY_IN_30_IREV_LIFT,
      PAYPAL_DE_RATENZAHLUNG_IREV_LIFT,
      PAYPAL_DE_PAY_IN_30_TPV,
      PAYPAL_DE_RATENZAHLUNG_TPV,
    ],
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
    // The card leads on the larger of the two lifts and names its product; the
    // rollover has room for both, which is the only honest way to show them.
    cardResult: PAYPAL_DE_PAY_IN_30_TPV_LIFT,
    panelResults: [PAYPAL_DE_PAY_IN_30_TPV_LIFT, PAYPAL_DE_RATENZAHLUNG_TPV_LIFT],
  },
  {
    id: "paypal",
    title: "PayPal Credit Applications Optimization",
    caseStudyHeadline: "Six Credit Products. One Clearer Path Through Checkout.",
    company: "PayPal",
    status: "Shipped",
    role: "Led a six-week redesign of six U.S. and U.K. PayPal credit applications, creating a flexible shared framework that cut Pay in 4 from three steps to one—doubling completion (2.08\u00d7) and lifting portfolio-wide conversion from 51% to 79%.",
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
      "A credit card takes seconds at checkout. A PayPal installment product takes a rigorous, multi-step application — every time. That friction breaks the purchase flow and costs conversion, repeat usage, and adoption of one of PayPal’s key revenue-driving products.",
      "This CEO-prioritized initiative optimized six credit products across the United States and United Kingdom; the case study follows Pay in 4, which changed the most.",
    ],
    homepageProblem:
      "PayPal’s installment products required a full application at every purchase. I streamlined the experience to strengthen conversion, repeat use, and adoption of a key revenue driver.",
    primaryResult: PAYPAL_PAY_IN_4_CONVERSION,
    supportingResults: [PAYPAL_PORTFOLIO_CONVERSION, PAYPAL_TPV_INCREASE],
    thumbnail: {
      image: paypalRollover,
      alt: "PayPal Pay in 4 application screen",
      objectPosition: "center",
    },
    route: "/work/paypal",
    category: "Shipped and scaled",
    timeline: "1.5 months",
    homepageEyebrowLines: ["Reducing Friction"],
    caseStudyEyebrowLines: ["Turning Application Friction Into Adoption"],
    cardLabel: "PayPal",
    cardTitle: "Optimizing Loan Application Flows",
    cardRole: "Lead Product Designer",
    cardScope: "6 credit products · US & UK · Mobile and desktop",
    cardResult: PAYPAL_PAY_IN_4_CONVERSION,
    panelResults: [PAYPAL_PAY_IN_4_CONVERSION, PAYPAL_TPV_INCREASE],
    preview: {
      image: "/images/next-case-studies/paypal-hero.jpg",
      alt: "PayPal case study preview",
    },
  },
  {
    id: "meta",
    title: "Meta Monthly Invoicing Onboarding",
    caseStudyHeadline:
      "Moving high-spend advertisers beyond credit card limits",
    company: "Meta",
    status: "Delivered",
    statusNote:
      "Designs delivered and handed off; the redesign shipped after my engagement ended.",
    role: "Led a six-week redesign of Meta Monthly Invoicing with Engineering, Finance, and Design. Moved discovery to high-traffic business surfaces and reduced the application from nine screens to three by reusing verified data. Used Metamate AI from discovery through handoff.",
    scope: {
      platforms: ["Desktop"],
      products: ["Monthly Invoicing"],
    },
    description: [
      "Card failures and funding gaps can pause campaigns for high-spend advertisers. Monthly Invoicing reduces that risk and Meta’s card-processing costs—a $2.46B annual baseline heading toward $4.2B. Wider adoption saves at least 7.5% of that annually.",
    ],
    homepageProblem:
      "Card failures pause high-value campaigns, while card processing costs Meta billions. I designed Monthly Invoicing onboarding to drive adoption, protect advertiser spend, and unlock significant annual savings.",
    primaryResult: META_CONVERSION,
    supportingResults: [META_CONVERSION, META_ANNUAL_SAVINGS],
    thumbnail: {
      image: metaHeroOnTable,
      alt: "Meta Monthly Invoicing hero screen on table",
      objectPosition: "center",
    },
    route: "/work/meta",
    category: "Client products",
    timeline: "1.5 months",
    homepageEyebrowLines: ["Designing Onboarding", "That Drives Adoption"],
    caseStudyEyebrowLines: ["Scaling Monthly Invoicing Adoption"],
    cardLabel: "Meta",
    cardTitle: "Monthly Invoicing for Meta Ads",
    cardRole: "Product Designer V, Staff-level — Consultant",
    cardScope: "Monthly Invoicing onboarding · Desktop",
    cardResult: META_CONVERSION,
    panelResults: [META_CONVERSION, META_ANNUAL_SAVINGS],
    preview: {
      image: metaHeroOnTable,
      alt: "Meta case study preview",
    },
  },
  {
    id: "solo",
    title: "Ms. Sunshine App",
    caseStudyHeadline: "Turning Classroom Updates Into Live Parent Communication",
    company: "Ms. Sunshine",
    status: "Shipped MVP",
    role: "Led discovery, design, and delivery of a working MVP in three weeks, turning manual daily reports into one connected workflow for teachers and parents.",
    scope: {
      platforms: ["Mobile"],
    },
    description: [
      "Assistant teachers logged each child’s activities by hand and passed their reports to the head teacher at the end of the day; she then rewrote them into one report per child — about two hours of hers. Parents waited until pickup for any word about their child’s day.",
      "The app answers both: real-time updates for parents, automated tracking and reporting for staff.",
    ],
    homepageProblem:
      "A head teacher spent two hours daily assembling reports while parents waited for updates. I built an app that made reporting faster and parent updates timely.",
    primaryResult: SOLO_TIME_SAVED,
    supportingResults: [],
    thumbnail: {
      image: soloPhoneWithApp,
      alt: "Daily reporting app shown on phone",
      objectPosition: "top",
    },
    route: "/work/MsSunshineApp",
    category: "Client products",
    timeline: "3 weeks",
    homepageEyebrowLines: ["Rapid App Innovation"],
    cardLabel: "Ms. Sunshine App",
    cardTitle: "Daily Reporting App for Teachers",
    cardRole: "Principal Product Designer — solo design and build",
    cardScope: "Daily reporting app · Mobile",
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
    status: "Independent concept",
    disclaimer:
      "Independent concept based on a review of Sutter Health’s appointment experience. Not commissioned by or affiliated with Sutter Health.",
    role: "Self-initiated redesign of Sutter Health’s appointment experience. Evaluated three navigation models and prototyped a task-first portal centered on booking care.",
    scope: {
      platforms: ["Mobile & desktop"],
      products: ["MyHealthOnline"],
    },
    description: [
      "Patients often use portals while sick, stressed, or short on time. In the existing experience, appointment tasks compete with the portal’s many other features, increasing the effort needed to find and book care.",
      "How might booking become the clearest next action?",
    ],
    homepageProblem:
      "Patient portals should reduce stress, not add to it. I redesigned appointment discovery and booking to help sick, time-pressed patients reach care faster.",
    // A self-initiated exercise that ends at a prototype, so there is no
    // verified result to report.
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
    cardResult: null,
    panelResults: [],
  },
  {
    id: "doordash",
    title: "DoorDash Dashboard",
    caseStudyHeadline: "A Role-Aware Command Center for Marketplace Operations",
    company: "DoorDash",
    status: "Independent concept",
    disclaimer:
      "Independent concept—unaffiliated with DoorDash. Data and scenarios are illustrative.",
    role: "Self-initiated DoorDash concept. Defined the experience, explored three dashboard models, and prototyped an action-first command center for marketplace operations.",
    scope: {
      platforms: ["Mobile & desktop"],
    },
    description: [
      "Marketplace teams work from the same data but need different signals. In one-size-fits-all reporting, urgent issues compete with reference metrics, slowing diagnosis and action.",
      "How might a role-aware dashboard prioritize issues, explain their impact, and recommend the next step?",
    ],
    homepageProblem:
      "Marketplace teams share data but need different signals. I designed role-specific dashboards to surface urgent issues and turn reporting into faster, focused action.",
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
    caseStudyEyebrowLines: ["DoorDash Marketplace Experiment"],
    cardLabel: "DoorDash Dashboard",
    cardTitle: "Turning Marketplace Signals Into Action",
    cardResult: null,
    panelResults: [],
  },
];

export const PROJECTS_BY_ID: Record<string, Project> = Object.fromEntries(
  PROJECTS.map((p) => [p.id, p]),
);

/** How many projects the homepage's primary selected-work section may show. */
const MAX_HOMEPAGE_FLAGSHIPS = 4;

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
  flagship: ["paypalde", "paypal", "meta", "solo"],
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
  if (!project.cardRole || !project.cardScope) {
    throw new Error(`Flagship "${project.id}" needs cardRole and cardScope.`);
  }
}
for (const project of PROJECTS) {
  if (project.status === "Independent concept" && !project.disclaimer) {
    throw new Error(
      `"${project.id}" is an independent concept and needs a disclaimer naming the company it is unaffiliated with.`,
    );
  }
}

/**
 * Ties a paragraph's last two words together so neither surface can leave a
 * single word alone on the final line.
 *
 * The rollover paragraph is right-aligned in a fixed 350px column at a size that
 * scales with viewport height, so the same sentence breaks differently at every
 * height — a widow that is invisible at the 1280x800 reference appears two
 * hundred pixels down. Binding the final pair guarantees the last line carries
 * at least two words at every breakpoint, on the cards as well as the panels.
 */
function bindLastWord(text: string): string {
  return text.replace(/ (\S+)\s*$/, "\u00A0$1");
}

/**
 * The problem as the homepage states it, on cards and in the desktop rollover.
 *
 * Read through this accessor rather than off the record so both homepage
 * surfaces stay identical, and so the case study's own `description` is never
 * pulled onto a card by accident.
 */
export function cardProblem(project: Project): string {
  return bindLastWord(project.homepageProblem);
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
function caseStudyEyebrow(project: Project): string[] {
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

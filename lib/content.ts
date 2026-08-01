/**
 * Single source of truth for site positioning and project metadata.
 *
 * Anything that appears in more than one place — navigation labels, project
 * titles, statuses, and card metrics — lives here so desktop, mobile, and
 * metadata surfaces cannot drift apart.
 */

export const SITE = {
  name: "Timothy Valderrama",
  /** Primary positioning line. Used in metadata, structured data, and résumé. */
  title: "Principal Product Designer for regulated FinTech and AI-enabled systems.",
  /** Supporting positioning line. */
  supporting: "Former PayPal design lead and Meta FinTech consultant.",
  shortBio:
    "Principal Product Designer for regulated FinTech and AI-enabled systems. Former PayPal design lead and Meta FinTech consultant.",
  url: "https://tim-ai-design.com",
  email: "valderramadesign@gmail.com",
  location: "San Mateo, CA",
  citizenship: "US Citizen",
} as const;

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

export type Project = {
  id: string;
  href: string;
  /** Long label used in the desktop left navigation. */
  navLabel: string;
  /** Short client/product label used on cards. */
  label: string;
  eyebrow: string;
  /** Short descriptor shown on project cards. */
  title: string;
  /** Full case study headline, used for page + social metadata. */
  caseStudyTitle: string;
  status: ProjectStatus;
  /** Headline metric shown on the project card. */
  metric: string;
  /** Definition of the headline metric. Must match the case study wording. */
  metricLabel: string;
};

export const PROJECTS: Project[] = [
  {
    id: "paypalde",
    href: "/work/paypal-de",
    navLabel: "PayPal Credit German Products",
    label: "PayPal Germany",
    eyebrow: "Turning Credit Caution Into Customer Adoption",
    title: "PayPal Credit Products for Germany",
    caseStudyTitle: "Building Trust Through Responsible Credit",
    status: "Shipped",
    metric: "$46.7M",
    metricLabel: "Combined average annual iRev",
  },
  {
    id: "paypal",
    href: "/work/paypal",
    navLabel: "PayPal Credit Applications Optimization",
    label: "PayPal",
    eyebrow: "Reducing Friction",
    title: "Optimizing Loan Application Flows",
    caseStudyTitle: "Optimizing Loan Application Flows in PayPal Checkout",
    status: "Shipped",
    metric: "208%",
    metricLabel: "Of baseline conversion",
  },
  {
    id: "meta",
    href: "/work/meta",
    navLabel: "Meta Monthly Invoicing Onboarding",
    label: "Meta",
    eyebrow: "Designing Onboarding That Drives Adoption",
    title: "Monthly Invoicing for Meta Ads",
    caseStudyTitle:
      "Boosting Visibility and Applications Through Onboarding Optimization",
    status: "Client product",
    metric: "97%",
    metricLabel: "Target conversion, up from 39%",
  },
  {
    id: "solo",
    href: "/work/MsSunshineApp",
    navLabel: "Ms. Sunshine App",
    label: "Ms. Sunshine App",
    eyebrow: "Rapid App Innovation",
    title: "Daily Reporting App for Teachers",
    caseStudyTitle: "Streamlining and Automating Daily Reporting",
    status: "Shipped",
    metric: "480 hrs",
    metricLabel: "Estimated annual time saved",
  },
  {
    id: "sutter",
    href: "/work/PatientPortal",
    navLabel: "Sutter Health Patient Portal",
    label: "Sutter Health",
    eyebrow: "Less Portal. More Care.",
    title: "Redesigning the Patient Portal",
    caseStudyTitle: "A Simpler Patient Portal for Faster Access to Care",
    status: "Design exercise",
    metric: "2.5 days",
    metricLabel: "From concept to prototype",
  },
  {
    id: "doordash",
    href: "/work/DoorDashDashboard",
    navLabel: "DoorDash Dashboard",
    label: "DoorDash Dashboard",
    eyebrow: "See the Signal. Seize the Opportunity.",
    title: "Turning Marketplace Signals Into Action",
    caseStudyTitle: "Turning Marketplace Signals Into Confident Action",
    status: "Self-initiated concept",
    metric: "2 days",
    metricLabel: "Concept sprint",
  },
];

export const PROJECTS_BY_ID: Record<string, Project> = Object.fromEntries(
  PROJECTS.map((p) => [p.id, p]),
);

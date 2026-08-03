import type { Metadata, Viewport } from "next";
import { League_Spartan, JetBrains_Mono, PT_Serif } from "next/font/google";
import "./globals.css";
import { PROJECTS, SITE } from "@/lib/content";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-league-spartan",
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
});

// Libertinus Serif Display is self-hosted via public/fonts/ + globals.css @font-face
// Download from: https://github.com/alerque/libertinus/releases

const siteTitle = `${SITE.name} — Principal Product Designer`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: siteTitle,
  description: SITE.shortBio,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: siteTitle,
    description: SITE.shortBio,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: SITE.shortBio,
  },
};

/**
 * Person + CreativeWork structured data, generated from the same PROJECTS list
 * that renders the navigation and cards so titles and statuses cannot drift.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/#person`,
      name: SITE.name,
      url: SITE.url,
      email: `mailto:${SITE.email}`,
      jobTitle: "Principal Product Designer",
      description: SITE.shortBio,
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Mateo",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: siteTitle,
      description: SITE.shortBio,
      publisher: { "@id": `${SITE.url}/#person` },
    },
    ...PROJECTS.map((project) => ({
      "@type": "CreativeWork",
      "@id": `${SITE.url}${project.route}#case-study`,
      url: `${SITE.url}${project.route}`,
      name: project.caseStudyHeadline,
      headline: project.caseStudyHeadline,
      about: project.cardTitle,
      creativeWorkStatus: project.status,
      author: { "@id": `${SITE.url}/#person` },
      isPartOf: { "@id": `${SITE.url}/#website` },
    })),
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${leagueSpartan.variable} ${jetbrainsMono.variable} ${ptSerif.variable}`}
    >
      <body className="bg-black antialiased" suppressHydrationWarning>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}

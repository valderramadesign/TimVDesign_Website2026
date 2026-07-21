import type { Metadata, Viewport } from "next";
import { League_Spartan, JetBrains_Mono, PT_Serif } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Timothy Valderrama — Product Designer",
  description:
    "Portfolio of Timothy Valderrama — product design, front-end, and systems thinking.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.variable} ${jetbrainsMono.variable} ${ptSerif.variable} bg-black antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

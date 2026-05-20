import type { Metadata } from "next";
import { League_Spartan, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-league-spartan",
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
      <head>
        <link rel="preload" as="video" href="/WomanPhoneShopping.mp4" type="video/mp4" />
      </head>
      <body
        className={`${leagueSpartan.variable} ${jetbrainsMono.variable} bg-black antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

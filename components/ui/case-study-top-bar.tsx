"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/logo";

const barClasses =
  "flex w-full items-center justify-between shrink-0 px-5 pt-5 pb-5 lg:px-[24px] lg:pt-[24px] lg:pb-[24px]";

export default function CaseStudyTopBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const target = document.getElementById("next-case-study-section");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const content = (
    <>
      {/* Split padding compensates League Spartan's high ascent so the label
          sits on the pill's midline; total height is unchanged. */}
      <Link
        href="/"
        className="rounded-full border border-transparent bg-[#484848] px-4 pt-[10.28px] pb-[5.72px] text-base font-normal font-sans leading-none whitespace-nowrap text-white transition-colors duration-150 hover:border-white"
      >
        Home
      </Link>
      <Link href="/" aria-label="Timothy Valderrama — home">
        <Logo />
      </Link>
    </>
  );

  return (
    <>
      {/* Spacer preserves document flow height */}
      <div aria-hidden inert className={`invisible ${barClasses}`}>
        {content}
      </div>
      {/* Fixed bar: stays visible while page scrolls behind it */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-black transition-opacity duration-500 ease-out ${barClasses}`}
        style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
      >
        {content}
      </div>
    </>
  );
}

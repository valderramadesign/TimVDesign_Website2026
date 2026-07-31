"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import LiquidMetalBackground from "@/components/ui/liquid-metal-background";
import Header from "@/components/layout/header";
import LeftNav from "@/components/layout/left-nav";
import Hero from "@/components/sections/hero";
import ResumePanel from "@/components/ui/resume-panel";
import Logo from "@/components/ui/logo";
import { AsciiCubes } from "@/components/ui/ascii-cubes";
import paypal1Rollover from "@/components/images/PayPal1_RolloverImage_WithBackground.png";
import metaRollover from "@/components/images/Monthly invoicing Images/MontlyInvoicingHeroScreen_OnTable.png";
import soloPhoneWithApp from "@/components/images/Teacher'sApp/PhoneWithApp_Rollover.png";
import patientAppRollover from "@/components/images/Patient Portal/PatientApp_Rollover.png";
import doorDashRollover from "@/components/images/DoorDash Dashboard/headquarters-laptop-command-center-cropped-1837x953.png";
import doorDashOldDashboard from "@/components/images/DoorDash Dashboard/DoorDash_OldDashboard 1.png";
import paypalDeRollover from "@/components/images/PayPal DE/PayPalDE_RolloverPhone.png";

const MOBILE_CARDS = [
  {
    id: "paypal",
    href: "/work/paypal",
    label: "PayPal",
    eyebrow: "Reducing Friction",
    title: "Optimizing Loan Application Flows",
    metric: "208%",
    metricLabel: "Increase in conversion",
    image: paypal1Rollover,
    imageAlt: "PayPal Pay in 4 application screen",
    objectPosition: "center",
  },
  {
    id: "meta",
    href: "/work/meta",
    label: "Meta",
    eyebrow: "Designing Onboarding That Drives Adoption",
    title: "Monthly Invoicing for Meta Ads",
    metric: "61%",
    metricLabel: "Increase in conversion",
    image: metaRollover,
    imageAlt: "Meta Monthly Invoicing hero screen on table",
    objectPosition: "center",
  },
  {
    id: "solo",
    href: "/work/MsSunshineApp",
    label: "Ms. Sunshine App",
    eyebrow: "Rapid App Innovation",
    title: "Daily Reporting App for Teachers",
    metric: "257%",
    metricLabel: "Increase in efficiency",
    image: soloPhoneWithApp,
    imageAlt: "Daily reporting app shown on phone",
    objectPosition: "top",
  },
  {
    id: "sutter",
    href: "/work/PatientPortal",
    label: "Sutter Health",
    eyebrow: "Less Portal. More Care.",
    title: "Redesigning the Patient Portal",
    metric: "3 days",
    metricLabel: "From concept to prototype",
    image: patientAppRollover,
    imageAlt: "Sutter Health patient portal app on phone",
    objectPosition: "top",
  },
  {
    id: "doordash",
    href: "/work/DoorDashDashboard",
    label: "DoorDash Dashboard",
    eyebrow: "See the Signal. Seize the Opportunity.",
    title: "Turning Marketplace Signals Into Action",
    metric: "2 Days",
    metricLabel: "Self-initiated concept sprint",
    image: doorDashRollover,
    imageAlt: "DoorDash headquarters command center dashboard on laptop",
    objectPosition: "center",
  },
];

export default function HomeClient() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const showPayPalDE = hoveredProject === "paypalde";
  const showPayPal = hoveredProject === "paypal";
  const showMeta   = hoveredProject === "meta";
  const showSolo   = hoveredProject === "solo";
  const showSutter = hoveredProject === "sutter";
  const showDoorDash = hoveredProject === "doordash";

  useEffect(() => {
    const imgs = [paypalDeRollover.src, paypal1Rollover.src, metaRollover.src, soloPhoneWithApp.src, patientAppRollover.src, doorDashRollover.src, doorDashOldDashboard.src];
    imgs.forEach((src) => { const img = new window.Image(); img.src = src; });
  }, []);

  useEffect(() => {
    if (resumeOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [resumeOpen]);

  const heroTitle = showPayPalDE
    ? <>Turning Credit Caution<br />Into Customer Adoption</>
    : showPayPal
    ? "Reducing Friction"
    : showMeta
    ? <>Designing Onboarding<br />That Drives Adoption</>
    : showSolo
    ? "Rapid App Innovation"
    : showSutter
    ? "Less portal. More care."
    : showDoorDash
    ? <>See the Signal.<br />Seize the Opportunity.</>
    : undefined;

  const heroKey = showPayPalDE
    ? "paypalde"
    : showPayPal
    ? "paypal"
    : showMeta
    ? "meta"
    : showSolo
    ? "solo"
    : showSutter
    ? "sutter"
    : showDoorDash
    ? "doordash"
    : "default";

  return (
    <>
      {/* ──────────────────────────────────────────────────────────────
          DESKTOP (≥1024px) — original layout, untouched
         ────────────────────────────────────────────────────────────── */}
      <div className="hidden lg:flex flex-row min-h-screen overflow-x-hidden">
        {/* Resume panel — slides in from the left */}
        <AnimatePresence initial={false}>
          {resumeOpen && (
            <motion.div
              key="resume-panel"
              className="shrink-0 overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: 717 }}
              exit={{ width: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <ResumePanel />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main homepage content — compresses as resume opens */}
        <div className="flex-1 min-w-0 relative min-h-screen">
          {/* Background */}
          {!showPayPalDE && !showPayPal && !showMeta && !showSolo && !showSutter && !showDoorDash && <LiquidMetalBackground />}
          {/* All video/image backgrounds always in the DOM so they preload immediately */}
          <div className={`absolute inset-0 z-[-10] bg-black ${showPayPalDE ? "opacity-100" : "opacity-0"}`}>
            <video
              src="/videos/PayPalDE/TryNowPayLaterVideo.mp4"
              autoPlay loop muted playsInline preload="auto" suppressHydrationWarning
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
          </div>
          <div className={`absolute inset-0 z-[-10] bg-black ${showPayPal ? "opacity-100" : "opacity-0"}`}>
            <video
              src="/WomanPhoneShopping.mp4"
              autoPlay loop muted playsInline preload="auto" suppressHydrationWarning
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
          </div>
          <div className={`absolute inset-0 z-[-10] bg-black ${showMeta ? "opacity-100" : "opacity-0"}`}>
            <video
              src="/CreditCardDeclineMOV.mp4"
              autoPlay loop muted playsInline preload="auto" suppressHydrationWarning
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          </div>
          <div className={`absolute inset-0 z-[-10] bg-black ${showSolo ? "opacity-100" : "opacity-0"}`}>
            <video
              src="/videos/TeacherRecordingActivity/TeacherRecordingActivity2.mp4"
              autoPlay loop muted playsInline preload="auto" suppressHydrationWarning
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          </div>
          <div className={`absolute inset-0 z-[-10] bg-black ${showSutter ? "opacity-100" : "opacity-0"}`}>
            <video
              src="/videos/PatientPortal/SickMan_Rollover.mp4"
              autoPlay loop muted playsInline preload="auto" suppressHydrationWarning
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          </div>
          <div className={`absolute inset-0 z-[-10] bg-black overflow-hidden transition-opacity duration-300 ${showDoorDash ? "opacity-100" : "opacity-0"}`}>
            {/* Chameleon cube field — scrolls the dashboard and samples its colors */}
            <AsciiCubes
              active={showDoorDash}
              imageSrc={doorDashOldDashboard.src}
              className="absolute inset-0 h-full w-full pointer-events-none"
            />
          </div>

          <main className="relative z-10 flex flex-col p-[24px] h-screen">
            <div className="flex flex-col">
              <Header
                onResumeToggle={() => setResumeOpen((v) => !v)}
                resumeOpen={resumeOpen}
              />
              <div className="relative w-full mt-[clamp(40px,calc(18vh_-_40px),140px)]">
                <LeftNav onHover={setHoveredProject} />
              </div>
            </div>

            {/* Guarantees at least 40px between the nav and the headline below,
                even on short viewports where they'd otherwise collide. */}
            <div className="flex-1 min-h-[40px]" />

            <div className="pb-[30px]">
              <Hero
                title={heroTitle}
                titleKey={heroKey}
                showTagline={!showPayPalDE && !showPayPal && !showMeta && !showSolo && !showSutter && !showDoorDash}
              />
            </div>

            {/* PayPal Germany rollover panel */}
            <AnimatePresence>
              {showPayPalDE && (
                <motion.div
                  key="paypalde-panel"
                  className="absolute top-[120px] right-[69px] z-[5] flex items-center gap-[40px]"
                  initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-[350px] shrink-0"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, delay: 0.25 }}
                  >
                    <div className="flex flex-col gap-[26px] items-end">
                      <div className="text-right">
                        <p className="text-white font-normal leading-none font-serif" style={{ fontSize: "58px" }}>$46.7M</p>
                        <p className="text-white/70 text-[18px] font-light mt-[0.48px]">iRev average annually</p>
                      </div>
                      <p className="text-white/80 text-[19px] font-light leading-[24px] text-right">
                        Germany&rsquo;s credit-cautious culture required products built
                        around control and responsible borrowing: pay after inspecting
                        an order, or spread higher-cost purchases across flexible
                        installments.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="w-[350px] shrink-0"
                    initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    exit={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image src={paypalDeRollover} alt="PayPal Germany checkout screen" className="w-full h-auto" priority />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* PayPal rollover panel */}
            <AnimatePresence>
              {showPayPal && (
                <motion.div
                  key="paypal-panel"
                  className="absolute top-[139px] right-[69px] z-[5] flex items-center gap-[40px]"
                  initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-[350px] shrink-0"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, delay: 0.25 }}
                  >
                    <div className="flex flex-col gap-[26px] items-end">
                      <div className="text-right">
                        <p className="text-white font-normal leading-none font-serif" style={{ fontSize: "58px" }}>208%</p>
                        <p className="text-white/70 text-[18px] font-light mt-[0.48px]">Increase in conversion</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-normal leading-none font-serif" style={{ fontSize: "58px" }}>$598M/mo.</p>
                        <p className="text-white/70 text-[18px] font-light mt-[0.48px]">Trending total purchase volume</p>
                      </div>
                      <p className="text-white/80 text-[19px] font-light leading-[24px] text-right">
                        Led the design strategy for a CEO-prioritized PayPal initiative
                        to optimize 6 credit products across the United States and United
                        Kingdom, improving conversion, total purchase volume, and revenue
                        across the full portfolio.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="w-[350px] shrink-0"
                    initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    exit={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image src={paypal1Rollover} alt="PayPal 1" className="w-full h-auto" priority />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Meta rollover panel */}
            <AnimatePresence>
              {showMeta && (
                <motion.div
                  key="meta-panel"
                  className="absolute top-[148px] right-[69px] z-[5] flex items-center gap-[40px]"
                  initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-[350px] shrink-0"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, delay: 0.25 }}
                  >
                    <div className="flex flex-col gap-[26px] items-end">
                      <div className="text-right">
                        <p className="text-white font-normal leading-none font-serif" style={{ fontSize: "58px" }}>61%</p>
                        <p className="text-white/70 text-[18px] font-light mt-[0.48px]">Increase in conversion</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-normal leading-none font-serif" style={{ fontSize: "58px" }}>$2.3/mo.</p>
                        <p className="text-white/70 text-[18px] font-light mt-[0.48px]">Average savings</p>
                      </div>
                      <p className="text-white/80 text-[19px] font-light leading-[24px] text-right">
                        Increased high-spend advertiser adoption by optimizing banner
                        messaging and placement, simplifying the flow (9 → 3 screens)
                        to lift conversion from 32% to 93%, and enabling automatic
                        Monthly Invoicing attachment.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="w-[536px] h-[394px] shrink-0 rounded-[30px] overflow-hidden"
                    initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    exit={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image src={metaRollover} alt="Meta" className="w-full h-full object-cover" priority />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Solo rollover panel */}
            <AnimatePresence>
              {showSolo && (
                <motion.div
                  key="solo-panel"
                  className="absolute top-[143px] right-[93px] z-[5] flex items-center gap-[40px]"
                  initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-[350px] shrink-0"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, delay: 0.25 }}
                  >
                    <div className="flex flex-col gap-[26px] items-end">
                      <div className="text-right">
                        <p className="text-white font-normal leading-none font-serif" style={{ fontSize: "58px" }}>480 hrs</p>
                        <p className="text-white/70 text-[18px] font-light mt-[0.48px]">Savings annually</p>
                      </div>
                      <p className="text-white/80 text-[19px] font-light leading-[24px] text-right">
                        Designed and developed an end-to-end mobile app that
                        automates daily school activity reporting, gives parents
                        real-time visibility into their child&apos;s day, and
                        generates a comprehensive end-of-day summary of key
                        events, activities, and observations. What once took
                        hours of manual work can now be completed in seconds,
                        with greater consistency, clarity, and impact.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="w-[290px] h-[466px] shrink-0 rounded-[30px] overflow-hidden"
                    initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    exit={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image src={soloPhoneWithApp} alt="Solo" className="w-full h-full object-cover" priority />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Sutter Health rollover panel */}
            <AnimatePresence>
              {showSutter && (
                <motion.div
                  key="sutter-panel"
                  className="absolute top-[143px] right-[69px] z-[5] flex items-center gap-[40px]"
                  initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-[438px] shrink-0"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, delay: 0.25 }}
                  >
                    <p className="text-white/80 text-[19px] font-light leading-[24px] text-right">
                      For this design exercise, I created an end-to-end patient
                      portal concept for a leadership proposal, focused on
                      reducing clutter and prioritizing essential patient
                      tasks. Desktop research and persona jobs-to-be-done
                      informed a streamlined experience for accessing care.
                    </p>
                  </motion.div>

                  <motion.div
                    className="w-[367px] h-[504px] shrink-0 rounded-[30px] overflow-hidden"
                    initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    exit={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image src={patientAppRollover} alt="Sutter Health patient portal app" className="w-full h-full object-cover" priority />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* DoorDash Dashboard rollover panel */}
            <AnimatePresence>
              {showDoorDash && (
                <motion.div
                  key="doordash-panel"
                  className="absolute top-[148px] right-[69px] z-[5] flex items-center gap-[40px]"
                  initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-[370px] shrink-0"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, delay: 0.25 }}
                  >
                    <p className="text-white/80 text-[19px] font-light leading-[24px] text-right">
                      This self-initiated concept reimagines a traditional DoorDash dashboard around
                      <br />
                      the jobs-to-be-done of Marketplace Operations, Merchant Success, and Growth &amp; Finance teams &mdash; reducing friction across their daily workflows.
                    </p>
                  </motion.div>

                  <motion.div
                    className="w-[672px] h-[419px] shrink-0 rounded-[30px] overflow-hidden"
                    initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    exit={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image src={doorDashRollover} alt="DoorDash Dashboard" className="w-full h-full object-cover" priority />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────
          MOBILE + TABLET (<1024px) — purpose-built layout
         ────────────────────────────────────────────────────────────── */}
      <div className="lg:hidden relative min-h-[100svh] bg-black text-white overflow-x-hidden">
        <LiquidMetalBackground />

        <header className="relative z-20 flex items-center justify-between px-5 pt-5 pb-3 sm:px-6 sm:pt-6">
          <button
            type="button"
            onClick={() => setResumeOpen(true)}
            className="rounded-full border border-transparent bg-[#484848] px-4 py-2.5 text-sm font-normal leading-none whitespace-nowrap text-white active:scale-[0.98] transition-all duration-150"
          >
            Resume
          </button>
          <Logo />
        </header>

        <main className="relative z-10 flex flex-col gap-10 sm:gap-14 px-5 sm:px-6 pt-6 pb-16">
          {/* Hero — clamped from 44 → 64 */}
          <section className="flex flex-col gap-5">
            <h1
              className="text-white font-serif leading-[0.96] tracking-[-0.015em]"
              style={{ fontSize: "clamp(40px, 11vw, 72px)" }}
            >
              Proven Experience + AI
              <br />
              = Fast Tracked Business Goals
            </h1>
            <p className="text-white/85 font-light font-sans text-base sm:text-lg leading-snug max-w-[34ch]">
              In the age of AI-assisted design, experience is what turns fast output into
              thoughtful, user-centered products.
            </p>
          </section>

          {/* Selected work — stacked, tap-friendly cards */}
          <section className="flex flex-col gap-4 sm:gap-5">
            <p className="text-white/60 text-xs uppercase tracking-[0.18em] font-sans">
              Selected work
            </p>
            <ul className="flex flex-col gap-4 sm:gap-5">
              {MOBILE_CARDS.map((card, i) => (
                <li key={card.id}>
                  <Link
                    href={card.href}
                    className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm active:scale-[0.99] transition-transform duration-150"
                  >
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-black/40">
                      <Image
                        src={card.image}
                        alt={card.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 720px"
                        className="object-cover"
                        style={{ objectPosition: card.objectPosition }}
                        priority={i < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute left-5 top-5 rounded-full bg-black/60 px-3 py-1 text-xs text-white/90 backdrop-blur-md">
                        {card.label}
                      </div>
                    </div>
                    <div className="flex items-end justify-between gap-4 p-5 sm:p-6">
                      <div className="min-w-0 flex-1">
                        <p className="text-white/55 text-[11px] uppercase tracking-[0.18em] font-sans">
                          {card.eyebrow}
                        </p>
                        <p className="mt-1.5 text-white text-lg sm:text-xl font-light font-sans leading-snug">
                          {card.title}
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-white font-serif leading-none text-3xl sm:text-4xl">
                          {card.metric}
                        </p>
                        <p className="mt-1 text-white/55 text-[10px] uppercase tracking-[0.15em] font-sans max-w-[12ch]">
                          {card.metricLabel}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Footer */}
          <footer className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/60 font-sans">
            <a
              href="mailto:valderramadesign@gmail.com"
              className="text-white/90 underline-offset-4 hover:underline"
            >
              valderramadesign@gmail.com
            </a>
            <p>San Mateo, CA · US Citizen</p>
          </footer>
        </main>

        {/* Mobile resume sheet — full-screen */}
        <AnimatePresence>
          {resumeOpen && (
            <>
              <motion.div
                key="resume-mobile-scrim"
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setResumeOpen(false)}
              />
              <motion.div
                key="resume-mobile-sheet"
                className="fixed inset-0 z-50 flex flex-col bg-[#fcf5e0]"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center justify-end px-5 py-3 border-b border-[#e0d3a3] bg-[#f0e4b8]">
                  <button
                    type="button"
                    onClick={() => setResumeOpen(false)}
                    className="rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-sm text-black"
                  >
                    Close
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <ResumePanel />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

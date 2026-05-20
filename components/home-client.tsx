"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import LiquidMetalBackground from "@/components/ui/liquid-metal-background";
import Header from "@/components/layout/header";
import LeftNav from "@/components/layout/left-nav";
import Hero from "@/components/sections/hero";
import ResumePanel from "@/components/ui/resume-panel";
import paypal1Rollover from "@/components/images/PayPal1_RolloverImage_WithBackground.png";
import metaRollover from "@/components/images/Monthly invoicing Images/MontlyInvoicingHeroScreen_OnTable.png";
import soloPhoneWithApp from "@/components/images/Teacher'sApp/PhoneWithApp_Rollover.png";

export default function HomeClient() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const showPayPal = hoveredProject === "paypal";
  const showMeta   = hoveredProject === "meta";
  const showSolo   = hoveredProject === "solo";

  useEffect(() => {
    const imgs = [paypal1Rollover.src, metaRollover.src, soloPhoneWithApp.src];
    imgs.forEach((src) => { const img = new window.Image(); img.src = src; });
  }, []);

  const heroTitle = showPayPal
    ? "Reducing Friction"
    : showMeta
    ? <>Designing Onboarding<br />That Drives Adoption</>
    : showSolo
    ? "Rapid App Innovation"
    : undefined;

  const heroKey = showPayPal ? "paypal" : showMeta ? "meta" : showSolo ? "solo" : "default";

  return (
    <div className="flex flex-row min-h-screen overflow-x-hidden">
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
        {showPayPal ? (
          <div className="absolute inset-0 z-[-10] bg-black">
            <video
              src="/WomanPhoneShopping.mp4"
              autoPlay
              loop
              muted
              playsInline
              suppressHydrationWarning
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
          </div>
        ) : showMeta ? (
          <div className="absolute inset-0 z-[-10] bg-black">
            <video
              src="/CreditCardDeclineMOV.mp4"
              autoPlay
              loop
              muted
              playsInline
              suppressHydrationWarning
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          </div>
        ) : showSolo ? (
          <div className="absolute inset-0 z-[-10] bg-black">
            <video
              src="/videos/TeacherRecordingActivity/TeacherRecordingActivity.mp4"
              autoPlay
              loop
              muted
              playsInline
              suppressHydrationWarning
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          </div>
        ) : (
          <LiquidMetalBackground />
        )}

        {/* Page layout */}
        <main className="relative z-10 flex flex-col justify-between p-[24px] h-screen">
          {/* Top group: header + nav — nav stays anchored to header regardless of Hero height */}
          <div className="flex flex-col">
            <Header
              onResumeToggle={() => setResumeOpen((v) => !v)}
              resumeOpen={resumeOpen}
            />
            <div className="relative w-full mt-[clamp(80px,18vh,180px)]">
              <LeftNav onHover={setHoveredProject} />
            </div>
          </div>

          {/* Bottom group: hero + 30px breathing room */}
          <div className="pb-[30px]">
            <Hero
              title={heroTitle}
              titleKey={heroKey}
              showTagline={!showPayPal && !showMeta && !showSolo}
            />
          </div>

          {/* PayPal rollover panel */}
          <AnimatePresence>
            {showPayPal && (
              <motion.div
                key="paypal-panel"
                className="absolute top-[139px] right-[69px] z-[5] flex items-center gap-[50px]"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-[438px] shrink-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, delay: 0.25 }}
                >
                  <div className="flex flex-col gap-[32px] items-end">
                    <div className="text-right">
                      <p className="text-white font-normal leading-none font-serif" style={{ fontSize: "72px" }}>
                        208%
                      </p>
                      <p className="text-white/70 text-[18px] font-light mt-2">Increase in conversion</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-normal leading-none font-serif" style={{ fontSize: "72px" }}>
                        $598M/mo.
                      </p>
                      <p className="text-white/70 text-[18px] font-light mt-2">Trending total purchase volume</p>
                    </div>
                    <p className="text-white/80 text-[24px] font-light leading-[30px] text-right">
                      Partnering with the Checkout team, we collapsed the three-page
                      Pay in 4 application into a single screen and surfaced key
                      &apos;how it works&apos; details earlier in the flow, lifting
                      conversion and overall purchase volume.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="w-[438px] shrink-0"
                  initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                  animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  exit={{ clipPath: "inset(100% 0% 0% 0%)" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={paypal1Rollover}
                    alt="PayPal 1"
                    className="w-full h-auto"
                    priority
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Meta rollover panel — panel at left:586px in 1838px frame → right:~302px */}
          <AnimatePresence>
            {showMeta && (
              <motion.div
                key="meta-panel"
                className="absolute top-[208px] right-[69px] z-[5] flex items-center gap-[50px]"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-[438px] shrink-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, delay: 0.25 }}
                >
                  <div className="flex flex-col gap-[32px] items-end">
                    <div className="text-right">
                      <p className="text-white font-normal leading-none font-serif" style={{ fontSize: "72px" }}>
                        61%
                      </p>
                      <p className="text-white/70 text-[18px] font-light mt-2">Increase in conversion</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-normal leading-none font-serif" style={{ fontSize: "72px" }}>
                        $2.3/mo.
                      </p>
                      <p className="text-white/70 text-[18px] font-light mt-2">Average savings</p>
                    </div>
                    <p className="text-white/80 text-[24px] font-light leading-[30px] text-right">
                      Increased high-spend advertiser adoption by optimizing banner
                      messaging and placement, simplifying the flow (9 → 3 screens)
                      to lift conversion from 32% to 93%, and enabling automatic
                      Monthly Invoicing attachment.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="w-[670px] h-[492px] shrink-0 rounded-[30px] overflow-hidden"
                  initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                  animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  exit={{ clipPath: "inset(100% 0% 0% 0%)" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={metaRollover}
                    alt="Meta"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Solo rollover panel */}
          <AnimatePresence>
            {showSolo && (
              <motion.div
                key="solo-panel"
                className="absolute top-[143px] right-[93px] z-[5] flex items-center gap-[50px]"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-[438px] shrink-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, delay: 0.25 }}
                >
                  <div className="flex flex-col gap-[32px] items-end">
                    <div className="text-right">
                      <p className="text-white font-normal leading-none font-serif" style={{ fontSize: "72px" }}>
                        257%
                      </p>
                      <p className="text-white/70 text-[18px] font-light mt-2">Increase in efficiency</p>
                    </div>
                    <p className="text-white/80 text-[24px] font-light leading-[30px] text-right">
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
                  className="w-[362px] h-[582px] shrink-0 rounded-[30px] overflow-hidden"
                  initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                  animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  exit={{ clipPath: "inset(100% 0% 0% 0%)" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={soloPhoneWithApp}
                    alt="Solo"
                    className="w-full h-full object-cover"
                    priority
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

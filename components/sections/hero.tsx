"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/lib/content";

type HeroProps = {
  title?: React.ReactNode;
  titleKey?: string;
  showSupporting?: boolean;
};

export default function Hero({ title, titleKey, showSupporting = true }: HeroProps) {
  const content = title ?? SITE.name;

  return (
    <div className="flex items-end justify-between gap-[48px] w-full shrink-0">
      <AnimatePresence mode="wait">
        <motion.h1
          key={titleKey ?? (typeof title === "string" ? title : "default")}
          className="flex-1 min-w-0 text-white leading-[0.96] tracking-[-0.015em] not-italic font-serif"
          style={{ fontSize: "77px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {content}
        </motion.h1>
      </AnimatePresence>

      {/* Kept mounted (opacity-only fade) so the column it occupies stays
          reserved and the headline beside it doesn't reflow as project
          rollovers, which use this side of the band, toggle it. */}
      <motion.p
        className="text-white/80 font-light font-sans text-[19px] leading-[26px] tracking-[-0.01em] text-right w-[480px] shrink-0"
        animate={{ opacity: showSupporting ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        aria-hidden={!showSupporting}
      >
        {SITE.supporting} {SITE.practice}
      </motion.p>
    </div>
  );
}

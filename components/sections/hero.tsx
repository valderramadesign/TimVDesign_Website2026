"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/lib/content";

type HeroProps = {
  title?: React.ReactNode;
  titleKey?: string;
};

export default function Hero({ title, titleKey }: HeroProps) {
  const content = title ?? SITE.homeName;

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

      {/* The supporting copy moved up beside the left nav; this column stays
          reserved so the headline keeps its measure and the rollover panels
          that use this side of the band have room. */}
      <div aria-hidden className="w-[480px] shrink-0" />
    </div>
  );
}

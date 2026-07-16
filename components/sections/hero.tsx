"use client";

import { motion, AnimatePresence } from "framer-motion";

type HeroProps = {
  title?: React.ReactNode;
  titleKey?: string;
  showTagline?: boolean;
};

export default function Hero({ title, titleKey, showTagline = true }: HeroProps) {
  const content = title ?? (
    <>
      Proven Experience + AI =
      <br />
      Real Business Results.
    </>
  );

  return (
    <div className="flex flex-col gap-6 w-full shrink-0">
      <div className="flex items-center justify-center w-full">
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
      </div>

      <AnimatePresence>
        {showTagline && (
          <motion.div
            className="flex flex-col gap-6 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-end w-full">
              <p className="text-white font-light font-sans text-2xl leading-7 tracking-[-0.015em] w-[370px] shrink-0">
                In the age of AI-assisted design, experience is what turns fast output into
                thoughtful, user-centered products.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type AnimatedImpactRowProps = {
  label: string;
  todayPct: number;
  futurePct: number;
  todayLabel: string;
  futureLabel: string;
  sublabel?: string;
};

export function AnimatedImpactRow({
  label,
  todayPct,
  futurePct,
  todayLabel,
  futureLabel,
  sublabel,
}: AnimatedImpactRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <div ref={ref} className="grid grid-cols-[110px_1fr] lg:grid-cols-[280px_1fr] gap-4 lg:gap-12 items-center">
      <h3 className="font-[family-name:var(--font-league-spartan)] text-[clamp(18px,4.5vw,40px)] lg:text-[40px] leading-[1.1] font-normal whitespace-pre-line">
        {label}
      </h3>
      <div>
        <div className="relative h-[56px] lg:h-[89px] w-full rounded-[14px] lg:rounded-[20px] bg-[rgba(217,217,217,0.2)]">
          {/* inner area with inset on left, top, bottom */}
          <div className="absolute left-[6px] lg:left-[10px] top-[6px] lg:top-[10px] bottom-[6px] lg:bottom-[10px] right-0">
            <div
              className="absolute left-0 top-0 h-full bg-[#230808] rounded-l-[10px] lg:rounded-l-[20px] flex items-center px-3 lg:px-6 overflow-hidden"
              style={{ width: `calc(${todayPct}% + 15px)` }}
            >
              <span className="font-serif font-normal text-base lg:text-[40px] text-white leading-none whitespace-nowrap">
                {todayLabel}
              </span>
            </div>
            <motion.div
              className="absolute top-0 h-full bg-[#cef252] rounded-[10px] lg:rounded-[20px] flex items-center justify-end pr-3 lg:pr-6 overflow-hidden"
              style={{ left: `${todayPct}%` }}
              initial={{ width: 0 }}
              animate={{ width: inView ? `${futurePct - todayPct}%` : 0 }}
              transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
            >
              <span className="font-serif font-normal text-base lg:text-[40px] text-black leading-none whitespace-nowrap">
                {futureLabel}
              </span>
            </motion.div>
          </div>
        </div>
        {sublabel && (
          <p
            className="mt-2 lg:mt-3 text-right font-serif font-normal text-sm lg:text-[24px] text-[#cef252] tracking-[-0.24px]"
            style={{ width: `calc(10px + ${futurePct}%)` }}
          >
            {sublabel}
          </p>
        )}
      </div>
    </div>
  );
}

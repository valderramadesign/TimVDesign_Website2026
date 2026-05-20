"use client";

import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export type ActivityFlowItem = {
  id: string | number;
  src: StaticImageData;
  alt: string;
};

type Props = {
  items: ActivityFlowItem[];
  title?: string;
  subtitle?: string;
  autoAdvance?: boolean;
  intervalMs?: number;
  className?: string;
};

function wrapIndex(n: number, len: number) {
  if (len <= 0) return 0;
  return ((n % len) + len) % len;
}

function signedOffset(i: number, active: number, len: number) {
  const raw = i - active;
  if (len <= 1) return raw;
  const alt = raw > 0 ? raw - len : raw + len;
  return Math.abs(alt) < Math.abs(raw) ? alt : raw;
}

export function ActivityFlowCarousel({
  items,
  title,
  subtitle,
  autoAdvance = true,
  intervalMs = 4000,
  className,
}: Props) {
  const reduceMotion = useReducedMotion();
  const len = items.length;
  const [active, setActive] = React.useState(0);
  const [hovering, setHovering] = React.useState(false);

  const prev = React.useCallback(
    () => setActive((a) => wrapIndex(a - 1, len)),
    [len],
  );
  const next = React.useCallback(
    () => setActive((a) => wrapIndex(a + 1, len)),
    [len],
  );

  React.useEffect(() => {
    if (!autoAdvance || reduceMotion || hovering || len < 2) return;
    const id = window.setInterval(next, Math.max(1500, intervalMs));
    return () => window.clearInterval(id);
  }, [autoAdvance, intervalMs, hovering, reduceMotion, len, next]);

  if (!len) return null;

  // Phone aspect ~ 9:19.5 — fix a card size and let CSS scale stage on small screens.
  const cardWidth = 320;
  const cardHeight = 680;

  return (
    <div
      className={cn("w-full", className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {(title || subtitle) && (
        <div
          className="mx-auto mb-[56px] max-w-[1200px] px-[24px] text-center"
          style={{ fontFamily: "var(--font-league-spartan)" }}
        >
          {subtitle && (
            <p className="text-[18px] font-light leading-none text-white/70">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="mt-[14px] font-serif text-[64px] leading-[1.05] tracking-[-0.015em] text-white">
              {title}
            </h2>
          )}
        </div>
      )}

      <div
        className="relative w-full"
        style={{ height: cardHeight + 80 }}
        role="region"
        aria-roledescription="carousel"
        aria-label={title || "Activity flow"}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") prev();
          if (e.key === "ArrowRight") next();
        }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: "1400px" }}
        >
          <AnimatePresence initial={false}>
            {items.map((item, i) => {
              const off = signedOffset(i, active, len);
              const abs = Math.abs(off);
              if (abs > 2) return null;

              const isActive = abs === 0;
              const x = off * (cardWidth * 0.62);
              const scale = isActive ? 1 : 0.78 - (abs - 1) * 0.08;
              const rotateY = off === 0 ? 0 : off > 0 ? -22 : 22;
              const z = -abs * 160;
              const blurPx = isActive ? 0 : Math.min(10, 4 + abs * 3);
              const opacity = abs <= 1 ? 1 : 0.35;
              const zIndex = 100 - abs;

              return (
                <motion.button
                  type="button"
                  key={item.id}
                  onClick={() => setActive(i)}
                  aria-label={`Show ${item.alt}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "absolute will-change-transform select-none",
                    "rounded-[36px] overflow-hidden",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                  )}
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    zIndex,
                    transformStyle: "preserve-3d",
                    cursor: isActive ? "default" : "pointer",
                  }}
                  initial={reduceMotion ? false : { opacity: 0, x, scale, rotateY }}
                  animate={{
                    opacity,
                    x,
                    scale,
                    rotateY,
                    filter: `blur(${blurPx}px)`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 30,
                    mass: 0.9,
                  }}
                >
                  <div
                    className="relative h-full w-full"
                    style={{ transform: `translateZ(${z}px)` }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="320px"
                      className="object-cover"
                      draggable={false}
                      priority={isActive}
                    />
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous screen"
          className="absolute left-[24px] top-1/2 z-[200] -translate-y-1/2 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-colors hover:bg-white/10 hover:border-white/30"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next screen"
          className="absolute right-[24px] top-1/2 z-[200] -translate-y-1/2 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-colors hover:bg-white/10 hover:border-white/30"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-[32px] flex items-center justify-center gap-[10px]">
        {items.map((it, idx) => {
          const on = idx === active;
          return (
            <button
              key={it.id}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`Go to screen ${idx + 1}`}
              className={cn(
                "h-[8px] rounded-full transition-all duration-300",
                on ? "w-[28px] bg-white" : "w-[8px] bg-white/30 hover:bg-white/50",
              )}
            />
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

/* ── Before → after, on scroll ───────────────────────────────────────────

   The two device rows share one slot and dissolve into each other as the
   reader scrolls: five screens become three, in place. The slot pins near
   the top of the viewport for the length of the exchange, so the swap
   happens where the eye already is rather than racing past, and progress
   is read straight off scroll position — scrolling back up runs it
   backwards.

   Below lg, where the rows are swipeable filmstrips, and whenever reduced
   motion is asked for, the rows simply stack and both stay legible. That
   stacked layout is also the server render, so the swap is an enhancement
   and never a dependency. */

/** Scrub length, in viewport heights. The pin runs for exactly SCRUB,
    which is what makes progress a clean 0→1. Kept short: every pixel the
    page refuses to move is a pixel the reader has to spend, so the hold
    lasts the exchange and not a moment longer. */
const SCRUB = 0.25;

/* One shared parameter drives both rows in opposite directions, so their
   opacities always sum to one and the row never dims to nothing mid-swap.
   The exchange starts the moment the pin catches — the row is already
   dissolving as it settles — and ends as it releases, so there is no
   stretch of held page with nothing happening on it. */
const SWAP_START = 0;
const SWAP_END = 1;

function cx(...parts: Array<string | false | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

const clamp01 = (value: number) => (value < 0 ? 0 : value > 1 ? 1 : value);
const smooth = (p: number) => p * p * (3 - 2 * p);

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Crossfades two rows of devices in a single slot as the page scrolls.
 * `before` and `after` are rendered upstream, so the images stay on the
 * server side of the boundary.
 */
export default function BeforeAfterSwap({
  before,
  after,
  className,
  pinTop = "10vh",
}: {
  before: ReactNode;
  after: ReactNode;
  className?: string;
  /** Any CSS length: where the row parks. Read back off the pinned box
      rather than parsed here, so `calc()` and custom properties work. */
  pinTop?: string;
}) {
  const [live, setLive] = useState(false);
  const track = useRef<HTMLDivElement | null>(null);
  const pin = useRef<HTMLDivElement | null>(null);
  const beforeRow = useRef<HTMLDivElement | null>(null);
  const afterRow = useRef<HTMLDivElement | null>(null);

  const paint = useCallback(() => {
    const node = track.current;
    const pinned = pin.current;
    if (!node || !pinned) return;
    const viewport = window.innerHeight;
    const offset = parseFloat(getComputedStyle(pinned).top) || 0;
    /* The track's top tells us where we are in the pin: it reaches the
       offset as the pin engages and offset − SCRUB as it lets go. */
    const p = clamp01((offset - node.getBoundingClientRect().top) / (SCRUB * viewport));
    const s = smooth(clamp01((p - SWAP_START) / (SWAP_END - SWAP_START)));

    const leaving = beforeRow.current;
    if (leaving) {
      leaving.style.opacity = (1 - s).toFixed(3);
      /* A little lift on the way out, so the held page still reads as
         motion rather than as a page that has stopped responding. The
         arriving row stays put: it is what the reader lands on. */
      leaving.style.transform = `translateY(${(-14 * s).toFixed(2)}px) scale(${(1 - 0.02 * s).toFixed(4)})`;
      leaving.style.pointerEvents = s > 0.5 ? "none" : "";
    }
    const arriving = afterRow.current;
    if (arriving) {
      arriving.style.opacity = s.toFixed(3);
      arriving.style.transform = `scale(${(0.98 + 0.02 * s).toFixed(4)})`;
      arriving.style.pointerEvents = s > 0.5 ? "" : "none";
    }
  }, []);

  const clear = useCallback(() => {
    for (const node of [beforeRow.current, afterRow.current]) {
      if (!node) continue;
      node.style.opacity = "";
      node.style.transform = "";
      node.style.pointerEvents = "";
    }
  }, []);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setLive(wide.matches && !still.matches);
    sync();
    wide.addEventListener("change", sync);
    still.addEventListener("change", sync);
    return () => {
      wide.removeEventListener("change", sync);
      still.removeEventListener("change", sync);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!live) {
      clear();
      return;
    }
    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        paint();
      });
    };
    paint();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [clear, live, paint]);

  /* Each row scales about the corner it is aligned to, so the 2% never
     drifts an edge the reader is tracking. */
  const slot = live ? "[grid-area:1/1] will-change-[opacity,transform]" : undefined;

  return (
    <div ref={track} className={cx("relative", className)}>
      <div ref={pin} className={live ? "sticky" : undefined} style={live ? { top: pinTop } : undefined}>
        {/* Stacked into one cell once the swap is live. The leaving row
            hangs from the top of the cell, so its opening line parks under
            the bar and stays there; the arriving row sits on the floor of
            the cell, so whatever follows the swap keeps its distance from
            the screens rather than from a taller row that has gone. At the
            widths this was drawn for the two coincide and the screens share
            a baseline through the exchange. */}
        <div className={live ? "grid items-start" : "flex flex-col gap-12 md:gap-[80px]"}>
          <div ref={beforeRow} className={cx(slot, live && "origin-top-left")}>
            {before}
          </div>
          <div
            ref={afterRow}
            className={cx(slot, live && "self-end origin-bottom-right")}
            style={live ? { opacity: 0 } : undefined}
          >
            {after}
          </div>
        </div>
      </div>
      {/* The scrub track has to be a sibling rather than padding on the
          parent: a sticky box is held inside its containing block's content
          box, and padding sits outside it, which would leave the pin
          nowhere to travel. */}
      {live ? <div aria-hidden style={{ height: `${SCRUB * 100}vh` }} /> : null}
    </div>
  );
}

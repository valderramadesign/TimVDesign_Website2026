"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Pointer travel before a press turns into a drag, so short clicks still select text. */
const DRAG_THRESHOLD = 4;
/** Fling ceiling in scroll px per ms. */
const MAX_VELOCITY = 4;
/** Per-frame decay at 60fps, normalised to real elapsed time. */
const FRICTION = 0.94;

type DragState = {
  active: boolean;
  moved: boolean;
  startX: number;
  startScroll: number;
  lastX: number;
  lastT: number;
  velocity: number;
};

const IDLE: DragState = {
  active: false,
  moved: false,
  startX: 0,
  startScroll: 0,
  lastX: 0,
  lastT: 0,
  velocity: 0,
};

type Props = {
  children: React.ReactNode;
  className?: string;
  label: string;
};

/**
 * Horizontal scroller that can be dragged with the mouse, with a short inertial
 * glide on release. Touch and trackpad keep their native scrolling; keyboard
 * users get the region's built-in arrow-key scrolling.
 */
export default function DragScroll({ children, className = "", label }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef<DragState>({ ...IDLE });
  const raf = useRef<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const [scrollable, setScrollable] = useState(false);

  const stopInertia = useCallback(() => {
    if (raf.current !== null) {
      cancelAnimationFrame(raf.current);
      raf.current = null;
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setScrollable(el.scrollWidth > el.clientWidth + 1);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => {
      observer.disconnect();
      stopInertia();
    };
  }, [stopInertia]);

  const glide = useCallback((initial: number) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let velocity = Math.max(-MAX_VELOCITY, Math.min(MAX_VELOCITY, initial));
    if (Math.abs(velocity) < 0.05) return;

    let last = performance.now();
    const step = (now: number) => {
      const el = ref.current;
      if (!el) return;
      const dt = Math.min(now - last, 64);
      last = now;
      velocity *= Math.pow(FRICTION, dt / 16.667);
      if (Math.abs(velocity) < 0.02) {
        raf.current = null;
        return;
      }
      const before = el.scrollLeft;
      el.scrollLeft = before + velocity * dt;
      // Bail out once the rail is pinned against either end.
      if (el.scrollLeft === before) {
        raf.current = null;
        return;
      }
      raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse" || e.button !== 0) return;
    if (el.scrollWidth <= el.clientWidth) return;
    stopInertia();
    drag.current = {
      active: true,
      moved: false,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      lastX: e.clientX,
      lastT: performance.now(),
      velocity: 0,
    };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    const state = drag.current;
    if (!el || !state.active) return;

    const dx = e.clientX - state.startX;
    if (!state.moved) {
      if (Math.abs(dx) < DRAG_THRESHOLD) return;
      state.moved = true;
      setDragging(true);
      el.setPointerCapture(e.pointerId);
      // A press that became a drag should not leave a stray selection behind.
      window.getSelection()?.removeAllRanges();
    }

    e.preventDefault();
    el.scrollLeft = state.startScroll - dx;

    const now = performance.now();
    const dt = now - state.lastT;
    if (dt > 0) {
      state.velocity = state.velocity * 0.7 + ((state.lastX - e.clientX) / dt) * 0.3;
      state.lastX = e.clientX;
      state.lastT = now;
    }
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const state = drag.current;
    if (!state.active) return;
    const el = ref.current;
    if (el?.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    if (state.moved) {
      setDragging(false);
      // Stale velocity means the pointer paused before release — no fling.
      if (performance.now() - state.lastT < 80) glide(state.velocity);
    }
    drag.current = { ...IDLE };
  };

  return (
    <div
      ref={ref}
      role="region"
      aria-label={`${label} — drag or scroll horizontally`}
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onWheel={stopInertia}
      className={`w-full overflow-x-auto overscroll-x-contain ${
        scrollable ? (dragging ? "cursor-grabbing select-none" : "cursor-grab") : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

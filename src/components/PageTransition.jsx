import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

// Mirrors Metalab's PageTransitionPortal:
// Four edge rectangles + four rounded SVG corner pieces slide in to cover the
// screen between page navigations, then slide back out.
export default function PageTransition() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const [phase, setPhase] = useState("idle"); // idle | covering | uncovering

  useEffect(() => {
    if (prevPath.current === location.pathname) return;
    prevPath.current = location.pathname;

    setPhase("covering");
    const t1 = setTimeout(() => setPhase("uncovering"), 350);
    const t2 = setTimeout(() => setPhase("idle"), 750);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [location.pathname]);

  const active = phase !== "idle";

  return (
    <div className={`pt-portal${active ? " pt-portal--active" : ""}${phase === "uncovering" ? " pt-portal--uncovering" : ""}`} aria-hidden="true">
      {/* Four edge panels */}
      <div className="pt-rect pt-rect--top" />
      <div className="pt-rect pt-rect--right" />
      <div className="pt-rect pt-rect--bottom" />
      <div className="pt-rect pt-rect--left" />

      {/* Four corner SVG pieces — create a rounded-rectangle window mask */}
      {/* Top-left */}
      <div className="pt-corner pt-corner--tl">
        <div className="pt-corner-inner">
          <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M500 0H0V500C0 223.858 223.858 0 500 0Z"
              fill="currentColor" />
          </svg>
        </div>
      </div>
      {/* Top-right */}
      <div className="pt-corner pt-corner--tr">
        <div className="pt-corner-inner">
          <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M500 500L500 0L0 0C276.142 0 500 223.858 500 500Z"
              fill="currentColor" />
          </svg>
        </div>
      </div>
      {/* Bottom-right */}
      <div className="pt-corner pt-corner--br">
        <div className="pt-corner-inner">
          <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M0 500L500 500L500 0C500 276.142 276.142 500 0 500Z"
              fill="currentColor" />
          </svg>
        </div>
      </div>
      {/* Bottom-left */}
      <div className="pt-corner pt-corner--bl">
        <div className="pt-corner-inner">
          <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M0 0L0 500L500 500C223.858 500 0 276.142 0 0Z"
              fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
}

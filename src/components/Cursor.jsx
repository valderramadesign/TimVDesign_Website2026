import { useEffect, useRef, useState } from "react";

// Mirrors Metalab's Cursor component:
// - SVG circle outline on link/button hover ("Hover" state)
// - SVG filled circle on [data-drag] elements ("Drag" state)
// - Two alternating text labels in a container
export default function Cursor() {
  const cursorRef = useRef(null);
  const [state, setState] = useState("default"); // default | hover | drag
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const onMove = (e) => {
      if (!visible) setVisible(true);
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const onOver = (e) => {
      const target = e.target;
      if (target.closest("[data-drag]")) {
        setState("drag");
      } else if (target.closest("a, button, [role='button']")) {
        setState("hover");
      } else {
        setState("default");
      }
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [visible]);

  // Only render on pointer-fine devices (desktop)
  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  const outlineR = state === "hover" ? 46 : 0;
  const filledR = state === "drag" ? 50 : 2;

  return (
    <span
      ref={cursorRef}
      className="cursor"
      data-state={state}
      aria-hidden="true"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* Text labels — "Hover" and "Drag" cycle based on state */}
      <span className="cursor-text-container">
        <span
          className="cursor-text"
          style={{ opacity: state === "hover" ? 1 : 0, transform: state === "hover" ? "translateY(0)" : "translateY(4px)" }}
        >
          Hover
        </span>
        <span
          className="cursor-text"
          style={{ opacity: state === "drag" ? 1 : 0, transform: state === "drag" ? "translateY(0)" : "translateY(4px)" }}
        >
          Drag
        </span>
      </span>

      {/* SVG circles */}
      <svg viewBox="0 0 100 100" className="cursor-svg">
        {/* Outline circle — appears on link hover */}
        <circle
          cx="50"
          cy="50"
          r={outlineR}
          strokeWidth="1"
          fill="transparent"
          stroke="white"
          className="cursor-circle-outline"
          style={{ transition: "r 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
        />
        {/* Filled circle — appears on drag hover */}
        <circle
          cx="50"
          cy="50"
          r={filledR}
          fill="white"
          className="cursor-circle-filled"
          style={{ transition: "r 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
        />
      </svg>
    </span>
  );
}

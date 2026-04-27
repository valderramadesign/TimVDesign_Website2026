import { useState, useEffect } from "react";

const LEFT_BOXES = Array.from({ length: 12 }, (_, i) => i + 1);
const RIGHT_BOXES = Array.from({ length: 12 }, (_, i) => i + 13);

function GridBox({ n, visible }) {
  return (
    <span
      className="grid-box"
      data-grid-box={n}
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.15s ease" }}
    >
      <span className="grid-corner grid-corner--tl" />
      <span className="grid-corner grid-corner--tr" />
      <span className="grid-corner grid-corner--bl" />
      <span className="grid-corner grid-corner--br" />
      <span className="grid-number">{n}</span>
    </span>
  );
}

export default function Preloader({ onComplete }) {
  const [visible, setVisible] = useState(new Set());
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timers = [];

    // Stagger each box appearing: 0–960ms (24 boxes × 40ms)
    for (let i = 0; i < 24; i++) {
      timers.push(
        setTimeout(() => {
          setVisible((prev) => new Set([...prev, i + 1]));
        }, i * 40)
      );
    }

    // All boxes visible → hold → begin exit at 2000ms
    timers.push(setTimeout(() => setExiting(true), 2000));

    // Fully gone at 2700ms
    timers.push(
      setTimeout(() => {
        setDone(true);
        onComplete?.();
      }, 2700)
    );

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (done) return null;

  return (
    <div className={`preloader${exiting ? " preloader--exiting" : ""}`}>
      {/* Name stamp — nearly transparent, like Metalab's LCP element */}
      <p className="preloader-lcp" aria-hidden>
        {"TOMAS\nVALDERRAMA\nTOMAS\nVALDERRAMA\nTOMAS\nVALDERRAMA"
          .split("\n")
          .map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
      </p>

      <div className="preloader-side preloader-side--left">
        {LEFT_BOXES.map((n) => (
          <GridBox key={n} n={n} visible={visible.has(n)} />
        ))}
      </div>

      <div className="preloader-side preloader-side--right">
        {RIGHT_BOXES.map((n) => (
          <GridBox key={n} n={n} visible={visible.has(n)} />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const SRC = "/videos/Intro/intro-montage.mp4";
const POSTER = "/videos/Intro/intro-montage-poster.jpg";

/**
 * Idle homepage background: a looping 16:9 montage cut from the case-study
 * footage and stills. Stays mounted while a project is hovered — only its
 * opacity changes — so the loop keeps its place instead of restarting.
 */
export default function IntroMontageBackground({ active }: { active: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (reducedMotion || !video) return;
    // canplay can fire either side of hydration, so seed from readyState and keep
    // an imperative listener — relying on the JSX handler alone can strand the
    // video at opacity 0 with the poster showing forever.
    const markReady = () => setReady(true);
    if (video.readyState >= 3) markReady();
    video.addEventListener("canplay", markReady);
    // Autoplay can be rejected before the user interacts; the poster covers that case.
    video.play().catch(() => {});
    return () => video.removeEventListener("canplay", markReady);
  }, [reducedMotion]);

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[-10] bg-black transition-opacity duration-500 ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* One shared opacity on the stack — layering two translucent copies would double-expose. */}
      <div className="absolute inset-0 opacity-40">
        {/* Poster sits underneath so the frame is never empty while the video buffers. */}
        <img src={POSTER} alt="" className="absolute inset-0 w-full h-full object-cover" />
        {!reducedMotion && (
          <video
            ref={videoRef}
            src={SRC}
            poster={POSTER}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            suppressHydrationWarning
            onCanPlay={() => setReady(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              ready ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
    </div>
  );
}

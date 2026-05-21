"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wasOutOfView = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          wasOutOfView.current = true;
        } else if (wasOutOfView.current) {
          wasOutOfView.current = false;
          video.currentTime = 0;
          video.play();
        }
      },
      { threshold: 0 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      suppressHydrationWarning
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

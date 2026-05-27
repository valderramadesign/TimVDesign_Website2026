"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import step1 from "@/components/videos/Pi4_Slideshow/SlideShowImages/Step 1.png";
import step2 from "@/components/videos/Pi4_Slideshow/SlideShowImages/Step 2.png";
import step3 from "@/components/videos/Pi4_Slideshow/SlideShowImages/Step 3.png";
import step4 from "@/components/videos/Pi4_Slideshow/SlideShowImages/Step 4.png";
import step5 from "@/components/videos/Pi4_Slideshow/SlideShowImages/Step 5.png";
import step6 from "@/components/videos/Pi4_Slideshow/SlideShowImages/Step 6.png";
import step7 from "@/components/videos/Pi4_Slideshow/SlideShowImages/Step 7.png";
import step8 from "@/components/videos/Pi4_Slideshow/SlideShowImages/Step 8.png";
import step9 from "@/components/videos/Pi4_Slideshow/SlideShowImages/Step 9.png";
import step10 from "@/components/videos/Pi4_Slideshow/SlideShowImages/Step 10.png";
import step11 from "@/components/videos/Pi4_Slideshow/SlideShowImages/Step 11.png";
import step12 from "@/components/videos/Pi4_Slideshow/SlideShowImages/Step 12.png";

const slides = [step1, step2, step3, step4, step5, step6, step7, step8, step9, step10, step11, step12];

export default function Pi4Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const delay = current === slides.length - 1 ? 5000 : 2000;
    const timeout = setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, delay);
    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <div className="absolute inset-0">
      {slides.map((slide, i) => (
        <Image
          key={i}
          src={slide}
          alt={`Step ${i + 1}`}
          fill
          className="object-cover"
          style={{ opacity: i === current ? 1 : 0, transition: "opacity 300ms ease-in-out" }}
          draggable={false}
          priority={i === 0}
        />
      ))}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import newFlow1 from "@/components/images/Monthly invoicing Images/Mi_New_Flow/New flow 1.png";
import newFlow2 from "@/components/images/Monthly invoicing Images/Mi_New_Flow/New flow 2.png";
import newFlow3 from "@/components/images/Monthly invoicing Images/Mi_New_Flow/New flow 3.png";
import newFlow4 from "@/components/images/Monthly invoicing Images/Mi_New_Flow/New flow 4.png";
import newFlow5 from "@/components/images/Monthly invoicing Images/Mi_New_Flow/New flow 5.png";

const slides = [newFlow1, newFlow2, newFlow3, newFlow4, newFlow5];

export default function MiNewFlowSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const delay = current === slides.length - 1 ? 6000 : 3000;
    const timeout = setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, delay);
    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: `${slides[0]!.width} / ${slides[0]!.height}` }}
    >
      {slides.map((slide, i) => (
        <Image
          key={i}
          src={slide}
          alt={`New flow screen ${i + 1}`}
          fill
          className="object-cover"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 0.8s ease-in-out",
          }}
          draggable={false}
          priority={i === 0}
        />
      ))}
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  direction?: "left" | "right";
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function ScrollFade({ children, direction = "left", once = false, className, style }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction === "left" ? -60 : 60 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

"use client";
import { ReactNode } from "react";
import { motion } from "motion/react";
import { FadeIn } from "utils";

interface Props {
  children: ReactNode;
  className?: string;
  position: "bottom" | "right" | "left";
}

export const Transition = ({ children, className, position }: Props) => {
  return (
    <motion.section
      variants={FadeIn(position)}
      initial="hidden"
      className={className}
      animate="visible"
    >
      {children}
    </motion.section>
  );
};

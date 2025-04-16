import { ReactNode } from "react";
import { motion } from "motion/react";
import { FadeIn } from "@/utils/motion.transition";

interface Props {
  children: ReactNode;
  className: string;
  position: "bottom" | "right" | "left";
}

export const Transition = ({ children, className, position }: Props) => {
  return (
    <motion.div
      variants={FadeIn(position)}
      initial="hidden"
      className={className}
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

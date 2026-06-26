import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Props {
  children: ReactNode;
  /** stagger index — multiplies the delay so grids cascade in */
  index?: number;
  /** base delay in seconds */
  delay?: number;
  className?: string;
  /** how far it travels up, in px */
  y?: number;
}

/**
 * Fade + slide-up when the element scrolls into view.
 * Respects prefers-reduced-motion (renders instantly, no transform).
 */
export function Reveal({ children, index = 0, delay = 0, className, y = 24 }: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: delay + index * 0.08,
      }}
    >
      {children}
    </motion.div>
  );
}

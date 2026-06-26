import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface Props {
  /** the raw stat string, e.g. "2005", "20+", "5+", "South America" */
  value: string;
  className?: string;
}

/**
 * Animates the numeric part of a stat from 0 to its value when scrolled in.
 * Non-numeric strings (e.g. "South America") render as-is.
 * Preserves any prefix/suffix around the number (e.g. the "+" in "20+").
 */
export function CountUp({ value, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState<string>("");

  // parse: leading optional non-digits, the number, trailing rest
  const match = value.match(/^(\D*)(\d[\d.,]*)(.*)$/);

  useEffect(() => {
    if (!match) {
      setDisplay(value);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const target = parseInt(numStr.replace(/[.,]/g, ""), 10);

    if (reduce || !inView) {
      if (!inView) setDisplay(`${prefix}0${suffix}`);
      else setDisplay(value);
      return;
    }

    const duration = 1100;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(eased * target);
      setDisplay(`${prefix}${current}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} className={className}>
      {display || (match ? `${match[1]}0${match[3]}` : value)}
    </span>
  );
}

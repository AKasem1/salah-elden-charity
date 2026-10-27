"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { formatNumber } from "@/shared/lib/format";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

/** Counts up from zero once the number scrolls into view. */
export function Counter({ value, prefix = "", suffix = "", duration = 2.2, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = `${prefix}${formatNumber(Math.round(latest))}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, prefix, suffix, duration]);

  return (
    <span ref={ref} className={className} dir="ltr">
      {prefix}0{suffix}
    </span>
  );
}

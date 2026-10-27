"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Eyebrow } from "@/shared/components/ui/SectionHeading";
import { achievementSlides } from "../data/home.data";

/**
 * Pinned section: vertical scrolling drives the cards horizontally.
 * In RTL the track overflows to the left, so it slides towards positive x.
 */
export function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, distance]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => setDistance(Math.max(0, track.scrollWidth - window.innerWidth + 32));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yearsScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <motion.span
          aria-hidden
          style={{ scale: yearsScale }}
          className="pointer-events-none absolute top-1/2 left-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 font-display text-[40vw] leading-none font-black text-brand/[0.07] select-none"
        >
          20
        </motion.span>

        <div className="relative mx-auto w-full max-w-7xl px-4 md:px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>إنجازات 20 عامًا</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-[1.35] font-bold md:text-[2.75rem]">
                عشرون عامًا من <span className="text-brand">العطاء</span>
              </h2>
            </div>
            <div className="flex w-full max-w-xs items-center gap-4">
              <span className="text-sm text-muted">2005</span>
              <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-line">
                <motion.span style={{ width: progress }} className="absolute inset-y-0 right-0 rounded-full bg-brand" />
              </div>
              <span className="text-sm font-semibold">2026</span>
            </div>
          </div>
        </div>

        <div className="relative mt-10 md:mt-14">
          <motion.ul ref={trackRef} style={{ x }} className="flex w-max gap-5 ps-4 md:ps-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
            {achievementSlides.map((slide, i) => (
              <li
                key={slide.src}
                className="w-[85vw] shrink-0 rounded-[2rem] bg-white p-3 ring-1 ring-line md:w-[62vw] lg:w-[46vw]"
              >
                <div className="relative aspect-[1366/768] overflow-hidden rounded-[1.5rem] bg-cream">
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    sizes="(min-width: 1024px) 46vw, 85vw"
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 px-3 pt-4 pb-2">
                  <div>
                    <p className="font-display text-lg font-semibold">{slide.title}</p>
                    <p className="mt-1 text-sm text-muted">{slide.caption}</p>
                  </div>
                  <span className="font-display text-3xl font-bold text-line">0{i + 1}</span>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

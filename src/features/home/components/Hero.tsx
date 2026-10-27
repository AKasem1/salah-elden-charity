"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform, type Variants } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/shared/config/site";
import { ButtonLink } from "@/shared/components/ui/Button";
import { HeartIcon, PlayIcon } from "@/shared/components/icons";
import { heroHighlights, heroSlides } from "../data/home.data";

const ease = [0.22, 1, 0.36, 1] as const;
const headline = [["معًا", "نصنع", "الخير"], ["ونبني", "حياة", "كريمة"]];

const word: Variants = {
  hidden: { y: "110%", rotate: 4 },
  show: (i: number) => ({
    y: "0%",
    rotate: 0,
    transition: { duration: 1, ease, delay: 0.55 + i * 0.09 },
  }),
};

const SLIDE_MS = 6000;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" ref={ref} className="px-3 pt-3 md:px-4 md:pt-4">
      <motion.div
        style={{ scale: cardScale }}
        initial={{ clipPath: "inset(12% 8% 12% 8% round 3rem)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0% round 2.5rem)" }}
        transition={{ duration: 1.4, ease }}
        className="grain relative isolate h-[calc(100svh-1.5rem)] min-h-[560px] overflow-hidden rounded-[2rem] bg-ink md:h-[calc(100svh-2rem)] md:max-h-[900px] md:min-h-[640px] md:rounded-[2.5rem]"
      >
        <motion.div style={{ y: imageY }} className="absolute inset-0 -z-10">
          <AnimatePresence initial={false}>
            <motion.div
              key={active}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.15 }}
              animate={{ opacity: 1, scale: 1.04 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 1.4 }, scale: { duration: SLIDE_MS / 1000 + 1.4, ease: "linear" } }}
            >
              <Image
                src={heroSlides[active].src}
                alt={heroSlides[active].alt}
                fill
                priority={active === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-l from-ink/90 via-ink/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/40" />
        </motion.div>

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative mx-auto flex h-full max-w-7xl flex-col justify-end gap-10 px-5 pt-28 pb-7 md:px-12 md:pb-14 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl text-white">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-ink"
            >
              <span className="size-2 rounded-full bg-brand" />
              منذ {siteConfig.founded} · {siteConfig.tagline}
            </motion.span>

            <h1 className="mt-4 font-display text-[2rem] leading-[1.35] font-bold min-[400px]:text-[2.25rem] sm:mt-6 sm:text-6xl lg:text-7xl">
              {headline.map((line, li) => (
                <span key={li} className="block">
                  {line.map((w, wi) => {
                    const i = li * line.length + wi;
                    return (
                      <span key={w} className="me-[0.25em] inline-block overflow-hidden pb-2 align-bottom">
                        <motion.span
                          className={`inline-block ${li === 1 && w === "كريمة" ? "text-brand" : ""}`}
                          variants={word}
                          custom={i}
                          initial="hidden"
                          animate="show"
                        >
                          {w}
                        </motion.span>
                      </span>
                    );
                  })}
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.2, ease }}
              className="mt-3 max-w-lg text-sm leading-7 text-white/80 sm:mt-5 sm:text-base sm:leading-8 md:text-lg"
            >
              أكثر من 20 عامًا من العطاء في محافظة الفيوم — علاج ومساعدات غذائية وكفالة أيتام وتمكين للشباب والسيدات. كل تبرع يصنع فرقًا حقيقيًا في حياة أسرة.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.4, ease }}
              className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8"
            >
              <ButtonLink href={siteConfig.links.donate} target="_blank" rel="noreferrer" size="lg">
                تبرع الآن
              </ButtonLink>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full py-2 pe-4 text-white"
              >
                <span className="relative grid size-12 place-items-center sm:size-14 rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-md transition-colors group-hover:bg-white group-hover:text-ink">
                  <span className="absolute inset-0 animate-ping rounded-full ring-1 ring-white/40 [animation-duration:2.5s]" />
                  <PlayIcon className="size-5" />
                </span>
                <span className="font-semibold">شاهد قصصنا</span>
              </a>
            </motion.div>

            <div className="mt-6 flex items-center gap-2 sm:mt-10">
              {heroSlides.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`الصورة ${i + 1}`}
                  className="relative h-1.5 w-10 overflow-hidden rounded-full bg-white/25"
                >
                  {i === active ? (
                    <motion.span
                      key={`bar-${active}`}
                      className="absolute inset-y-0 right-0 rounded-full bg-white"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                    />
                  ) : null}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden w-full max-w-xs flex-col items-start gap-3 sm:flex lg:self-end">
            {heroHighlights.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.6 + i * 0.15, ease }}
                className="inline-flex items-center gap-2.5 rounded-full bg-ink/75 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-ink/30 ring-1 ring-white/25 backdrop-blur-xl"
              >
                <span className="size-2.5 rounded-full bg-brand shadow-[0_0_12px] shadow-brand" />
                {item}
              </motion.span>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 60, rotate: -4 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1.1, delay: 1.9, ease }}
              className="w-full rounded-[1.75rem] bg-white/95 p-5 text-ink shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 font-semibold">
                  <Image src="/images/logo.webp" alt="" width={100} height={86} className="h-6 w-auto" />
                  {siteConfig.shortName}
                </span>
                <span className="flex items-center gap-1.5 text-muted">
                  <span className="size-1.5 rounded-full bg-ink" />
                  2026
                </span>
              </div>
              <span className="mt-6 grid size-11 place-items-center rounded-full bg-brand-soft text-brand-deep">
                <HeartIcon className="size-5 animate-pulse" />
              </span>
              <p className="mt-4 font-display text-xl leading-snug font-bold">اصنع أثرًا فوريًا</p>
              <p className="mt-2 text-sm leading-7 text-muted">
                تبرعك يصل مباشرة إلى برامج الإطعام والعلاج والكفالة في قرى ومدن الفيوم.
              </p>
              <ButtonLink href={siteConfig.links.donate} target="_blank" rel="noreferrer" size="sm" className="mt-5">
                تبرع الآن
              </ButtonLink>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

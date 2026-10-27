"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useState } from "react";
import { mainNav, siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";
import { ButtonLink } from "@/shared/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/shared/components/icons";

export function Header() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-right bg-gradient-to-l from-brand to-ink"
        style={{ scaleX: progress }}
      />
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-3 py-2.5 transition-all duration-500 md:px-5",
            scrolled ? "bg-white/80 shadow-[0_10px_40px_-15px_rgb(29_27_76/0.25)] ring-1 ring-line backdrop-blur-xl" : "bg-transparent",
          )}
        >
          <a href="#top" className="flex items-center gap-3" aria-label={siteConfig.name}>
            <span className="grid size-14 place-items-center rounded-full bg-white ring-1 ring-line md:size-[4.25rem]">
              <Image src="/images/logo.webp" alt="" width={100} height={86} className="h-10 w-auto md:h-12" priority />
            </span>
            <span className={cn("hidden leading-tight transition-colors duration-500 sm:block", !scrolled && "text-white")}>
              <span className="block font-display text-base font-bold md:text-lg">{siteConfig.shortName}</span>
              <span className={cn("block text-xs md:text-sm", scrolled ? "text-muted" : "text-white/70")}>{siteConfig.tagline}</span>
            </span>
          </a>

          <nav className="hidden rounded-full bg-white/70 p-1 ring-1 ring-line backdrop-blur-md lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item, i) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 rounded-full px-4 py-2.5 text-[0.95rem] font-medium transition-colors hover:bg-cream",
                      i === 0 && "bg-cream",
                    )}
                  >
                    {i === 0 ? <span className="size-1.5 rounded-full bg-brand" /> : null}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href={siteConfig.links.donate} target="_blank" rel="noreferrer" size="md">
              تبرع الآن
            </ButtonLink>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid size-12 place-items-center rounded-full bg-white ring-1 ring-line lg:hidden"
              aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={open}
            >
              {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.nav
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="mx-auto mt-3 max-w-7xl rounded-3xl bg-white p-3 shadow-xl ring-1 ring-line lg:hidden"
            >
              <ul className="flex flex-col">
                {mainNav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 font-medium hover:bg-cream"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

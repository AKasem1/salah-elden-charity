"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { siteConfig } from "@/shared/config/site";
import { ButtonLink } from "@/shared/components/ui/Button";
import { Counter } from "@/shared/components/ui/Counter";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type CauseCardProps = {
  cause: {
    title: string;
    description: string;
    image: string;
    stat: { value: number; label: string };
  };
  icon: ReactNode;
  index: number;
};

export function CauseCard({ cause, icon, index }: CauseCardProps) {
  return (
    <motion.li
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="group grid gap-3 rounded-[2rem] bg-cream p-3 sm:grid-cols-[1.1fr_1fr]"
    >
      <motion.div
        variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } }}
        className="flex flex-col rounded-[1.6rem] bg-white p-6"
      >
        <div className="flex items-center justify-between">
          <span className="grid size-12 place-items-center rounded-full bg-brand-soft text-brand-deep transition-transform duration-500 group-hover:rotate-12">
            {icon}
          </span>
          <span className="font-display text-sm text-muted">0{index + 1}</span>
        </div>
        <h3 className="mt-6 font-display text-xl font-semibold">{cause.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted">{cause.description}</p>
        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
          <div>
            <Counter value={cause.stat.value} suffix="+" className="font-display text-2xl font-bold text-ink" />
            <p className="text-xs text-muted">{cause.stat.label}</p>
          </div>
          <ButtonLink href={siteConfig.links.donate} target="_blank" rel="noreferrer" size="sm">
            تبرع الآن
          </ButtonLink>
        </div>
      </motion.div>

      <motion.div
        variants={{
          hidden: { clipPath: "inset(0 0 0 100% round 1.6rem)" },
          show: { clipPath: "inset(0 0 0 0% round 1.6rem)", transition: { duration: 1.1, ease, delay: 0.15 } },
        }}
        className="relative min-h-60 overflow-hidden rounded-[1.6rem]"
      >
        <Image
          src={cause.image}
          alt={cause.title}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover object-top transition-transform duration-[1.2s] group-hover:scale-110"
        />
        {/* Corner brackets, echoing a camera viewfinder. */}
        <span className="absolute top-4 right-4 size-6 rounded-tr-lg border-t-2 border-r-2 border-white/80" />
        <span className="absolute top-4 left-4 size-6 rounded-tl-lg border-t-2 border-l-2 border-white/80" />
        <span className="absolute right-4 bottom-4 size-6 rounded-br-lg border-r-2 border-b-2 border-white/80" />
        <span className="absolute bottom-4 left-4 size-6 rounded-bl-lg border-b-2 border-l-2 border-white/80" />
      </motion.div>
    </motion.li>
  );
}

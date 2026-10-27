import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";
import { HeartIcon } from "@/shared/components/icons";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "start" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto")}>
        <Reveal>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className={cn(
              "mt-4 font-display text-3xl leading-[1.35] font-bold text-balance md:text-[2.75rem]",
              dark ? "text-white" : "text-ink",
            )}
          >
            {title}
          </h2>
        </Reveal>
      </div>
      {description ? (
        <Reveal delay={0.2} className={cn("max-w-md", centered && "mx-auto")}>
          <p className={cn("text-base leading-8", dark ? "text-white/70" : "text-muted")}>
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide",
        tone === "dark" ? "bg-white/10 text-white ring-1 ring-white/15" : "bg-white text-ink ring-1 ring-line",
      )}
    >
      <HeartIcon className="size-3.5 animate-pulse fill-brand text-brand" />
      {children}
    </span>
  );
}

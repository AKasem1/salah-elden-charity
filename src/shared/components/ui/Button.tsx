import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";
import { ArrowUpLeftIcon } from "@/shared/components/icons";

type Variant = "primary" | "outline" | "light" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white shadow-[0_10px_30px_-10px_rgb(61_170_72/0.7)] hover:bg-brand-deep",
  outline: "bg-transparent text-ink ring-1 ring-ink/15 hover:ring-ink/40 hover:bg-white",
  light: "bg-white text-ink hover:bg-cream",
  ghost: "bg-white/10 text-white ring-1 ring-white/25 backdrop-blur-md hover:bg-white/20",
};

const sizes: Record<Size, string> = {
  sm: "h-9 ps-4 pe-1.5 text-sm gap-2",
  md: "h-12 ps-6 pe-2 text-[0.95rem] gap-3",
  lg: "h-14 ps-7 pe-2 text-base gap-4",
};

const iconSizes: Record<Size, string> = {
  sm: "size-6",
  md: "size-8",
  lg: "size-10",
};

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: Variant;
  size?: Size;
  icon?: boolean;
  children: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  icon = true,
  className,
  children,
  href = "",
  ...props
}: ButtonLinkProps) {
  // Internal routes go through next/link for client-side navigation.
  const Anchor = href.startsWith("/") ? Link : "a";
  return (
    <Anchor
      href={href}
      className={cn(
        "group inline-flex shrink-0 items-center justify-center rounded-full font-semibold transition-all duration-300",
        variants[variant],
        sizes[size],
        !icon && "pe-6",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {icon ? (
        <span
          className={cn(
            "grid place-items-center rounded-full transition-transform duration-500 group-hover:-rotate-45",
            iconSizes[size],
            variant === "primary" ? "bg-white/20" : variant === "ghost" ? "bg-white text-ink" : "bg-ink text-white",
          )}
        >
          <ArrowUpLeftIcon className="size-1/2" />
        </span>
      ) : null}
    </Anchor>
  );
}

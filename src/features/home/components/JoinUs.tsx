import Image from "next/image";
import { siteConfig } from "@/shared/config/site";
import { socialItems } from "@/shared/components/layout/SocialLinks";
import { ButtonLink } from "@/shared/components/ui/Button";
import { Eyebrow } from "@/shared/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/shared/components/ui/Reveal";
import { ArrowUpLeftIcon } from "@/shared/components/icons";

export function JoinUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 md:px-6 md:pb-32">
      <Reveal className="grain relative isolate min-h-[560px] overflow-hidden rounded-[2.5rem]">
        <Image
          src="/images/news/blog-1.webp"
          alt="تجهيزات تُسلَّم للأسر المستحقة"
          fill
          sizes="(min-width: 1280px) 80rem, 100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-ink/90 via-ink/50 to-transparent" />

        <div className="flex min-h-[560px] flex-col justify-between gap-10 p-6 md:p-12 lg:flex-row lg:items-end">
          <div className="max-w-xl text-white">
            <Eyebrow tone="dark">انضم إلينا</Eyebrow>
            <h2 className="mt-5 font-display text-3xl leading-[1.35] font-bold md:text-5xl">
              كن جزءًا من <span className="text-brand">الخير</span> — بوقتك أو بمالك
            </h2>
            <p className="mt-5 leading-8 text-white/75">
              انضم إلى شبكة متطوعي الجمعية واحصل على شهادة ساعات تطوع، أو ساهم بتبرعك ليصل إلى أسرة تنتظر يد العون.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={siteConfig.links.volunteer} target="_blank" rel="noreferrer" size="lg">
                سجّل كمتطوع
              </ButtonLink>
              <ButtonLink href={siteConfig.links.donate} target="_blank" rel="noreferrer" size="lg" variant="ghost">
                تبرع معنا
              </ButtonLink>
            </div>
          </div>

          <div className="w-full max-w-sm rounded-[2rem] bg-white/95 p-6 backdrop-blur-xl">
            <Eyebrow>ابقَ على تواصل</Eyebrow>
            <p className="mt-4 font-display text-xl leading-snug font-semibold">تابع قصص الأثر لحظة بلحظة</p>
            <Stagger as="ul" className="mt-5 grid gap-2" stagger={0.08}>
              {socialItems.map(({ label, handle, href, Icon }) => (
                <StaggerItem key={label} as="li">
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-2xl bg-cream p-2.5 transition-colors hover:bg-ink hover:text-white"
                  >
                    <span className="grid size-10 place-items-center rounded-xl bg-white text-ink">
                      <Icon className="size-[18px]" />
                    </span>
                    <span className="flex-1 leading-tight">
                      <span className="block text-sm font-semibold">{label}</span>
                      <span className="block text-xs opacity-60" dir="ltr">
                        {handle}
                      </span>
                    </span>
                    <ArrowUpLeftIcon className="size-4 transition-transform duration-300 group-hover:-rotate-45" />
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

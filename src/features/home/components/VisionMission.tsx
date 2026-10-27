import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/shared/components/ui/Reveal";
import { SectionHeading } from "@/shared/components/ui/SectionHeading";
import { CompassIcon, EyeIcon, SproutIcon } from "@/shared/components/icons";
import { mission, vision } from "../data/home.data";

export function VisionMission() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
      <SectionHeading
        align="center"
        eyebrow="الرؤية والرسالة"
        title={
          <>
            ما الذي <span className="text-brand">يحرّكنا</span> كل يوم؟
          </>
        }
      />
      <Stagger className="mt-14 grid gap-4 lg:grid-cols-[1.1fr_1fr_1fr]" stagger={0.15}>
        <StaggerItem className="group relative min-h-80 overflow-hidden rounded-[2rem] bg-brand-soft">
          <Image
            src="/images/hero/image2.webp"
            alt="تكريم الجمعية في مسابقة أهل الخير للإطعام"
            fill
            sizes="(min-width: 1024px) 36vw, 100vw"
            className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
          <div className="absolute right-6 bottom-6 left-6 text-white">
            <span className="grid size-12 place-items-center rounded-full bg-white/15 ring-1 ring-white/25 backdrop-blur">
              <SproutIcon className="size-6 animate-float" />
            </span>
            <p className="mt-4 font-display text-2xl leading-snug font-semibold">نزرع الأمل اليوم ليُثمر غدًا أفضل لكل أسرة</p>
          </div>
        </StaggerItem>

        <StaggerItem className="flex flex-col rounded-[2rem] bg-white p-7 ring-1 ring-line">
          <span className="grid size-14 place-items-center rounded-2xl bg-brand-soft text-brand-deep">
            <EyeIcon className="size-7" />
          </span>
          <p className="mt-10 font-display text-2xl font-semibold">رؤيتنا</p>
          <p className="mt-4 leading-8 text-muted">{vision}</p>
        </StaggerItem>

        <StaggerItem className="flex flex-col rounded-[2rem] bg-ink p-7 text-white">
          <span className="grid size-14 place-items-center rounded-2xl bg-white/10 text-brand">
            <CompassIcon className="size-7" />
          </span>
          <p className="mt-10 font-display text-2xl font-semibold">رسالتنا</p>
          <p className="mt-4 leading-8 text-white/70">{mission}</p>
        </StaggerItem>
      </Stagger>
      <Reveal className="mt-4">
        <p className="rounded-[2rem] bg-white px-7 py-6 text-center font-display text-lg leading-9 ring-1 ring-line md:text-xl">
          «نحن أعضاء جمعية صلاح الدين بالفيوم، نؤمن أن <span className="text-brand">العطاء مسؤولية</span>، وأن كل يد ممدودة قادرة على تغيير حياة.»
        </p>
      </Reveal>
    </section>
  );
}

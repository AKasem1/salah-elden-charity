import Image from "next/image";
import { Counter } from "@/shared/components/ui/Counter";
import { SectionHeading } from "@/shared/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/shared/components/ui/Reveal";
import { ShieldCheckIcon, UsersIcon } from "@/shared/components/icons";
import { aboutValues } from "../data/home.data";

const card = "rounded-[2rem] bg-white ring-1 ring-line";

export function About() {
  const [care, trust] = aboutValues;
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
      <SectionHeading
        eyebrow="من نحن"
        title={
          <>
            أكثر من عشرين عامًا ونحن <span className="text-brand">دليلك للخير</span> في الفيوم
          </>
        }
        description="جمعية أهلية مشهرة منذ 2005، نعمل مع الأسر الأولى بالرعاية والسيدات والشباب لنمنحهم فرصة حقيقية لحياة أفضل — بالرعاية والتدريب والدعم المادي والعيني."
      />

      <Stagger className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.14}>
        <div className="grid gap-4">
          <StaggerItem className="group relative h-72 overflow-hidden rounded-[2rem] md:h-80">
            <Image
              src="/images/hero/image1.webp"
              alt="طلاب يستلمون الحقائب المدرسية"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            <span className="absolute right-5 bottom-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold backdrop-blur">
              مبادرة أهلاً بالمدارس 2026
            </span>
          </StaggerItem>
          <StaggerItem className={`${card} p-6`}>
            <div className="flex items-start justify-between gap-4 rounded-3xl bg-cream p-5">
              <Counter value={20} suffix="+" className="font-display text-5xl font-bold" />
              <span className="pt-2 text-sm text-muted">عامًا من العطاء</span>
            </div>
            <p className="mt-6 font-display text-xl font-semibold">برامج تنموية تخدم المجتمع</p>
            <p className="mt-2 text-sm leading-7 text-muted">
              من دار تحفيظ القرآن إلى مستشفى الشفاء والأكاديمية وبرامج ريادة — منظومة متكاملة تخدم الإنسان.
            </p>
          </StaggerItem>
        </div>

        <div className="grid gap-4">
          <StaggerItem className={`${card} flex flex-col p-7`}>
            <span className="grid size-14 place-items-center rounded-2xl bg-brand-soft text-brand-deep">
              <care.Icon className="size-7" />
            </span>
            <p className="mt-16 font-display text-2xl font-semibold">{care.title}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{care.description}</p>
          </StaggerItem>
          <StaggerItem className={`${card} relative overflow-hidden p-7`}>
            <div className="absolute -top-10 -left-10 size-40 rounded-full bg-brand/10 blur-2xl" />
            <div className="relative rounded-3xl bg-cream p-6">
              <Counter value={8843} className="font-display text-5xl font-bold md:text-6xl" />
              <p className="mt-10 text-sm text-muted">طفل يتيم في كفالة الجمعية</p>
            </div>
          </StaggerItem>
        </div>

        <div className="grid gap-4 md:col-span-2 md:grid-cols-2 lg:col-span-1 lg:grid-cols-1">
          <StaggerItem className={`${card} p-7`}>
            <span className="grid size-14 place-items-center rounded-2xl bg-[#eef0fb] text-ink">
              <trust.Icon className="size-7" />
            </span>
            <p className="mt-10 font-display text-2xl font-semibold">{trust.title}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{trust.description}</p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5">
                <ShieldCheckIcon className="size-4 text-brand" />
                مشهرة برقم 481
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5">
                <UsersIcon className="size-4 text-brand" />
                شبكة متطوعين
              </span>
            </div>
          </StaggerItem>
          <StaggerItem className="group relative min-h-72 overflow-hidden rounded-[2rem]">
            <Image
              src="/images/gallery/training.jpg"
              alt="تدريب الشباب على أساسيات التسويق"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            <p className="absolute right-6 bottom-6 left-6 font-display text-lg font-semibold text-white">
              نُمكّن الشباب بالمهارات التي يحتاجها سوق العمل
            </p>
          </StaggerItem>
        </div>
      </Stagger>
    </section>
  );
}

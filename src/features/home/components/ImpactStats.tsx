import { Counter } from "@/shared/components/ui/Counter";
import { SectionHeading } from "@/shared/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/shared/components/ui/Reveal";
import { impactStats, quarterReport } from "../data/home.data";

export function ImpactStats() {
  return (
    <section className="px-3 py-3 md:px-4">
      <div className="grain relative isolate overflow-hidden rounded-[2.5rem] bg-ink py-24 text-white md:py-28">
        <div className="absolute -top-40 -right-40 -z-10 size-[520px] animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,rgb(61_170_72/0.35),transparent_40%,rgb(61_170_72/0.2),transparent_80%)] blur-3xl" />
        <div className="absolute -bottom-52 -left-40 -z-10 size-[480px] rounded-full bg-[#4b47b8]/30 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            tone="dark"
            eyebrow="حقائق وأرقام"
            title={
              <>
                أرقام تحكي <span className="text-brand">قصة عطاء</span> مستمرة
              </>
            }
            description="خلف كل رقم أسرة استعادت الأمل، وشاب وجد طريقه، وطفل عاد إلى مدرسته. هذه حصيلة ثقتكم بنا."
          />

          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 ring-1 ring-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <StaggerItem key={stat.label} className="bg-ink/80 p-8 transition-colors duration-500 hover:bg-white/[0.06]">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="block font-display text-5xl font-bold text-white md:text-6xl"
                />
                <p className="mt-6 text-sm leading-7 text-white/65">{stat.label}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <Stagger className="mt-6 grid gap-4 rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10 md:grid-cols-[1.2fr_repeat(4,1fr)] md:items-center md:p-8">
            <StaggerItem>
              <p className="text-xs font-semibold text-brand">تقرير الربع الثاني 2026</p>
              <p className="mt-2 font-display text-lg font-semibold">إدارة المساعدات · أبريل – يونيو</p>
            </StaggerItem>
            {quarterReport.map((item) => (
              <StaggerItem key={item.label} className="rounded-2xl bg-white/5 p-4">
                <Counter value={item.value} className="font-display text-2xl font-bold" />
                <p className="mt-1 text-xs text-white/60">{item.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

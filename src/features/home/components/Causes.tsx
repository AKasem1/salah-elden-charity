import { siteConfig } from "@/shared/config/site";
import { ButtonLink } from "@/shared/components/ui/Button";
import { Eyebrow } from "@/shared/components/ui/SectionHeading";
import { Reveal } from "@/shared/components/ui/Reveal";
import { causes } from "../data/home.data";
import { CauseCard } from "./CauseCard";

export function Causes() {
  return (
    <section id="causes" className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[0.8fr_1.6fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <Eyebrow>مجالات العطاء</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-3xl leading-[1.35] font-bold md:text-[2.75rem]">
              كيف يغيّر دعمك <span className="text-brand">حياة الناس</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 leading-8 text-muted">
              نوجّه تبرعاتك إلى برامج مدروسة تصل إلى من يستحق، بعد بحث ميداني دقيق لكل حالة، ليتحول عطاؤك إلى أثر ملموس ومستدام.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-8">
            <ButtonLink href={siteConfig.links.donate} variant="outline">
              اختر مجال تبرعك
            </ButtonLink>
          </Reveal>
        </div>

        <ol className="grid gap-5">
          {causes.map(({ Icon, ...cause }, i) => (
            <CauseCard key={cause.title} cause={cause} icon={<Icon className="size-6" />} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}

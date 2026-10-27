import Image from "next/image";
import { Suspense } from "react";
import { siteConfig } from "@/shared/config/site";
import { Eyebrow } from "@/shared/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/shared/components/ui/Reveal";
import { PhoneIcon, ShieldCheckIcon } from "@/shared/components/icons";
import { faqs, reassurances, steps } from "../data/donate.data";
import { DonateForm } from "./DonateForm";

export function DonatePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pt-28 md:px-6 md:pt-36">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:gap-12">
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <Eyebrow>تبرع معنا</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-display text-[2rem] leading-[1.35] font-bold md:text-5xl">
              تبرعك يصل <span className="text-brand">لمن يستحق</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 leading-8 text-muted md:mt-5 md:text-lg">
              ثلاث خطوات بسيطة، بدون بيانات بنكية. اختر المجال والمبلغ، ونتواصل معك لإتمام تبرعك.
            </p>
          </Reveal>

          {/* Compact trust strip for phones; the full panel shows on larger screens. */}
          <Reveal delay={0.25} className="mt-5 flex flex-wrap gap-2 lg:hidden">
            {["بدون بيانات بطاقة", "جمعية مشهرة منذ 2005", "تقارير شفافة"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium ring-1 ring-line">
                <ShieldCheckIcon className="size-4 text-brand" />
                {item}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.3} className="relative mt-8 hidden h-56 overflow-hidden rounded-[2rem] lg:block">
            <Image
              src="/images/news/blog-1.webp"
              alt="تجهيزات تُسلَّم لأسرة مستحقة"
              fill
              sizes="35vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            <p className="absolute right-5 bottom-5 left-5 font-display text-lg font-semibold text-white">
              أكثر من 20 عامًا ونحن نوصل الأمانة إلى أهلها
            </p>
          </Reveal>

          <Stagger className="mt-4 hidden gap-3 lg:grid">
            {reassurances.map((item) => (
              <StaggerItem key={item.title} className="flex gap-4 rounded-3xl bg-white p-5 ring-1 ring-line">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand-deep">
                  <ShieldCheckIcon className="size-5" />
                </span>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm leading-7 text-muted">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </aside>

        <div>
          <Suspense>
            <DonateForm />
          </Suspense>
        </div>
      </div>

      <section className="py-20 md:py-28">
        <Reveal>
          <h2 className="text-center font-display text-2xl font-bold md:text-4xl">كيف يتم تبرعك؟</h2>
        </Reveal>
        <Stagger className="mt-10 grid gap-3 md:grid-cols-3">
          {steps.map((step, i) => (
            <StaggerItem key={step.title} className="relative rounded-[2rem] bg-white p-6 ring-1 ring-line">
              <span className="font-display text-5xl font-bold text-brand/20">0{i + 1}</span>
              <p className="mt-4 font-display text-lg font-semibold">{step.title}</p>
              <p className="mt-2 text-sm leading-7 text-muted">{step.description}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <h2 className="font-display text-2xl font-bold md:text-4xl">أسئلة قبل أن تتبرع</h2>
            <p className="mt-3 leading-8 text-muted">ما زال لديك سؤال؟ فريقنا يسعد بالرد عليك.</p>
            <a
              href={`tel:${siteConfig.contact.phones[0]}`}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold ring-1 ring-line hover:bg-cream"
            >
              <PhoneIcon className="size-4 text-brand" />
              <span dir="ltr">{siteConfig.contact.phones[0]}</span>
            </a>
          </Reveal>
          <Stagger className="grid gap-3">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <details className="group rounded-3xl bg-white p-5 ring-1 ring-line open:ring-brand/40">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-cream text-lg transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-muted">{faq.a}</p>
                </details>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </main>
  );
}

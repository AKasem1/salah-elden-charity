import Image from "next/image";
import { siteConfig } from "@/shared/config/site";
import { ButtonLink } from "@/shared/components/ui/Button";
import { SectionHeading } from "@/shared/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/shared/components/ui/Reveal";
import { cn } from "@/shared/lib/cn";
import { news } from "../data/home.data";

export function News() {
  return (
    <section id="news" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="آخر الأخبار"
            title={
              <>
                من قلب <span className="text-brand">الميدان</span>
              </>
            }
          />
          <ButtonLink href={siteConfig.links.news} target="_blank" rel="noreferrer" variant="outline" className="self-start md:self-auto">
            كل الأخبار
          </ButtonLink>
        </div>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-3" stagger={0.12}>
          {news.map((item, i) => {
            const featured = i === 0;
            return (
              <StaggerItem key={item.title} as="article" className={cn(featured && "md:col-span-3")}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "group flex h-full flex-col overflow-hidden rounded-[2rem] bg-cream p-3 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgb(29_27_76/0.35)]",
                    featured && "md:flex-row md:gap-4",
                  )}
                >
                  <div
                    className={cn(
                      "relative aspect-[4/3] overflow-hidden rounded-[1.6rem] bg-white",
                      featured && "md:aspect-[16/9] md:w-3/5",
                    )}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes={featured ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                      className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    />
                    <span className="absolute top-4 right-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                      {item.category}
                    </span>
                  </div>
                  <div className={cn("flex flex-1 flex-col p-4", featured && "md:justify-center md:p-8")}>
                    <p className="text-xs text-muted">{item.date}</p>
                    <h3
                      className={cn(
                        "mt-2 font-display font-semibold transition-colors group-hover:text-brand-deep",
                        featured ? "text-2xl leading-snug md:text-3xl" : "text-base leading-7",
                      )}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{item.excerpt}</p>
                    <span className={cn("pt-4 text-sm font-semibold text-brand-deep", !featured && "mt-auto")}>
                      اقرأ المزيد ←
                    </span>
                  </div>
                </a>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

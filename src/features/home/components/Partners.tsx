import Image from "next/image";
import { SectionHeading } from "@/shared/components/ui/SectionHeading";
import { Reveal } from "@/shared/components/ui/Reveal";
import { partners } from "../data/home.data";

export function Partners() {
  const loop = [...partners, ...partners];
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          align="center"
          eyebrow="شركاء الخير"
          title="نعمل يدًا بيد مع مؤسسات تشاركنا الرسالة"
        />
      </div>
      <Reveal className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_left,transparent,black_12%,black_88%,transparent)]">
        <ul className="flex w-max animate-marquee gap-5 pe-5 hover:[animation-play-state:paused]">
          {loop.map((partner, i) => (
            <li
              key={`${partner.name}-${i}`}
              aria-hidden={i >= partners.length}
              className="grid h-28 w-52 shrink-0 place-items-center rounded-3xl bg-white px-6 ring-1 ring-line grayscale transition-all duration-500 hover:grayscale-0"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={180}
                height={80}
                className="max-h-16 w-auto object-contain"
              />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

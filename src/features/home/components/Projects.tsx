import Image from "next/image";
import { SectionHeading } from "@/shared/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/shared/components/ui/Reveal";
import { ArrowUpLeftIcon } from "@/shared/components/icons";
import { cn } from "@/shared/lib/cn";
import { projects } from "../data/home.data";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
      <SectionHeading
        align="center"
        eyebrow="مشروعات الجمعية"
        title="مؤسسات تخدم الإنسان في كل مراحل حياته"
        description="من التعليم والتربية إلى العلاج والتمكين الاقتصادي — مشروعات قائمة تعمل كل يوم لخدمة أهالي الفيوم."
      />

      <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
        {projects.map((project) => (
          <StaggerItem key={project.name} as="article">
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-[2rem] bg-white p-3 ring-1 ring-line transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgb(29_27_76/0.35)]"
            >
              <div className={cn("relative grid h-48 place-items-center overflow-hidden rounded-[1.6rem]", project.tint)}>
                <div className="absolute inset-0 scale-0 rounded-full bg-white/50 transition-transform duration-700 group-hover:scale-150" />
                <Image
                  src={project.logo}
                  alt={project.name}
                  width={100}
                  height={100}
                  className="relative size-28 rounded-2xl object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold">{project.name}</h3>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-cream transition-all duration-500 group-hover:-rotate-45 group-hover:bg-brand group-hover:text-white">
                    <ArrowUpLeftIcon className="size-4" />
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
              </div>
            </a>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

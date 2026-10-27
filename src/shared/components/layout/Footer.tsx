import Image from "next/image";
import type { ReactNode } from "react";
import { siteConfig } from "@/shared/config/site";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/shared/components/icons";
import { SocialLinks } from "./SocialLinks";

const footerColumns = [
  {
    title: "عن الجمعية",
    links: [
      { label: "الرؤية والرسالة", href: "https://salaheldien.com/vision/" },
      { label: "الخطة الاستراتيجية", href: "https://salaheldien.com/strategic-plan/" },
      { label: "مجلس الإدارة", href: "https://salaheldien.com/leadership/" },
      { label: "الوظائف", href: "https://salaheldien.com/jobs/" },
    ],
  },
  {
    title: "مشاريعنا",
    links: [
      { label: "دار صلاح الدين", href: "https://salaheldien.com/dar-salah-eldien/" },
      { label: "أكاديمية صلاح الدين", href: "https://salaheldien.com/salaheldien-academy/" },
      { label: "مستشفى الشفاء", href: "https://salaheldien.com/elshefaa-hospital/" },
      { label: "ريادة", href: "https://salaheldien.com/ahl-elkhair/" },
    ],
  },
  {
    title: "البرامج والمبادرات",
    links: [
      { label: "البرامج", href: "https://salaheldien.com/programs/" },
      { label: "المبادرات", href: "https://salaheldien.com/initiatives/" },
      { label: "التطوع", href: siteConfig.links.volunteer },
      { label: "تبرع معنا", href: siteConfig.links.donate },
    ],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 font-display text-[22vw] leading-none font-black text-white/[0.025] select-none"
      >
        صلاح الدين
      </div>
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-8 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="grid size-16 place-items-center rounded-2xl bg-white">
                <Image src="/images/logo.webp" alt="" width={100} height={86} className="h-11 w-auto" />
              </span>
              <div>
                <p className="font-display text-xl font-bold">{siteConfig.name}</p>
                <p className="text-sm text-brand">{siteConfig.tagline}</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm leading-8 text-white/65">
              مشهرة برقم 481 لسنة 2005 — نعمل منذ أكثر من 20 عامًا على مكافحة الفقر وتمكين الأسر الأولى بالرعاية في محافظة الفيوم.
            </p>
            <SocialLinks className="mt-8" />
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="font-display font-semibold">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-white/60 transition-colors hover:text-brand">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-4 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:grid-cols-3">
          <ContactItem icon={<MapPinIcon className="size-5" />} label="العنوان">
            {siteConfig.contact.address}
          </ContactItem>
          <ContactItem icon={<PhoneIcon className="size-5" />} label="الهاتف">
            {siteConfig.contact.phones.map((phone) => (
              <a key={phone} href={`tel:${phone}`} dir="ltr" className="me-3 inline-block hover:text-brand">
                {phone}
              </a>
            ))}
          </ContactItem>
          <ContactItem icon={<MailIcon className="size-5" />} label="البريد الإلكتروني">
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand">
              {siteConfig.contact.email}
            </a>
          </ContactItem>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row">
          <p>جميع الحقوق محفوظة © 2026 {siteConfig.name}</p>
          <p>صُنع بحب لخدمة أهل الفيوم</p>
        </div>
      </div>
    </footer>
  );
}

function ContactItem({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex min-w-0 gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand/15 text-brand">{icon}</span>
      <div className="min-w-0">
        <p className="text-xs text-white/45">{label}</p>
        <div className="mt-1 text-sm leading-7 break-words text-white/85">{children}</div>
      </div>
    </div>
  );
}

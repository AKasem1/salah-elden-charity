import { siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from "@/shared/components/icons";

export const socialItems = [
  { label: "فيسبوك", handle: "SACDAEG", href: siteConfig.socials.facebook, Icon: FacebookIcon },
  { label: "إنستجرام", handle: "salaheldienassociation2005", href: siteConfig.socials.instagram, Icon: InstagramIcon },
  { label: "إكس", handle: "salaheldien2005", href: siteConfig.socials.x, Icon: XIcon },
  { label: "يوتيوب", handle: "قناة الجمعية", href: siteConfig.socials.youtube, Icon: YoutubeIcon },
] as const;

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socialItems.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="grid size-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition-all duration-300 hover:-translate-y-1 hover:bg-brand hover:ring-brand"
          >
            <Icon className="size-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}

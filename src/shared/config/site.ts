export const siteConfig = {
  name: "جمعية صلاح الدين بالفيوم",
  shortName: "صلاح الدين",
  tagline: "#دليلك_للخير",
  founded: 2005,
  url: "https://salaheldien.com",
  description:
    "جمعية صلاح الدين بالفيوم — منذ 2005 نعمل على مكافحة الفقر ودعم الأسر الأولى بالرعاية بالمساعدات الطبية والغذائية والعينية والتعليم والتدريب.",
  contact: {
    address: "الفيوم - شارع المرور - بجوار معهد الصفوة الأزهري - برج قصر الأطباء - الدور الرابع",
    phones: ["01011047558", "01011047559"],
    email: "info@salaheldien.com",
    /** International format, used for wa.me links. */
    whatsapp: "201011047558",
  },
  links: {
    donate: "/donate",
    volunteer: "https://salaheldien.com/volunteer/",
    news: "https://salaheldien.com/news/",
    contact: "https://salaheldien.com/contact/",
  },
  socials: {
    facebook: "https://www.facebook.com/SACDAEG/",
    instagram: "https://www.instagram.com/salaheldienassociation2005/",
    x: "https://x.com/salaheldien2005",
    youtube: "https://www.youtube.com/channel/UCOsK1bmtDK-lhj8FKL0yNWQ/videos",
  },
} as const;

export const mainNav = [
  { label: "الرئيسية", href: "/" },
  { label: "عن الجمعية", href: "/#about" },
  { label: "مجالات العطاء", href: "/#causes" },
  { label: "مشاريعنا", href: "/#projects" },
  { label: "الأخبار", href: "/#news" },
  { label: "تواصل معنا", href: "#contact" },
] as const;

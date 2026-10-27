import type { ComponentType, SVGProps } from "react";
import {
  BookIcon,
  BowlIcon,
  GiftIcon,
  HandHeartIcon,
  StethoscopeIcon,
} from "@/shared/components/icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export const heroSlides = [
  { src: "/images/hero/image1.webp", alt: "مبادرة أهلاً بالمدارس مع صندوق تحيا مصر" },
  { src: "/images/news/blog-1.webp", alt: "تجهيز العرائس من الأسر الأولى بالرعاية" },
  { src: "/images/hero/image2.webp", alt: "تكريم الجمعية في مسابقة أهل الخير للإطعام" },
] as const;

export const heroHighlights = ["إشهار رقم 481 لسنة 2005", "تقارير ربع سنوية شفافة"] as const;

export const aboutValues = [
  {
    title: "دعم برحمة وكرامة",
    description: "نصل إلى الأسر الأكثر احتياجًا بأبحاث ميدانية دقيقة، ونقدم العون بما يحفظ كرامة كل إنسان.",
    Icon: HandHeartIcon as Icon,
  },
  {
    title: "شفافية وثقة",
    description: "كل جنيه يُصرف بمسؤولية، مع تقارير دورية معلنة عن المساعدات والمستفيدين.",
    Icon: GiftIcon as Icon,
  },
] as const;

export const causes = [
  {
    title: "المساعدات الطبية",
    description:
      "عمليات جراحية وعلاج كيماوي وإشعاعي وأجهزة تعويضية للمرضى غير القادرين، بالتعاون مع مستشفى الشفاء وشركاء الخير.",
    stat: { value: 3070, label: "عملية جراحية" },
    donateCause: "patient",
    image: "/images/gallery/hospital-or.jpg",
    Icon: StethoscopeIcon as Icon,
  },
  {
    title: "المساعدات الغذائية",
    description:
      "كرتونة غذائية ووجبات مطهية للأسر الأولى بالرعاية طوال العام، وموائد الرحمن ولحوم الأضاحي في المواسم.",
    stat: { value: 250000, label: "وجبة سنويًا" },
    donateCause: "general",
    image: "/images/hero/image2.webp",
    Icon: BowlIcon as Icon,
  },
  {
    title: "تجهيز العرائس والإغاثة",
    description:
      "تجهيز بنات الأسر الأولى بالرعاية بالأجهزة والمستلزمات لبداية حياة كريمة، وإغاثة عاجلة للأسر المتضررة.",
    stat: { value: 5000, label: "عروسة" },
    donateCause: "general",
    image: "/images/news/blog-1.webp",
    Icon: GiftIcon as Icon,
  },
  {
    title: "التعليم والتمكين",
    description:
      "مستلزمات دراسية للطلاب، ودورات تدريبية للشباب والسيدات تفتح لهم أبواب العمل والمشروعات الصغيرة.",
    stat: { value: 219, label: "شاب تم تدريبه" },
    donateCause: "student",
    image: "/images/gallery/training.jpg",
    Icon: BookIcon as Icon,
  },
] as const;

export const impactStats = [
  { value: 10, suffix: "M+", label: "جنيه مساعدات نقدية" },
  { value: 219, suffix: "", label: "شاب تم تدريبهم — مشروع «ابتدي»" },
  { value: 3950, suffix: "", label: "زيارة طرق أبواب — مشروع «2 كفاية»" },
  { value: 1001, suffix: "", label: "مستفيدة من عيادة الجمعية" },
] as const;

export const quarterReport = [
  { value: 4421, label: "مساعدة عينية" },
  { value: 1981, label: "مستفيد نقدي" },
  { value: 598, label: "بحث ميداني" },
  { value: 172, label: "خدمة طبية" },
] as const;

export const projects = [
  {
    name: "دار صلاح الدين",
    description: "دار لتحفيظ القرآن الكريم والتربية، تغرس القيم في نفوس الأطفال منذ الصغر.",
    logo: "/images/projects/project4.webp",
    href: "https://salaheldien.com/dar-salah-eldien/",
    tint: "bg-[#eef0fb]",
  },
  {
    name: "مستشفى الشفاء",
    description: "رعاية طبية متكاملة بأسعار رمزية لأهالي الفيوم، وخدمات مجانية للحالات الأولى بالرعاية.",
    logo: "/images/projects/project2.webp",
    href: "https://salaheldien.com/elshefaa-hospital/",
    tint: "bg-[#e8f5f3]",
  },
  {
    name: "أكاديمية صلاح الدين",
    description: "تعليم وتدريب حديث يبني جيلًا واعيًا قادرًا على المنافسة في سوق العمل.",
    logo: "/images/projects/project1.webp",
    href: "https://salaheldien.com/salaheldien-academy/",
    tint: "bg-[#fdf1e7]",
  },
  {
    name: "ريادة",
    description: "تمكين اقتصادي للشباب والسيدات عبر التدريب ودعم المشروعات الصغيرة ومتناهية الصغر.",
    logo: "/images/projects/project3.webp",
    href: "https://salaheldien.com/ahl-elkhair/",
    tint: "bg-brand-soft",
  },
] as const;

export const achievementSlides = [
  { src: "/images/achievements/achievement2.webp", title: "المساعدات الطبية", caption: "3070 عملية جراحية و257 حالة علاج كيماوي وإشعاعي" },
  { src: "/images/achievements/achievement1.webp", title: "المساعدات العينية والغذائية", caption: "250 ألف وجبة سنويًا و5000 عروسة و465 عداد مياه" },
  { src: "/images/achievements/achievement3.webp", title: "الكفالات", caption: "8843 طفلًا يتيمًا و878 مريضًا و183 طالب علم" },
] as const;

export const vision =
  "مجتمع مصري مُتضامن ومُتماسك ومُنتج يوفر العدالة الاجتماعية والتنمية الاقتصادية والحياة الكريمة للأسرة والفرد على أسس من العدالة والنزاهة والمشاركة.";

export const mission =
  "نسعى لمكافحة الفقر بكافة أنواعه من خلال تقديم يد العون والتدريب والدعم المؤسسي والعيني والمادي للأسر الأكثر احتياجًا وللسيدات، لتمكينهم من تحسين أوضاعهم الاقتصادية والاجتماعية وبناء مجتمع واعٍ ومتقدم.";

export const news = [
  {
    title: "من قلبنا لكل عروسة",
    excerpt: "الجمعية تدعم 12 عروسة بمستلزمات وأجهزة لبداية حياة جديدة ضمن جهود دعم الأسر الأولى بالرعاية.",
    date: "8 سبتمبر 2026",
    image: "/images/news/blog-1.webp",
    href: "https://salaheldien.com/news/",
    category: "مبادرات",
  },
  {
    title: "إنجازات المساعدات خلال الربع الثاني عام 2026",
    excerpt: "خلال الفترة من أبريل وحتى يونيو 2026 واصلت الجمعية تقديم المساعدات العينية والنقدية والطبية للأسر الأولى بالرعاية.",
    date: "8 سبتمبر 2026",
    image: "/images/news/blog-2.webp",
    href: "https://salaheldien.com/news/",
    category: "تقارير",
  },
  {
    title: "تدريب «أساسيات التسويق والسوشيال ميديا»",
    excerpt: "بالتعاون مع المركز الجامعي للتطوير المهني بجامعة الفيوم انطلق تدريب لتأهيل الشباب لسوق العمل.",
    date: "14 أبريل 2026",
    image: "/images/gallery/training.jpg",
    href: "https://salaheldien.com/news/",
    category: "تدريب",
  },
  {
    title: "احتفالية يوم اليتيم 2026",
    excerpt: "نظّمت الجمعية احتفالية خاصة بيوم اليتيم في أجواء من البهجة لإدخال السرور إلى قلوب الأطفال.",
    date: "13 أبريل 2026",
    image: "/images/gallery/orphan-day.jpg",
    href: "https://salaheldien.com/news/",
    category: "فعاليات",
  },
] as const;

export const partners = [
  { name: "وزارة التضامن الاجتماعي", logo: "/images/partners/moss-gov.jpg" },
  { name: "صندوق تحيا مصر", logo: "/images/partners/tahya-misr.png" },
  { name: "بنك الطعام المصري", logo: "/images/partners/efb.png" },
  { name: "بنك الشفاء المصري", logo: "/images/partners/egyptiancurebank.webp" },
  { name: "بنك الكساء المصري", logo: "/images/partners/egyptianclothingbank.png" },
  { name: "جامعة الفيوم", logo: "/images/partners/fayoum.png" },
  { name: "وزارة الأوقاف", logo: "/images/partners/awqaf.png" },
] as const;

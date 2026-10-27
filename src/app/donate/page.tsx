import type { Metadata } from "next";
import { DonatePage } from "@/features/donate";
import { siteConfig } from "@/shared/config/site";

export const metadata: Metadata = {
  title: `تبرع معنا | ${siteConfig.name}`,
  description: "تبرع لجمعية صلاح الدين بالفيوم في ثلاث خطوات بسيطة وبدون بيانات بنكية — كفالة يتيم، كفالة مريض، زكاة، صدقة جارية.",
};

export default function Page() {
  return <DonatePage />;
}

import type { Metadata } from "next";
import { Alexandria, IBM_Plex_Sans_Arabic } from "next/font/google";
import { Footer } from "@/shared/components/layout/Footer";
import { Header } from "@/shared/components/layout/Header";
import { siteConfig } from "@/shared/config/site";
import "./globals.css";

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["arabic", "latin"],
});

const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/images/favicons/favicon-32x32.png", sizes: "32x32" },
      { url: "/images/favicons/favicon-96x96.png", sizes: "96x96" },
    ],
    apple: "/images/favicons/favicon-256x256.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      data-scroll-behavior="smooth"
      dir="rtl"
      className={`${alexandria.variable} ${plexArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-clip font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

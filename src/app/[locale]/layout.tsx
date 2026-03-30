import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AI Native EHR — The EHR Built for AI",
  description:
    "A next-generation Electronic Medical Records system where AI is the foundation, not a plugin. Launching December 2026.",
  metadataBase: new URL("https://ainativeehr.com"),
  openGraph: {
    title: "AI Native EHR — EHR, Rebuilt from Scratch.",
    description: "Every vital sign, every lab, every note — alive with meaning, ready to act.",
    siteName: "AI Native EHR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Native EHR",
    description: "EHR, Rebuilt from Scratch. For AI and Patients.",
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "ko")) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

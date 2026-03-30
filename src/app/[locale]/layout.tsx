import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk, Space_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "AI Native EMR — The EMR Built for AI",
  description:
    "A next-generation Electronic Medical Records system where AI is the foundation, not a plugin. Launching December 2026.",
  metadataBase: new URL("https://ainativeemr.com"),
  openGraph: {
    title: "AI Native EMR — The EMR Built for AI, Not Bolted On",
    description:
      "A next-generation EMR where AI is the foundation. Natural language in, structured data out. Launching Dec 2026.",
    siteName: "AI Native EMR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Native EMR",
    description: "The EMR Built for AI, Not Bolted On.",
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "ko")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${playfair.variable} ${spaceGrotesk.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

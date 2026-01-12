 import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Navbar from "@/src/components/Navbar"; 
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/src/components/Footer";
const locales = ["en", "ru"];

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }> | { locale: string };
}) {
   const resolvedParams = await params;
  const locale = resolvedParams.locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className="pt-16">
        <ThemeProvider attribute="class">
          <NextIntlClientProvider locale={locale} messages={messages}>
             <Navbar />  
            <main>
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
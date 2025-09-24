import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/contexts/AppContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Notification from "@/components/ui/Notification";
import PageTransitionWrapper from "@/components/ui/PageTransitionWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Big Chiefs Kush - Premium Cannabis Products",
  description: "Discover our carefully curated selection of premium cannabis products. Quality, safety, and satisfaction guaranteed with every purchase.",
  keywords: "cannabis, marijuana, dispensary, premium, quality, lab tested",
  authors: [{ name: "Big Chiefs Kush" }],
  openGraph: {
    title: "Big Chiefs Kush - Premium Cannabis Products",
    description: "Discover our carefully curated selection of premium cannabis products. Quality, safety, and satisfaction guaranteed with every purchase.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Chiefs Kush - Premium Cannabis Products",
    description: "Discover our carefully curated selection of premium cannabis products. Quality, safety, and satisfaction guaranteed with every purchase.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white">
        <AppProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 relative pt-0">
              <PageTransitionWrapper>
                {children}
              </PageTransitionWrapper>
            </main>
            <Footer />
            <Notification />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}

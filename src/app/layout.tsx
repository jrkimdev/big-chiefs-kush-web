import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/contexts/AppContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Notification from "@/components/ui/Notification";
import PageTransitionWrapper from "@/components/ui/PageTransitionWrapper";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Big Chiefs Kush - Premium Cannabis Products",
  description: "Discover our carefully curated selection of premium cannabis products. Quality, safety, and satisfaction guaranteed with every purchase.",
  keywords: "cannabis, marijuana, dispensary, premium, quality, lab tested",
  authors: [{ name: "Big Chiefs Kush" }],
  icons: {
    icon: '/logos/main-logo.png',
    shortcut: '/logos/main-logo.png',
    apple: '/logos/main-logo.png',
  },
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
    <html lang="en" className={spaceGrotesk.variable}>
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

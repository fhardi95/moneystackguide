import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://moneystackguide.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MoneyStackGuide — Credit Cards, Side Income & Business Guides",
    template: "%s | MoneyStackGuide",
  },
  description:
    "Independent, jargon-free money guidance: credit cards, making money, starting a business, and earning with AI. Practical guides, no hype.",
  openGraph: {
    type: "website",
    siteName: "MoneyStackGuide",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
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
    <html lang="en">
      <body className="font-body bg-paper text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

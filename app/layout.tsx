import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://shamsh-tabrez-portfolio.shaikhtabrez56.chatgpt.site",
  ),
  title: "Shamsh Tabrez Shaikh | Data Analyst & Power BI",
  description:
    "Ontario Data Analyst and Power BI Developer portfolio featuring NovaTrade: SQL Server, dimensional modeling, DAX, Power Query, RLS, and validated BI reporting.",
  keywords: [
    "Shamsh Tabrez Shaikh",
    "Data Analyst Ontario",
    "Power BI Developer",
    "SQL Server",
    "DAX",
    "Power Query",
    "Dimensional Modeling",
    "Business Intelligence",
    "BI Analyst Canada",
  ],
  authors: [{ name: "Shamsh Tabrez Shaikh" }],
  creator: "Shamsh Tabrez Shaikh",
  publisher: "Shamsh Tabrez Shaikh",
  category: "Data Analytics and Business Intelligence",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Shamsh Tabrez Shaikh | Data Analyst & Power BI",
    description:
      "Data & BI portfolio featuring NovaTrade v1.0.0: SQL Server, dimensional modeling, DAX, dynamic RLS, validation, and decision-ready Power BI reporting.",
    type: "website",
    url: "/",
    siteName: "Shamsh Tabrez Shaikh - Data & BI Portfolio",
    locale: "en_CA",
    images: [
      {
        url: "/novatrade/01-executive-overview.png",
        width: 1317,
        height: 732,
        alt: "NovaTrade Power BI Executive Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shamsh Tabrez Shaikh | Data Analyst & Power BI",
    description:
      "Ontario Data & BI portfolio featuring an end-to-end SQL Server and Power BI analytics platform.",
    images: ["/novatrade/01-executive-overview.png"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

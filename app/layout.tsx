import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LayoutContent from "@/components/LayoutContent";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shahabuddin",
  description: "Modern professional portfolio of Shahab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans transition-colors duration-300 overflow-x-hidden">
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}

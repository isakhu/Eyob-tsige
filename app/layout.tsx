import type { Metadata } from "next";
import { Pacifico, Noto_Serif_Ethiopic } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

const notoEthiopic = Noto_Serif_Ethiopic({
  subsets: ["ethiopic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-ethiopic",
});

export const metadata: Metadata = {
  title: "Eyob Tsige Terefe",
  description:
    "The professional profile of Eyob Tsige Terefe — education, leadership, media and community work.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${pacifico.variable} ${notoEthiopic.variable} antialiased bg-[#FDFBF7]`}>{children}</body>
    </html>
  );
}

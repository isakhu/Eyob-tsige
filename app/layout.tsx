import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Noto_Serif_Ethiopic } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const notoEthiopic = Noto_Serif_Ethiopic({
  subsets: ["ethiopic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-ethiopic",
});

export const metadata: Metadata = {
  title: "Eyob Tsige Terefe — Education, Media & Leadership",
  description:
    "The professional profile of Eyob Tsige Terefe, bringing together education, leadership, media, entrepreneurship and wisdom.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={display.variable + " " + sans.variable + " " + notoEthiopic.variable}>
        {children}
      </body>
    </html>
  );
}

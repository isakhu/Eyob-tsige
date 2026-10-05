import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Serif_Ethiopic } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoEthiopic = Noto_Serif_Ethiopic({
  subsets: ["ethiopic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-ethiopic",
});

export const metadata: Metadata = {
  title: "Eyob Tsige Terefe | Author, Educator & Leader",
  description: "The official portfolio of Eyob Tsige Terefe. Explore his literary works, educational leadership at Union Academy, and media broadcasts via Semay Multimedia.",
  keywords: ["Eyob Tsige Terefe", "Ethiopian Author", "Semay Multimedia", "Union Academy", "Ethiopian Leadership", "Amharic Proverbs", "Hawassa"],
  authors: [{ name: "Eyob Tsige Terefe" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eyobtsige.com",
    title: "Eyob Tsige Terefe | Author & Leader",
    description: "The professional profile of Eyob Tsige Terefe — education, leadership, media and community work.",
    siteName: "Eyob Tsige Terefe Official",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eyob Tsige Terefe | Author & Leader",
    description: "The professional profile of Eyob Tsige Terefe — education, leadership, media and community work.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${notoEthiopic.variable} font-sans antialiased bg-[#FDFBF7]`}>
        {children}
      </body>
    </html>
  );
}

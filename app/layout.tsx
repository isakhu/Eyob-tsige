import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
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
      <body className={`${pacifico.variable} antialiased`}>{children}</body>
    </html>
  );
}

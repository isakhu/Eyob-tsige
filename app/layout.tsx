import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@vepando/liquid-glass-react/style.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jayesh Bairagi | Portfolio",
  description:
    "The portfolio of Jayesh Bairagi, Computer Science student learning, experimenting, and building projects.",
    verification: {
      google: "WIW3OCb7A64-5m9jCTOxvzmWV55cjh_NLJqYHy7anqI",
    },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@vepando/liquid-glass-react/style.css";
import ThemeSwitcher from "./components/ThemeSwitcher";

const SITE_URL = "https://jayesh-bairagi.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jayesh Bairagi — Computer Science Student & Developer",
    template: "%s | Jayesh Bairagi",
  },
  description:
    "Portfolio of Jayesh Bairagi, Computer Science student at MIT College, Ujjain. Building projects in C, C++, Python, HTML and SQL.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Jayesh Bairagi Portfolio",
    title: "Jayesh Bairagi — Computer Science Student & Developer",
    description:
      "Portfolio of Jayesh Bairagi, Computer Science student at MIT College, Ujjain. Building projects in C, C++, Python, HTML and SQL.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jayesh Bairagi — Computer Science Student & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayesh Bairagi — Computer Science Student & Developer",
    description:
      "Portfolio of Jayesh Bairagi, Computer Science student at MIT College, Ujjain. Building projects in C, C++, Python, HTML and SQL.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "WIW3OCb7A64-5m9jCTOxvzmWV55cjh_NLJqYHy7anqI",
  },
};

/* Person JSON-LD: helps Google associate this page with the name "Jayesh Bairagi".
   Structured data improves search relevance but does not guarantee rankings
   or a Knowledge Panel. Social URLs are taken directly from the contact section. */
const personJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jayesh Bairagi",
  url: SITE_URL,
  sameAs: [
    "https://github.com/BugWithJayesh",
    "https://www.linkedin.com/in/jayesh-bairagi",
    "https://linktr.ee/jayeshbairagi",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "MIT College",
  },
  knowsAbout: ["C", "C++", "Python", "HTML", "SQL"],
});

/* Inline script: runs before first paint, writes data-theme to <body>.
   Targeting body (not html) means React never owns this attribute,
   so there is no hydration mismatch when localStorage differs from the
   server-rendered default. */
const themeScript = `
(function(){
  var VALID = ["purple","cyan","emerald","rose","amber"];
  var saved;
  try { saved = localStorage.getItem("jb-portfolio-theme"); } catch(e){}
  document.body.dataset.theme = (VALID.indexOf(saved) !== -1) ? saved : "purple";
})();
`.trim();

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* dangerouslySetInnerHTML is intentional here: this tiny script must
          execute synchronously before the first paint so there is no theme flash. */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: personJsonLd }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        {/* Fixed theme switcher – rendered outside <main> so it never overlaps content */}
        <div
          className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-md sm:right-6 sm:top-5"
          style={{ isolation: "isolate" }}
        >
          <ThemeSwitcher />
        </div>
      </body>
    </html>
  );
}

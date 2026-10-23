import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CursorSparkles, ScrollProgress } from "@/sections/ScrollEffects";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://ramprakashyallavula.com";
const description = "Ram Prakash Yallavula is a software engineer building full-stack web applications, backend APIs, data pipelines, and cloud systems with React, TypeScript, Python, Java, and AWS.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ram Prakash Yallavula | Software Engineer",
    template: "%s | Ram Prakash Yallavula",
  },
  description,
  applicationName: "Ram Prakash Yallavula",
  authors: [{ name: "Ram Prakash Yallavula", url: siteUrl }],
  creator: "Ram Prakash Yallavula",
  keywords: ["Ram Prakash Yallavula", "Software Engineer", "New Grad Software Engineer", "Full-Stack Developer", "Backend Engineer", "React", "TypeScript", "Next.js", "Python", "FastAPI", "Java", "Spring Boot", "AWS", "PostgreSQL"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ram Prakash Yallavula | Software Engineer",
    description: "Software engineer focused on full-stack applications, backend systems, data pipelines, and cloud delivery.",
    url: siteUrl,
    siteName: "Ram Prakash Yallavula",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ram Prakash Yallavula | Software Engineer",
    description: "Software engineer focused on full-stack applications, backend systems, data pipelines, and cloud delivery.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#d6e6e6" },
    { media: "(prefers-color-scheme: dark)", color: "#1e2633" },
  ],
  colorScheme: "light dark",
};

const themeScript = `try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}`;

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Ram Prakash Yallavula",
  url: siteUrl,
  mainEntity: {
    "@type": "Person",
    name: "Ram Prakash Yallavula",
    jobTitle: "Software Engineer",
    url: siteUrl,
    email: "mailto:yallavularamprakash@gmail.com",
    knowsAbout: ["Software engineering", "Full-stack development", "Backend APIs", "Data pipelines", "Cloud computing", "React", "TypeScript", "Python", "Java", "AWS"],
    sameAs: [
      "https://github.com/ramprakashyallavula",
      "https://www.linkedin.com/in/ramprakash-yallavula/",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans antialiased">
        {/* Runs before first paint so the saved or system theme applies without a flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <ScrollProgress />
        <CursorSparkles />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}

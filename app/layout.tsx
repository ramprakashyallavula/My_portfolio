import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://ramprakashyallavula.com"),
  title: "Ram Prakash Yallavula | Software Engineer",
  description: "Portfolio of Ram Prakash Yallavula - Software Engineer specializing in backend systems, APIs, and cloud applications.",
  alternates: {
    canonical: "https://ramprakashyallavula.com",
  },
  openGraph: {
    title: "Ram Prakash Yallavula | Software Engineer",
    description: "Software engineer focused on backend systems, data pipelines, cloud applications, and thoughtful product experiences.",
    url: "https://ramprakashyallavula.com",
    siteName: "Ram Prakash Yallavula",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Ram Prakash Yallavula | Software Engineer",
    description: "Software engineer focused on backend systems, data pipelines, and cloud applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans antialiased">
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
        <Script
        id="profile-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: "Ram Prakash Yallavula",
            url: "https://ramprakashyallavula.com",
            mainEntity: {
              "@type": "Person",
              name: "Ram Prakash Yallavula",
              jobTitle: "Software Engineer",
              url: "https://ramprakashyallavula.com",
              sameAs: [
                "https://github.com/ramprakashyallavula",
                "https://www.linkedin.com/in/ramprakash-yallavula/",
              ],
            },
          }),
        }}
        />
      </body>
    </html>
  );
}

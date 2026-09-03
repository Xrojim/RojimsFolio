import type { Metadata } from "next";
import { Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/lib/siteConfig";

const instrumentSerifHeading = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
});

const IBMPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400"],
});

const siteConfig = {
  name: "Pritha Karki",
  title: "Pritha Karki | Frontend Developer",
  description:
    "A frontend developer building clean, responsive, and user-friendly web applications with React, Next.js, TypeScript, and Tailwind CSS. Explore my projects and open-source work.",
  url: SITE_URL,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  alternates: {
    canonical: "/",
  },

  title: {
    default: siteConfig.title,
    template: "%s | Pritha Karki",
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  keywords: [
    "Pritha Karki",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Portfolio",
    "Projects",
    "Web Developer",
    "Nepal",
  ],

  authors: [{ name: "Pritha Karki" }],
  creator: "Pritha Karki",
  publisher: "Pritha Karki",

  category: "Technology",

  icons: {
    // Rounded, transparent-cornered PNG for browser tabs and bookmarks.
    icon: [{ url: "/icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: ["/icon.png"],
    // iOS applies its own squircle mask, so the apple icon stays square.
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "Pritha Karki",
    title: siteConfig.title,
    description: siteConfig.description,
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@pritha_karki",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        instrumentSerifHeading.variable,
        IBMPlexMono.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col items-center overflow-x-clip">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

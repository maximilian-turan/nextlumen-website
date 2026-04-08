import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextLumen - KI-Beratung & Automatisierung",
  description: "Professionelle KI-Beratung, KI-Agenten, Workflow-Optimierung und Automatisierungslösungen für Unternehmen. Bauen Sie die Zukunft mit NextLumen.",
  keywords: ["KI-Beratung", "Künstliche Intelligenz", "Automatisierung", "KI-Agenten", "Workflow", "Digitalisierung"],
  authors: [{ name: "NextLumen" }],
  creator: "NextLumen",
  publisher: "NextLumen",
  openGraph: {
    title: "NextLumen - KI-Beratung & Automatisierung",
    description: "Professionelle KI-Beratung, KI-Agenten, Workflow-Optimierung und Automatisierungslösungen für Unternehmen.",
    url: "https://www.nextlumen.ai",
    siteName: "NextLumen",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextLumen - KI-Beratung & Automatisierung",
    description: "Professionelle KI-Beratung, KI-Agenten, Workflow-Optimierung und Automatisierungslösungen für Unternehmen.",
    creator: "@nextlumen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}

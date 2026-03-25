import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Refiner - Free AI Prompt Optimization Tool",
  description:
    "Refine your AI prompts to get better results. Free tool for text, image, and code prompt optimization. Powered by OpenAI.",
  keywords: [
    "prompt refiner",
    "AI prompt",
    "prompt optimization",
    "text prompt",
    "image prompt",
    "code prompt",
    "ChatGPT prompt",
    "AI tool",
    "free tool",
  ],
  authors: [{ name: "Prompt Refiner" }],
  creator: "Prompt Refiner",
  openGraph: {
    type: "website",
    url: "https://prompt-refiner.vercel.app",
    title: "Prompt Refiner - Free AI Prompt Optimization",
    description:
      "Refine your AI prompts to get better results with our free online tool.",
    siteName: "Prompt Refiner",
    images: [
      {
        url: "https://prompt-refiner.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prompt Refiner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompt Refiner - Free AI Prompt Optimization",
    description:
      "Refine your AI prompts to get better results with our free online tool.",
    images: ["https://prompt-refiner.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="canonical" href="https://prompt-refiner.vercel.app" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
        <footer className="border-t border-gray-200 bg-gray-50 px-4 py-6 text-center text-sm text-gray-600">
          <p>&copy; 2026 Prompt Refiner. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://daizyai.uk"),
  title: {
    default: "DaizyAI | Never Miss a Call Again",
    template: "%s | DaizyAI",
  },
  description: "Stop missing calls and start booking appointments automatically with our custom AI receptionist. High-end voice AI for service businesses.",
  keywords: [
    "AI Receptionist", 
    "Voice AI", 
    "Lead Qualification", 
    "Missed Call Service", 
    "Business Automation",
    "AI receptionist for roofers UK",
    "Missed call automation for plumbers",
    "Virtual receptionist for dental clinics",
    "Lead qualification voice AI for real estate",
    "24/7 call answering service for small business"
  ],
  authors: [{ name: "DaizyAI Team" }],
  creator: "DaizyAI",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://daizyai.uk",
    title: "DaizyAI | Never Miss a Call Again",
    description: "Stop missing calls and start booking appointments automatically with our custom AI receptionist.",
    siteName: "DaizyAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DaizyAI - Human sounding AI receptionists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DaizyAI | AI Receptionist",
    description: "Stop missing calls and start booking appointments automatically with our custom AI receptionist.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "hm2qYmC8WGYMKot31n9Xxc5frIX3DWWW7VRWnIxqVSg",
  },
};

import Navbar from "@/components/Navbar";
import JsonLd from "@/components/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

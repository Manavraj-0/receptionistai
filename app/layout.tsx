import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DaizyAI | Never Miss a Call Again",
  description: "Stop missing calls and start booking appointments automatically with our custom AI receptionist.",
  icons: {
    icon: "/icon.svg",
  },
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

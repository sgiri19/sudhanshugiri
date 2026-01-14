import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sudhanshu Giri | Program Product Leader & Enterprise AI Strategist",
  description: "Sudhanshu Giri is a Program Product Leader specializing in Enterprise AI. Building scalable AI systems for high-stakes environments at companies like ByteDance and Skit.ai.",
  keywords: "Sudhanshu Giri, Program Product Leader, Enterprise AI, AI Product Strategy, Product Management, AI Systems",
  authors: [{ name: "Sudhanshu Giri" }],
  openGraph: {
    title: "Sudhanshu Giri | Program Product Leader",
    description: "Building scalable AI systems for high-stakes environments",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

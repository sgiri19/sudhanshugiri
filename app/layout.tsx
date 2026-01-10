import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SG. | Program Leader & Product Strategist",
  description: "Personal portfolio and blog of Sudhanshu Giri.",
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

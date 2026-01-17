import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sudhanshu Giri | AI Delivery Leader | Conversational AI Product Manager | Bangalore",
  description: "AI Delivery Leader specializing in conversational AI for financial services and regulated industries. Led $1.5M+ ARR deployments across 12+ enterprise clients. Based in Bangalore, India.",
  keywords: "AI Delivery Leader, Conversational AI, Product Manager, Solutions Engineering, Financial Services AI, Enterprise AI, Bangalore, Program Manager, LLM Deployment, AI Governance, MCP Integration",
  authors: [{ name: "Sudhanshu Giri" }],
  openGraph: {
    title: "Sudhanshu Giri | AI Delivery Leader",
    description: "I scale AI from pilot to production and make it repeatable. Led conversational AI deployments generating $1.5M+ ARR across financial services.",
    url: "https://sudhanshugiri.vercel.app",
    type: "website",
    images: [
      {
        url: "https://sudhanshugiri.vercel.app/profile.webp",
        alt: "Sudhanshu Giri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudhanshu Giri | AI Delivery Leader",
    description: "I scale AI from pilot to production and make it repeatable.",
    images: ["https://sudhanshugiri.vercel.app/profile.webp"],
  },
  metadataBase: new URL("https://sudhanshugiri.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sudhanshu Giri",
              jobTitle: "AI Delivery Leader",
              description: "Product & Delivery Manager specializing in conversational AI for financial services and regulated industries",
              url: "https://sudhanshugiri.vercel.app",
              image: "https://sudhanshugiri.vercel.app/profile.webp",
              sameAs: [
                "https://linkedin.com/in/sudhanshugiri",
                "https://x.com/sudhanshugiri19",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Camcom",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              alumniOf: {
                "@type": "Organization",
                name: "Jawaharlal Nehru Technological University",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

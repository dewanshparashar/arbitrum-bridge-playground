import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arbitrum Bridge Playground",
  description:
    "Interactive playground for testing and customizing the Arbitrum Bridge interface. Explore different layouts, modes, and feature configurations for seamless cross-chain asset transfers.",
  keywords:
    "Arbitrum, Bridge, Cross-chain, DeFi, Widget, Interface, Playground, Testing",
  authors: [{ name: "Arbitrum" }],
  openGraph: {
    title: "Arbitrum Bridge Playground",
    description:
      "Interactive playground for testing and customizing the Arbitrum Bridge interface. Explore different layouts, modes, and feature configurations for seamless cross-chain asset transfers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900`}>{children}</body>
    </html>
  );
}

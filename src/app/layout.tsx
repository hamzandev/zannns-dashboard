import type {Metadata} from "next";
import {Space_Grotesk} from "next/font/google";
import "./globals.css";
import {Providers} from "@/components/providers";

const spaceGrotesk = Space_Grotesk({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Zannns - Dashboard App",
  titleTemplate: "%s - Zannns",
  defaultTitle: "Zannns - Dashboard App",
  description:
    "Zannns is a dashboard app that can be used for managing your business applications.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://zannns-dashboard.vercel.app/",
    title: "Zannns - Dashboard App",
    description:
      "Zannns is a dashboard app that can be used for managing your business applications.",
    images: [
      {
        url: "https://zannns-dashboard.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zannns - Dashboard App",
      },
    ],
    emails: ["hamzankechil@gmail.com"],
    /* @ts-ignore */
    site_name: "Zannns - Dashboard App",
  },
  twitter: {
    /* @ts-ignore */
    handle: "@hamzandev",
    cardType: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

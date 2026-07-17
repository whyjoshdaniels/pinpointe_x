import type { Metadata } from 'next';
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pinpointe Data Solutions",
  description: "Your Metro Detroit data consulting service — helping local companies turn messy spreadsheets, scattered information, and manual workflows into clean, automated, easy‑to‑use systems."
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D4BDNKBY2F"
          strategy="afterInteractive"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D4BDNKBY2F');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}

export const dynamic = "force-static";

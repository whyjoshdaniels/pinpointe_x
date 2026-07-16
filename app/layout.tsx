import type { Metadata } from 'next';
import "./globals.css";


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
    <html
      lang="en"
      >

      <body>{children}</body>
    </html>
  );
}

export const dynamic = "force-static";

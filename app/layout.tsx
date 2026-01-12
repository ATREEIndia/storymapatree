import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";


const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ATREE Story Map",
  description: "Created by Sreekuttan V N",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9WXQDB2KS3"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9WXQDB2KS3', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body className={`${inter.variable} ${firaCode.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

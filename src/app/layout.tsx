import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const font = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AdminMKT - FREE",
  description:
    "AdminMKT - Plantilla de administración para markeplace de código abierto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <Script
          src="https://attributa-server.onrender.com/t.js"
          data-domain="cm9um5wza000lc82ixpdftie1"
          defer
          strategy="afterInteractive"
        />
      </head>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <NextTopLoader showSpinner={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}

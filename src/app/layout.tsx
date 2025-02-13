import type {Metadata} from "next";
import {Urbanist} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/providers/theme-provider";
import NextTopLoader from "nextjs-toploader";

const font = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Campify",
  description: "Campify open source"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <NextTopLoader showSpinner={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}

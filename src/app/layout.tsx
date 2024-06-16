import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ThemeProvider from "@/lib/ThemeProvider";
import BodyTheme from "@/components/BodyTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quotes",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <BodyTheme>
            {children}
          </BodyTheme>
        </ThemeProvider>
      </body>
    </html>
  );
}

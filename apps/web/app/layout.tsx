import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "../provider/theme-provider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSPAGLU",
  description: "Find all cse subject at one place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={font.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

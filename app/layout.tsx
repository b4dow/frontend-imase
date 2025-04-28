import { ReactNode } from "react";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { MenuProvider } from "@/context/context.provider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imase",
  description: "venta y servicios de balanzas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html>
      <body className={`${outfit.className} antialiased  `}>
        <MenuProvider>{children}</MenuProvider>
      </body>
    </html>
  );
}

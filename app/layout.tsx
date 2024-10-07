import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ToastNotification from "@/components/ToastNotification";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imase",
  description: "venta y servicios de balanzas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${outfit.className}`}>
        {children}
        <ToastNotification />
      </body>
    </html>
  );
}

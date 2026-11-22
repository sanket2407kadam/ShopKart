import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StoreProvider } from "@/components/StoreProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopkart — Everyday discoveries, delivered",
  description: "Find the things you love, all in one place. Shop mobiles, electronics, fashion, home and more.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><StoreProvider><Navbar />{children}<Footer /></StoreProvider></body></html>;
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../app/components/nav"
import FooterBar from "@/components/ui/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maratha app",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={inter.className}>
<NavBar/>{children} <FooterBar/>
        </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/layout/navbar";
import Footer from "./_components/layout/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create To-Do App",
  description: "Generated by create roy wanyoike",
};

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
    <Navbar  />
    
        {children}
    <Footer />    

        </body>
      
    </html>
  );
}

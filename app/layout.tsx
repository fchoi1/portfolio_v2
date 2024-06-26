import Background from "@/components/background";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ThemeSwitch from "@/components/theme-switch";
import ActiveSectionProvider from "@/context/active-section";
import ThemeProvider from "@/context/theme-context";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabio | Personal Portfolio",
  description: "Fabio is a Full Stack Developer",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-200  dark:text-opactiy-90`}
      >
        <ThemeProvider>
          <Background />
          <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
          <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
          <ActiveSectionProvider>
            <Header />
            {children}
            <Toaster position="top-right" reverseOrder={false} />
            <ThemeSwitch />
            <Footer />
          </ActiveSectionProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

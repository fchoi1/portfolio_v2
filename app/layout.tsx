import type { Metadata } from "next";
import { Inter, Oxygen, Roboto } from "next/font/google";
 
import Header from "@/components/header";
import ActiveSectionProvider from "@/context/active-section";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Oxygen({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fabio | Personal Portfolio",
  description: "Fabio is a Full Stack Developer",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} h-[5000px] bg-gray-50 text-gray-950`}>
        {/* dark:bg-[#946263] */}
        {/* dark:bg-[#676394]" */}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ActiveSectionProvider>
          <Header />
          {children}
        </ActiveSectionProvider>
      </body>
    </html>
  );
}

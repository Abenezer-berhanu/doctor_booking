import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`relative h-full antialiased font-sans ${inter.className}`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="min-h-screen flex-1">{children}</main>
        <div className="">
          <Footer />
        </div>
      </body>
    </html>
  );
}

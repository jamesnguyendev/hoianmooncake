import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/headers/Header";
import Footer from "../components/Footer";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Hội An Mooncake - Bánh Trung Thu",
  description: "Hội An Mooncake - Bánh Trung Thu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        <NextTopLoader color="#f9cb4b" showSpinner={false} shadow={false} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

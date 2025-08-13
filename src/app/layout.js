import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Trygve Studio Private Limited | Best Architecture Company | Best Construction Company | Best Interior Designer",
  description:
    "Trygve Studio Private Limited is a full-fledged Architectural & allied Engineering service company based in Lucknow, India. We offer exceptional design, construction, and maintenance services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
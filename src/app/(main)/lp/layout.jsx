import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Footer from './footer.jsx'
import Header from './Header.jsx'
import Script from 'next/script';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TGWQ4KRSTH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TGWQ4KRSTH');
          `}
        </Script>
      </head>
      <body className="relative">

        {children}


      </body>
      <Footer />

    </html>
  );
}
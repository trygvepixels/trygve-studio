import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
 import Footer from './footer.jsx'
 import Header from './Header.jsx'
import Script from 'next/script';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="relative"  >
       
           {children}

           
        </body>
        <Footer/>

    </html>
  );
}
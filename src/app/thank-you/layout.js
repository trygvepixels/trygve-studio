import Footer from "./Footer";
import "./globals.css";
import Script from "next/script";
import Header from "./Header";
import TrackingScripts from "@/components/TrackingScripts";

export const metadata = {
  metadataBase: new URL("https://trygvestudio.com"),
  title: "Thank You | Trygve Studio",
  description:
    "Thank you for contacting Trygve Studio. We will get back to you shortly.",
  alternates: { canonical: "https://trygvestudio.com/thank-you" },
};

export default function InteriorDesignerLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="facebook-domain-verification"
          content="dv4u9r79rw2om8h9acntau6pjitnsy"
        />
        <TrackingScripts />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1510015907088015&ev=PageView&noscript=1"
          />
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=779698648292728&ev=PageView&noscript=1"
          />
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1526099745243779&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TVF6BFPQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />

        <div>{children}</div>
      </body>
    </html>
  );
}

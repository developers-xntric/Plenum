import Navbar from "../components/layout/navbar";
import "./globals.css";
import Footer from "../components/layout/footer";
import MobileNav from "../components/layout/mobile-nav";
import Script from "next/script";

export const metadata = {
  title: "Smart ERP Solutions in Middle East",
  description:
    "We deliver AI-powered ERP solutions in the Middle East and across the UAE, tailored to your operations expertly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" href="https://plenum-tech.com/" hrefLang="en-sa" />

        <link rel="alternate" href="https://plenum-tech.com/" hrefLang="en-ae" />

        <link rel="alternate" href="https://plenum-tech.com/" hrefLang="en" />

        <link rel="alternate" href="https://plenum-tech.com/" hrefLang="x-default" />
        {/* aHREFS */}
        <Script src="https://analytics.ahrefs.com/analytics.js" data-key="Luw5xUd6d9B9txp7yUTixw" async></Script>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-52FBQGQC');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V6RHZ3XPLZ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V6RHZ3XPLZ');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className="antialiased"
        cz-shortcut-listen="true"
        bis_register="W3sibWFzdGVyIjp0cnVlLCJleHRlbnNpb25JZCI6ImVwcGlvY2VtaG1ubGJoanBsY2drb2ZjaWllZ2..."
        __processed_351b6b1a-623f-4e5a-b6be-40cadde6a094__='true'
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-52FBQGQC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Navbar />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import Navbar from "../components/layout/navbar";
import "./globals.css";
import Footer from "../components/layout/footer";
import MobileNav from "../components/layout/mobile-nav";
import Script from "next/script";
import NavigationTracker from "@/components/NavigationTracker";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Smart ERP Solutions in Middle East",
  description:
    "We deliver AI-powered ERP solutions in the Middle East and across the UAE, tailored to your operations expertly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* AHREFS */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="MswbyUt+iwC9fs+QwP7lGw"
          async
        ></Script>

        <link rel="alternate" href="https://plenum-tech.com/" hrefLang="en-sa" />
        <link rel="alternate" href="https://plenum-tech.com/" hrefLang="en-ae" />
        <link rel="alternate" href="https://plenum-tech.com/" hrefLang="en" />
        <link
          rel="alternate"
          href="https://plenum-tech.com/"
          hrefLang="x-default"
        />

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

        {/* Google Analytics 4 (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V6RHZ3XPLZ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Initialize GA4 with your Measurement ID
            gtag('config', 'G-V6RHZ3XPLZ', {
              debug_mode: process.env.NODE_ENV === 'development',
              send_page_view: true
            });
          `}
        </Script>

        <GoogleAnalytics gaId="G-V6RHZ3XPLZ" />
      </head>

      <body
        className="antialiased"
        cz-shortcut-listen="true"
        bis_skin_checked="1"
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
        <NavigationTracker />
        {children}
        <Footer />

        {/* Custom GA4 Event for Page Load */}
        <Script id="plenum-ga4-event" strategy="afterInteractive">
          {`
            window.addEventListener('load', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'Plenum_Page_Load', {
                  event_category: 'engagement',
                  event_label: 'Plenum GA4 Custom Event',
                  value: 1
                });
                console.log('✅ GA4 Event Fired: Plenum_Page_Load | GA4 ID: G-V6RHZ3XPLZ');
              } else {
                console.warn('⚠️ GA4 not initialized yet.');
              }
            });
          `}
        </Script>

        {/* Scroll Depth Tracking Event */}
        <Script id="plenum-scroll-depth" strategy="afterInteractive">
          {`
            window.addEventListener('scroll', () => {
              const scrollPercent = Math.round(
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
              );
              if (scrollPercent >= 50 && !window.scrollEventFired) {
                window.scrollEventFired = true;
                if (typeof gtag === 'function') {
                  gtag('event', 'Scroll_Depth_50', {
                    event_category: 'engagement',
                    event_label: '50% Scroll Depth',
                    value: 1
                  });
                  console.log('✅ GA4 Event Fired: Scroll_Depth_50');
                } else {
                  console.warn('⚠️ GA4 not initialized for scroll depth.');
                }
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}

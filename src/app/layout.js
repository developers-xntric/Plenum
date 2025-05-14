import Navbar from "../components/layout/navbar";
import "./globals.css";
import Footer from "../components/layout/footer";
import MobileNav from "../components/layout/mobile-nav";
import Head from "next/head";

export const metadata = {
  title: "Smart ERP Solutions in Middle Eas",
  description: "We deliver AI-powered ERP solutions in the Middle East and across the UAE, tailored to your operations expertly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="noindex" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className="antialiased" cz-shortcut-listen="true">
        <Navbar />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}


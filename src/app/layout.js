// app/layout.js (or layout.tsx)

import Navbar from "../components/layout/navbar";
import "./globals.css";
import Footer from "../components/layout/footer";
import MobileNav from "../components/layout/mobile-nav";

// ✅ This is the correct way to include noindex, nofollow in App Router
export const metadata = {
  title: "Smart ERP Solutions in Middle East",
  description:
    "We deliver AI-powered ERP solutions in the Middle East and across the UAE, tailored to your operations expertly.",
  robots: "noindex, nofollow", // ✅ This adds <meta name="robots" content="noindex, nofollow" />
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased" cz-shortcut-listen="true">
        <Navbar />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

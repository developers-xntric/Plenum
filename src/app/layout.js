import Navbar from "../components/layout/navbar";
import "./globals.css";
import Footer from "../components/layout/footer";
import MobileNav from "../components/layout/mobile-nav";

export const metadata = {
  title: "Plenum",
  description: "ERP solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        cz-shortcut-listen="true"
      >
        <Navbar />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

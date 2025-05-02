import Navbar from "../components/layout/navbar";
import "./globals.css";
import Footer from "../components/layout/footer";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}

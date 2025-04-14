import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}

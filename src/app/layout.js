import NavBar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "JDCodebase",
  description: "Learn DSA and JavaScript with JDCodebase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}

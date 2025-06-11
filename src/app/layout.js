import NavBar from "@/components/common/Navbar";
import "./globals.css";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "JDCodebase - Tech Simplified",
  description:
    "Explore programming languages, DSA, projects, and blogs to elevate your developer journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700">
        <NavBar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

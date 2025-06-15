import "./globals.css";
import NavBar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "JDCodebase - Tech Simplified",
  description:
    "Explore programming languages, DSA, projects, and blogs to elevate your developer journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 text-white min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

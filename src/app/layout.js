import "./globals.css";
import NavBar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "JDCodebase - Tech Simplified",
  description:
    "Explore DSA, projects, blogs and elevate your dev journey with JDCodebase.",
  other: {
    "google-site-verification": "hQSdP4B_Lwo9VIf3Dp7aqfyVsp5Fi5DZURPpZDMKyT4",
    "og:title": "JDCodebase - Tech Simplified",
    "og:description":
      "Explore DSA, projects, blogs and elevate your dev journey with JDCodebase.",
    "og:url": "https://jdcodebase.vercel.app",
    "og:type": "website",
    "og:image": "https://jdcodebase.vercel.app/og-banner.png",

    "twitter:card": "summary_large_image",
    "twitter:title": "JDCodebase - Tech Simplified",
    "twitter:description":
      "Explore DSA, projects, blogs and elevate your dev journey with JDCodebase.",
    "twitter:image": "https://jdcodebase.vercel.app/og-banner.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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

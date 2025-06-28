import "./globals.css";
import NavBar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "JDCodebase - Tech Simplified",
  description:
    "Master DSA, build real-world projects, and explore dev blogs with JDCodebase. Start your tech journey now!",
  other: {
    "google-site-verification": "hQSdP4B_Lwo9VIf3Dp7aqfyVsp5Fi5DZURPpZDMKyT4",
    "og:title": "JDCodebase - Tech Simplified",
    "og:description":
      "Master DSA, build real-world projects, and explore dev blogs with JDCodebase.",
    "og:url": "https://jdcodebase.vercel.app",
    "og:type": "website",
    "og:image": "https://jdcodebase.vercel.app/og-banner.png",

    "twitter:card": "summary_large_image",
    "twitter:title": "JDCodebase - Tech Simplified",
    "twitter:description":
      "Master DSA, build real-world projects, and explore dev blogs with JDCodebase.",
    "twitter:image": "https://jdcodebase.vercel.app/og-banner.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111827" />
        <meta name="author" content="JDCodebase" />
        <meta
          name="keywords"
          content="Data Structures, Algorithms, JavaScript, React, MERN stack, DSA problems, coding tutorials, JDCodebase"
        />
        <link rel="canonical" href="https://jdcodebase.vercel.app" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "JDCodebase",
              url: "https://jdcodebase.vercel.app",
              description:
                "Master DSA, build real-world projects, and explore dev blogs with JDCodebase.",
              publisher: {
                "@type": "Organization",
                name: "JDCodebase",
                logo: {
                  "@type": "ImageObject",
                  url: "https://jdcodebase.vercel.app/og-banner.png",
                },
              },
            }),
          }}
        />
      </head>
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

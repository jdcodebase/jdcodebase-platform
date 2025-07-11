import Navbar from "@/components/common/Navbar";
import "./globals.css";
import Footer from "@/components/common/Footer";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "JDCodebase – Learn DSA, Projects & Blogs for Developers",
  description:
    "JDCodebase is your go-to platform for mastering DSA, JavaScript, and real-world web development projects. Learn through structured content, videos, and developer insights.",
  keywords: [
    "JDCodebase",
    "DSA questions",
    "LeetCode problems",
    "Data Structures and Algorithms",
    "JavaScript tutorials",
    "TypeScript",
    "C programming",
    "C++ programming",
    "Java programming",
    "Frontend development",
    "Backend development",
    "Full Stack Development",
    "MERN stack projects",
    "Next.js projects",
    "React projects",
    "MongoDB",
    "Express.js",
    "Node.js",
    "Web development",
    "Coding tutorials",
    "Learn programming",
    "Programming languages",
    "Interview preparation",
    "Tech blog",
    "Developer resources",
    "Code with clarity",
    "Placement preparation",
  ],
  metadataBase: new URL("https://jdcodebase.vercel.app/"),
  openGraph: {
    title: "JDCodebase – Learn DSA, Projects & Blogs for Developers",
    description:
      "Master data structures, algorithms, JavaScript, and hands-on projects with JDCodebase.",
    url: "https://jdcodebase.vercel.app/",
    siteName: "JDCodebase",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JDCodebase Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JDCodebase – Learn DSA, Projects & Blogs for Developers",
    description:
      "Your one-stop hub for all things tech – from programming languages and DSA to real-world projects.",
    images: ["/og-image.png"],
  },
  other: {
    "google-site-verification": "hQSdP4B_Lwo9VIf3Dp7aqfyVsp5Fi5DZURPpZDMKyT4",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black ${ubuntu.className}`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

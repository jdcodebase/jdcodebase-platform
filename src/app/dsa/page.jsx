import DsaMainContent from "@/components/dsa/DsaMainContent";
import DsaSidebar from "@/components/dsa/DsaSidebar";

export const metadata = {
  title:
    "Master Data Structures & Algorithms | DSA Practice Problems - JDCodebase",
  description:
    "Practice DSA with categorized problems, optimized solutions, and detailed explanations. Ideal for interviews & beginners.",
  keywords:
    "DSA problems, data structures, algorithms, LeetCode solutions, coding interview, DSA practice, JavaScript DSA, JDCodebase",
  robots: "index, follow",
  alternates: {
    canonical: "https://jdcodebase.vercel.app/dsa",
  },
  openGraph: {
    title:
      "Master Data Structures & Algorithms | DSA Practice Problems - JDCodebase",
    description:
      "Practice DSA with categorized problems, optimized solutions, and detailed explanations. Ideal for interviews & beginners.",
    url: "https://jdcodebase.vercel.app/dsa",
    type: "website",
    siteName: "JDCodebase",
    images: [
      {
        url: "https://jdcodebase.vercel.app/og-banner.png",
        width: 1200,
        height: 630,
        alt: "JDCodebase DSA Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Master Data Structures & Algorithms | DSA Practice Problems - JDCodebase",
    description:
      "Practice DSA with categorized problems, optimized solutions, and detailed explanations. Ideal for interviews & beginners.",
    images: ["https://jdcodebase.vercel.app/og-banner.png"],
  },
};

export default function DSAPage() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-neutral-950 text-white">
      <DsaSidebar />
      <main className="flex-1 p-6">
        <DsaMainContent />
      </main>
    </div>
  );
}

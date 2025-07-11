import Sidebar from "@/components/dsa/Sidebar";

export const metadata = {
  title: "DSA Tutorial - Learn Data Structures and Algorithms – JDCodebase",
  description:
    "Master Data Structures and Algorithms with practical explanations, problems, and JavaScript-based solutions. Start your DSA journey on JDCodebase.",
  keywords: [
    "Data Structures and Algorithms",
    "DSA for interviews",
    "Learn DSA",
    "JavaScript DSA",
    "DSA roadmap",
    "Time complexity",
    "LeetCode topics",
    "Coding patterns",
    "Recursion",
    "Dynamic programming",
    "Graph algorithms",
    "Sorting algorithms",
    "Backtracking",
    "Binary search",
    "Hash table",
    "Linked list",
    "JDCodebase DSA",
    "Tech interview prep",
    "Algorithm tutorials",
    "DSA in JavaScript",
  ],
  metadataBase: new URL("https://jdcodebase.vercel.app/"),
  openGraph: {
    title: "DSA Tutorial - Learn Data Structures and Algorithms – JDCodebase",
    description:
      "Dive into DSA concepts like arrays, trees, graphs, and dynamic programming with structured guides and problems.",
    url: "https://jdcodebase.vercel.app/dsa",
    siteName: "JDCodebase",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JDCodebase DSA Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DSA Tutorial - Learn Data Structures and Algorithms – JDCodebase",
    description:
      "Explore beginner to advanced DSA topics with examples, code, and visual explanations on JDCodebase.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function DSALayout({ children }) {
  return (
    <div className="md:flex">
      <Sidebar />
      <main className="flex-1 bg-gray-950 md:p-5 py-5 px-3 ">{children}</main>
    </div>
  );
}

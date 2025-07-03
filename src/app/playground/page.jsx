import Playground from "./Playground";

export const metadata = {
  title: "JavaScript Playground | JDCodebase",
  description:
    "Practice JavaScript live in the browser with our custom playground. Write, edit, and run code with real-time output — perfect for learning and experimenting!",
  keywords: [
    "JavaScript playground",
    "run JS online",
    "code editor",
    "JS live editor",
    "JDCodebase",
    "JavaScript code executor",
  ],
  openGraph: {
    title: "JavaScript Playground | JDCodebase",
    description:
      "Write, run, and test JavaScript code directly in your browser using our interactive playground. Ideal for practice and demos.",
    url: "https://jdcodebase.vercel.app/languages/js/playground",
    siteName: "JDCodebase",
    type: "website",
    images: [
      {
        url: "https://jdcodebase.vercel.app/og-banner.png",
        width: 1200,
        height: 630,
        alt: "JavaScript Playground - JDCodebase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Playground | JDCodebase",
    description:
      "Try JavaScript instantly in our browser-based playground. No setup needed. Run code and see output live.",
    images: ["https://jdcodebase.vercel.app/og-banner.png"],
  },
};

export default function PlaygroundPage() {
  return <Playground />;
}

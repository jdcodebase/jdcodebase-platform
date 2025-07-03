import WhatIsJavascript from "./content/what-is-js";

export const metadata = {
  title: "Learn JavaScript from Scratch | JDCodebase",
  description:
    "Explore beginner-friendly JavaScript tutorials, concepts, and DSA problems to master the language of the web. Start your JavaScript journey with JDCodebase.",
  keywords: [
    "JavaScript tutorial",
    "Learn JavaScript",
    "JavaScript basics",
    "JavaScript DSA",
    "JDCodebase",
    "Frontend development",
  ],
  openGraph: {
    title: "JavaScript DSA & Tutorials | JDCodebase",
    description:
      "Practice JavaScript DSA problems and explore tutorials curated for interview prep and real-world coding.",
    url: "https://jdcodebase.vercel.app/languages/js",
    siteName: "JDCodebase",
    type: "website",
    images: [
      {
        url: "https://jdcodebase.vercel.app/og-js.png",
        width: 1200,
        height: 630,
        alt: "JavaScript Learning on JDCodebase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Tutorials & DSA | JDCodebase",
    description:
      "Explore JavaScript concepts and DSA problems with clean solutions and beginner-friendly guides.",
    images: ["https://jdcodebase.vercel.app/og-js.png"],
  },
};

export default function DefaultJavaScriptPage() {
  return (
    <div>
      <WhatIsJavascript />
    </div>
  );
}

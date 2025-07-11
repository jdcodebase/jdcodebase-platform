import DsaTopicContent from "@/components/dsa/DsaTopicContent";
import { dsaTopicPages } from "@/data/dsa/dsaTopicPages";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const topic = dsaTopicPages.find(
    (t) => t.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!topic) {
    return {
      title: "Topic Not Found - JDCodebase",
      description: "This DSA topic does not exist.",
    };
  }

  return {
    title: `${topic.title} – Learn ${topic.title} in DSA | JDCodebase`,
    description: `Explore ${topic.title} problems, concepts, patterns, and JavaScript methods. Master ${topic.title} techniques with clear examples on JDCodebase.`,
    keywords: [
      "DSA",
      "DSA in JavaScript",
      "Leetcode",
      `${topic.title} problems`,
      `${topic.title} interview questions`,
      `Learn ${topic.title}`,
      `${topic.title} JavaScript`,
      "JDCodebase",
    ],
    openGraph: {
      title: `${topic.title} – JDCodebase`,
      description: `Master ${topic.title} DSA problems with live examples, JS code, and theory.`,
      url: `https://jdcodebase.vercel.app/dsa/${slug}`,
      siteName: "JDCodebase",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${topic.title} - JDCodebase`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${topic.title} – JDCodebase`,
      description: `Master ${topic.title} problems, concepts, and code with JDCodebase.`,
      images: ["/og-image.png"],
    },
  };
}

export default function DSATopicPage({ params }) {
  const { slug } = params;

  const topic = dsaTopicPages.find(
    (topic) => topic.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!topic) return notFound();

  return <DsaTopicContent topic={topic} />;
}

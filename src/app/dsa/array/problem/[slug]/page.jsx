import { getProblemData } from "@/lib/problemUtils";
import ProblemPage from "@/components/dsa/ProblemPage";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const problem = await getProblemData(params.slug);

  if (!problem) {
    return {
      title: "Problem Not Found | JDCodebase",
      description:
        "This problem was not found. Explore more DSA challenges on JDCodebase.",
      keywords: "DSA, coding problems, problem not found, JDCodebase",
    };
  }

  const baseUrl = "https://jdcodebase.vercel.app";
  const topic = problem?.category?.[0]?.toLowerCase?.() || "foundation";
  const fullUrl = `${baseUrl}/dsa/${topic}/problem/${params.slug}`;

  return {
    title: `${problem.title} | JDCodebase`,
    description: `Solve ${problem.title} (${problem.leetcodeId}) with step-by-step explanation, JavaScript code, and a video tutorial on JDCodebase.`,
    keywords: `${problem.title}, ${problem.category.join(
      ", "
    )}, DSA, JavaScript, JDCodebase`,
    openGraph: {
      title: `${problem.title} | JDCodebase`,
      description: `Solve ${problem.title} with full explanation and JS solution.`,
      url: fullUrl,
      siteName: "JDCodebase",
      images: [
        {
          url: `${baseUrl}/og-banner.png`,
          width: 1200,
          height: 630,
          alt: "JDCodebase DSA",
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${problem.title} | JDCodebase`,
      description: `Solve ${problem.title} with clear JS explanations.`,
      images: [`${baseUrl}/og-banner.png`],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

export default async function ProblemDynamicPage({ params }) {
  const problem = await getProblemData(params.slug);

  if (!problem) return notFound();

  return <ProblemPage slug={params.slug} />;
}

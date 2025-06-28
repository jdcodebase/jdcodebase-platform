import { getProblemData } from "@/lib/problemUtils";
import ProblemPage from "@/components/dsa/ProblemPage";

export async function generateMetadata({ params }) {
  const problem = await getProblemData(params.slug);

  if (!problem) {
    return {
      title: "Problem Not Found | JDCodebase",
      description:
        "This problem was not found. Check other DSA problems on JDCodebase.",
    };
  }

  return {
    title: `${problem.title} | JDCodebase`,
    description: `Solve ${problem.title} (${problem.leetcodeId}) from the Foundation section. Includes approach, code, complexity, video, and resources.`,
    openGraph: {
      title: `${problem.title} | JDCodebase`,
      description: `Full solution to ${problem.title} from the Foundation section. Practice DSA with JavaScript on JDCodebase.`,
      url: `https://jdcodebase.vercel.app/dsa/foundation/problem/${params.slug}`,
      images: [
        {
          url: "https://jdcodebase.vercel.app/og-banner.png",
          width: 1200,
          height: 630,
          alt: "JDCodebase",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${problem.title} | JDCodebase`,
      description: "Explore full DSA solution with JS code and video tutorial.",
      images: ["https://jdcodebase.vercel.app/og-banner.png"],
    },
  };
}

export default function FoundationProblemPage({ params }) {
  return <ProblemPage slug={params.slug} />;
}

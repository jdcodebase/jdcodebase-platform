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
    description: `Solve ${problem.title} (${problem.leetcodeId}) with explanation, code, and video tutorial.`,
  };
}

export default function ArrayProblemPage({ params }) {
  return <ProblemPage slug={params.slug} />;
}

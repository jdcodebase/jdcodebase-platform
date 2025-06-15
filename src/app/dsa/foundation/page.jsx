export const metadata = {
  title: "DSA Foundations | JDCodebase",
  description:
    "Start your DSA journey with foundational problems. Practice easy problems that build core concepts like arrays, loops, and conditions.",
};

import Link from "next/link";
import ProblemsSidebar from "@/components/dsa/ProblemsSidebar";
import { problems } from "@/data/dsa/problem";

export default function FoundationsPage() {
  const foundationProblems = problems.filter((p) =>
    p.topics.includes("Foundation")
  );

  return (
    <div className="md:flex min-h-screen">
      <ProblemsSidebar />

      <main className="flex-1 px-6 py-4 md:p-6">
        <section className="py-8 max-w-4xl mx-auto text-gray-100">
          <h1 className="text-3xl font-bold mb-4">🧱 DSA Foundations</h1>
          <hr className="py-3 text-gray-400" />
          <p className="mb-4">
            Welcome to the <strong>Foundations</strong> section of JDCodebase!
          </p>
          <p className="mb-4">
            This section is perfect for beginners starting their journey in{" "}
            <strong>Data Structures and Algorithms (DSA)</strong>. These
            problems will help you:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Understand the problem-solving approach</li>
            <li>Master brute-force thinking</li>
            <li>Strengthen your basics before moving to intermediate topics</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">🧠 Prerequisites</h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Basic JavaScript syntax</li>
            <li>Loops, arrays, strings, and conditional logic</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">💡 Topics Covered</h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Arrays</li>
            <li>Strings</li>
            <li>Simple logic-based problems</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            📝 Foundation Problems
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            {foundationProblems.map((problem) => (
              <li key={problem.id}>
                <Link
                  href={problem.url}
                  className="text-blue-400 hover:underline"
                >
                  {problem.title} ({problem.leetcode})
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
}

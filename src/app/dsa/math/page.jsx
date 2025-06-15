export const metadata = {
  title: "Math DSA Problems | JDCodebase",
  description:
    "Practice math-based DSA problems including GCD, LCM, prime numbers, modular arithmetic, and number theory with clear explanations.",
};

import Link from "next/link";
import ProblemsSidebar from "@/components/dsa/ProblemsSidebar";
import { problems } from "@/data/dsa/problem";

export default function MathPage() {
  const mathProblems = problems.filter((p) => p.topics.includes("Math"));

  return (
    <div className="md:flex min-h-screen">
      <ProblemsSidebar />

      <main className="flex-1 px-6 py-4 md:p-6">
        <section className="py-8 max-w-4xl mx-auto text-gray-100">
          <h1 className="text-3xl font-bold mb-4">🧮 Math Problems</h1>
          <hr className="py-3 text-gray-400" />
          <p className="mb-4">
            Welcome to the <strong>Math</strong> section of JDCodebase!
          </p>
          <p className="mb-4">
            Math problems are common in technical interviews and help strengthen
            your logical and numerical reasoning. This section will help you:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>
              Understand problem-solving using number theory and arithmetic
            </li>
            <li>
              Practice common patterns like modular arithmetic, digit
              operations, etc.
            </li>
            <li>Sharpen your math logic for coding rounds</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">📝 Problems List</h2>
          <ol className="list-decimal list-inside space-y-1">
            {mathProblems.map((problem) => (
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

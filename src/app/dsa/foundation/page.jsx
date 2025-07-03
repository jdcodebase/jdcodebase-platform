import Link from "next/link";
import ProblemsSidebar from "@/components/dsa/ProblemsSidebar";
import { problems } from "@/data/dsa/problem";
import { topicSEO } from "@/data/dsa/topicSEO";

export const metadata = topicSEO["foundation"];

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
            If you're just starting with Data Structures & Algorithms, this is
            the best place to begin.
          </p>

          <p className="mb-4">
            These problems help you build confidence with core concepts and
            hands-on practice. You'll master simple array operations, string
            manipulations, and basic logic using JavaScript.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            🧠 What You’ll Learn
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Brute-force thinking and solving strategies</li>
            <li>Working with arrays, loops, and conditions</li>
            <li>Problem-solving habits and reading patterns</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            🛠️ JavaScript Fundamentals You’ll Use
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>
              <code>for</code>, <code>while</code> loops
            </li>
            <li>
              <code>if</code>, <code>else</code>, <code>switch</code> conditions
            </li>
            <li>
              <code>arr.length</code>, <code>arr[i]</code>, <code>push</code>,{" "}
              <code>pop</code>, <code>split</code>
            </li>
            <li>
              <code>string[index]</code>, <code>charCodeAt()</code>,{" "}
              <code>toLowerCase()</code>
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">📚 Problems List</h2>
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

import Link from "next/link";
import ProblemsSidebar from "@/components/dsa/ProblemsSidebar";
import { problems } from "@/data/dsa/problem";
import { topicSEO } from "@/data/dsa/topicSEO";

export const metadata = topicSEO["hash-set"];

export default function HashSetPage() {
  const hashsetProblems = problems.filter((p) => p.topics.includes("Hash Set"));
  const hashSetSEO = topicSEO["hash-set"];

  return (
    <div className="md:flex min-h-screen">
      <ProblemsSidebar />

      <main className="flex-1 px-6 py-4 md:p-6">
        <section className="py-8 max-w-4xl mx-auto text-gray-100">
          <h1 className="text-3xl font-bold mb-4">🧩 Hash Set Problems</h1>
          <hr className="py-3 text-gray-400" />

          <p className="mb-4">
            Welcome to the <strong>Hash Set</strong> section of JDCodebase!
          </p>
          <p className="mb-4">
            A <strong>Hash Set</strong> is a powerful data structure used to
            store
            <em> unique elements</em> and perform quick lookups in{" "}
            <strong>O(1) average time</strong>. It's widely used to detect
            duplicates, ensure uniqueness, and solve pattern-based problems.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            🔍 What You’ll Learn
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Detect duplicates in arrays or strings</li>
            <li>Perform fast existence checks</li>
            <li>Handle union, intersection, and difference of sets</li>
            <li>Write efficient logic for pattern constraints</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            🛠️ JavaScript Set Methods
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>
              <code>const set = new Set()</code> — create a new set
            </li>
            <li>
              <code>set.add(value)</code> — add element
            </li>
            <li>
              <code>set.has(value)</code> — check existence
            </li>
            <li>
              <code>set.delete(value)</code> — remove element
            </li>
            <li>
              <code>set.size</code> — count of unique items
            </li>
            <li>
              <code>Array.from(set)</code> — convert set to array
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">📝 Problems List</h2>
          <ol className="list-decimal list-inside space-y-2">
            {hashsetProblems.map((problem) => (
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

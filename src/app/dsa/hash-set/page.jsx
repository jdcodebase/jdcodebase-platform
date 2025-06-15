export const metadata = {
  title: "Hash Set DSA Problems | JDCodebase",
  description:
    "Solve DSA problems involving uniqueness, lookups, and constraints using hash sets. Learn with optimized code and logic.",
};

import Link from "next/link";
import ProblemsSidebar from "@/components/dsa/ProblemsSidebar";
import { problems } from "@/data/dsa/problem";

export default function HashSetPage() {
  const hashsetProblems = problems.filter((p) => p.topics.includes("Hash Set"));

  return (
    <div className="md:flex min-h-screen">
      <ProblemsSidebar />

      <main className="flex-1 px-6 py-4 md:p-6">
        <section className="py-8 max-w-4xl mx-auto text-gray-100">
          <h1 className="text-3xl font-bold mb-4">🧩 HashSet Problems</h1>
          <hr className="py-3 text-gray-400" />

          <p className="mb-4">
            Welcome to the <strong>HashSet</strong> section of JDCodebase!
          </p>
          <p className="mb-4">
            HashSet is a powerful data structure that allows you to store
            **unique elements** and check for existence in **constant time** (on
            average). It's widely used in problems involving **duplicates,
            lookups**, and **set operations**.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            🔍 What You’ll Learn
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Detecting duplicates in arrays or strings</li>
            <li>Fast element existence checks</li>
            <li>Set operations like union, intersection, and difference</li>
            <li>Real-world applications in frequency and pattern problems</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            🛠️ Common JavaScript Methods
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>
              <code>const set = new Set()</code> — create a new set
            </li>
            <li>
              <code>set.add(value)</code> — add value to set
            </li>
            <li>
              <code>set.has(value)</code> — check if value exists
            </li>
            <li>
              <code>set.delete(value)</code> — remove value
            </li>
            <li>
              <code>set.size</code> — get number of unique items
            </li>
            <li>
              <code>Array.from(set)</code> — convert back to array
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

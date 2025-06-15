export const metadata = {
  title: "Hash Map DSA Problems | JDCodebase",
  description:
    "Practice DSA problems using hash maps. Learn frequency counting, prefix sums, and mapping patterns with efficient code examples.",
};

import Link from "next/link";
import ProblemsSidebar from "@/components/dsa/ProblemsSidebar";
import { problems } from "@/data/dsa/problem";

export default function HashMapPage() {
  const hashmapProblems = problems.filter((p) => p.topics.includes("Hash Map"));

  return (
    <div className="md:flex min-h-screen">
      <ProblemsSidebar />

      <main className="flex-1 px-6 py-4 md:p-6">
        <section className="py-8 max-w-4xl mx-auto text-gray-100">
          <h1 className="text-3xl font-bold mb-4">🧠 HashMap Problems</h1>
          <hr className="py-3 text-gray-400" />

          <p className="mb-4">
            Welcome to the <strong>HashMap</strong> section of JDCodebase!
          </p>
          <p className="mb-4">
            HashMaps (also called dictionaries or objects in JavaScript) are
            extremely useful in DSA for storing key-value pairs and counting
            frequencies. They offer constant-time average performance for
            inserts and lookups.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            📘 What You’ll Learn
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Count frequencies of characters, elements, or patterns</li>
            <li>Track positions or occurrences efficiently</li>
            <li>Design look-up and cache-based logic</li>
            <li>Optimize brute force problems using HashMaps</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            🛠️ Common JavaScript Methods
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>
              <code>const map = new Map()</code> — create a new HashMap
            </li>
            <li>
              <code>map.set(key, value)</code> — insert/update value
            </li>
            <li>
              <code>map.get(key)</code> — get value for key
            </li>
            <li>
              <code>map.has(key)</code> — check if key exists
            </li>
            <li>
              <code>map.delete(key)</code> — remove key
            </li>
            <li>
              <code>map.size</code> — number of key-value pairs
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">📝 Problems List</h2>
          <ol className="list-decimal list-inside space-y-2">
            {hashmapProblems.map((problem) => (
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

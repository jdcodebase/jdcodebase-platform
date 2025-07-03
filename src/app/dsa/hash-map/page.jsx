import Link from "next/link";
import ProblemsSidebar from "@/components/dsa/ProblemsSidebar";
import { problems } from "@/data/dsa/problem";
import { topicSEO } from "@/data/dsa/topicSEO";

export const metadata = topicSEO["hash-map"];

export default function HashMapPage() {
  const hashmapProblems = problems.filter((p) => p.topics.includes("Hash Map"));

  return (
    <div className="md:flex min-h-screen">
      <ProblemsSidebar />

      <main className="flex-1 px-6 py-4 md:p-6">
        <section className="py-8 max-w-4xl mx-auto text-gray-100">
          <h1 className="text-3xl font-bold mb-4">🧠 Hash Map Problems</h1>
          <hr className="py-3 text-gray-400" />

          <p className="mb-4">
            Welcome to the <strong>Hash Map</strong> section of JDCodebase!
          </p>
          <p className="mb-4">
            Hash Maps (also known as dictionaries or JavaScript objects) are
            powerful tools for frequency counting, caching, and quick lookups in
            constant time. Mastering them gives you a big edge in solving
            real-world and coding interview problems.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            📘 What You’ll Learn
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Frequency counting of characters or elements</li>
            <li>Track indexes or latest positions using maps</li>
            <li>Prefix sum and sliding window tricks with hash maps</li>
            <li>Convert brute force to optimal using key-value caching</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            🛠️ Common JavaScript Methods
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>
              <code>const map = new Map()</code> — initialize hash map
            </li>
            <li>
              <code>map.set(key, value)</code>, <code>map.get(key)</code>
            </li>
            <li>
              <code>map.has(key)</code>, <code>map.delete(key)</code>
            </li>
            <li>
              <code>map.size</code>, <code>map.clear()</code>
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

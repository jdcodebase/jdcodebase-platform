import Link from "next/link";
import ProblemsSidebar from "@/components/dsa/ProblemsSidebar";
import { problems } from "@/data/dsa/problem";
import SEO from "@/components/common/SEO";

export default function ArrayPage() {
  const arrayProblems = problems.filter((p) => p.topics.includes("Array"));

  return (
    <>
      <SEO
        title="Array Data Structure Problems in JavaScript | JDCodebase"
        description="Master array data structure problems in JavaScript with step-by-step explanations, optimized solutions, and real interview-level DSA practice. Learn with JDCodebase."
        url="https://jdcodebase.vercel.app/dsa/array"
        image="https://jdcodebase.vercel.app/og-banner.png"
        keywords="array problems in JavaScript, JavaScript DSA, array data structure, array coding questions, JavaScript interview questions, two pointer problems, sliding window DSA, JDCodebase"
      />

      <div className="md:flex min-h-screen">
        <ProblemsSidebar />
        <main className="flex-1 px-6 py-4 md:p-6">
          <section className="py-8 max-w-4xl mx-auto text-gray-100">
            <h1 className="text-3xl font-bold mb-4">📦 Array Problems</h1>
            <hr className="py-3 text-gray-400" />

            <p className="mb-4">
              Welcome to the <strong>Array</strong> section of JDCodebase!
              Arrays are one of the most fundamental and frequently used data
              structures in programming. Most DSA problems begin here.
            </p>
            <p className="mb-4">
              Learning how to manipulate and traverse arrays is essential for
              becoming a strong problem-solver. Master key concepts and
              strengthen your foundation with these curated problems.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              🧠 What You’ll Learn
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>Basics: Traversal, insertion, deletion</li>
              <li>Prefix sums, difference arrays, and window-based patterns</li>
              <li>Sorting, searching, and optimizations with pointers</li>
              <li>Pattern recognition like frequency counts, merging, etc.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              🛠️ Useful JavaScript Methods
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>
                <code>arr.push(val)</code> — add at end
              </li>
              <li>
                <code>arr.pop()</code> — remove from end
              </li>
              <li>
                <code>arr.shift()</code>, <code>arr.unshift(val)</code> — front
                operations
              </li>
              <li>
                <code>arr.slice(start, end)</code> — get subarray
              </li>
              <li>
                <code>arr.splice(index, count)</code> — remove or insert
              </li>
              <li>
                <code>arr.includes(val)</code>, <code>arr.indexOf(val)</code>
              </li>
              <li>
                <code>arr.sort()</code>, <code>arr.reverse()</code>
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              📝 Problems List
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              {arrayProblems.map((problem) => (
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
    </>
  );
}

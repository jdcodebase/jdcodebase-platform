import Link from "next/link";
import ProblemsSidebar from "@/components/dsa/ProblemsSidebar";
import SEO from "@/components/common/SEO";
import { problems } from "@/data/dsa/problem";
import { topicSEO } from "@/data/dsa/topicSEO";

export const metadata = topicSEO["sliding-window"];

export default function SlidingWindowPage() {
  const slidingWindowProblems = problems.filter((p) =>
    p.topics.includes("Sliding Window")
  );
  const slidingWindowSEO = topicSEO["sliding-window"];

  return (
    <>
      <SEO {...slidingWindowSEO} />

      <div className="md:flex min-h-screen">
        <ProblemsSidebar />

        <main className="flex-1 px-6 py-4 md:p-6">
          <section className="py-8 max-w-4xl mx-auto text-gray-100">
            <h1 className="text-3xl font-bold mb-4">
              📊 Sliding Window Problems
            </h1>
            <hr className="py-3 text-gray-400" />

            <p className="mb-4">
              Welcome to the <strong>Sliding Window</strong> section of
              JDCodebase!
            </p>
            <p className="mb-4">
              The Sliding Window technique is one of the most powerful tools to
              optimize brute-force solutions for problems involving arrays or
              strings. It helps reduce nested loops and improve time complexity
              from <code>O(n²)</code> to <code>O(n)</code> in many real-world
              DSA problems.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              🔍 What is Sliding Window?
            </h2>
            <p className="mb-4">
              It’s a technique where you maintain a window (subarray or
              substring) that slides over the input data to process only the
              required portion at a time. You either:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>Fix the size of the window (e.g., size = k)</li>
              <li>Or vary the window dynamically based on conditions</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              🤔 When to Use Sliding Window?
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>
                Subarrays/substrings with max/min sum, length, or frequency
              </li>
              <li>Count of distinct/repeating elements in a window</li>
              <li>
                Checking existence of patterns in a range (e.g., anagrams)
              </li>
              <li>
                Problems that ask for optimal results over consecutive elements
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              ⚙️ How Sliding Window Works
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>
                Initialize two pointers – <code>left</code> and{" "}
                <code>right</code>
              </li>
              <li>
                Expand the window by moving the <code>right</code> pointer
              </li>
              <li>
                Shrink the window by moving the <code>left</code> pointer when
                constraints are violated
              </li>
              <li>Update the result (max/min/count) during the process</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              🧠 Common Patterns
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>Maximum sum of subarray of size k</li>
              <li>Longest substring with k distinct characters</li>
              <li>Smallest subarray with a sum ≥ target</li>
              <li>Find all anagrams of a pattern in a string</li>
              <li>Longest substring without repeating characters</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              📝 Problems List
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              {slidingWindowProblems.map((problem) => (
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

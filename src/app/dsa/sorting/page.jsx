import Link from "next/link";
import ProblemsSidebar from "@/components/dsa/ProblemsSidebar";
import { problems } from "@/data/dsa/problem";
import { topicSEO } from "@/data/dsa/topicSEO";

export const metadata = topicSEO["sorting"];

export default function SortingPage() {
  const sortingProblems = problems.filter((p) => p.topics.includes("Sorting"));
  const sortingSEO = topicSEO["sorting"];

  return (
    <div className="md:flex min-h-screen">
      <ProblemsSidebar />

      <main className="flex-1 px-6 py-4 md:p-6">
        <section className="py-8 max-w-4xl mx-auto text-gray-100">
          <h1 className="text-3xl font-bold mb-4">🧮 Sorting Problems</h1>
          <hr className="py-3 text-gray-400" />
          <p className="mb-4">
            Welcome to the <strong>Sorting</strong> section of JDCodebase!
          </p>
          <p className="mb-4">
            Sorting is a core concept in computer science and often appears in
            real-world tasks like data processing, searching, and optimization.
            Understanding different sorting techniques helps in writing
            efficient and elegant code.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">
            🔧 Basic Approach
          </h2>
          <p className="mb-4">
            - Choose the right sorting technique based on time and space needs.
            <br />
            - Sort the array in-place if possible, unless stability or extra
            copies are required.
            <br />- Combine sorting with other techniques like binary search,
            two pointers, or greedy logic.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">
            📚 Common Sorting Techniques
          </h2>
          <ol className="list-decimal list-inside mb-6 space-y-3">
            <li>
              <strong>Bubble Sort:</strong> Repeatedly swaps adjacent elements.
              Easy to understand but slow (O(n²)).
            </li>
            <li>
              <strong>Selection Sort:</strong> Repeatedly selects the minimum
              and moves it to the front. Also O(n²).
            </li>
            <li>
              <strong>Insertion Sort:</strong> Builds the final sorted array one
              element at a time. Great for small or nearly sorted arrays.
            </li>
            <li>
              <strong>Merge Sort:</strong> Divide and conquer approach that
              splits the array and merges it back sorted. Stable and guaranteed
              O(n log n).
            </li>
            <li>
              <strong>Quick Sort:</strong> Picks a pivot, partitions the array
              around it. Fast in practice (avg. O(n log n)), but worst-case
              O(n²).
            </li>
            <li>
              <strong>Counting Sort:</strong> Non-comparison sort. Best for
              sorting integers in a limited range in O(n + k) time.
            </li>
            <li>
              <strong>Built-in JavaScript Sort:</strong> Use{" "}
              <code>.sort((a, b) =&gt; a - b)</code> for numeric sort. Behind
              the scenes, it uses quicksort (V8 engine).
            </li>
          </ol>

          <h2 className="text-xl font-semibold mt-6 mb-2">📝 Problems List</h2>
          <ol className="list-decimal list-inside space-y-1">
            {sortingProblems.map((problem) => (
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

import Link from "next/link";
import ProblemsSidebar from "@/components/dsa/ProblemsSidebar";
import { problems } from "@/data/dsa/problem";
import { topicSEO } from "@/data/dsa/topicSEO";

export const metadata = topicSEO["two-pointer"];

export default function TwoPointerPage() {
  const twoPointerProblems = problems.filter((p) =>
    p.topics.includes("Two Pointer")
  );

  return (
    <div className="md:flex min-h-screen">
      <ProblemsSidebar />

      <main className="flex-1 px-6 py-4 md:p-6">
        <section className="py-8 max-w-4xl mx-auto text-gray-100">
          <h1 className="text-3xl font-bold mb-4">🔁 Two Pointer Problems</h1>
          <hr className="py-3 text-gray-400" />
          <p className="mb-4">
            Welcome to the <strong>Two Pointer</strong> section of JDCodebase!
          </p>
          <p className="mb-4">
            The two-pointer technique is one of the most powerful tools to
            reduce time complexity in array and string problems. It helps avoid
            nested loops and makes your solution more efficient.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">
            🛠️ Basic Approach
          </h2>
          <p className="mb-4">
            - Start with two pointers, usually at the beginning and end of the
            array (or both at the beginning). <br />
            - Move the pointers based on conditions, narrowing the problem
            space. <br />- Continue until the pointers meet or cross.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">
            📚 Common Patterns
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              <strong>Opposite Direction:</strong> Start one pointer from the
              beginning and the other from the end. Useful for problems like
              reversing, finding pairs, etc.
            </li>
            <li>
              <strong>Same Direction:</strong> Both pointers start from the
              beginning and one lags behind the other. This is common in sliding
              window problems.
            </li>
            <li>
              <strong>Nested Pointer Logic:</strong> One pointer iterates and
              another explores ahead. Used in problems like merging arrays,
              removing duplicates, etc.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">📝 Problems List</h2>
          <ol className="list-decimal list-inside space-y-1">
            {twoPointerProblems.map((problem) => (
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

export const metadata = {
  title: "String DSA Problems | JDCodebase",
  description:
    "Master string manipulation problems with clear explanations and code. Practice problems on substrings, reversals, and pattern matching.",
};

import Link from "next/link";
import ProblemsSidebar from "@/components/dsa/ProblemsSidebar";
import { problems } from "@/data/dsa/problem";

export default function StringProblemsPage() {
  const stringProblems = problems.filter((p) => p.topics.includes("String"));

  return (
    <div className="md:flex min-h-screen">
      <ProblemsSidebar />

      <main className="flex-1 px-6 py-4 md:p-6">
        <section className="py-8 max-w-4xl mx-auto text-gray-100">
          <h1 className="text-3xl font-bold mb-4">🔤 String Problems</h1>
          <hr className="py-3 text-gray-400" />
          <p className="mb-4">
            Welcome to the <strong>String</strong> section of JDCodebase!
          </p>
          <p className="mb-4">
            Strings are sequences of characters used in nearly every coding
            task. They are immutable in JavaScript, meaning any operation on a
            string returns a new one. Mastering string manipulation is key for
            interviews and daily coding.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            📚 Common String Methods in JavaScript
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>
              <code>str.length</code> — returns the number of characters
            </li>
            <li>
              <code>str.charAt(i)</code> or <code>str[i]</code> — access
              character at index
            </li>
            <li>
              <code>str.toLowerCase()</code> / <code>toUpperCase()</code> — case
              conversion
            </li>
            <li>
              <code>str.includes(sub)</code> — check for substring
            </li>
            <li>
              <code>str.indexOf(char)</code> — find first index of a character
            </li>
            <li>
              <code>str.split(" ")</code> — convert string into an array of
              words
            </li>
            <li>
              <code>str.trim()</code> — remove whitespace from both ends
            </li>
            <li>
              <code>str.replace(a, b)</code> — replace substring
            </li>
            <li>
              <code>str.slice(start, end)</code> — extract substring by index
            </li>
            <li>
              <code>str.substring(start, end)</code> — similar to slice, works
              without negatives
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">🧠 You'll Learn</h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Character frequency and counting logic</li>
            <li>String reversal, palindrome checks, and substrings</li>
            <li>Two-pointer techniques on strings</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">📝 Problems List</h2>
          <ol className="list-decimal list-inside space-y-2">
            {stringProblems.map((problem) => (
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

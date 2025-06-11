import Link from "next/link";
import { foundationProblems } from "@/data/foundations/problems";

export default function FoundationsPage() {
  const arrayProblems = foundationProblems.filter((p) => p.topic === "Array");
  const stringProblems = foundationProblems.filter((p) => p.topic === "String");

  return (
    <main className="px-4 py-8 max-w-4xl mx-auto text-gray-100">
      <h1 className="text-3xl font-bold mb-4">🧱 DSA Foundations</h1>
      <hr className="py-3 text-gray-400" />
      <p className="mb-4">
        Welcome to the <strong>Foundations</strong> section of JDCodebase!
      </p>
      <p className="mb-4">
        This section is perfect for beginners starting their journey in{" "}
        <strong>Data Structures and Algorithms (DSA)</strong>. These problems
        will help you:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Understand the problem-solving approach</li>
        <li>Master brute-force thinking</li>
        <li>Strengthen your basics before moving to intermediate topics</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">🧠 Prerequisites</h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Basic JavaScript syntax</li>
        <li>Loops, arrays, strings, and conditional logic</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">💡 Topics Covered</h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Arrays</li>
        <li>Strings</li>
        <li>Simple logic-based problems</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">📝 Problems List</h2>

      <h3 className="text-lg font-medium mt-4 mb-1">📌 Array Problems</h3>
      <ul className="list-disc list-inside mb-4 space-y-1">
        {arrayProblems.map((problem) => (
          <li key={problem.id}>
            <Link href={problem.url} className="text-blue-400 hover:underline">
              {problem.title} ({problem.leetcode})
            </Link>
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-medium mt-4 mb-1">🧵 String Problems</h3>
      <ul className="list-disc list-inside space-y-1">
        {stringProblems.map((problem) => (
          <li key={problem.id}>
            <Link href={problem.url} className="text-blue-400 hover:underline">
              {problem.title} ({problem.leetcode})
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

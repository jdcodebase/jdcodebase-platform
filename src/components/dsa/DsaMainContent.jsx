import { topics } from "@/data/dsaTopicData";
import Link from "next/link";

export default function DsaMainContent() {
  return (
    <div className="flex-1 p-6 text-white bg-neutral-950 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Data Structures & Algorithms</h1>

      <p className="text-gray-300 mb-6">
        DSA is the foundation of efficient problem solving in programming. It is
        used in real-world applications like search engines, databases, routing
        systems, and more. Mastering DSA helps in cracking coding interviews and
        building better software.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧠 Prerequisites</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Basic Programming (Loops, Conditions, Functions)</li>
          <li>Understanding of a Programming Language (C++, Java, or JS)</li>
          <li>Logical Thinking & Problem Solving</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💻 Recommended Languages</h2>
        <p className="text-gray-300">
          C++, Java, or JavaScript — use what you’re comfortable with. All
          topics here are language-agnostic, but examples will often be in C++
          and JS.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">📚 DSA Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/dsa/${topic.slug}`}
              className="bg-neutral-800 p-4 rounded-xl shadow hover:bg-neutral-700 transition hover:shadow-md shadow-white "
            >
              <h3 className="text-lg font-bold text-blue-400 mb-1">
                {topic.name}
              </h3>
              <p className="text-gray-400 text-sm">{topic.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

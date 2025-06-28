import { topics } from "@/data/dsaTopicData";
import Link from "next/link";

export default function DsaMainContent() {
  return (
    <div className="flex-1 p-6 text-white bg-neutral-950 min-h-screen rounded-lg shadow-md shadow-neutral-300">
      <h1 className="text-3xl font-bold mb-4" id="main-heading">
        🧠 Data Structures & Algorithms
      </h1>

      <p className="text-gray-400 mb-6 leading-relaxed">
        DSA is the backbone of efficient problem-solving. From search engines
        and databases to routing systems and games, it powers real-world
        applications. Mastering DSA sharpens your logic, boosts interview
        success, and helps build scalable software.
      </p>

      <section className="mb-6" aria-labelledby="prerequisites-heading">
        <h2 id="prerequisites-heading" className="text-xl font-semibold mb-2">
          📌 Prerequisites
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Basic programming: loops, conditions, functions</li>
          <li>Comfort with any language (C++, Java, or JavaScript)</li>
          <li>Logical thinking & debugging skills</li>
        </ul>
      </section>

      <section className="mb-6" aria-labelledby="languages-heading">
        <h2 id="languages-heading" className="text-xl font-semibold mb-2">
          💻 Recommended Languages
        </h2>
        <p className="text-gray-300 leading-relaxed">
          C++, Java, or JavaScript — use what you're most comfortable with.
          Concepts remain the same across languages, and most examples here use
          JavaScript and C++.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="topics-heading">
        <h2 id="topics-heading" className="text-xl font-semibold mb-4">
          📚 Explore DSA Topics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/dsa/${topic.slug.toLowerCase()}`}
              className="bg-neutral-800 p-4 rounded-xl hover:bg-neutral-700 transition-all duration-200 shadow hover:shadow-lg shadow-white/10 border border-neutral-700"
              title={`Go to ${topic.name} topic page`}
            >
              <h3 className="text-lg font-bold text-blue-400 mb-1">
                {topic.name}
              </h3>
              <p className="text-gray-400 text-sm">{topic.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

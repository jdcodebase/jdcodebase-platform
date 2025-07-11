import { dsaTopics } from "@/data/dsa/dsaTopics";
import Link from "next/link";

export default function DSA() {
  return (
    <div className="space-y-10 bg-gradient-to-br from-black via-gray-900 to-black px-5 md:px-10 py-10 rounded-md shadow-md shadow-white">
      <section>
        <h1 className="text-3xl font-bold text-blue-600">
          Data Structures and Algorithms (DSA)
        </h1>
        <p className="mt-4 text-gray-500">
          Data Structures and Algorithms (DSA) are the foundation of efficient
          problem-solving in programming. Whether you&apos;re preparing for
          coding interviews or building high-performance software, mastering DSA
          helps you write optimized and scalable code.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-500">Why Learn DSA?</h2>
        <ul className="list-disc pl-5 mt-2 text-gray-500 space-y-1">
          <li>Builds strong problem-solving and logical thinking skills.</li>
          <li>Essential for cracking technical interviews at top companies.</li>
          <li>Improves your ability to write optimized, maintainable code.</li>
          <li>
            Forms the core of competitive programming and coding contests.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-500">Prerequisites</h2>
        <p className="mt-2 text-gray-500">
          You should be familiar with the basics of any programming language
          (JavaScript, Python, C++, etc.) such as variables, loops, functions,
          and basic syntax. If you&apos;re new to coding, learn these first.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-500">
          Which Language Should I Use?
        </h2>
        <p className="mt-2 text-gray-500">
          DSA can be practiced in any language. At JDCodebase, we focus on{" "}
          <span className="font-medium text-white">JavaScript</span> to make it
          easy for web developers to master problem-solving without switching
          languages.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-500">
          How to Learn DSA?
        </h2>
        <ul className="list-decimal pl-5 mt-2 text-gray-500 space-y-1">
          <li>
            Understand the core concept of each data structure or algorithm.
          </li>
          <li>
            Practice problems daily (start from easy, move to medium and hard).
          </li>
          <li>
            Learn patterns like Two Pointer, Sliding Window, Binary Search, etc.
          </li>
          <li>Dry run your code and analyze time and space complexity.</li>
          <li>Watch video explanations and revise with notes or slides.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-500">
          Quick Overview of DSA Topics
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 text-gray-800">
          {dsaTopics.map((topic) => (
            <div
              className="bg-black/30 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:shadow-xl p-6 space-y-4 "
              key={topic.title}
            >
              <Link
                href={`/dsa/${topic.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <h3 className="text-lg font-light text-white">{topic.title}</h3>
                <p className="text-sm mt-1 text-gray-400">
                  {topic.description}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-500">Start Solving!</h2>
        <p className="mt-2 text-gray-500">
          Head over to specific DSA topics from the sidebar or below and start
          solving problems with explanations, code, and dry runs. Let&apos;s
          level up your coding skills together 🚀
        </p>
      </section>
    </div>
  );
}

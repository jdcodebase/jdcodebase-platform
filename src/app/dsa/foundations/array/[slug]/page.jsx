import fs from "fs";
import path from "path";
import React from "react";

// To fetch JSON data based on slug
export async function getProblemData(slug) {
  const filePath = path.join(
    process.cwd(),
    "src/data/foundations/array",
    `${slug}.json`
  );

  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
}

export default async function ProblemPage({ params }) {
  const { slug } = params;
  const problem = await getProblemData(slug);

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        {problem.title}{" "}
        <span className="text-sm text-gray-400">({problem.leetcodeId})</span>
      </h1>

      <p className="text-gray-400 mb-6">
        <strong className="text-white">Category:</strong> {problem.category}
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🧩 Problem Statement</h2>
        <p className="text-gray-300">{problem.problemStatement}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">📚 Examples</h2>
        {problem.examples.map((ex, i) => (
          <div key={i} className="bg-gray-800 p-4 rounded-md mb-4 shadow">
            <p>
              <strong>Input:</strong> <code>{ex.input}</code>
            </p>
            <p>
              <strong>Output:</strong> <code>{ex.output}</code>
            </p>
            <p className="text-gray-400">
              <strong>Explanation:</strong> {ex.explanation}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🧠 Approach</h2>
        <p className="text-gray-300">{problem.approach}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">💻 Code</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto text-sm shadow">
          <code className="language-javascript whitespace-pre-wrap">
            {problem.code}
          </code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">📈 Complexity</h2>
        <p>
          <strong>Time:</strong> {problem.timeComplexity}
        </p>
        <p>
          <strong>Space:</strong> {problem.spaceComplexity}
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🎬 Watch Explanation</h2>
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe
            src={`https://www.youtube.com/embed/${problem.videoLink}`}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64 md:h-96 rounded-lg"
          />
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">📎 Resources</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <a
              href={problem.leetcodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              🔗 LeetCode Problem
            </a>
          </li>
          <li>
            <a
              href={problem.pptLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
              download
            >
              📥 Download PPT
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

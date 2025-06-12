import Sidebar from "@/components/dsa/foundations/FoundationSidebar";
import fs from "fs";
import path from "path";
import React from "react";

export async function getProblemData(slug) {
  const filePath = path.join(
    process.cwd(),
    "src/data/foundations/string",
    `${slug}.json`
  );

  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
}

export default async function ProblemPage({ params }) {
  const { slug } = params;
  const problem = await getProblemData(slug);

  return (
    <div className="md:flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6">
        <section className="max-w-3xl mx-auto py-10 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {problem.title}{" "}
            <span className="text-sm text-gray-400">
              ({problem.leetcodeId})
            </span>
          </h1>

          <p className="text-gray-400 mb-6">
            <strong className="text-white">Category:</strong> {problem.category}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              🧩 Problem Statement
            </h2>
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
                <div className="text-gray-400 mt-2">
                  <strong>Explanation:</strong>{" "}
                  {Array.isArray(ex.explanation) ? (
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      {ex.explanation.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    <span>{ex.explanation}</span>
                  )}
                </div>
              </div>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">🧠 Approach</h2>
            <div className="text-gray-300 space-y-2">
              {problem.approach.split("\n").map((line, index) => {
                if (line.match(/^Approach\s*\d+:/i)) {
                  return (
                    <p key={index} className="font-semibold text-white mt-4">
                      {line}
                    </p>
                  );
                }

                if (line.match(/^\d+\./)) {
                  return (
                    <p
                      key={index}
                      className="ml-4 pl-4 border-l border-gray-600 text-sm"
                    >
                      • {line.replace(/^\d+\.\s*/, "")}
                    </p>
                  );
                }

                return (
                  <p key={index} className="text-gray-400 text-sm">
                    {line}
                  </p>
                );
              })}
            </div>
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
            <h2 className="text-2xl font-semibold mb-2">
              🎬 Watch Explanation
            </h2>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src={`https://www.youtube.com/embed/${problem.videoLink}`}
                title="YouTube video"
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
              {problem.pptLink && (
                <li>
                  <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">📽️ View PPT</h2>
                    <div className="w-full overflow-x-auto rounded-md">
                      <iframe
                        src={problem.pptLink}
                        width="100%"
                        height="400"
                        allowFullScreen
                        className="rounded-md w-full"
                      ></iframe>
                    </div>
                  </section>
                </li>
              )}
            </ul>
          </section>
        </section>
      </main>
    </div>
  );
}

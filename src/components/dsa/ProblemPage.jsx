import ProblemsSidebar from "@/components/dsa/ProblemsSidebar";
import { getProblemData } from "@/lib/problemUtils";

export default async function ProblemPage({ slug }) {
  const problem = await getProblemData(slug);

  if (!problem) {
    return (
      <div className="p-6 text-white">
        <h1 className="text-2xl font-bold">Problem Not Found</h1>
        <p className="text-gray-400 mt-2">
          Please check the URL or go back to DSA topics.
        </p>
      </div>
    );
  }

  const {
    title,
    leetcodeId,
    problemStatement,
    examples,
    approach,
    code,
    timeComplexity,
    spaceComplexity,
    videoLink,
    pptLink,
    leetcodeLink,
    category,
  } = problem;

  const categoryList = Array.isArray(category) ? category.join(", ") : category;

  return (
    <div className="md:flex min-h-screen">
      <ProblemsSidebar />

      <main className="flex-1 p-6">
        <section className="max-w-3xl mx-auto py-10 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
            {leetcodeId && (
              <span className="text-sm text-gray-400 ml-2">({leetcodeId})</span>
            )}
          </h1>

          {categoryList && (
            <p className="text-gray-400 mb-6">
              <strong className="text-white">Category:</strong> {categoryList}
            </p>
          )}

          {problemStatement && (
            <Section title="🧩 Problem Statement">
              <p className="text-gray-300">{problemStatement}</p>
            </Section>
          )}

          {examples?.length > 0 && (
            <Section title="📚 Examples">
              {examples.map((ex, i) => (
                <div
                  key={i}
                  className="bg-gray-800 p-4 rounded-md mb-4 shadow text-sm"
                >
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
            </Section>
          )}

          {approach && (
            <Section title="🧠 Approach">
              <div className="text-gray-300 space-y-2">
                {approach.split("\n").map((line, index) => {
                  if (/^Approach\s*\d*/i.test(line)) {
                    return (
                      <p key={index} className="font-semibold text-white mt-4">
                        {line}
                      </p>
                    );
                  }
                  if (/^\d+\./.test(line)) {
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
            </Section>
          )}

          {code && (
            <Section title="💻 Code">
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto text-sm shadow">
                <code className="whitespace-pre-wrap">{code}</code>
              </pre>
            </Section>
          )}

          {(timeComplexity || spaceComplexity) && (
            <Section title="📈 Complexity">
              <p>
                <strong>Time:</strong> {timeComplexity || "N/A"}
              </p>
              <p>
                <strong>Space:</strong> {spaceComplexity || "N/A"}
              </p>
            </Section>
          )}

          {videoLink && (
            <Section title="🎬 Watch Explanation">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${videoLink}`}
                  title="YouTube explanation"
                  className="w-full h-64 md:h-96 rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Section>
          )}

          {pptLink && (
            <Section title="📊 Presentation (PPT)">
              <div className="aspect-w-16 aspect-h-9 w-full mb-4">
                <iframe
                  src={pptLink}
                  title="PPT explanation"
                  className="w-full h-64 md:h-96 rounded-lg border border-gray-700"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <a
                href={pptLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
                download
              >
                📥 Download PPT
              </a>
            </Section>
          )}

          <Section title="📎 Resources">
            <ul className="list-disc ml-6 space-y-1">
              {leetcodeLink && (
                <li>
                  <a
                    href={leetcodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    🔗 LeetCode Problem
                  </a>
                </li>
              )}
            </ul>
          </Section>
        </section>
      </main>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      {children}
    </section>
  );
}

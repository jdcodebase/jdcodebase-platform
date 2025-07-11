import { dsaProblems } from "@/data/dsa/dsaProblems";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { problemSlug } = params;

  const problem = dsaProblems.find((p) => p.slug === problemSlug);

  if (!problem) {
    return {
      title: "Problem Not Found – JDCodebase",
      description: "This coding problem was not found in the DSA list.",
    };
  }

  return {
    title: `${problem.title} – ${problem.difficulty} | JDCodebase`,
    description: `${problem.title} (${problem.leetcodeId}) is a ${
      problem.difficulty
    } DSA problem categorized under ${problem.category.join(
      ", "
    )}. Practice, learn approach, and view solutions.`,
    keywords: [
      "DSA",
      "JavaScript",
      "Leetcode",
      `${problem.title}`,
      `${problem.title} solution`,
      `${problem.title} JS`,
      `${problem.title} approach`,
      "JDCodebase",
    ],
    openGraph: {
      title: `${problem.title} – ${problem.difficulty} | JDCodebase`,
      description: `Solve ${problem.title}, a ${problem.difficulty} DSA problem. Understand the solution, approach, and complexity at JDCodebase.`,
      url: `https://jdcodebase.vercel.app/dsa/problem/${problem.category[0].toLowerCase()}/${
        problem.slug
      }`,
      siteName: "JDCodebase",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${problem.title} – JDCodebase`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${problem.title} – ${problem.difficulty} | JDCodebase`,
      description: `Explore ${problem.title} with explanation, code, and complexity analysis.`,
      images: ["/og-image.png"],
    },
  };
}

export default function ProblemPage({ params }) {
  const { problemSlug } = params;

  const problem = dsaProblems.find((p) => p.slug === problemSlug);
  return (
    <div className="space-y-10 max-w-5xl mx-auto text-white bg-gradient-to-br from-black via-gray-900 to-black px-5 md:px-10 py-10 rounded-md shadow-md shadow-white">
      <div>
        <h1 className="text-3xl font-light text-blue-600">{problem.title}</h1>

        <p>
          <span className="text-sm text-gray-400 ml-2">
            ({problem.leetcodeId}), {problem.difficulty}
          </span>
        </p>

        <p className="text-gray-400 mb-5 mt-3">
          <strong className="text-blue-500">Category:</strong>{" "}
          <span className="text-gray-300">{problem.category.join(", ")}</span>
        </p>
      </div>

      {problem.problemStatement && (
        <Section title="Problem Statement">
          <p className="text-gray-300 whitespace-pre-wrap">
            {problem.problemStatement}
          </p>
        </Section>
      )}

      {problem.examples?.length > 0 && (
        <Section title="Examples">
          {problem.examples.map((ex, i) => (
            <div
              key={i}
              className="mb-4 p-3 border text-gray-500 mt-5 bg-black/30 rounded-xl shadow-lg shadow-blue-500/30"
            >
              <p>
                <strong className="font-medium text-white">Input:</strong>{" "}
                <code>{ex.input}</code>
              </p>
              <p>
                <strong className="font-medium text-white">Output:</strong>{" "}
                <code>{ex.output}</code>
              </p>
              {ex.explanation && (
                <div className="text-gray-400 mt-2">
                  <strong className="font-medium text-white">
                    Explanation:
                  </strong>{" "}
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
              )}
            </div>
          ))}
        </Section>
      )}

      {problem.approach?.length > 0 && (
        <Section title="Approach">
          {problem.approach.map((appr, i) => (
            <div key={i} className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {appr.title}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-3">
                {appr.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
              {appr.code && (
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto text-sm shadow">
                  <code className="whitespace-pre-wrap">{appr.code}</code>
                </pre>
              )}
            </div>
          ))}
        </Section>
      )}

      {(problem.timeComplexity || problem.spaceComplexity) && (
        <Section title="Complexity">
          <p>
            <strong>Time:</strong> {problem.timeComplexity || "N/A"}
          </p>
          <p>
            <strong>Space:</strong> {problem.spaceComplexity || "N/A"}
          </p>
        </Section>
      )}

      {problem.videoLink && (
        <Section title="Watch Explanation">
          <div className="aspect-w-16 aspect-h-9 w-full">
            <iframe
              src={`https://www.youtube.com/embed/${problem.videoLink}`}
              title="YouTube explanation"
              className="w-full h-64 md:h-96 rounded-lg my-2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Section>
      )}

      {problem.pptLink && (
        <Section title="📊 Presentation (PPT)">
          <div className="aspect-w-16 aspect-h-9 w-full mb-4">
            <iframe
              src={problem.pptLink}
              title="PPT explanation"
              className="w-full h-64 md:h-96 rounded-lg border border-gray-700"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <a
            href={problem.pptLink}
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
          {problem.leetcodeLink && (
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
          )}
        </ul>
      </Section>
    </div>
  );
}
function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-blue-500 mb-2">{title}</h2>
      {children}
    </section>
  );
}

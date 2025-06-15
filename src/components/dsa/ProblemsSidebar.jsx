"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { problems } from "@/data/dsa/problem";

export default function ProblemsSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split("/");
  const currentTopic = segments[2]; // e.g. "array", "string"

  const filteredProblems = problems.filter((problem) =>
    problem.topics.some(
      (topic) =>
        topic.toLowerCase().replace(/\s+/g, "-") === currentTopic.toLowerCase()
    )
  );

  const heading =
    currentTopic?.charAt(0).toUpperCase() + currentTopic?.slice(1) || "DSA";

  return (
    <aside className="hidden md:block w-64 bg-neutral-900 p-4 text-white border-r border-gray-700">
      <button
        onClick={() => router.push("/dsa")}
        className="mb-4 text-sm text-blue-400 hover:underline hover:text-blue-300"
      >
        ← Back to DSA Main
      </button>

      <h2 className="text-lg font-bold mb-4">📂 {heading} Problems</h2>

      {filteredProblems.length > 0 ? (
        <ul className="space-y-2">
          {filteredProblems.map((problem) => {
            const dynamicUrl = `/dsa/${currentTopic}/problem/${problem.slug}`;

            return (
              <li key={problem.slug}>
                <Link
                  href={dynamicUrl}
                  className={clsx(
                    "block px-3 py-2 rounded-md text-sm font-medium",
                    pathname.endsWith(`/problem/${problem.slug}`)
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  )}
                >
                  {problem.title}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-sm text-gray-400">No problems available yet.</p>
      )}
    </aside>
  );
}

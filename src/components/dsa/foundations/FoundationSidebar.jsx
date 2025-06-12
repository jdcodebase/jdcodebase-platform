"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { foundationProblems } from "@/data/foundations/problems";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="hidden md:block w-64 bg-neutral-900 p-4 text-white border-r border-gray-700">
      <button
        onClick={() => router.push("/dsa")}
        className="mb-4 text-sm text-blue-400 hover:underline hover:text-blue-300 cursor-pointer"
      >
        ← Back to DSA Main
      </button>

      <h2 className="text-lg font-bold mb-4">📂 Foundations Problems</h2>
      <ul className="space-y-2">
        {foundationProblems.map((problem) => (
          <li key={problem.slug}>
            <Link
              href={problem.url}
              className={clsx(
                "block px-3 py-2 rounded-md text-sm font-medium",
                pathname.includes(problem.slug)
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              )}
            >
              {problem.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

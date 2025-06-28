"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { topics } from "@/data/dsaTopicData";

export default function DsaSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="hidden md:block w-64 bg-neutral-900 p-4 text-white border-r border-gray-700 overflow-y-auto max-h-screen sticky top-0"
      aria-label="DSA Sidebar"
    >
      <h2 className="text-lg font-bold mb-4">📂 DSA Topics</h2>
      <nav role="navigation" aria-label="DSA topic navigation">
        <ul className="space-y-2" role="list">
          {topics.map((topic) => {
            const isActive = pathname.startsWith(`/dsa/${topic.slug}`);

            return (
              <li key={topic.slug} role="listitem">
                <Link
                  href={`/dsa/${topic.slug}`}
                  aria-current={isActive ? "page" : undefined}
                  className={clsx(
                    "block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  )}
                  title={`Explore ${topic.name} problems`}
                >
                  {topic.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

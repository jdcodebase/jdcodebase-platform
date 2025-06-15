"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { topics } from "@/data/dsaTopicData";

export default function DsaSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:block w-64 bg-neutral-900 p-4 text-white border-r border-gray-700">
      <h2 className="text-lg font-bold mb-4">📂 DSA Topics</h2>
      <ul className="space-y-2">
        {topics.map((topic) => {
          const isActive = pathname === `/dsa/${topic.slug}`;

          return (
            <li key={topic.slug}>
              <Link
                href={`/dsa/${topic.slug}`}
                aria-current={isActive ? "page" : undefined}
                className={clsx(
                  "block px-3 py-2 rounded-md text-sm font-medium transition",
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                )}
                title={topic.description}
              >
                {topic.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

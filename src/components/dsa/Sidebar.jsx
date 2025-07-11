"use client";

import { dsaProblems } from "@/data/dsa/dsaProblems";
import { dsaTopics } from "@/data/dsa/dsaTopics";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Sidebar() {
  const pathname = usePathname();
  const formatTopicUrl = (topic) => topic.toLowerCase().replace(/\s+/g, "-");

  const isActive = (topic) =>
    pathname.startsWith(`/dsa/${formatTopicUrl(topic)}`);

  const parts = pathname.split("/");
  const topicSlug = parts[2] === "problem" ? parts[3] : parts[2];

  const problems = topicSlug
    ? dsaProblems.filter((problem) =>
        problem.category.some(
          (cat) => cat.toLowerCase().replace(/\s+/g, "-") === topicSlug
        )
      )
    : [];

  const isProblemActive = (slug) => {
    const parts = pathname.split("/");
    const currentSlug = parts[parts.length - 1];
    return currentSlug === slug;
  };

  return (
    <aside>
      <div className="md:hidden">
        <Dropdown backdrop="blur">
          <DropdownTrigger className="w-full">
            <Button
              variant="bordered"
              className="flex items-center gap-1 text-white text-sm w-full justify-start bg-gradient-to-br from-black via-gray-900 to-black py-2 px-3"
            >
              <RiArrowDropDownLine size={20} />
              DSA Topics
            </Button>
          </DropdownTrigger>

          <DropdownMenu
            aria-label="DSA Topics Menu"
            className="bg-gradient-to-br from-black via-gray-900 to-black text-white max-h-[80vh] overflow-y-auto p-2 rounded-md"
          >
            {dsaTopics.map((topic) => (
              <DropdownItem key={topic.title}>
                <Link
                  href={`/dsa/${formatTopicUrl(topic.title)}`}
                  className={`block px-3 py-1 text-md rounded-md border border-gray-500 hover:bg-gray-800 transition-colors my-1 ${
                    isActive(topic.title) ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {topic.title}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="md:hidden">
        <Dropdown backdrop="blur">
          <DropdownTrigger className="w-full">
            <Button
              variant="bordered"
              className="flex items-center gap-1 text-white text-sm w-full justify-start bg-gradient-to-bl from-black via-gray-900 to-black py-2 px-3"
            >
              <RiArrowDropDownLine size={20} />
              Problems list
            </Button>
          </DropdownTrigger>

          <DropdownMenu
            aria-label="DSA Topics Menu"
            className="bg-gradient-to-br from-black via-gray-900 to-black text-white max-h-[50vh] overflow-y-auto p-2 rounded-md"
          >
            {problems.length === 0 ? (
              <DropdownItem>
                <p>Please Select The DSA topic first</p>
              </DropdownItem>
            ) : (
              <>
                {problems.map((problem) => (
                  <DropdownItem key={problem.title}>
                    <Link
                      href={`/dsa/problem/${topicSlug}/${problem.slug}`}
                      className={`block px-3 py-1 text-md rounded-md border border-gray-500 hover:bg-gray-800 transition-colors my-1 ${
                        isProblemActive(problem.slug)
                          ? "bg-blue-600 text-white"
                          : "text-white hover:bg-gray-900 hover:border-white"
                      }`}
                    >
                      {problem.title}
                    </Link>
                  </DropdownItem>
                ))}
              </>
            )}
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="hidden md:flex flex-col w-64 bg-gradient-to-br from-black via-gray-950 to-black/10 p-4">
        {problems.length > 0 ? (
          <div>
            <Link
              href="/dsa"
              className="text-blue-400 text-sm mb-4 hover:underline block"
            >
              ← Back to DSA Topics
            </Link>
            <h2 className="text-white text-lg font-bold mb-4 text-center">
              {`${topicSlug.toUpperCase()} Problems`}
            </h2>
            <ul className="space-y-2" role="list">
              {problems.map((problem) => (
                <li key={problem.title} role="listitem">
                  <Link
                    href={`/dsa/problem/${topicSlug}/${problem.slug}`}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 border-b border-gray-950 ${
                      isProblemActive(problem.slug)
                        ? "bg-blue-600 text-white"
                        : "text-white hover:bg-gray-900 hover:border-white"
                    }`}
                    title={`Explore ${problem.title} problems`}
                  >
                    {problem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h2 className="text-white text-lg font-bold mb-4 text-center">
              DSA Topics
            </h2>
            <ul className="space-y-2" role="list">
              {dsaTopics.map((topic) => (
                <li key={topic.title} role="listitem">
                  <Link
                    href={`/dsa/${formatTopicUrl(topic.title)}`}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 border-b border-gray-950 ${
                      isActive(topic.title)
                        ? "bg-blue-600 text-white"
                        : "text-white hover:bg-gray-900 hover:border-white"
                    }`}
                    title={`Explore ${topic.title} problems`}
                  >
                    {topic.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
}

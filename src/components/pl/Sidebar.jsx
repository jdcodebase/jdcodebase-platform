"use client";

import { languageTopicsMap } from "@/data/pl/allTopics";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  DropdownSection,
} from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Sidebar() {
  const pathname = usePathname();
  const url = pathname.split("/");
  const lang = url[2];

  const topics = languageTopicsMap[lang] || [];

  const isActive = (slug) => slug === pathname.split("/")[3];

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
              {lang?.toUpperCase()} Topics
            </Button>
          </DropdownTrigger>

          <DropdownMenu
            aria-label={`${lang?.toUpperCase()} Topics Menu`}
            className="bg-gradient-to-br from-black via-gray-900 to-black text-white max-h-[80vh] overflow-y-auto p-2 rounded-md px-5"
          >
            {topics.map((section, index) => (
              <DropdownSection
                key={index}
                title={section.label}
                showDivider={index < topics.length - 1}
              >
                {section.items.map((item, i) => (
                  <DropdownItem key={i} textValue={item.name}>
                    <Link
                      href={`/languages/${lang}/${item.slug}`}
                      className={`text-blue-400 hover:underline border block px-3 my-1 border-white rounded-sm ${
                        isActive(item.slug) ? "bg-blue-600 text-white" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </DropdownItem>
                ))}
              </DropdownSection>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="hidden md:flex flex-col w-64 bg-gradient-to-br from-black via-gray-950 to-black/10 p-4">
        <Link
          href="/languages"
          className="text-blue-400 text-sm mb-4 hover:underline block"
        >
          ← Back to Selection
        </Link>
        {topics.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl font-bold my-1 text-blue-600">
              {section.label}
            </h2>
            <ul className="space-y-1 ml-4">
              {section.items.map((item, i) => (
                <li key={i}>
                  <Link
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 border-b border-gray-950 ${
                      isActive(item.slug)
                        ? "bg-blue-600 text-white"
                        : "text-white hover:bg-gray-900 hover:border-white"
                    }`}
                    href={`/languages/${lang}/${item.slug}`}
                    title={`Explore ${item.name}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}

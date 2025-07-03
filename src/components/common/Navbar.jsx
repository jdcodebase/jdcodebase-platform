"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

const courseLinks = [
  { name: "DSA", href: "/dsa" },
  { name: "JavaScript", href: "/languages/js" },
  // { name: "C++", href: "/languages/cpp" },
];

const utilityLinks = [
  // { name: "Projects", href: "/projects" },
  { name: "Playground", href: "/playground" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isSideBarOpen);
  }, [isSideBarOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
    setSearchQuery("");
  };

  const isActive = (href) => pathname.startsWith(href);

  const renderSidebar = () => (
    <div className="fixed inset-0 z-50 flex md:hidden">
      <aside
        className="w-60 bg-neutral-900 text-white p-5 flex flex-col justify-between transform transition-transform duration-300 ease-in-out translate-x-0"
        role="navigation"
        aria-label="Mobile Sidebar Navigation"
      >
        <div>
          <button
            onClick={() => setIsSideBarOpen(false)}
            className="mb-6"
            aria-label="Close Sidebar"
          >
            <IoMdClose size={26} />
          </button>

          <nav className="flex flex-col gap-4">
            {[...courseLinks, ...utilityLinks].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsSideBarOpen(false)}
                className={clsx(
                  "px-2 py-2 rounded text-sm",
                  isActive(link.href)
                    ? "bg-blue-600 text-white"
                    : "hover:bg-neutral-700 text-gray-300"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      <div
        className="flex-1 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsSideBarOpen(false)}
        aria-hidden="true"
      />
    </div>
  );

  return (
    <header className="sticky top-0 z-40 shadow-md bg-neutral-900 text-white">
      <nav className="flex items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-xl font-serif italic font-bold hover:not-italic"
        >
          JDCodebase
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light"
                className="flex items-center gap-1 text-white text-sm"
              >
                Courses <IoIosArrowDown />
              </Button>
            </DropdownTrigger>
            <DropdownMenu className="bg-neutral-900 text-white p-2 rounded-md">
              {courseLinks.map((link) => (
                <DropdownItem key={link.name} className="w-full">
                  <Link
                    href={link.href}
                    className={clsx(
                      "block px-2 py-1 text-sm rounded hover:bg-neutral-800",
                      isActive(link.href) && "text-blue-400"
                    )}
                  >
                    {link.name}
                  </Link>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          {utilityLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "text-sm hover:text-blue-400 transition",
                isActive(link.href) && "text-blue-400 font-medium"
              )}
            >
              {link.name}
            </Link>
          ))}

          <form
            onSubmit={handleSearch}
            className="flex items-center border rounded py-1 px-2 border-white"
          >
            <input
              type="text"
              placeholder="Search topic/problem..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none px-1 text-sm text-white w-44"
              aria-label="Search input"
            />
            <button type="submit" aria-label="Search">
              <CiSearch size={20} />
            </button>
          </form>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsSideBarOpen(true)} aria-label="Open Menu">
            <FaBars size={22} />
          </button>
        </div>
      </nav>

      {isSideBarOpen && renderSidebar()}
    </header>
  );
}

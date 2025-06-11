"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { GoMoon, GoSun } from "react-icons/go";
import { FaBars } from "react-icons/fa6";

const navLinks = [
  { name: "DSA", href: "/dsa" },
  { name: "JavaScript", href: "/js" },
  { name: "C++", href: "/cpp" },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isSideBarOpen);
  }, [isSideBarOpen]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) alert(`Searching for: ${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <nav className="py-4 px-4 shadow-md bg-neutral-900 text-white flex justify-between items-center">
      <Link href="/" className="text-xl font-serif italic hover:not-italic">
        JDCodebase
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-5">
        {/* Courses Dropdown */}
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="light"
              className="flex items-center gap-1 text-white"
            >
              Courses <IoIosArrowDown />
            </Button>
          </DropdownTrigger>
          <DropdownMenu className="bg-neutral-900 text-white p-2 rounded-md">
            {navLinks.map((link) => (
              <DropdownItem key={link.name}>
                <Link href={link.href} className="hover:underline">
                  {link.name}
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center border rounded py-1 border-white"
        >
          <input
            type="text"
            placeholder="Search topic/problem..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none px-1 text-sm text-white"
          />
          <button type="submit" aria-label="Search">
            <CiSearch size={20} />
          </button>
        </form>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} type="button">
          {isDark ? (
            <GoSun size={22} className="text-yellow-400" />
          ) : (
            <GoMoon size={22} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsSideBarOpen(true)}
          aria-label="Open Sidebar"
        >
          <FaBars size={25} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isSideBarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar */}
          <aside className="w-52 bg-neutral-900 text-white py-5 flex flex-col justify-between">
            {/* Close button */}
            <div>
              <button
                onClick={() => setIsSideBarOpen(false)}
                className="mb-6 text-left px-3"
                aria-label="Close Sidebar"
              >
                <IoMdClose size={30} />
              </button>

              {/* Nav Links */}
              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsSideBarOpen(false)}
                    className="hover:underline border-t py-4 px-5"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Theme toggle */}
            <div className="px-3">
              <button onClick={toggleTheme} aria-label="Toggle Theme">
                {isDark ? (
                  <GoSun size={25} className="text-yellow-400" />
                ) : (
                  <GoMoon size={25} className="text-white" />
                )}
              </button>
            </div>
          </aside>

          {/* Backdrop */}
          <div className="flex-1" onClick={() => setIsSideBarOpen(false)} />
        </div>
      )}
    </nav>
  );
}

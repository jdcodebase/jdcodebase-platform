"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { GoMoon, GoSun } from "react-icons/go";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isSideBarOpen);
  }, [isSideBarOpen]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    // You can later implement actual routing/search logic here
  };

  return (
    <nav className="py-4 px-4 shadow-md  bg-neutral-900 text-white flex justify-between items-center">
      {/* Left - Brand */}
      <Link href="/" className="text-xl font-serif italic hover:not-italic">
        JDCodebase
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-5">
        {/* Dropdown */}
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
            <DropdownItem>
              <Link href="/dsa" className="hover:underline">
                DSA
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/js" className="hover:underline">
                JavaScript
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/cpp" className="hover:underline">
                C++
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* Search */}
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

      {/* Mobile - Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsSideBarOpen(true)}
          aria-label="Open Sidebar"
        >
          <FaBars size={25} />
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isSideBarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar Panel */}
          <div className="w-52 bg-neutral-900 text-white py-5 flex flex-col justify-between">
            <div>
              <button
                className="mb-6 text-left px-3"
                onClick={() => setIsSideBarOpen(false)}
                aria-label="Close Sidebar"
              >
                <IoMdClose size={30} />
              </button>

              <nav className="flex flex-col ">
                <Link
                  href="/dsa"
                  onClick={() => setIsSideBarOpen(false)}
                  className="hover:underline border-t py-4 px-5"
                >
                  DSA
                </Link>
                <Link
                  href="/js"
                  onClick={() => setIsSideBarOpen(false)}
                  className="hover:underline border-t py-4 px-5"
                >
                  JavaScript
                </Link>
                <Link
                  href="/cpp"
                  onClick={() => setIsSideBarOpen(false)}
                  className="hover:underline border-t py-4 px-5 border-b"
                >
                  C++
                </Link>
              </nav>
            </div>

            <div>
              <button onClick={toggleTheme} className="px-3">
                {isDark ? (
                  <GoSun size={25} className="text-yellow-400" />
                ) : (
                  <GoMoon size={25} className="text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Backdrop */}
          <div className="flex-1" onClick={() => setIsSideBarOpen(false)}></div>
        </div>
      )}
    </nav>
  );
}

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
import { FaBars } from "react-icons/fa6";

const navLinks = [
  { name: "DSA", href: "/dsa" },
  { name: "JavaScript", href: "/languages/js" },
  { name: "C++", href: "/languages/cpp" },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isSideBarOpen);
  }, [isSideBarOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) alert(`Searching for: ${searchQuery}`);
    setSearchQuery("");
  };

  const renderSidebar = () => (
    <div className="fixed inset-0 z-50 flex">
      <aside
        className="w-52 bg-neutral-900 text-white py-5 flex flex-col justify-between shadow-lg"
        role="navigation"
        aria-label="Mobile Navigation"
      >
        <div>
          <button
            onClick={() => setIsSideBarOpen(false)}
            className="mb-6 px-3"
            aria-label="Close Sidebar"
          >
            <IoMdClose size={30} />
          </button>

          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsSideBarOpen(false)}
                className="hover:underline border-t border-neutral-700 py-4 px-5 transition-colors"
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
    <nav className="py-4 px-4 shadow-md bg-neutral-900 text-white flex justify-between items-center">
      <Link href="/" className="text-xl font-serif italic hover:not-italic">
        JDCodebase
      </Link>

      <div className="hidden md:flex items-center space-x-5">
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

        <form
          onSubmit={handleSearch}
          className="flex items-center border rounded py-1 border-white px-2"
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
        <button
          onClick={() => setIsSideBarOpen(true)}
          aria-label="Open Sidebar"
        >
          <FaBars size={25} />
        </button>
      </div>

      {isSideBarOpen && renderSidebar()}
    </nav>
  );
}

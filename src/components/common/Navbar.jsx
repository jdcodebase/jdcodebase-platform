"use client";

import { Ubuntu } from "next/font/google";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });

const courseLinks = [
  { name: "DSA", href: "/dsa" },
  { name: "Languages", href: "/languages" },
];

const utilityLinks = [{ name: "Playground", href: "/playground" }];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (href) => pathname.startsWith(href);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
    setSearchQuery("");
  };

  return (
    <div>
      <nav className="w-full z-50 bg-gradient-to-bl from-black via-gray-900 to-black text-white py-5 px-4 shadow-md flex justify-between">
        <Link
          href={"/"}
          className={`text-xl font-bold tracking-wide ${ubuntu.className}`}
        >
          JDCodebase
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpenSidebar(true)}>
            <FaBars size={22} />
          </button>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Dropdown>
            <DropdownTrigger className="flex items-center">
              <button className="text-white text-md tracking-wide hover:text-blue-400">
                Courses <RiArrowDropDownLine size={22} />
              </button>
            </DropdownTrigger>
            <DropdownMenu className="bg-black text-white shadow-lg p-2 rounded-lg">
              {courseLinks.map((link) => (
                <DropdownItem
                  key={link.name}
                  className={`rounded-md px-3 py-1 text-sm mt-1 border border-black ${
                    isActive(link.href)
                      ? "bg-blue-600 text-white"
                      : "hover:border-white"
                  }`}
                >
                  <Link href={link.href}>{link.name}</Link>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          <div className="flex mr-1 items-center">
            {utilityLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-md tracking-wide transition-colors duration-20 hover:text-blue-500  ${
                  isActive(link.href)
                    ? "text-blue-500 font-medium"
                    : "hover:text-blue-400 hover:border-white hover:border-b"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <form
            onSubmit={handleSearch}
            className="flex items-center border rounded py-1 px-2 border-white"
          >
            <input
              type="text"
              placeholder="Search topic/problem..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="outline-none px-1 text-sm text-white w-44"
            />
            <button type="submit">
              <CiSearch size={20} />
            </button>
          </form>
        </div>
      </nav>

      {isOpenSidebar && (
        <div className="fixed inset-0 z-50 flex md:hidden transition-all">
          <div
            className="flex-1 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpenSidebar(false)}
          />

          <aside className="bg-black text-white w-2/3 sm:w-1/2 p-4">
            <div className="flex justify-end mb-4">
              <button onClick={() => setIsOpenSidebar(false)}>
                <MdClose size={24} />
              </button>
            </div>

            {[...courseLinks, ...utilityLinks].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpenSidebar(false)}
                className={`block px-4 py-2 rounded-md text-lg font-medium mb-1 ${
                  isActive(link.href)
                    ? "bg-blue-600 text-white"
                    : "hover:bg-neutral-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </aside>
        </div>
      )}
    </div>
  );
};

export default Navbar;

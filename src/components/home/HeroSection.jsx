import Link from "next/link";
import { FaCode, FaLanguage } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white flex justify-center items-center px-4">
      <div className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Welcome to <span className="text-sky-500">JDCodebase</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl flex items-center justify-center gap-2">
          Your one-stop hub for all things tech — from programming languages and
          DSA to real-world projects, blogs, and developer resources.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-4">
          <Link
            href={"/dsa"}
            className="border border-white hover:border-sky-500 hover:text-sky-400 transition duration-300 px-6 py-3 rounded-lg text-lg flex items-center gap-2 shadow-sm hover:shadow-md shadow-white/40"
          >
            <FaCode /> Master DSA
          </Link>
          <Link href={"/languages"}>
            <button className="border border-white hover:border-sky-500 hover:text-sky-400 transition duration-300 px-6 py-3 rounded-lg text-lg flex items-center gap-2 shadow-sm hover:shadow-md shadow-white/40">
              <FaLanguage /> Learn Languages
            </button>
          </Link>
        </div>

        <p className="text-sm text-gray-400 pt-6 flex items-center justify-center gap-2">
          Constantly evolving to empower developers with content, code, and
          clarity.
        </p>
      </div>
    </div>
  );
}

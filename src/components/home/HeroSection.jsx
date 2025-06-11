import { Code, BookOpen, HammerIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-10 max-w-5xl mx-auto text-center md:min-h-screen flex flex-col justify-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 md:mb-8">
        Welcome to{" "}
        <span className="text-blue-600 dark:text-blue-400">JDCodebase</span>
      </h1>
      <p className="text-lg sm:text-xl mb-6">
        🌐 Your one-stop hub for all things tech — from programming languages
        and DSA to real-world projects, blogs, and developer resources.
      </p>

      <div className="flex flex-col sm:flex-row justify-center sm:gap-8 gap-4 my-8">
        <a
          href="/dsa"
          className="bg-black shadow-white hover:shadow-lg text-white px-6 py-3 rounded-md shadow-md transition flex justify-center items-center gap-2"
        >
          <Code size={18} />
          Master DSA
        </a>
        <a
          href="/languages"
          className="bg-black shadow-white hover:shadow-lg text-white px-6 py-3 rounded-md shadow-md transition flex justify-center items-center gap-2"
        >
          <BookOpen size={18} />
          Learn Languages
        </a>
        <a
          href="/projects"
          className="bg-black shadow-white hover:shadow-lg text-white px-6 py-3 rounded-md shadow-md transition flex justify-center items-center gap-2"
        >
          <HammerIcon size={18} />
          Build Projects
        </a>
      </div>

      <p className="mt-10 text-md text-gray-300">
        ⚡ Constantly evolving to empower developers with content, code, and
        clarity.
      </p>
    </section>
  );
}

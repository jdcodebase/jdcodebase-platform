import { Code, BookOpen, HammerIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="pt-5 max-w-5xl mx-auto text-center md:min-h-screen flex flex-col justify-center items-center px-4"
      role="region"
      aria-label="Hero Section"
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 md:mb-8">
        Welcome to{" "}
        <span className="text-blue-600 dark:text-blue-400">JDCodebase</span>
      </h1>

      <p className="text-lg sm:text-xl mb-6 max-w-2xl text-gray-300">
        🌐 Your one-stop hub for all things tech — from programming languages
        and DSA to real-world projects, blogs, and developer resources.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 my-8 w-full sm:w-auto">
        <HeroButton href="/dsa" icon={<Code size={18} />} text="Master DSA" />
        <HeroButton
          href="/languages"
          icon={<BookOpen size={18} />}
          text="Learn Languages"
        />
        <HeroButton
          href="/projects"
          icon={<HammerIcon size={18} />}
          text="Build Projects"
        />
      </div>

      <p className="mt-10 text-md text-gray-400">
        ⚡ Constantly evolving to empower developers with content, code, and
        clarity.
      </p>
    </section>
  );
}

function HeroButton({ href, icon, text }) {
  return (
    <a
      href={href}
      className="bg-black hover:shadow-blue-500/20 hover:shadow-md text-white px-6 py-3 rounded-md shadow transition flex justify-center items-center gap-2 w-full sm:w-auto"
      aria-label={text}
    >
      {icon}
      {text}
    </a>
  );
}

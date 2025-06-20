import Link from "next/link";

const languages = [
  {
    name: "JavaScript",
    code: "js",
    description: "Master the language of the web.",
    color: "bg-yellow-500",
  },
  {
    name: "TypeScript",
    code: "ts",
    description: "Strongly typed JavaScript for scalable apps.",
    color: "bg-blue-500",
  },
  {
    name: "C++",
    code: "cpp",
    description: "Powerful language for performance-critical apps.",
    color: "bg-purple-600",
  },
];

export default function LanguagesPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white px-4 py-10">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">🌐 Programming Languages</h1>
        <p className="text-gray-400 text-lg">
          Choose a language to explore beginner guides, DSA problems, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {languages.map((lang) => (
          <Link
            href={`/languages/${lang.code}`}
            key={lang.code}
            className="rounded-xl shadow-md p-6 hover:scale-105 transition transform duration-200 ease-in-out border border-neutral-700"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full text-black font-bold mb-4 ${lang.color}`}
            >
              {lang.name[0]}
            </div>
            <h2 className="text-2xl font-semibold mb-2">{lang.name}</h2>
            <p className="text-gray-400">{lang.description}</p>
          </Link>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 mt-16">
        @JDCodebase • Learn code. Build skills. 🚀
      </p>
    </div>
  );
}

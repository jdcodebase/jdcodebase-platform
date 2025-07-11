import Link from "next/link";

export const metadata = {
  title: "Programming Languages – JavaScript, TypeScript, C++ | JDCodebase",
  description:
    "Explore top programming languages like JavaScript, TypeScript, and C++ on JDCodebase. Learn fundamentals, practice DSA, and build real-world coding skills.",
  keywords: [
    "Programming languages",
    "JavaScript",
    "TypeScript",
    "C++",
    "Learn coding",
    "Web development",
    "DSA practice",
    "JDCodebase",
    "Frontend development",
    "Backend development",
    "Full stack learning",
    "Code tutorials",
    "Beginner programming",
    "Tech roadmap",
    "Programming fundamentals",
  ],
  openGraph: {
    title: "Programming Languages – JavaScript, TypeScript, C++ | JDCodebase",
    description:
      "Master programming with JavaScript, TypeScript, and C++. Learn through structured lessons and hands-on DSA practice on JDCodebase.",
    url: "https://jdcodebase.vercel.app/languages",
    siteName: "JDCodebase",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JDCodebase Programming Languages",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programming Languages – JavaScript, TypeScript, C++ | JDCodebase",
    description:
      "Explore beginner guides, coding challenges, and build skills in JavaScript, TypeScript, and C++.",
    images: ["/og-image.png"],
  },
};

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

export default function PL() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-5 py-10 md:px-10 rounded-md shadow-md shadow-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">
          Programming Languages
        </h1>
        <p className="text-gray-400 text-lg mt-4">
          Choose a language to explore beginner guides, DSA problems, and
          hands-on practice environments.
        </p>
      </div>

      <section className="max-w-4xl mx-auto mb-10 space-y-4 text-gray-400">
        <h2 className="text-2xl font-semibold text-blue-500">
          What is a Programming Language?
        </h2>
        <p>
          A programming language is a formal way to communicate with computers
          and tell them what to do. It lets you write instructions to perform
          specific tasks like building websites, creating games, or automating
          workflows.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mb-10 space-y-4 text-gray-400">
        <h2 className="text-2xl font-semibold text-blue-500">Why Learn One?</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Build web, mobile, or desktop applications from scratch.</li>
          <li>Automate repetitive tasks and improve productivity.</li>
          <li>Understand and solve real-world problems with software.</li>
          <li>Launch a career in tech, data science, AI, and more.</li>
        </ul>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-blue-500 mb-6">
          Get Started
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {languages.map((lang) => (
            <Link
              href={`/languages/${lang.code}`}
              key={lang.code}
              className="rounded-xl shadow-lg p-6 hover:scale-105 transition transform duration-200 ease-in-out border border-neutral-700 bg-black/30 shadow-blue-500/30 hover:shadow-blue-500/50 hover:shadow-xl"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full text-black font-bold mb-4 ${lang.color}`}
              >
                {lang.name[0]}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {lang.name}
              </h3>
              <p className="text-gray-400">{lang.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <p className="text-center text-sm text-gray-500">
        @JDCodebase • Learn code. Build skills. 🚀
      </p>
    </div>
  );
}

export const metadata = {
  title: "What is JavaScript? | JDCodebase",
  description:
    "Learn what JavaScript is, why it's used, and how it powers interactive websites. Explore its features, use cases, and real-world analogies — perfect for beginners.",
  keywords: [
    "What is JavaScript",
    "JavaScript introduction",
    "JavaScript basics",
    "JDCodebase",
    "JavaScript for beginners",
    "learn JavaScript",
    "JavaScript features",
    "JavaScript use cases",
  ],
  openGraph: {
    title: "What is JavaScript? | JDCodebase",
    description:
      "Explore the basics of JavaScript, a high-level scripting language used for dynamic websites. Learn its purpose, characteristics, and why it's essential.",
    url: "https://jdcodebase.vercel.app/languages/js/what-is-js",
    siteName: "JDCodebase",
    type: "article",
    images: [
      {
        url: "https://jdcodebase.vercel.app/og-banner.png",
        width: 1200,
        height: 630,
        alt: "What is JavaScript - JDCodebase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is JavaScript? | JDCodebase",
    description:
      "Understand what JavaScript is and how it works. A beginner-friendly introduction to the language of the web.",
    images: ["https://jdcodebase.vercel.app/og-banner.png"],
  },
};

export default function WhatIsJavascript() {
  return (
    <div className="text-white px-3 md:px-6">
      <h1 className="text-3xl font-bold mb-4">What is JavaScript?</h1>
      <p className="text-gray-300 mb-4">
        JavaScript is a{" "}
        <strong>high-level, interpreted scripting language</strong> primarily
        used to add interactivity and dynamic behavior to websites. It is
        supported by all modern browsers and can also run outside the browser
        using <strong>Node.js</strong>.
      </p>

      <p className="text-gray-300 mb-4">
        JavaScript is one of the core technologies of the web, alongside
        <strong> HTML</strong> and <strong>CSS</strong>. While HTML gives
        structure and CSS styles the page, JavaScript makes it interactive —
        like handling button clicks, validating forms, displaying animations,
        and more.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Why Learn JavaScript?</h2>
      <ul className="list-disc list-inside text-gray-400 space-y-1">
        <li>It's the most popular language for web development.</li>
        <li>You can build both front-end and back-end apps (using Node.js).</li>
        <li>It's beginner-friendly and has a huge community.</li>
        <li>
          All browsers understand JavaScript by default (no installation
          needed).
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Real-World Analogy</h2>
      <p className="text-gray-300 mb-4">
        Think of a website like a robot:
        <br />
        <strong>HTML</strong> is its body,
        <br />
        <strong>CSS</strong> is the clothes and colors,
        <br />
        <strong>JavaScript</strong> is the brain that makes it move and respond.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Key Characteristics</h2>
      <ul className="list-disc list-inside text-gray-400 space-y-1">
        <li>Dynamic and loosely typed</li>
        <li>Supports object-oriented, functional, and imperative styles</li>
        <li>Interpreted (no compiler needed)</li>
        <li>
          Event-driven and asynchronous capabilities (via Promises, async/await)
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Why is JavaScript Considered Interpreted?
      </h2>
      <p className="text-gray-300 mb-2">
        JavaScript is traditionally known as an <strong>interpreted</strong>{" "}
        language because:
      </p>
      <ul className="list-disc list-inside text-gray-400 space-y-1">
        <li>It executes code line-by-line without needing a compiler.</li>
        <li>
          Browsers like Chrome and Firefox directly interpret it using engines
          like V8.
        </li>
        <li>It works dynamically, allowing type changes at runtime.</li>
      </ul>
      <p className="text-gray-300 mt-2">
        However, modern JavaScript engines now use{" "}
        <strong>JIT (Just-In-Time)</strong> compilation to improve performance —
        so JavaScript today is actually a hybrid of interpreted and compiled
        behavior.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Real Use Cases</h2>
      <ul className="list-disc list-inside text-gray-400 space-y-1">
        <li>Form validation</li>
        <li>Interactive maps (like Google Maps)</li>
        <li>Real-time updates (like chat apps or notifications)</li>
        <li>Games and animations on the browser</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Beginner Practice Task
      </h2>
      <p className="text-gray-300 mb-2">
        Create a simple HTML page with a button that shows an alert saying{" "}
        <code>"Hello, JavaScript!"</code> when clicked.
      </p>

      <pre className="bg-neutral-800 p-4 rounded-md text-sm text-green-300 overflow-x-auto">
        {`<button onclick="alert('Hello, JavaScript!')">Click Me</button>`}
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-2">Interview Question</h2>
      <p className="text-gray-300 mb-2">
        <strong>Q:</strong> Why is JavaScript called a "loosely typed" or
        "dynamically typed" language?
      </p>
      <p className="text-gray-400">
        <strong>A:</strong> Because you don’t need to declare variable types. A
        variable can hold any type and change at runtime:
        <br />
        <code>let x = 5; x = "hello";</code>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">🧠 Quick Quiz</h2>
      <ul className="list-decimal list-inside text-gray-400 space-y-1">
        <li>What type of language is JavaScript (compiled or interpreted)?</li>
        <li>Can JavaScript run outside the browser?</li>
        <li>What are three main parts of a website?</li>
      </ul>
    </div>
  );
}

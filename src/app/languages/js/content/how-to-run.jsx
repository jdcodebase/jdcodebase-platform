import Link from "next/link";

export const metadata = {
  title: "How to Run JavaScript | JDCodebase",
  description:
    "Learn how to run JavaScript in browsers, online editors, and locally with Node.js. Explore simple ways to test JS code as a beginner.",
  keywords: [
    "Run JavaScript",
    "Browser console JavaScript",
    "Node.js tutorial",
    "JS Playground",
    "Execute JavaScript code",
    "JavaScript online editors",
    "JDCodebase",
  ],
  openGraph: {
    title: "How to Run JavaScript | JDCodebase",
    description:
      "Explore different ways to run JavaScript — in the browser, in HTML, online editors like PlayCode, or locally with Node.js.",
    url: "https://jdcodebase.vercel.app/languages/js/how-to-run",
    siteName: "JDCodebase",
    type: "article",
    images: [
      {
        url: "https://jdcodebase.vercel.app/og-banner.png",
        width: 1200,
        height: 630,
        alt: "How to Run JavaScript Code - JDCodebase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Run JavaScript | JDCodebase",
    description:
      "Learn how to run JavaScript code in the browser console, in HTML pages, using Node.js, or online editors like JSFiddle.",
    images: ["https://jdcodebase.vercel.app/og-banner.png"],
  },
};

export default function HowToRunJavaScript() {
  return (
    <div className="text-white px-4 md:px-8 py-6 bg-neutral-950 min-h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold mb-6 text-white">
          How to Run JavaScript
        </h1>

        <p className="text-gray-300 mb-4">
          JavaScript can run in many environments—from web browsers to local
          machines. Here are the most common and practical ways to execute JS
          code:
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">
          1. Browser Console
        </h2>
        <p className="text-gray-300 mb-4">
          Every modern browser has a built-in JavaScript console. Right-click
          anywhere, choose <em>Inspect</em>, and go to the{" "}
          <strong>Console</strong> tab. Try:
        </p>
        <pre className="bg-black border border-neutral-700 rounded p-4 text-sm overflow-x-auto mb-6">
          console.log("Hello from JDCodebase!");
        </pre>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">
          2. Online Editors
        </h2>
        <p className="text-gray-300 mb-4">
          Quickly test code with platforms like:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>
            <a
              href="https://playcode.io"
              target="_blank"
              className="text-blue-400 underline"
            >
              PlayCode
            </a>
          </li>
          <li>
            <a
              href="https://jsfiddle.net"
              target="_blank"
              className="text-blue-400 underline"
            >
              JSFiddle
            </a>
          </li>
          <li>
            <a
              href="https://replit.com"
              target="_blank"
              className="text-blue-400 underline"
            >
              Replit
            </a>
          </li>
          <li>
            <a href="/playground" className="text-blue-400 underline">
              JDCodebase Playground (Try it here!)
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">
          3. Node.js (Locally)
        </h2>
        <p className="text-gray-300 mb-4">
          Node.js allows JavaScript to run outside the browser—on your local
          machine.
        </p>
        <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
          <li>
            Download from{" "}
            <a
              href="https://nodejs.org"
              target="_blank"
              className="text-blue-400 underline"
            >
              nodejs.org
            </a>
          </li>
          <li>
            Create a file:{" "}
            <code className="bg-neutral-800 px-1 rounded">index.js</code>
          </li>
          <li>Write JS code inside</li>
          <li>
            Open terminal and run:{" "}
            <code className="bg-neutral-800 px-1 rounded">node index.js</code>
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">
          4. Embedded in HTML
        </h2>
        <p className="text-gray-300 mb-4">
          JavaScript can also run inside a web page using the{" "}
          <code className="bg-neutral-800 px-1 rounded">&lt;script&gt;</code>{" "}
          tag.
        </p>
        <pre className="bg-black border border-neutral-700 rounded p-4 text-sm overflow-x-auto mb-6">
          {`<!DOCTYPE html>
<html>
  <body>
    <script>
      alert("Hello from JDCodebase!");
    </script>
  </body>
</html>`}
        </pre>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">
          Which One to Use?
        </h2>
        <p className="text-gray-300 mb-4">
          Start with the browser console or the JDCodebase Playground. As you
          grow, use Node.js or embed JS in your projects.
        </p>

        <p className="text-gray-400 text-sm mt-10">
          @JDCodebase • Learn JavaScript the right way 🚀
        </p>
      </div>

      <div className="flex justify-between mt-10">
        <Link
          href="/languages/js/versions"
          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition duration-200"
        >
          ⬅ JS Versions
        </Link>
        <Link
          href="/languages/js/variables"
          className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-200"
        >
          Variables in JS ➡
        </Link>
      </div>
    </div>
  );
}

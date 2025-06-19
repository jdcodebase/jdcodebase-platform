import Link from "next/link";

export default function HistoryOfJavaScript() {
  return (
    <div className="text-white px-4 md:px-8 py-6 bg-neutral-950 min-h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">
          History of JavaScript
        </h1>

        <p className="text-gray-300 mb-4">
          JavaScript was created in 1995 by <strong>Brendan Eich</strong> while
          he was working at Netscape. It was originally called <em>Mocha</em>,
          briefly renamed to <em>LiveScript</em>, and finally became{" "}
          <em>JavaScript</em>.
        </p>

        <h2 className="text-2xl font-semibold text-green-400 mt-6 mb-2">
          📛 Why the Name “JavaScript”?
        </h2>
        <p className="text-gray-300 mb-4">
          Despite the name, JavaScript has{" "}
          <strong>nothing to do with Java</strong> in terms of design. Netscape
          partnered with Sun Microsystems (creators of Java) to promote the
          language and named it “JavaScript” to ride the hype around Java in the
          mid-90s.
        </p>
        <p className="text-gray-300 mb-4">
          This marketing decision caused confusion for years, but JavaScript and
          Java are as different as car and carpet.
        </p>

        <h2 className="text-2xl font-semibold text-green-400 mt-6 mb-2">
          🗓️ Key Milestones
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>1995:</strong> JavaScript created in 10 days at Netscape.
          </li>
          <li>
            <strong>1997:</strong> Standardized by ECMA as <em>ECMAScript</em>.
          </li>
          <li>
            <strong>2005:</strong> Ajax popularized dynamic web apps.
          </li>
          <li>
            <strong>2009:</strong> Node.js released – JS enters backend.
          </li>
          <li>
            <strong>2015:</strong> ES6 introduced major modern features.
          </li>
          <li>
            <strong>2020s:</strong> JS dominates with frameworks like React,
            Vue, and Angular.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-400 mt-6 mb-2">
          💡 Why It Matters
        </h2>
        <p className="text-gray-300 mb-4">
          Knowing the history and naming confusion helps understand JavaScript’s
          ecosystem, rapid growth, and its role as the core language of the web.
        </p>

        <p className="text-gray-400 text-sm mt-10">
          @JDCodebase • Learn JavaScript the right way 🚀
        </p>
      </div>

      <div className="flex justify-between mt-10">
        <Link
          href="/languages/js"
          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition duration-200"
        >
          ⬅ What is JavaScript
        </Link>
        <Link
          href="/languages/js/versions"
          className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-200"
        >
          JS Versions ➡
        </Link>
      </div>
    </div>
  );
}

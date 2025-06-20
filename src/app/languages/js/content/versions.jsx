import Link from "next/link";

export default function VersionsOfJavaScript() {
  return (
    <div className="text-white px-4 md:px-8 py-6 bg-neutral-950 min-h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold mb-6 text-white">
          Versions of JavaScript
        </h1>

        <p className="text-gray-300 mb-4">
          JavaScript evolves through ECMAScript (ES) versions, each bringing new
          features to the language. Here’s a timeline of major updates.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">
          ES3 (1999) – The Foundation
        </h2>
        <p className="text-gray-300 mb-4">
          Introduced features like <code>try...catch</code>, <code>switch</code>
          , and <code>do...while</code>. This was the first widely adopted
          version of JavaScript.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">
          ES5 (2009) – The Game Changer
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
          <li>
            Strict mode: <code>"use strict"</code>
          </li>
          <li>
            Array methods: <code>map()</code>, <code>filter()</code>,{" "}
            <code>reduce()</code>
          </li>
          <li>JSON support</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">
          ES6 / ES2015 – The Modern Era Begins
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
          <li>
            <code>let</code> and <code>const</code>
          </li>
          <li>
            Arrow functions: <code>() =&gt; {"{}"}</code>
          </li>
          <li>
            Template literals: <code>{"`Hello ${name}`"}</code>
          </li>
          <li>Destructuring, Classes, Modules</li>
          <li>Promises</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">
          ES7 to ES13 (2016–2022)
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
          <li>
            <strong>ES7:</strong> <code>includes()</code>, exponentiation
            operator <code>**</code>
          </li>
          <li>
            <strong>ES8:</strong> <code>async/await</code>,{" "}
            <code>Object.entries()</code>
          </li>
          <li>
            <strong>ES9:</strong> Rest/spread for objects,{" "}
            <code>Promise.finally()</code>
          </li>
          <li>
            <strong>ES10:</strong> <code>flat()</code>, <code>trimStart()</code>
            , <code>trimEnd()</code>
          </li>
          <li>
            <strong>ES11:</strong> Optional chaining <code>?.</code>, Nullish
            coalescing <code>??</code>
          </li>
          <li>
            <strong>ES12:</strong> <code>replaceAll()</code>, logical assignment
            operators
          </li>
          <li>
            <strong>ES13:</strong> Top-level <code>await</code>, static class
            blocks
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">
          ES2023 & Beyond
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
          <li>
            <code>Array.findLast()</code>, <code>Array.findLastIndex()</code>
          </li>
          <li>
            Set operations: <code>union()</code>, <code>intersection()</code>,
            etc.
          </li>
          <li>
            Explicit resource management with <code>using</code>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">
          Why It Matters
        </h2>
        <p className="text-gray-300 mb-4">
          Understanding JavaScript versions helps you write cleaner, modern code
          and stay up-to-date with best practices.
        </p>

        <p className="text-gray-400 text-sm mt-10">
          @JDCodebase • Learn JavaScript the right way 🚀
        </p>
      </div>

      <div className="flex justify-between mt-10">
        <Link
          href="/languages/js/history"
          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition duration-200"
        >
          ⬅ History of JavaScript
        </Link>
        <Link
          href="/languages/js/how-to-run"
          className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-200"
        >
          Running JS ➡
        </Link>
      </div>
    </div>
  );
}

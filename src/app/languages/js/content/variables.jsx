export const metadata = {
  title: "JavaScript Variables | JDCodebase",
  description:
    "Learn all about JavaScript variables including var, let, const, scoping, hoisting, best practices, and common interview questions.",
  keywords: [
    "JavaScript variables",
    "var let const",
    "hoisting in JavaScript",
    "JS scope",
    "temporal dead zone",
    "variable declaration",
    "JDCodebase",
  ],
  openGraph: {
    title: "JavaScript Variables | JDCodebase",
    description:
      "Master JavaScript variables: var, let, const, hoisting, scoping, and best practices for cleaner code. A must-know for interviews.",
    url: "https://jdcodebase.vercel.app/languages/js/variables",
    siteName: "JDCodebase",
    type: "article",
    images: [
      {
        url: "https://jdcodebase.vercel.app/og-banner.png",
        width: 1200,
        height: 630,
        alt: "JavaScript Variables Explained - JDCodebase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Variables | JDCodebase",
    description:
      "Deep dive into JS variables: var, let, const, hoisting, scope, and real examples. Learn smarter coding with JDCodebase.",
    images: ["https://jdcodebase.vercel.app/og-banner.png"],
  },
};

export default function VariablesPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white px-4 md:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">🧠 JavaScript Variables</h1>

        <p className="mb-4 text-lg text-gray-300">
          Variables in JavaScript are used to store data values. You can declare
          variables using <code className="text-green-400">var</code>,{" "}
          <code className="text-blue-400">let</code>, and{" "}
          <code className="text-yellow-300">const</code>. Understanding how they
          work is key to writing bug-free and efficient code.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          📌 Why Use Variables?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>To store and reuse data.</li>
          <li>To make code dynamic and flexible.</li>
          <li>To make programs more readable and maintainable.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          📦 Variable Declaration
        </h2>
        <p className="text-gray-300 mb-4">
          There are three ways to declare variables in JavaScript:
        </p>
        <div className="bg-neutral-900 p-4 rounded-lg text-sm overflow-auto">
          <pre>{`var name = "JD";     // function-scoped
let age = 25;        // block-scoped
const PI = 3.14;     // block-scoped, read-only`}</pre>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-2">🔁 var</h3>
        <ul className="list-disc pl-6 text-gray-300 space-y-1">
          <li>Function-scoped.</li>
          <li>Can be redeclared and updated.</li>
          <li>
            Hoisted to the top of its scope and initialized as{" "}
            <code>undefined</code>.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">📦 let</h3>
        <ul className="list-disc pl-6 text-gray-300 space-y-1">
          <li>Block-scoped.</li>
          <li>Cannot be redeclared in the same scope.</li>
          <li>Hoisted but not initialized (TDZ - Temporal Dead Zone).</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">🔒 const</h3>
        <ul className="list-disc pl-6 text-gray-300 space-y-1">
          <li>Block-scoped.</li>
          <li>Cannot be redeclared or reassigned.</li>
          <li>Must be initialized during declaration.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          🧠 Scope of Variables
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>
            <strong>Global Scope:</strong> Declared outside any block or
            function.
          </li>
          <li>
            <strong>Function Scope:</strong> Accessible only within a function
            (applies to <code>var</code>).
          </li>
          <li>
            <strong>Block Scope:</strong> Declared inside a block (
            <code>{`{}`}</code>) and only accessible within (applies to{" "}
            <code>let</code> and <code>const</code>).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">📤 Hoisting</h2>
        <p className="text-gray-300 mb-4">
          JavaScript moves declarations to the top of the scope. However, only{" "}
          <code className="text-green-400">var</code> is initialized with{" "}
          <code>undefined</code>. <code className="text-blue-400">let</code> and{" "}
          <code className="text-yellow-300">const</code> are hoisted but not
          initialized (TDZ).
        </p>
        <div className="bg-neutral-900 p-4 rounded-lg text-sm overflow-auto">
          <pre>{`console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;`}</pre>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">✅ Best Practices</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>
            Use <code>const</code> by default.
          </li>
          <li>
            Use <code>let</code> only if the value will change.
          </li>
          <li>
            Avoid <code>var</code> to prevent unexpected bugs due to scope
            leakage.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          🧪 Interview Questions
        </h2>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>
            What is the difference between <code>var</code>, <code>let</code>,
            and <code>const</code>?
          </li>
          <li>What is variable hoisting in JavaScript?</li>
          <li>What is the Temporal Dead Zone (TDZ)?</li>
          <li>
            Why should we prefer <code>const</code> and <code>let</code> over{" "}
            <code>var</code>?
          </li>
          <li>What are global, function, and block scopes?</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          🧰 Practice Exercise
        </h2>
        <p className="text-gray-300 mb-4">
          Write a JavaScript program to demonstrate scoping and hoisting:
        </p>
        <div className="bg-neutral-900 p-4 rounded-lg text-sm overflow-auto">
          <pre>{`function testScope() {
  console.log(x); // undefined
  var x = 5;

  if (true) {
    let y = 10;
    console.log(y); // 10
  }

  console.log(typeof y); // ReferenceError
}
testScope();`}</pre>
        </div>
      </div>
    </div>
  );
}

export const jsTopicsContent = [
  {
    slug: "what-is-javascript",
    title: "What is JavaScript?",
    content: [
      {
        type: "paragraph",
        text: "JavaScript is a high-level, interpreted scripting language primarily used to add interactivity and dynamic behavior to websites. It is supported by all modern browsers and can also run outside the browser using Node.js.",
      },
      {
        type: "paragraph",
        text: "JavaScript is one of the core technologies of the web, alongside HTML and CSS. While HTML gives structure and CSS styles the page, JavaScript makes it interactive — like handling button clicks, validating forms, displaying animations, and more.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why Learn JavaScript?",
      },
      {
        type: "list",
        items: [
          "It's the most popular language for web development.",
          "You can build both front-end and back-end apps (using Node.js).",
          "It's beginner-friendly and has a huge community.",
          "All browsers understand JavaScript by default (no installation needed).",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Real-World Analogy",
      },
      {
        type: "paragraph",
        text: "Think of a website like a robot:\nHTML is its body,\nCSS is the clothes and colors,\nJavaScript is the brain that makes it move and respond.",
      },
      {
        type: "heading",
        level: 2,
        text: "Key Characteristics",
      },
      {
        type: "list",
        items: [
          "Dynamic and loosely typed",
          "Supports object-oriented, functional, and imperative styles",
          "Interpreted (no compiler needed)",
          "Event-driven and asynchronous capabilities (via Promises, async/await)",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Why is JavaScript Considered Interpreted?",
      },
      {
        type: "list",
        items: [
          "It executes code line-by-line without needing a compiler.",
          "Browsers like Chrome and Firefox directly interpret it using engines like V8.",
          "It works dynamically, allowing type changes at runtime.",
        ],
      },
      {
        type: "paragraph",
        text: "However, modern JavaScript engines now use JIT (Just-In-Time) compilation to improve performance — so JavaScript today is actually a hybrid of interpreted and compiled behavior.",
      },
      {
        type: "heading",
        level: 2,
        text: "Real Use Cases",
      },
      {
        type: "list",
        items: [
          "Form validation",
          "Interactive maps (like Google Maps)",
          "Real-time updates (like chat apps or notifications)",
          "Games and animations on the browser",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Beginner Practice Task",
      },
      {
        type: "paragraph",
        text: 'Create a simple HTML page with a button that shows an alert saying "Hello, JavaScript!" when clicked.',
      },
      {
        type: "code",
        language: "html",
        code: `<button onclick="alert('Hello, JavaScript!')">Click Me</button>`,
      },
      {
        type: "heading",
        level: 2,
        text: "Interview Question",
      },
      {
        type: "question",
        question:
          "Why is JavaScript called a 'loosely typed' or 'dynamically typed' language?",
        answer:
          "Because you don’t need to declare variable types. A variable can hold any type and change at runtime: let x = 5; x = 'hello';",
      },
      {
        type: "heading",
        level: 2,
        text: "Quick Quiz",
      },
      {
        type: "quiz",
        questions: [
          "What type of language is JavaScript (compiled or interpreted)?",
          "Can JavaScript run outside the browser?",
          "What are three main parts of a website?",
        ],
      },
      {
        type: "navigation",
        next: {
          title: "History of JavaScript",
          href: "/languages/js/history-of-javascript",
        },
      },
    ],
  },
  {
    slug: "history-of-javascript",
    title: "History of JavaScript",
    content: [
      {
        type: "paragraph",
        text: `JavaScript was created in 1995 by Brendan Eich while he was working at Netscape. It was originally called Mocha, briefly renamed to LiveScript, and finally became JavaScript.`,
      },
      {
        type: "heading",
        level: 2,
        text: "Why the Name “JavaScript”?",
      },
      {
        type: "paragraph",
        text: `Despite the name, JavaScript has nothing to do with Java in terms of design. Netscape partnered with Sun Microsystems (creators of Java) to promote the language and named it “JavaScript” to ride the hype around Java in the mid-90s.`,
      },
      {
        type: "paragraph",
        text: `This marketing decision caused confusion for years, but JavaScript and Java are as different as car and carpet.`,
      },
      {
        type: "heading",
        level: 2,
        text: "Key Milestones",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "**1995:** JavaScript created in 10 days at Netscape.",
          "**1997:** Standardized by ECMA as _ECMAScript_.",
          "**2005:** Ajax popularized dynamic web apps.",
          "**2009:** Node.js released – JS enters backend.",
          "**2015:** ES6 introduced major modern features.",
          "**2020s:** JS dominates with frameworks like React, Vue, and Angular.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Why It Matters",
      },
      {
        type: "paragraph",
        text: `Knowing the history and naming confusion helps understand JavaScript’s ecosystem, rapid growth, and its role as the core language of the web.`,
      },
      {
        type: "navigation",
        previous: {
          title: "What is JavaScript",
          href: "/languages/js/what-is-javascript",
        },
        next: {
          title: "JS Versions",
          href: "/languages/js/versions-of-javascript",
        },
      },
    ],
  },
  {
    slug: "versions-of-javascript",
    title: "Versions of JavaScript",
    content: [
      {
        type: "paragraph",
        text: "JavaScript evolves through ECMAScript (ES) versions, each bringing new features to the language. Here’s a timeline of major updates.",
      },
      {
        type: "heading",
        level: 2,
        text: "ES3 (1999) – The Foundation",
      },
      {
        type: "paragraph",
        text: "Introduced features like try...catch, switch, and do...while. This was the first widely adopted version of JavaScript.",
      },
      {
        type: "heading",
        level: 2,
        text: "ES5 (2009) – The Game Changer",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          'Strict mode: "use strict"',
          "Array methods: map(), filter(), reduce()",
          "JSON support",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "ES6 / ES2015 – The Modern Era Begins",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "let and const",
          "Arrow functions: () => {}",
          "Template literals: `Hello ${name}`",
          "Destructuring, Classes, Modules",
          "Promises",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "ES7 to ES13 (2016–2022)",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "ES7: includes(), exponentiation operator **",
          "ES8: async/await, Object.entries()",
          "ES9: Rest/spread for objects, Promise.finally()",
          "ES10: flat(), trimStart(), trimEnd()",
          "ES11: Optional chaining ?., Nullish coalescing ??",
          "ES12: replaceAll(), logical assignment operators",
          "ES13: Top-level await, static class blocks",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "ES2023 & Beyond",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Array.findLast(), Array.findLastIndex()",
          "Set operations: union(), intersection(), etc.",
          "Explicit resource management with using",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Why It Matters",
      },
      {
        type: "paragraph",
        text: "Understanding JavaScript versions helps you write cleaner, modern code and stay up-to-date with best practices.",
      },
      {
        type: "navigation",
        previous: {
          title: "History of JavaScript",
          href: "/languages/js/history-of-javascript",
        },
        next: {
          title: "Running JS",
          href: "/languages/js/how-to-run-javascript",
        },
      },
    ],
  },
  {
    slug: "how-to-run-javascript",
    title: "How to Run JavaScript",
    content: [
      {
        type: "paragraph",
        text: "JavaScript can run in many environments—from web browsers to local machines. Here are the most common and practical ways to execute JS code:",
      },
      {
        type: "heading",
        level: 2,
        text: "1. Browser Console",
      },
      {
        type: "paragraph",
        text: "Every modern browser has a built-in JavaScript console. Right-click anywhere, choose Inspect, and go to the Console tab. Try:",
      },
      {
        type: "code",
        language: "javascript",
        code: 'console.log("Hello from JDCodebase!");',
      },
      {
        type: "heading",
        level: 2,
        text: "2. Online Editors",
      },
      {
        type: "paragraph",
        text: "Quickly test code with platforms like:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "[PlayCode](https://playcode.io)",
          "[JSFiddle](https://jsfiddle.net)",
          "[Replit](https://replit.com)",
          "[JDCodebase Playground](/playground)",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "3. Node.js (Locally)",
      },
      {
        type: "paragraph",
        text: "Node.js allows JavaScript to run outside the browser—on your local machine.",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Download from [nodejs.org](https://nodejs.org)",
          "Create a file: `index.js`",
          "Write JS code inside",
          "Open terminal and run: `node index.js`",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "4. Embedded in HTML",
      },
      {
        type: "paragraph",
        text: "JavaScript can also run inside a web page using the `<script>` tag.",
      },
      {
        type: "code",
        language: "html",
        code: `<!DOCTYPE html>
  <html>
    <body>
      <script>
        alert("Hello from JDCodebase!");
      </script>
    </body>
  </html>`,
      },
      {
        type: "heading",
        level: 2,
        text: "Which One to Use?",
      },
      {
        type: "paragraph",
        text: "Start with the browser console or the JDCodebase Playground. As you grow, use Node.js or embed JS in your projects.",
      },
      {
        type: "navigation",
        previous: {
          title: "JS Versions",
          href: "/languages/js/versions-of-javascript",
        },
        next: {
          title: "Variables in JS",
          href: "/languages/js/variables-in-javascript",
        },
      },
    ],
  },
  {
    slug: "variables-in-javascript",
    title: "JavaScript Variables",
    content: [
      {
        type: "paragraph",
        text: "Variables in JavaScript are used to store data values. You can declare variables using `var`, `let`, and `const`. Understanding how they work is key to writing bug-free and efficient code.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why Use Variables?",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "To store and reuse data.",
          "To make code dynamic and flexible.",
          "To make programs more readable and maintainable.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Variable Declaration",
      },
      {
        type: "paragraph",
        text: "There are three ways to declare variables in JavaScript:",
      },
      {
        type: "code",
        language: "javascript",
        code: `var name = "JD";     // function-scoped
  let age = 25;        // block-scoped
  const PI = 3.14;     // block-scoped, read-only`,
      },
      {
        type: "heading",
        level: 3,
        text: "var",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Function-scoped.",
          "Can be redeclared and updated.",
          "Hoisted to the top of its scope and initialized as `undefined`.",
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "let",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Block-scoped.",
          "Cannot be redeclared in the same scope.",
          "Hoisted but not initialized (TDZ - Temporal Dead Zone).",
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "const",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Block-scoped.",
          "Cannot be redeclared or reassigned.",
          "Must be initialized during declaration.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Scope of Variables",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "**Global Scope:** Declared outside any block or function.",
          "**Function Scope:** Accessible only within a function (applies to `var`).",
          "**Block Scope:** Declared inside a block (`{}`) and only accessible within (applies to `let` and `const`).",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Best Practices",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Use `const` by default.",
          "Use `let` only if the value will change.",
          "Avoid `var` to prevent unexpected bugs due to scope leakage.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Interview Questions",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "What is the difference between `var`, `let`, and `const`?",
          "What is variable hoisting in JavaScript?",
          "What is the Temporal Dead Zone (TDZ)?",
          "Why should we prefer `const` and `let` over `var`?",
          "What are global, function, and block scopes?",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Practice Exercise",
      },
      {
        type: "paragraph",
        text: "Write a JavaScript program to demonstrate scoping and hoisting:",
      },
      {
        type: "code",
        language: "javascript",
        code: `function testScope() {
    console.log(x); // undefined
    var x = 5;
  
    if (true) {
      let y = 10;
      console.log(y); // 10
    }
  
    console.log(typeof y); // ReferenceError
  }
  testScope();`,
      },
    ],
  },
];

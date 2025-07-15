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
        question: "What type of language is JavaScript?",
        options: ["Compiled", "Interpreted", "Both", "Machine code"],
        correctAnswerIndex: 2,
        explanation:
          "JavaScript is interpreted, but with modern engines like V8, it also uses Just-In-Time (JIT) compilation — so it's often referred to as both.",
      },
      {
        type: "quiz",
        question: "Can JavaScript run outside the browser?",
        options: [
          "No",
          "Yes, using Node.js",
          "Only on mobile apps",
          "Only in web servers",
        ],
        correctAnswerIndex: 1,
        explanation:
          "Yes! JavaScript can run outside the browser using environments like Node.js.",
      },
      {
        type: "quiz",
        question: "What are the three main parts of a website?",
        options: [
          "Frontend, Backend, SEO",
          "HTML, CSS, JavaScript",
          "Browser, Server, Database",
          "HTTP, TCP/IP, DNS",
        ],
        correctAnswerIndex: 1,
        explanation:
          "The three main building blocks of a website are HTML (structure), CSS (styling), and JavaScript (behavior).",
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
        code: `  function testScope() {
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
      {
        type: "quiz",
        question:
          "Which of the following statements is TRUE about `const` in JavaScript?",
        options: [
          "It can be redeclared.",
          "It can be reassigned.",
          "It must be initialized at the time of declaration.",
          "It is function-scoped.",
        ],
        correctAnswerIndex: 2,
        explanation:
          "`const` must be initialized during declaration and cannot be reassigned or redeclared. It is block-scoped.",
      },
      {
        type: "navigation",
        previous: {
          title: "How to Run JavaScript",
          href: "/languages/js/how-to-run-javascript",
        },
        next: {
          title: "Hoisting",
          href: "/languages/js/hoisting",
        },
      },
    ],
  },
  {
    slug: "hoisting",
    title: "Hoisting in JavaScript",
    content: [
      {
        type: "paragraph",
        text: "Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope during the compilation phase. It allows functions and variables to be used before they are declared.",
      },
      {
        type: "heading",
        level: 2,
        text: "What Gets Hoisted?",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "`var` declarations (not initializations).",
          "Function declarations.",
          "`let` and `const` declarations are hoisted but not initialized.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Variable Hoisting Example",
      },
      {
        type: "code",
        language: "javascript",
        code: `console.log(a); // undefined
var a = 10;`,
      },
      {
        type: "paragraph",
        text: "In the above example, the variable `a` is hoisted to the top and initialized as `undefined`, so it doesn't throw an error.",
      },
      {
        type: "heading",
        level: 2,
        text: "Function Hoisting Example",
      },
      {
        type: "code",
        language: "javascript",
        code: `greet(); // Hello!
function greet() {
  console.log("Hello!");
}`,
      },
      {
        type: "paragraph",
        text: "Function declarations are fully hoisted, so they can be called before being defined in the code.",
      },
      {
        type: "heading",
        level: 2,
        text: "let & const Hoisting",
      },
      {
        type: "code",
        language: "javascript",
        code: `console.log(b); // ReferenceError
let b = 20;`,
      },
      {
        type: "paragraph",
        text: "`let` and `const` are hoisted but not initialized. Accessing them before declaration results in a ReferenceError due to the Temporal Dead Zone (TDZ).",
      },
      {
        type: "heading",
        level: 2,
        text: "Temporal Dead Zone (TDZ)",
      },
      {
        type: "paragraph",
        text: "The TDZ is the time between entering a scope and the actual declaration of the variable. Accessing a variable during this period causes a ReferenceError.",
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
          "Declare variables at the top of their scope.",
          "Use `let` and `const` instead of `var` to avoid confusion with hoisting.",
          "Avoid using variables before they are declared.",
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
          "What is hoisting in JavaScript?",
          "What gets hoisted — declarations or initializations?",
          "How does hoisting differ between `var`, `let`, and `const`?",
          "What is the Temporal Dead Zone?",
          "Are function expressions hoisted?",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Practice Exercise",
      },
      {
        type: "paragraph",
        text: "What will be the output of the following code? Explain why:",
      },
      {
        type: "code",
        language: "javascript",
        code: `console.log(x); // ?
let x = 5;
  
foo(); // ?
const foo = function() {
  console.log("Hello!");
};`,
      },
      {
        type: "quiz",
        question:
          "What will be the output of the following code?\n\n```javascript\nconsole.log(a);\nvar a = 10;\n```",
        options: ["`10`", "`undefined`", "`ReferenceError`", "`null`"],
        correctAnswerIndex: 1,
        explanation:
          "Due to hoisting, `var a` is moved to the top and initialized as `undefined` before the `console.log` runs.",
      },
      {
        type: "navigation",
        previous: {
          title: "JavaScript Variables",
          href: "/languages/js/variables-in-javascript",
        },
        next: {
          title: "Scope in JavaScript",
          href: "/languages/js/scope",
        },
      },
    ],
  },
  {
    slug: "scope",
    title: "Scope in JavaScript",
    content: [
      {
        type: "paragraph",
        text: "Scope in JavaScript refers to the current context of execution — which determines the accessibility of variables. Understanding scope helps avoid unexpected behaviors and bugs.",
      },
      {
        type: "heading",
        level: 2,
        text: "Types of Scope",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "**Global Scope** – Variables declared outside any function or block. Accessible anywhere.",
          "**Function Scope** – Variables declared with `var` inside a function are accessible only within that function.",
          "**Block Scope** – Variables declared with `let` or `const` inside a block (`{}`) are accessible only within that block.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Function Scope Example",
      },
      {
        type: "code",
        language: "javascript",
        code: `function greet() {
  var message = "Hello";
  console.log(message); // "Hello"
}
console.log(message); // ReferenceError`,
      },
      {
        type: "heading",
        level: 2,
        text: "Block Scope Example",
      },
      {
        type: "code",
        language: "javascript",
        code: `{
  let x = 10;
  const y = 20;
  console.log(x, y); // 10 20
}
console.log(x); // ReferenceError`,
      },
      {
        type: "heading",
        level: 2,
        text: "Lexical Scope",
      },
      {
        type: "paragraph",
        text: "Lexical scope means that a function can access variables from its parent scope. JavaScript uses lexical scoping.",
      },
      {
        type: "code",
        language: "javascript",
        code: `function outer() {
  let outerVar = "I am outside!";
  function inner() {
    console.log(outerVar); // Accessible
  }
  inner();
}
outer();`,
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
          "Use `let` and `const` to take advantage of block scoping.",
          "Avoid declaring variables in the global scope.",
          "Understand lexical scoping to avoid reference errors.",
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
          "What is the difference between block, function, and global scope?",
          "What is lexical scope?",
          "How do `var`, `let`, and `const` behave in different scopes?",
          "What will happen if you access a variable outside its scope?",
        ],
      },
      {
        type: "quiz",
        question:
          "What type of scope does `let` and `const` have in JavaScript?",
        options: [
          "Global scope",
          "Function scope",
          "Block scope",
          "Lexical scope only",
        ],
        correctAnswerIndex: 2,
        explanation:
          "`let` and `const` are block-scoped, meaning they are accessible only within the block they are declared in.",
      },
      {
        type: "navigation",
        previous: {
          title: "Hoisting in JavaScript",
          href: "/languages/js/hoisting",
        },
        next: {
          title: "Data Types in JavaScript",
          href: "/languages/js/data-types",
        },
      },
    ],
  },
  {
    slug: "data-types",
    title: "Data Types in JavaScript",
    content: [
      {
        type: "paragraph",
        text: "Data types in JavaScript define the type of value a variable can hold. JavaScript is a dynamically typed language, meaning variables can hold any type of data without specifying the type explicitly.",
      },

      // 🟦 Primitive Data Types
      {
        type: "heading",
        level: 2,
        text: "Primitive Data Types",
      },
      {
        type: "paragraph",
        text: "Primitive data types are immutable and hold single values. JavaScript has 7 primitive types.",
      },

      // String
      {
        type: "heading",
        level: 3,
        text: "1. String",
      },
      {
        type: "paragraph",
        text: "Used to represent textual data.",
      },
      {
        type: "code",
        language: "javascript",
        code: `let name = "JD"; // String`,
      },

      // Number
      {
        type: "heading",
        level: 3,
        text: "2. Number",
      },
      {
        type: "paragraph",
        text: "Represents both integer and floating-point numbers.",
      },
      {
        type: "code",
        language: "javascript",
        code: `let age = 25;      // Integer
let pi = 3.14;    // Float`,
      },

      // Boolean
      {
        type: "heading",
        level: 3,
        text: "3. Boolean",
      },
      {
        type: "paragraph",
        text: "Represents logical entities: `true` or `false`.",
      },
      {
        type: "code",
        language: "javascript",
        code: `let isLoggedIn = true;`,
      },

      // Undefined
      {
        type: "heading",
        level: 3,
        text: "4. Undefined",
      },
      {
        type: "paragraph",
        text: "A variable that has been declared but not assigned a value.",
      },
      {
        type: "code",
        language: "javascript",
        code: `let result;
  console.log(result); // undefined`,
      },

      // Null
      {
        type: "heading",
        level: 3,
        text: "5. Null",
      },
      {
        type: "paragraph",
        text: "Represents the intentional absence of any value or object.",
      },
      {
        type: "code",
        language: "javascript",
        code: `let value = null;`,
      },

      // Symbol
      {
        type: "heading",
        level: 3,
        text: "6. Symbol",
      },
      {
        type: "paragraph",
        text: "Used to create unique identifiers, often for object properties.",
      },
      {
        type: "code",
        language: "javascript",
        code: `const sym = Symbol("id");`,
      },

      // BigInt
      {
        type: "heading",
        level: 3,
        text: "7. BigInt",
      },
      {
        type: "paragraph",
        text: "Represents integers with arbitrary precision, beyond `Number.MAX_SAFE_INTEGER`.",
      },
      {
        type: "code",
        language: "javascript",
        code: `let bigNumber = 9007199254740991n;`,
      },

      // 🟧 Non-Primitive Data Types
      {
        type: "heading",
        level: 2,
        text: "Non-Primitive (Reference) Data Types",
      },
      {
        type: "paragraph",
        text: "Non-primitive types can hold collections or more complex data structures. They're mutable and stored by reference.",
      },

      // Object
      {
        type: "heading",
        level: 3,
        text: "1. Object",
      },
      {
        type: "paragraph",
        text: "A collection of key-value pairs.",
      },
      {
        type: "code",
        language: "javascript",
        code: `const person = {
  name: "JD",
  age: 25
};`,
      },

      // Array
      {
        type: "heading",
        level: 3,
        text: "2. Array",
      },
      {
        type: "paragraph",
        text: "An ordered collection of values.",
      },
      {
        type: "code",
        language: "javascript",
        code: `const numbers = [1, 2, 3];`,
      },

      // Function
      {
        type: "heading",
        level: 3,
        text: "3. Function",
      },
      {
        type: "paragraph",
        text: "A block of reusable code.",
      },
      {
        type: "code",
        language: "javascript",
        code: `function greet() {
  console.log("Hello!");
}`,
      },

      // Others
      {
        type: "heading",
        level: 3,
        text: "4. Others (Date, RegExp, Map, Set, etc.)",
      },
      {
        type: "paragraph",
        text: "JavaScript also provides built-in reference types like `Date`, `RegExp`, `Map`, `Set`, etc.",
      },

      // typeof
      {
        type: "heading",
        level: 2,
        text: "typeof Operator",
      },
      {
        type: "paragraph",
        text: "You can check the type of any value using the `typeof` operator.",
      },
      {
        type: "code",
        language: "javascript",
        code: `typeof "hello";    // "string"
typeof 123;        // "number"
typeof true;       // "boolean"
typeof undefined;  // "undefined"
typeof null;       // "object" (quirk!)
typeof {};         // "object"
typeof [];         // "object"
typeof function() {}; // "function"`,
      },

      // Best Practices
      {
        type: "heading",
        level: 2,
        text: "Best Practices",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Use `typeof` to check value types at runtime.",
          "`typeof null` returns `'object'` — this is a known JavaScript bug.",
          "Use `Array.isArray()` instead of `typeof` for arrays.",
          "Use `typeof value === 'function'` to check for functions.",
        ],
      },

      // Interview
      {
        type: "heading",
        level: 2,
        text: "Interview Questions",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "What are the primitive data types in JavaScript?",
          "What is the difference between `null` and `undefined`?",
          "Why does `typeof null` return `object`?",
          "How do you check if a value is an array?",
          "What is BigInt used for?",
        ],
      },

      // Quiz
      {
        type: "quiz",
        question: "What is the output of `typeof null` in JavaScript?",
        options: ["`null`", "`object`", "`undefined`", "`false`"],
        correctAnswerIndex: 1,
        explanation:
          "`typeof null` returns `'object'`, which is a well-known quirk in JavaScript for backward compatibility.",
      },

      // Navigation
      {
        type: "navigation",
        previous: {
          title: "Scope in JavaScript",
          href: "/languages/js/scope",
        },
        next: {
          title: "Type Casting in JavaScript",
          href: "/languages/js/type-casting",
        },
      },
    ],
  },
  {
    slug: "type-casting",
    title: "Type Casting in JavaScript",
    content: [
      {
        type: "paragraph",
        text: "Type casting (or type conversion) in JavaScript refers to converting a value from one data type to another. JavaScript performs type conversion both explicitly and implicitly.",
      },

      {
        type: "heading",
        level: 2,
        text: "Types of Type Casting",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "**Implicit Type Casting** – Done automatically by JavaScript (also called type coercion).",
          "**Explicit Type Casting** – Done manually using constructors or functions.",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Implicit Type Casting",
      },
      {
        type: "paragraph",
        text: "JavaScript automatically converts types when it thinks it's needed. This often happens in arithmetic or logical operations.",
      },
      {
        type: "code",
        language: "javascript",
        code: `"5" + 1;        // "51" (number 1 is converted to string)
  "5" - 1;        // 4 (string "5" is converted to number)
  true + 1;       // 2 (true becomes 1)
  false + "1";    // "false1" (false becomes string)
  null + 1;       // 1 (null becomes 0)
  undefined + 1;  // NaN (undefined can't convert to number)`,
      },

      {
        type: "heading",
        level: 2,
        text: "Explicit Type Casting",
      },
      {
        type: "paragraph",
        text: "You can forcefully convert types using functions like `Number()`, `String()`, and `Boolean()`.",
      },
      {
        type: "code",
        language: "javascript",
        code: `Number("42");       // 42
  String(123);       // "123"
  Boolean(0);        // false
  Boolean("hello");  // true`,
      },

      {
        type: "heading",
        level: 2,
        text: "Falsy and Truthy Values",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          '**Falsy values**: `false`, `0`, `""`, `null`, `undefined`, `NaN`',
          "All other values are **truthy**.",
        ],
      },
      {
        type: "code",
        language: "javascript",
        code: `Boolean("");         // false
  Boolean("text");     // true
  Boolean(0);          // false
  Boolean(100);        // true`,
      },

      {
        type: "heading",
        level: 2,
        text: "`==` vs `===` in Type Comparison",
      },
      {
        type: "paragraph",
        text: "`==` compares values after type coercion (loose equality), while `===` compares both value and type (strict equality).",
      },
      {
        type: "code",
        language: "javascript",
        code: `"5" == 5;     // true (coerced)
  "5" === 5;    // false (no coercion)`,
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
          "Prefer `===` and `!==` to avoid implicit coercion.",
          "Be cautious when relying on JavaScript's automatic type conversions.",
          "Use `Boolean()`, `Number()`, `String()` for safe explicit conversions.",
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
          "What is the difference between implicit and explicit type casting?",
          "What are truthy and falsy values in JavaScript?",
          "Explain the difference between `==` and `===`.",
          "How does JavaScript handle type coercion in arithmetic operations?",
        ],
      },

      {
        type: "quiz",
        question: "What is the result of `'5' - 2` in JavaScript?",
        options: ["'3'", "NaN", "3", "'52'"],
        correctAnswerIndex: 2,
        explanation: `"5" is implicitly converted to a number, so '5' - 2 becomes 3.`,
      },

      {
        type: "navigation",
        previous: {
          title: "Data Types in JavaScript",
          href: "/languages/js/data-types",
        },
        next: {
          title: "Comparison Operators",
          href: "/languages/js/comparison",
        },
      },
    ],
  },
];

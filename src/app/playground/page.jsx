"use client";
import { useState, useEffect, useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";

export default function Playground() {
  const [code, setCode] = useState(`// Try running this!
function greet(name) {
  console.log("Hello, " + name);
}
greet("JDCodebase");
`);
  const [output, setOutput] = useState("");
  const outputRef = useRef();

  const runCode = () => {
    let consoleOutput = "";
    const originalConsoleLog = console.log;

    try {
      console.log = (...args) => {
        consoleOutput += args.join(" ") + "\n";
      };

      const result = new Function(code)();
      if (result !== undefined) {
        consoleOutput += result + "\n";
      }

      setOutput(consoleOutput || "Code ran successfully.");
    } catch (err) {
      setOutput("Error: " + err.message);
    } finally {
      console.log = originalConsoleLog;
    }
  };

  const clearOutput = () => {
    setOutput("");
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col p-4">
      <div className="py-5 md:flex md:justify-between md:items-center">
        <h1 className="md:text-3xl  text-2xl font-bold">
          JavaScript Playground
        </h1>
        <div className="flex gap-4 justify-end pt-2 md:pt-0">
          <button
            onClick={runCode}
            className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
          >
            Run
          </button>
          <button
            onClick={clearOutput}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
          >
            Clear Output
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 flex-1">
        <div className="h-[500px] w-full md:w-1/2 bg-neutral-900 p-4 rounded-lg shadow">
          <CodeMirror
            value={code}
            height="460px"
            extensions={[javascript()]}
            theme={dracula}
            onChange={(value) => setCode(value)}
          />
        </div>

        <div className="h-[500px] w-full md:w-1/2 bg-black p-4 rounded-lg shadow overflow-auto">
          <h2 className="text-xl font-semibold mb-2">Console Output:</h2>
          <pre
            ref={outputRef}
            className={`whitespace-pre-wrap h-full overflow-y-auto p-2 rounded text-sm ${
              output.startsWith("Error:") ? "text-red-400" : "text-green-400"
            }`}
          >
            {output || "// Output will appear here..."}
          </pre>
        </div>
      </div>
    </div>
  );
}

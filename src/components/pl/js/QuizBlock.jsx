"use client";
import { useState } from "react";

export default function QuizBlock({ block }) {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (idx) => {
    setSelected(idx);
    setShowResult(true);
  };

  return (
    <div className="mb-6 p-4 rounded-lg border border-gray-700 bg-gray-800 shadow">
      <p className="text-lg font-semibold text-blue-400 mb-3">
        Quiz: {block.question}
      </p>
      <ul className="space-y-2">
        {block.options.map((option, idx) => (
          <li
            key={idx}
            onClick={() => handleSelect(idx)}
            className={`cursor-pointer p-3 rounded-md border transition duration-300 ${
              showResult
                ? idx === block.correctAnswerIndex
                  ? "border-green-500 bg-green-900 text-green-300"
                  : idx === selected
                  ? "border-red-500 bg-red-900 text-red-300"
                  : "border-gray-700 text-gray-400"
                : "border-gray-600 hover:border-blue-500 hover:bg-gray-700"
            }`}
          >
            {option}
          </li>
        ))}
      </ul>
      {showResult && (
        <p
          className={`mt-4 text-sm italic ${
            selected === block.correctAnswerIndex
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {selected === block.correctAnswerIndex
            ? "✅ Correct!"
            : "❌ Incorrect."}
        </p>
      )}
      {showResult && (
        <p className="text-gray-400 mt-2 text-sm">💡 {block.explanation}</p>
      )}
    </div>
  );
}

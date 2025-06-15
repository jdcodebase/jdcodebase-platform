import { problems } from "./dsa/problem";

export const topics = Array.from(
  new Set(problems.flatMap((problem) => problem.topics))
).map((topic) => {
  let description = "";

  switch (topic) {
    case "Foundation":
      description =
        "Start here with time complexity, space complexity, and basic coding concepts.";
      break;
    case "Array":
      description =
        "Understand linear data structures and master array manipulation techniques.";
      break;
    case "String":
      description =
        "Work with characters, substrings, and string algorithms efficiently.";
      break;
    case "Two Pointer":
      description =
        "Optimize problems using two simultaneous iterators or boundaries.";
      break;
    case "Sliding Window":
      description =
        "Solve subarray and substring problems in linear time with a moving window.";
      break;
    case "Binary Search":
      description =
        "Efficiently search in sorted arrays using divide-and-conquer strategy.";
      break;
    case "Sorting":
      description =
        "Master algorithms like MergeSort, QuickSort, and learn how to sort efficiently.";
      break;
    case "Stack":
    case "Queue":
    case "Stack & Queue":
      description =
        "Learn stack (LIFO) and queue (FIFO) structures essential for many algorithmic problems.";
      break;
    case "Greedy":
      description =
        "Build efficient solutions by making locally optimal choices at each step.";
      break;
    case "Dynamic Programming":
      description =
        "Break down complex problems and store solutions to overlapping subproblems.";
      break;
    case "Hash Map":
      description =
        "Use key-value mappings for fast lookups, counting, and frequency-based problems.";
      break;
    case "Hash Set":
      description =
        "Use sets to track unique values and enable fast membership checks.";
      break;
    default:
      description = `Problems related to ${topic}.`;
  }

  return {
    name: topic,
    description,
    slug: topic.toLowerCase().replace(/\s+/g, "-"),
  };
});

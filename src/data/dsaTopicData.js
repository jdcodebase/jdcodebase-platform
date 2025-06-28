import { problems } from "./dsa/problem";

const topicDescriptions = {
  Foundation:
    "Start here with time complexity, space complexity, and basic coding concepts.",
  Array:
    "Understand linear data structures and master array manipulation techniques.",
  String:
    "Work with characters, substrings, and string algorithms efficiently.",
  "Two Pointer":
    "Optimize problems using two simultaneous iterators or boundaries.",
  "Sliding Window":
    "Solve subarray and substring problems in linear time with a moving window.",
  "Binary Search":
    "Efficiently search in sorted arrays using divide-and-conquer strategy.",
  Sorting:
    "Master algorithms like MergeSort, QuickSort, and learn how to sort efficiently.",
  Stack:
    "Learn stack (LIFO) and queue (FIFO) structures essential for many algorithmic problems.",
  Queue:
    "Learn stack (LIFO) and queue (FIFO) structures essential for many algorithmic problems.",
  "Stack & Queue":
    "Learn stack (LIFO) and queue (FIFO) structures essential for many algorithmic problems.",
  Greedy:
    "Build efficient solutions by making locally optimal choices at each step.",
  "Dynamic Programming":
    "Break down complex problems and store solutions to overlapping subproblems.",
  "Hash Map":
    "Use key-value mappings for fast lookups, counting, and frequency-based problems.",
  "Hash Set":
    "Use sets to track unique values and enable fast membership checks.",
};

export const topics = Array.from(
  new Set(problems.flatMap((problem) => problem.topics))
).map((topic) => {
  const cleanTopic = topic.trim();
  const description =
    topicDescriptions[cleanTopic] || `Problems related to ${cleanTopic}.`;

  return {
    name: cleanTopic,
    description,
    slug: cleanTopic.toLowerCase().replace(/\s+/g, "-"),
  };
});

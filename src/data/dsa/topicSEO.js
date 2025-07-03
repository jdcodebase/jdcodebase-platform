const topicList = [
  {
    key: "foundation",
    title: "Foundation DSA Problems",
    description: "Build your fundamentals in data structures and algorithms...",
    url: "https://jdcodebase.vercel.app/dsa/foundation",
    image: "https://jdcodebase.vercel.app/og-banner.png",
    keywords: [
      "DSA foundation",
      "basic data structures",
      "algorithms for beginners",
      "JDCodebase foundation",
    ],
    robots: "index, follow",
    openGraph: {
      siteName: "JDCodebase",
    },
  },
  {
    key: "array",
    title: "Array DSA Problems",
    description:
      "Practice array data structure problems with detailed solutions, code examples, and explanations. Perfect for beginners and interview prep.",
    url: "https://jdcodebase.vercel.app/dsa/array",
    image: "https://jdcodebase.vercel.app/og-banner.png",
    keywords: [
      "array problems",
      "JavaScript array DSA",
      "array interview questions",
      "JDCodebase",
    ],
    robots: "index, follow",
    openGraph: {
      siteName: "JDCodebase",
    },
  },
  {
    key: "string",
    title: "String DSA Problems",
    description:
      "Master string manipulation techniques in DSA. Includes pattern matching, frequency analysis, and substring challenges.",
    url: "https://jdcodebase.vercel.app/dsa/string",
    image: "https://jdcodebase.vercel.app/og-banner.png",
    keywords: [
      "string problems",
      "string algorithms",
      "JavaScript strings",
      "DSA string problems",
      "JDCodebase",
    ],
    robots: "index, follow",
    openGraph: {
      siteName: "JDCodebase",
    },
  },
  {
    key: "two-pointer",
    title: "Two Pointer DSA Problems",
    description:
      "Learn the two-pointer technique to solve optimized array and string traversal problems with minimal space.",
    url: "https://jdcodebase.vercel.app/dsa/two-pointer",
    image: "https://jdcodebase.vercel.app/og-banner.png",
    keywords: [
      "two pointer technique",
      "DSA two pointer problems",
      "JavaScript two pointer",
      "array traversal DSA",
      "string pointer problems",
      "JDCodebase",
    ],
    robots: "index, follow",
    openGraph: {
      siteName: "JDCodebase",
    },
  },
  {
    key: "sliding-window",
    title: "Sliding Window DSA Problems",
    description:
      "Learn the Sliding Window technique with detailed explanations, problem patterns, and optimized solutions for common DSA interview problems.",
    url: "https://jdcodebase.vercel.app/dsa/sliding-window",
    image: "https://jdcodebase.vercel.app/og-banner.png",
    keywords: [
      "sliding window",
      "DSA sliding window problems",
      "JavaScript sliding window",
      "sliding window approach",
      "sliding window technique",
      "JDCodebase",
    ],
    robots: "index, follow",
    openGraph: {
      siteName: "JDCodebase",
    },
  },
  {
    key: "sorting",
    title: "Sorting DSA Problems",
    description:
      "Explore sorting-based problems using custom logic, built-in methods, and comparisons. Learn key patterns and optimizations.",
    url: "https://jdcodebase.vercel.app/dsa/sorting",
    image: "https://jdcodebase.vercel.app/og-banner.png",
    keywords: [
      "sorting algorithms",
      "sorting in JavaScript",
      "DSA sorting problems",
      "bubble sort",
      "quick sort",
      "merge sort",
      "JDCodebase",
    ],
    robots: "index, follow",
    openGraph: {
      siteName: "JDCodebase",
    },
  },
  {
    key: "hash-map",
    title: "Hash Map DSA Problems",
    description:
      "Use hash maps to solve lookup-based DSA problems efficiently. Learn frequency counting, grouping, and collision handling.",
    url: "https://jdcodebase.vercel.app/dsa/hash-map",
    image: "https://jdcodebase.vercel.app/og-banner.png",
    keywords: [
      "hash map problems",
      "hash table DSA",
      "frequency map",
      "JavaScript map",
      "JDCodebase",
    ],
    robots: "index, follow",
    openGraph: {
      siteName: "JDCodebase",
    },
  },
  {
    key: "hash-set",
    title: "Hash Set DSA Problems",
    description:
      "Leverage hash sets for fast membership checks in DSA problems. Solve problems involving uniqueness, lookup, and set operations.",
    url: "https://jdcodebase.vercel.app/dsa/hash-set",
    image: "https://jdcodebase.vercel.app/og-banner.png",
    keywords: [
      "hash set problems",
      "DSA set operations",
      "JavaScript set",
      "unique elements DSA",
      "JDCodebase",
    ],
    robots: "index, follow",
    openGraph: {
      siteName: "JDCodebase",
    },
  },
  {
    key: "math",
    title: "Math DSA Problems",
    description:
      "Solve DSA problems involving mathematics, number theory, and arithmetic patterns. Includes modulo, GCD, prime logic, and more.",
    url: "https://jdcodebase.vercel.app/dsa/math",
    image: "https://jdcodebase.vercel.app/og-banner.png",
    keywords: [
      "math DSA",
      "number theory",
      "modulo problems",
      "prime check",
      "GCD",
      "JDCodebase",
    ],
    robots: "index, follow",
    openGraph: {
      siteName: "JDCodebase",
    },
  },
];

export const topicSEO = Object.fromEntries(
  topicList.map((topic) => [
    topic.key,
    {
      title: `${topic.title} | JDCodebase`,
      description: topic.description,
      url: topic.url,
      image: topic.image,
      keywords: topic.keywords.join(", "),
      openGraph: {
        title: `${topic.title} | JDCodebase`,
        description: topic.description,
        url: topic.url,
        siteName: "JDCodebase",
        images: [
          {
            url: topic.image,
            width: 1200,
            height: 630,
            alt: topic.title,
          },
        ],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: `${topic.title} | JDCodebase`,
        description: topic.description,
        images: [topic.image],
      },
    },
  ])
);

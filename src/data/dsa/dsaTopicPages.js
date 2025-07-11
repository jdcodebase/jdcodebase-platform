export const dsaTopicPages = [
  {
    title: "Time and Space Complexity",
    content: [
      {
        type: "intro",
        heading: "Time & Space Complexity",
        text: "Welcome to the Time and Space Complexity section of JDCodebase! Understanding time and space trade-offs is essential for writing efficient algorithms. It helps in analyzing how your code performs as input grows.",
      },
      {
        type: "learn",
        heading: "What You’ll Learn",
        points: [
          "What Big O notation means",
          "Common time complexities: O(1), O(log n), O(n), O(n²)",
          "Best, average, and worst-case scenarios",
          "How to estimate time based on loops, recursion, and input size",
          "Space complexity and auxiliary space vs input space",
        ],
      },
      {
        type: "methods",
        heading: "Big O Cheat Sheet",
        methods: [
          {
            method: "O(1) — Constant Time",
            description:
              "Takes the same amount of time regardless of input size.",
            example: {
              before: "arr = [10, 20, 30]",
              code: "arr[0]",
              after: "10",
            },
          },
          {
            method: "O(n) — Linear Time",
            description: "Time grows linearly with input size.",
            example: {
              before: "arr = [1, 2, 3]",
              code: "for (let i of arr) console.log(i);",
              after: "1\n2\n3",
            },
          },
          {
            method: "O(n²) — Quadratic Time",
            description: "Nested loops over the same input.",
            example: {
              before: "arr = [1, 2, 3]",
              code: `for (let i of arr) {
    for (let j of arr) {
      console.log(i + j);
    }
  }`,
              after: "All pairwise sums",
            },
          },
          {
            method: "O(log n) — Logarithmic Time",
            description:
              "Reduces the problem size each step (e.g., binary search).",
            example: {
              before: "arr = [1, 2, 3, 4, 5, 6, 7]",
              code: "Binary search on sorted array",
              after: "Found or not found in log steps",
            },
          },
          {
            method: "O(n log n)",
            description:
              "Divide and conquer algorithms like Merge Sort, Quick Sort (average case).",
            example: {
              before: "[5, 2, 3, 1, 4]",
              code: "arr.sort() // uses O(n log n) internally",
              after: "[1, 2, 3, 4, 5]",
            },
          },
        ],
      },
      {
        type: "exampleBlock",
        heading: "Try This Example",
        description: "Analyze the time and space complexity of this function.",
        code: `function sumArray(arr) {
    let sum = 0;            // O(1)
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];        // O(n)
    }
    return sum;             // O(1)
  }`,
        input: "[1, 2, 3, 4]",
        expectedOutput: "10 (Time: O(n), Space: O(1))",
      },
    ],
  },
  {
    title: "Math",
    content: [
      {
        type: "intro",
        heading: "Math",
        text: "Welcome to the Math section of JDCodebase! Many programming problems involve mathematical insights — whether it's number theory, bitwise operations, or pattern-based logic. Mastering math fundamentals makes you faster and more accurate in problem-solving.",
      },
      {
        type: "learn",
        heading: "What You’ll Learn",
        points: [
          "Number properties: even/odd, primes, divisibility",
          "Factorials, combinations, and permutations",
          "Modular arithmetic and modulo inverse",
          "Bit manipulation basics: AND, OR, XOR, shifts",
          "Digit operations and numeric tricks in code",
        ],
      },
      {
        type: "methods",
        heading: "Common JavaScript Math Methods",
        methods: [
          {
            method: "Math.floor(x)",
            description: "Rounds a number down to the nearest integer.",
            example: {
              before: "Math.floor(3.7)",
              code: "Math.floor(3.7);",
              after: "3",
            },
          },
          {
            method: "Math.ceil(x)",
            description: "Rounds a number up to the nearest integer.",
            example: {
              before: "Math.ceil(3.1)",
              code: "Math.ceil(3.1);",
              after: "4",
            },
          },
          {
            method: "Math.round(x)",
            description: "Rounds a number to the nearest integer.",
            example: {
              before: "Math.round(2.5)",
              code: "Math.round(2.5);",
              after: "3",
            },
          },
          {
            method: "Math.abs(x)",
            description: "Returns the absolute (positive) value.",
            example: {
              before: "Math.abs(-7)",
              code: "Math.abs(-7);",
              after: "7",
            },
          },
          {
            method: "Math.max(a, b, ...)",
            description: "Returns the largest of zero or more numbers.",
            example: {
              before: "Math.max(1, 4, 2)",
              code: "Math.max(1, 4, 2);",
              after: "4",
            },
          },
          {
            method: "Math.min(a, b, ...)",
            description: "Returns the smallest of zero or more numbers.",
            example: {
              before: "Math.min(1, 4, 2)",
              code: "Math.min(1, 4, 2);",
              after: "1",
            },
          },
          {
            method: "Math.sqrt(x)",
            description: "Returns the square root of x.",
            example: {
              before: "Math.sqrt(25)",
              code: "Math.sqrt(25);",
              after: "5",
            },
          },
          {
            method: "Math.pow(base, exponent)",
            description: "Returns base raised to the power of exponent.",
            example: {
              before: "Math.pow(2, 3)",
              code: "Math.pow(2, 3);",
              after: "8",
            },
          },
          {
            method: "x % y",
            description: "Returns the remainder of division.",
            example: {
              before: "10 % 3",
              code: "10 % 3;",
              after: "1",
            },
          },
          {
            method: "Bitwise Operators (&, |, ^, ~, <<, >>)",
            description:
              "Used for low-level manipulation and fast calculations.",
            example: {
              before: "5 & 3",
              code: "5 & 3;",
              after: "1",
            },
          },
        ],
      },
      {
        type: "exampleBlock",
        heading: "Try This Example",
        description: "Check if a number is prime.",
        code: `function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }`,
        input: "17",
        expectedOutput: "true",
      },
    ],
  },
  {
    title: "Bit Manipulation",
    content: [
      {
        type: "intro",
        heading: "Bit Manipulation",
        text: "Welcome to the Bit Manipulation section of JDCodebase! Bit manipulation allows you to solve problems in constant time using binary logic. It’s a favorite topic in coding interviews due to its efficiency and cleverness.",
      },
      {
        type: "learn",
        heading: "What You’ll Learn",
        points: [
          "Understanding bits and binary representation",
          "Common bitwise operators: AND, OR, XOR, NOT, shifts",
          "Tricks for checking even/odd, swapping, counting bits",
          "Set, unset, toggle, and check bits at specific positions",
          "Optimizing solutions using bit masks and properties",
        ],
      },
      {
        type: "methods",
        heading: "JavaScript Bitwise Operators",
        methods: [
          {
            method: "a & b",
            description: "Bitwise AND — 1 only if both bits are 1.",
            example: {
              before: "5 & 3",
              code: "5 & 3; // 101 & 011 = 001",
              after: "1",
            },
          },
          {
            method: "a | b",
            description: "Bitwise OR — 1 if either bit is 1.",
            example: {
              before: "5 | 3",
              code: "5 | 3; // 101 | 011 = 111",
              after: "7",
            },
          },
          {
            method: "a ^ b",
            description: "Bitwise XOR — 1 if bits are different.",
            example: {
              before: "5 ^ 3",
              code: "5 ^ 3; // 101 ^ 011 = 110",
              after: "6",
            },
          },
          {
            method: "~a",
            description: "Bitwise NOT — inverts bits (two's complement).",
            example: {
              before: "~5",
              code: "~5; // ~00000101 = 11111010",
              after: "-6",
            },
          },
          {
            method: "a << n",
            description: "Left shift — multiplies by 2ⁿ.",
            example: {
              before: "3 << 2",
              code: "3 << 2;",
              after: "12",
            },
          },
          {
            method: "a >> n",
            description: "Right shift — divides by 2ⁿ (signed).",
            example: {
              before: "8 >> 1",
              code: "8 >> 1;",
              after: "4",
            },
          },
          {
            method: "a >>> n",
            description: "Unsigned right shift (zero-fill).",
            example: {
              before: "-8 >>> 1",
              code: "-8 >>> 1;",
              after: "2147483644",
            },
          },
        ],
      },
      {
        type: "exampleBlock",
        heading: "Try This Example",
        description:
          "Find the one number that appears once while all others appear twice.",
        code: `function findSingleNumber(nums) {
    let result = 0;
    for (let num of nums) {
      result ^= num; // XOR cancels out duplicate values
    }
    return result;
  }`,
        input: "[4, 1, 2, 1, 2]",
        expectedOutput: "4",
      },
    ],
  },
  {
    title: "Array",
    content: [
      {
        type: "intro",
        heading: "Array",
        text: "Welcome to the Array section of JDCodebase! Arrays are one of the most fundamental and frequently used data structures in programming...",
      },
      {
        type: "learn",
        heading: "What You’ll Learn",
        points: [
          "Traversal, insertion, and deletion basics",
          "Prefix sums, difference arrays, sliding windows",
          "Sorting, searching, and pointer-based optimizations",
        ],
      },
      {
        type: "methods",
        heading: "JavaScript Array Methods",
        methods: [
          {
            method: "arr.push(val)",
            description: "Adds an element to the end of the array.",
            example: {
              before: "[1, 2]",
              code: "arr.push(3);",
              after: "[1, 2, 3]",
            },
          },
          {
            method: "arr.pop()",
            description: "Removes the last element.",
            example: {
              before: "[1, 2, 3]",
              code: "arr.pop();",
              after: "[1, 2]",
            },
          },
          {
            method: "arr.shift()",
            description: "Removes the first element of the array.",
            example: {
              before: "[10, 20, 30]",
              code: "arr.shift();",
              after: "[20, 30]",
            },
          },
          {
            method: "arr.unshift(val)",
            description: "Adds one or more elements to the beginning.",
            example: {
              before: "[2, 3]",
              code: "arr.unshift(1);",
              after: "[1, 2, 3]",
            },
          },
          {
            method: "arr.slice(start, end)",
            description: "Returns a shallow copy of a portion of the array.",
            example: {
              before: "[10, 20, 30, 40]",
              code: "arr.slice(1, 3);",
              after: "[20, 30]",
            },
          },
          {
            method: "arr.splice(index, count, ...items)",
            description:
              "Adds/removes items to/from the array at a specific index.",
            example: {
              before: "[1, 2, 4]",
              code: "arr.splice(2, 0, 3);",
              after: "[1, 2, 3, 4]",
            },
          },
          {
            method: "arr.includes(val)",
            description: "Checks if the array contains the specified value.",
            example: {
              before: "[1, 2, 3]",
              code: "arr.includes(2);",
              after: "true",
            },
          },
          {
            method: "arr.indexOf(val)",
            description:
              "Returns the first index of the specified value, or -1.",
            example: {
              before: "[1, 2, 3, 2]",
              code: "arr.indexOf(2);",
              after: "1",
            },
          },
          {
            method: "arr.sort()",
            description: "Sorts the array as strings by default.",
            example: {
              before: "[3, 1, 2]",
              code: "arr.sort();",
              after: "[1, 2, 3]",
            },
          },
          {
            method: "arr.reverse()",
            description: "Reverses the elements of the array in place.",
            example: {
              before: "[1, 2, 3]",
              code: "arr.reverse();",
              after: "[3, 2, 1]",
            },
          },
        ],
      },
      {
        type: "exampleBlock",
        heading: "Try This Example",
        description: "Let’s reverse an array using a loop.",
        code: `function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}`,
        input: "[1, 2, 3]",
        expectedOutput: "[3, 2, 1]",
      },
    ],
  },
  {
    title: "String",
    content: [
      {
        type: "intro",
        heading: "String",
        text: "Welcome to the String section of JDCodebase! Strings are a fundamental data type used to represent sequences of characters. Many interview problems are based on efficient string manipulation, pattern matching, and transformation.",
      },
      {
        type: "learn",
        heading: "What You’ll Learn",
        points: [
          "Basic string manipulation: concatenation, slicing, length",
          "Two-pointer and sliding window approaches",
          "Reversing, capitalizing, and formatting strings",
          "Checking palindromes, anagrams, and patterns",
          "Working with character frequency and hashing",
        ],
      },
      {
        type: "methods",
        heading: "JavaScript String Methods",
        methods: [
          {
            method: "str.length",
            description: "Returns the length of the string.",
            example: {
              before: `"hello".length`,
              code: `str = "hello"; str.length;`,
              after: "5",
            },
          },
          {
            method: "str.charAt(index)",
            description: "Returns the character at the specified index.",
            example: {
              before: `"hello"`,
              code: `str.charAt(1);`,
              after: `"e"`,
            },
          },
          {
            method: "str.slice(start, end)",
            description: "Extracts a section of the string and returns it.",
            example: {
              before: `"hello world"`,
              code: `str.slice(0, 5);`,
              after: `"hello"`,
            },
          },
          {
            method: "str.substring(start, end)",
            description: "Returns the substring between two indexes.",
            example: {
              before: `"hello world"`,
              code: `str.substring(6);`,
              after: `"world"`,
            },
          },
          {
            method: "str.toUpperCase()",
            description: "Converts the string to uppercase letters.",
            example: {
              before: `"hello"`,
              code: `str.toUpperCase();`,
              after: `"HELLO"`,
            },
          },
          {
            method: "str.toLowerCase()",
            description: "Converts the string to lowercase letters.",
            example: {
              before: `"HELLO"`,
              code: `str.toLowerCase();`,
              after: `"hello"`,
            },
          },
          {
            method: "str.includes(substr)",
            description: "Checks if a substring exists within the string.",
            example: {
              before: `"hello world"`,
              code: `str.includes("world");`,
              after: "true",
            },
          },
          {
            method: "str.replace(old, new)",
            description: "Replaces part of the string with another string.",
            example: {
              before: `"Hello World"`,
              code: `str.replace("World", "JS");`,
              after: `"Hello JS"`,
            },
          },
          {
            method: "str.split(delimiter)",
            description: "Splits the string into an array by delimiter.",
            example: {
              before: `"a,b,c"`,
              code: `str.split(",");`,
              after: `["a", "b", "c"]`,
            },
          },
          {
            method: "str.trim()",
            description: "Removes whitespace from both ends of the string.",
            example: {
              before: `"  hello  "`,
              code: `str.trim();`,
              after: `"hello"`,
            },
          },
        ],
      },
      {
        type: "exampleBlock",
        heading: "Try This Example",
        description: "Check if a string is a palindrome.",
        code: `function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }`,
        input: `"racecar"`,
        expectedOutput: `true`,
      },
    ],
  },
  {
    title: "Two Pointer",
    content: [
      {
        type: "intro",
        heading: "Two Pointer",
        text: "Welcome to the Two Pointer section of JDCodebase! The Two Pointer technique is a powerful strategy to reduce nested loops by using two indices that move through the data structure. It's widely used for solving array and string problems efficiently.",
      },
      {
        type: "learn",
        heading: "What You’ll Learn",
        points: [
          "When and how to apply the two pointer technique",
          "Solving sorted array problems with opposite-direction pointers",
          "Detecting pairs/triplets with specific conditions",
          "Avoiding unnecessary iterations and improving performance",
          "Handling edge cases in left/right movement logic",
        ],
      },
      {
        type: "methods",
        heading: "Common Two Pointer Patterns",
        methods: [
          {
            method: "Opposite Ends",
            description:
              "Start one pointer from the start and one from the end.",
            example: {
              before: "[1, 2, 3, 4, 6]",
              code: `let left = 0, right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    sum > target ? right-- : left++;
  }`,
              after: "[1, 4] (example indices)",
            },
          },
          {
            method: "Same Direction",
            description:
              "Both pointers start from the beginning or end and move in one direction.",
            example: {
              before: "[1, 1, 2, 2, 3, 3]",
              code: `let i = 0, j = 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }`,
              after: "Removes duplicates in-place",
            },
          },
        ],
      },
      {
        type: "exampleBlock",
        heading: "Try This Example",
        description:
          "Check if a sorted array has two numbers that sum to a target.",
        code: `function hasPairWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum === target) return true;
      sum < target ? left++ : right--;
    }
  
    return false;
  }`,
        input: "arr = [1, 2, 4, 4], target = 8",
        expectedOutput: "true",
      },
    ],
  },
  {
    title: "Sliding Window",
    content: [
      {
        type: "intro",
        heading: "Sliding Window",
        text: "Welcome to the Sliding Window section of JDCodebase! Sliding Window is a powerful pattern to reduce nested loops by maintaining a running window over the data. It's widely used for subarray, substring, and optimization problems in linear time.",
      },
      {
        type: "learn",
        heading: "What You’ll Learn",
        points: [
          "Fixed and dynamic window size techniques",
          "Tracking sum, max/min, or frequency within a window",
          "Shrinking/growing the window to meet constraints",
          "Using hash tables or counters to track window content",
          "Optimizing brute force solutions to O(n)",
        ],
      },
      {
        type: "methods",
        heading: "Common Sliding Window Patterns",
        methods: [
          {
            method: "Fixed-size Window",
            description: "Use two pointers to maintain a fixed-size subarray.",
            example: {
              before: "[1, 2, 3, 4, 5], k = 3",
              code: `let maxSum = 0;
  for (let i = 0; i < k; i++) maxSum += arr[i];
  let windowSum = maxSum;
  
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }`,
              after: "Max sum of subarray of size k",
            },
          },
          {
            method: "Dynamic-size Window",
            description: "Shrink or expand window based on condition.",
            example: {
              before: "arr = [2, 3, 1, 2, 4, 3], target = 7",
              code: `function minSubArrayLen(target, arr) {
            let left = 0, sum = 0, minLen = Infinity;
          
            for (let right = 0; right < arr.length; right++) {
              sum += arr[right];
          
              while (sum >= target) {
                minLen = Math.min(minLen, right - left + 1);
                sum -= arr[left++];
              }
            }
          
            return minLen === Infinity ? 0 : minLen;
          }`,
              after: "2 (subarray [4, 3])",
            },
          },
        ],
      },
      {
        type: "exampleBlock",
        heading: "Try This Example",
        description: "Find the maximum sum of a subarray with length k.",
        code: `function maxSubarraySum(arr, k) {
    let maxSum = 0;
    for (let i = 0; i < k; i++) maxSum += arr[i];
    let windowSum = maxSum;
  
    for (let i = k; i < arr.length; i++) {
      windowSum += arr[i] - arr[i - k];
      maxSum = Math.max(maxSum, windowSum);
    }
  
    return maxSum;
  }`,
        input: "arr = [2, 1, 5, 1, 3, 2], k = 3",
        expectedOutput: "9",
      },
    ],
  },
  {
    title: "Hash Table",
    content: [
      {
        type: "intro",
        heading: "Hash Table",
        text: "Welcome to the Hash Table section of JDCodebase! Hash Tables (or objects/maps in JavaScript) allow you to store and access data in constant time. They're essential for solving problems that involve frequency counting, lookups, memoization, and fast data association.",
      },
      {
        type: "learn",
        heading: "What You’ll Learn",
        points: [
          "Use maps or objects for constant-time lookups",
          "Count frequency of elements in arrays or strings",
          "Store indices, track visited elements or unique entries",
          "Avoid nested loops by caching results in key-value form",
          "Optimize brute force logic using hash-based storage",
        ],
      },
      {
        type: "methods",
        heading: "JavaScript Hash Table Methods",
        methods: [
          {
            method: "const map = new Map()",
            description: "Creates a new Map object for key-value storage.",
            example: {
              before: "",
              code: `const map = new Map();`,
              after: "An empty map is ready to use.",
            },
          },
          {
            method: "map.set(key, value)",
            description: "Adds or updates an entry in the map.",
            example: {
              before: "Map is empty",
              code: `map.set("a", 1);`,
              after: `Map now contains: {"a" => 1}`,
            },
          },
          {
            method: "map.get(key)",
            description: "Retrieves the value for a given key.",
            example: {
              before: `{"a" => 1}`,
              code: `map.get("a");`,
              after: "1",
            },
          },
          {
            method: "map.has(key)",
            description: "Checks if the map contains the key.",
            example: {
              before: `{"a" => 1}`,
              code: `map.has("a");`,
              after: "true",
            },
          },
          {
            method: "map.delete(key)",
            description: "Removes the key-value pair from the map.",
            example: {
              before: `{"a" => 1}`,
              code: `map.delete("a");`,
              after: "Map is now empty",
            },
          },
          {
            method: "Object literals as hash tables",
            description: "Use `{}` for quick frequency counts.",
            example: {
              before: "str = 'aabbc'",
              code: `const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }`,
              after: `{ a: 2, b: 2, c: 1 }`,
            },
          },
          {
            method: "const set = new Set()",
            description: "Creates a new Set that stores unique values.",
            example: {
              before: "",
              code: `const set = new Set();`,
              after: "An empty Set is created.",
            },
          },
          {
            method: "set.add(value)",
            description: "Adds a unique value to the Set.",
            example: {
              before: "Set is empty",
              code: `set.add(5); set.add(5);`,
              after: "Set contains: {5} (duplicates ignored)",
            },
          },
          {
            method: "set.has(value)",
            description: "Checks if a value exists in the Set.",
            example: {
              before: "Set contains: {5}",
              code: `set.has(5);`,
              after: "true",
            },
          },
          {
            method: "set.delete(value)",
            description: "Removes a value from the Set if present.",
            example: {
              before: "Set contains: {5}",
              code: `set.delete(5);`,
              after: "Set is now empty",
            },
          },
          {
            method: "set.size",
            description: "Returns the number of unique values in the Set.",
            example: {
              before: "Set contains: {1, 2, 3}",
              code: `set.size;`,
              after: "3",
            },
          },
        ],
      },
      {
        type: "exampleBlock",
        heading: "Try This Example",
        description: "Check if two strings are anagrams using hash maps.",
        code: `function isAnagram(s, t) {
    if (s.length !== t.length) return false;
  
    const count = {};
  
    for (let char of s) {
      count[char] = (count[char] || 0) + 1;
    }
  
    for (let char of t) {
      if (!count[char]) return false;
      count[char]--;
    }
  
    return true;
  }`,
        input: `s = "listen", t = "silent"`,
        expectedOutput: "true",
      },
    ],
  },
  {
    title: "Sorting",
    content: [
      {
        type: "intro",
        heading: "Sorting",
        text: "Welcome to the Sorting section of JDCodebase! Sorting is a fundamental concept in computer science. It not only helps organize data but also optimizes searching, comparisons, and problem-solving techniques like binary search or greedy strategies.",
      },
      {
        type: "learn",
        heading: "What You’ll Learn",
        points: [
          "Different types of sorting algorithms and their trade-offs",
          "Built-in vs custom sorting logic in JavaScript",
          "When to use stable vs unstable sorts",
          "Combine sorting with searching or two-pointer techniques",
          "Time complexity analysis of common sorting algorithms",
        ],
      },
      {
        type: "methods",
        heading: "JavaScript Sorting Methods",
        methods: [
          {
            method: "arr.sort()",
            description: "Sorts elements in place as strings by default.",
            example: {
              before: "[3, 1, 20]",
              code: "arr.sort();",
              after: "[1, 20, 3] // lexicographic sort",
            },
          },
          {
            method: "arr.sort((a, b) => a - b)",
            description: "Sorts numerically in ascending order.",
            example: {
              before: "[3, 1, 20]",
              code: "arr.sort((a, b) => a - b);",
              after: "[1, 3, 20]",
            },
          },
          {
            method: "arr.sort((a, b) => b - a)",
            description: "Sorts numerically in descending order.",
            example: {
              before: "[3, 1, 20]",
              code: "arr.sort((a, b) => b - a);",
              after: "[20, 3, 1]",
            },
          },
        ],
      },
      {
        type: "exampleBlock",
        heading: "Try This Example",
        description: "Sort an array of numbers in ascending order.",
        code: `function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
  }`,
        input: "[5, 2, 8, 1]",
        expectedOutput: "[1, 2, 5, 8]",
      },
      {
        type: "theory",
        heading: "📚 Common Sorting Algorithms",
        text: "Here are some popular sorting algorithms you may implement manually in interviews or competitive coding:",
      },
      {
        type: "learn",
        heading: "Sorting Algorithms Overview",
        points: [
          "**Bubble Sort** — Repeatedly swaps adjacent elements. Simple but inefficient (O(n²)).",
          "**Selection Sort** — Selects the smallest/largest and moves it into place. O(n²).",
          "**Insertion Sort** — Builds the sorted array one item at a time. Great for small or mostly sorted arrays. O(n²).",
          "**Merge Sort** — Divide-and-conquer. Stable, reliable O(n log n).",
          "**Quick Sort** — Partition-based. Fast in practice, avg O(n log n), worst-case O(n²).",
          "**Counting Sort** — Efficient for small-range integers. O(n + k), not comparison-based.",
        ],
      },
    ],
  },
];

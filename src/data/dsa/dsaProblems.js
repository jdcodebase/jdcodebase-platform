export const dsaProblems = [
  {
    title: "Two Sum",
    slug: "two-sum",
    difficulty: "Easy",
    leetcodeId: "#1",
    category: ["Array", "Hash Table"],
    problemStatement:
      "Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
    examples: [
      {
        input: "nums = [2, 7, 11, 15], target = 9",
        output: "[0, 1]",
        explanation: "Because nums[0] + nums[1] == 9.",
      },
    ],
    approach: [
      {
        title: "Approach 1: Brute Force",
        steps: [
          "Loop through each element in the array.",
          "For every element, subtract it from the target.",
          "Search the remainder in the rest of the array using another loop.",
          "If found, return the indices.",
        ],
        code: "// 🔹 Approach 1: Brute Force\nvar twoSum = function(nums, target) {\n  for (let i = 0; i < nums.length; i++) {\n    let diff = target - nums[i];\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[j] === diff) {\n        return [i, j];\n      }\n    }\n  }\n};",
      },
      {
        title: "Approach 2: Optimal using Hash Map",
        steps: [
          "Initialize a hash map to store each element's value and its index.",
          "Loop through the array.",
          "For each number, calculate the complement: `target - current number`.",
          "Check if the complement exists in the map.",
          "If yes, return the stored index and current index.",
          "Otherwise, add the current number and index to the map.",
        ],
        code: "// 🔹 Approach 2: Optimal using Hash Map\nvar twoSum = function(nums, target) {\n  const map = new Map();\n\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) {\n      return [map.get(complement), i];\n    }\n    map.set(nums[i], i);\n  }\n};",
      },
    ],
    timeComplexity:
      "O(n) for optimal approach (hash map); O(n²) for brute force",
    spaceComplexity: "O(n) – for hash map; O(1) for brute force",
    leetcodeLink: "https://leetcode.com/problems/two-sum/",
    videoLink: "xBH-SzuhJ1c",
  },
  {
    title: "Find Numbers with Even Number of Digits",
    slug: "find-numbers-with-even-number-of-digits",
    difficulty: "Easy",
    leetcodeId: "#1295",
    category: ["Array", "Math"],
    problemStatement:
      "Given an array nums of integers, return how many of them contain an even number of digits.",
    examples: [
      {
        input: "nums = [12, 345, 2, 6, 7896]",
        output: "2",
        explanation: "Only 12 and 7896 have an even number of digits.",
      },
      {
        input: "nums = [555, 901, 482, 1771]",
        output: "1",
        explanation: "Only 1771 has an even number of digits.",
      },
    ],
    approach: [
      {
        title: "String Conversion and Digit Count",
        steps: [
          "Initialize a variable `count` to 0.",
          "Loop through each number in the array `nums`.",
          "Convert the number to a string using `.toString()`.",
          "Check the length of the string using `.length`.",
          "If the length is divisible by 2 (even), increment `count`.",
          "After the loop, return `count`.",
        ],
        code: "var findNumbers = function (nums) {\n    let count = 0;\n\n    for (let i = 0; i < nums.length; i++) {\n        if (nums[i].toString().length % 2 === 0) {\n            count++;\n        }\n    }\n\n    return count;\n};\n\nconsole.log(findNumbers([12, 345, 2, 6, 7896])); // Output: 2\nconsole.log(findNumbers([555, 901, 482, 1771])); // Output: 1",
      },
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    leetcodeLink:
      "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/",
    videoLink: "vBm2OClujUg",
  },
  {
    title: "Squares of a Sorted Array",
    slug: "squares-of-a-sorted-array",
    difficulty: "Easy",
    leetcodeId: "#977",
    category: ["Array", "Two Pointer", "Sorting"],
    problemStatement:
      "Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number, also sorted in non-decreasing order.",
    examples: [
      {
        input: "nums = [-4, -1, 0, 3, 10]",
        output: "[0, 1, 9, 16, 100]",
        explanation:
          "Square each element: [16, 1, 0, 9, 100] ➝ sort the array to get [0, 1, 9, 16, 100].",
      },
    ],
    approach: [
      {
        title: "Brute Force with Sort",
        steps: [
          "Loop through the array and square each element.",
          "Sort the resulting array using `.sort((a, b) => a - b)` to ensure numerical order.",
          "Return the sorted array.",
        ],
        code: "var sortedSquares = function(nums) {\n  for (let i = 0; i < nums.length; i++) {\n    nums[i] = nums[i] * nums[i];\n  }\n  return nums.sort((a, b) => a - b);\n};\n\nconsole.log(sortedSquares([-4, -1, 0, 3, 10])); // Output: [0, 1, 9, 16, 100]",
      },
    ],
    timeComplexity: "O(n log n)",
    spaceComplexity:
      "O(1) (in-place, ignoring output array if returned separately)",
    leetcodeLink: "https://leetcode.com/problems/squares-of-a-sorted-array/",
    videoLink: "ykHe6-JUig0",
  },
  {
    title: "Concatenation of Array",
    slug: "concatenation-of-array",
    leetcodeId: "#1929",
    difficulty: "Easy",
    category: ["Array"],
    problemStatement:
      "You're given an integer array nums of length n. Your task is to create a new array ans of length 2n, such that:\n\nans[i] = nums[i]\n\nans[i + n] = nums[i] for all 0 <= i < n.\n\nIn simpler terms, return the concatenation of the array with itself.",
    examples: [
      {
        input: "nums = [1, 2, 1]",
        output: "[1, 2, 1, 1, 2, 1]",
        explanation:
          "Concatenate the input array with itself: [1, 2, 1] + [1, 2, 1] = [1, 2, 1, 1, 2, 1].",
      },
    ],
    approach: [
      {
        title: "Using a For Loop",
        steps: [
          "Initialize an empty array `ans`.",
          "Store the length of the array `nums` as `n`.",
          "Loop from `i = 0` to `n - 1`.",
          "At each step, set `ans[i] = nums[i]` and `ans[i + n] = nums[i]`.",
          "Return `ans`.",
        ],
        code: "var getConcatenation = function(nums) {\n    let ans = [];\n    let n = nums.length;\n\n    for (let i = 0; i < n; i++) {\n        ans[i] = nums[i];\n        ans[i + n] = nums[i];\n    }\n\n    return ans;\n};",
      },
      {
        title: "Using Spread Operator (One-liner)",
        steps: [
          "Use the spread operator to duplicate the array.",
          "Return a new array: `[...nums, ...nums]`.",
        ],
        code: "var getConcatenation = function(nums) {\n    return [...nums, ...nums];\n};",
      },
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    leetcodeLink: "https://leetcode.com/problems/concatenation-of-array/",
    videoLink: "qCxGScwnbqQ",
  },
  {
    title: "Build Array from Permutation",
    slug: "build-array-from-permutation",
    leetcodeId: "#1920",
    difficulty: "Easy",
    category: ["Array"],
    problemStatement:
      "You're given a zero-based permutation array nums (which means the array contains all distinct numbers from 0 to nums.length - 1). You need to build a new array ans of the same length where: ans[i] = nums[nums[i]] for each 0 <= i < nums.length.",
    examples: [
      {
        input: "nums = [0,2,1,5,3,4]",
        output: "[0,1,2,4,5,3]",
        explanation: "For each index i, we assign ans[i] = nums[nums[i]].",
      },
      {
        input: "nums = [5,0,1,2,3,4]",
        output: "[4,5,0,1,2,3]",
        explanation: "Same logic applies — lookup nums[nums[i]] for each i.",
      },
    ],
    approach: [
      {
        title: "Direct Index Mapping",
        steps: [
          "Initialize an empty array `ans`.",
          "Loop from `i = 0` to `nums.length - 1`.",
          "At each step, assign `ans[i] = nums[nums[i]]`.",
          "Return the `ans` array.",
        ],
        code: "var buildArray = function(nums) {\n    let ans = [];\n    for (let i = 0; i < nums.length; i++) {\n        ans[i] = nums[nums[i]];\n    }\n    return ans;\n};",
      },
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    leetcodeLink: "https://leetcode.com/problems/build-array-from-permutation/",
    videoLink: "52WndzMGqAs",
  },
  {
    title: "Shuffle the Array",
    slug: "shuffle-the-array",
    difficulty: "Easy",
    leetcodeId: "#1470",
    category: ["Array"],
    problemStatement:
      "You're given an array nums consisting of 2n elements in the form:\n[x1, x2, ..., xn, y1, y2, ..., yn]\n\nReturn the array in the form:\n[x1, y1, x2, y2, ..., xn, yn]\n\nIn simpler terms, you're interleaving the first half and the second half of the array.",
    examples: [
      {
        input: "[1,1,2,2]",
        output: "[1,2,1,2]",
        explanation:
          "First half is [1,1], second half is [2,2]. Interleave them: [1,2,1,2].",
      },
    ],
    approach: [
      {
        title: "Simple Looping Strategy",
        steps: [
          "Create an empty array `ans = []`.",
          "Loop from `i = 0` to `i < n`.",
          "In each iteration, push `nums[i]` and `nums[i + n]` into `ans`.",
          "Return the `ans` array after the loop ends.",
        ],
        code: "var shuffle = function(nums, n) {\n  let ans = [];\n  for (let i = 0; i < n; i++) {\n    ans.push(nums[i]);\n    ans.push(nums[i + n]);\n  }\n  return ans;\n};",
      },
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    leetcodeLink: "https://leetcode.com/problems/shuffle-the-array/",
    videoLink: "VOwTgYQAhEU",
  },
  {
    title: "Kids With the Greatest Number of Candies",
    slug: "kids-with-the-greatest-number-of-candies",
    difficulty: "Easy",
    leetcodeId: "#1431",
    category: ["Array"],
    problemStatement:
      "There are n kids with candies. You're given an integer array `candies`, where `candies[i]` represents the number of candies the i-th kid has, and an integer `extraCandies`, which denotes the number of extra candies you have.\n\nReturn a boolean array result of length n, where `result[i]` is true if, after giving all the extra candies to the i-th kid, they will have the greatest number of candies among all kids (or at least equal to the max).",
    examples: [
      {
        input: "candies = [2,3,5,1,3], extraCandies = 3",
        output: "[true,true,true,false,true]",
        explanation: [
          "The max candy count is 5. After giving 3 extra candies:",
          "Kid 0: 2 + 3 = 5 → true",
          "Kid 1: 3 + 3 = 6 → true",
          "Kid 2: 5 + 3 = 8 → true",
          "Kid 3: 1 + 3 = 4 → false",
          "Kid 4: 3 + 3 = 6 → true",
        ],
      },
    ],
    approach: [
      {
        title: "Simple Loop with Math.max",
        steps: [
          "Find the maximum candy count using `Math.max(...candies)`.",
          "Loop through each kid in the `candies` array.",
          "For each kid, check if `candies[i] + extraCandies >= maxCandies`.",
          "If the condition is true, store `true` at that index; otherwise, store `false`.",
          "Return the resulting boolean array.",
        ],
        code: "var kidsWithCandies = function(candies, extraCandies) {\n    let maxCandies = Math.max(...candies);\n    for (let i = 0; i < candies.length; i++) {\n        candies[i] = candies[i] + extraCandies >= maxCandies;\n    }\n    return candies;\n};",
      },
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(1) (excluding output array)",
    leetcodeLink:
      "https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/",
    videoLink: "OS8SFy7T8lU",
  },
  {
    title: "Count the Number of Consistent Strings",
    slug: "count-the-number-of-consistent-strings",
    leetcodeId: "#1684",
    difficulty: "Easy",
    category: ["Array", "Hash Table", "String", "Bit Manipulation", "Counting"],
    problemStatement:
      "You are given a string 'allowed' consisting of distinct characters and an array of strings 'words'. A string is considered consistent if all characters in the string appear in the allowed string. Return the number of consistent strings in the words array.",
    examples: [
      {
        input: 'allowed = "ab", words = ["a", "b", "ab", "abc"]',
        output: "3",
        explanation: [
          "Allowed characters are: 'a', 'b'",
          "Word 1: 'a' → all characters allowed → ✅",
          "Word 2: 'b' → all characters allowed → ✅",
          "Word 3: 'ab' → all characters allowed → ✅",
          "Word 4: 'abc' → contains 'c' which is not allowed → ❌",
          "Total consistent strings = 3",
        ],
      },
    ],
    approach: [
      {
        title: "Using Hash Set for Allowed Characters",
        steps: [
          "Convert the `allowed` string into a Set to enable O(1) lookups for each character.",
          "Initialize a counter variable `count` to keep track of consistent strings.",
          "Loop through each word in the `words` array:",
          "  - For each word, check if every character exists in the Set using `.every()`.",
          "  - If the word is fully consistent, increment the `count`.",
          "Return the final value of `count`.",
        ],
        code: "var countConsistentStrings = function(allowed, words) {\n  const allowedSet = new Set(allowed);\n  let count = 0;\n\n  for (const word of words) {\n    let isConsistent = [...word].every(char => allowedSet.has(char));\n    if (isConsistent) {\n      count++;\n    }\n  }\n\n  return count;\n};",
      },
    ],
    timeComplexity:
      "O(n * m), where n is the number of words and m is the average length of a word.",
    spaceComplexity:
      "O(k), where k is the number of unique characters in 'allowed'.",
    leetcodeLink:
      "https://leetcode.com/problems/count-the-number-of-consistent-strings/",
    videoLink: "kTyBlD5ir4o",
  },
  {
    title: "Defanging an IP Address",
    slug: "defanging-an-ip-address",
    difficulty: "Easy",
    leetcodeId: "#1108",
    category: ["String"],
    problemStatement:
      "Given a valid (IPv4) IP address, return a defanged version of that IP address. A defanged IP address replaces every '.' with '[.]' to avoid accidental linking or execution in web contexts.",
    examples: [
      {
        input: '"1.1.1.1"',
        output: '"1[.]1[.]1[.]1"',
        explanation:
          "Each '.' is replaced with '[.]', so the result becomes '1[.]1[.]1[.]1'.",
      },
      {
        input: '"255.100.50.0"',
        output: '"255[.]100[.]50[.]0"',
        explanation: "All '.' characters in the IP are replaced with '[.]'.",
      },
    ],
    approach: [
      {
        title: "Brute Force – Manual Character Iteration",
        steps: [
          "Initialize an empty string `result`.",
          "Loop through each character in the given IP address.",
          "If the character is a '.', append '[.]' to the result.",
          "Otherwise, append the character itself.",
          "Return the final `result` string.",
        ],
        code: 'var defangIPaddr = function(address) {\n  let result = "";\n  for (let char of address) {\n    if (char === ".") {\n      result += "[.]";\n    } else {\n      result += char;\n    }\n  }\n  return result;\n};',
      },
      {
        title: "Optimized – Using replaceAll()",
        steps: [
          "Use JavaScript’s built-in `replaceAll()` method.",
          "Call `address.replaceAll('.', '[.]')` to directly replace all dots.",
          "Return the result.",
        ],
        code: 'var defangIPaddr = function(address) {\n  return address.replaceAll(".", "[.]");\n};',
      },
    ],
    timeComplexity: "O(n), where n is the length of the input string.",
    spaceComplexity: "O(n), for the new string being returned.",
    leetcodeLink: "https://leetcode.com/problems/defanging-an-ip-address/",
    videoLink: "dFvS7X_mHv0",
  },
  {
    title: "Goal Parser Interpretation",
    slug: "goal-parser-interpretation",
    difficulty: "Easy",
    leetcodeId: "#1678",
    category: ["String"],
    problemStatement:
      "You are given a string `command`. The command string follows this format:\n\n- 'G' stands for the character G\n- '()' stands for the character o\n- '(al)' stands for the string 'al'\n\nYour task is to return the Goal Parser's interpretation of the command string.",
    examples: [
      {
        input: '"G()(al)"',
        output: '"Goal"',
        explanation:
          "'G' remains 'G', '()' becomes 'o', and '(al)' becomes 'al'.",
      },
      {
        input: '"G()()()()(al)"',
        output: '"Gooooal"',
        explanation:
          "Multiple '()' become multiple 'o', followed by '(al)' → 'al'.",
      },
      {
        input: '"(al)G(al)()()G"',
        output: '"alGalooG"',
        explanation: "Each '(al)' → 'al', '()' → 'o', and 'G' remains 'G'.",
      },
    ],
    approach: [
      {
        title: "Brute Force (Using Loop)",
        steps: [
          "Initialize an empty string `str`.",
          "Iterate through each character in the `command` string.",
          "If the character is `'G'`, append `'G'` to `str`.",
          "If you encounter `'('` and the next character is `')'`, append `'o'` to `str` and increment `i` by 1 to skip `')'`.",
          "Otherwise, append `'al'` to `str` and increment `i` by 3 to skip the full '(al)'.",
          "Return the final string `str`.",
        ],
        code: 'var interpret = function(command) {\n  let str = "";\n  for (let i = 0; i < command.length; i++) {\n    if (command[i] === "G") {\n      str += "G";\n    } else if (command[i] === "(" && command[i + 1] === ")") {\n      str += "o";\n      i++;\n    } else {\n      str += "al";\n      i += 3;\n    }\n  }\n  return str;\n};',
      },
      {
        title: "Optimized (Using replaceAll)",
        steps: [
          "Use `replaceAll()` method on the string to first replace all occurrences of `'()'` with `'o'`.",
          "Then replace all occurrences of `'(al)'` with `'al'`.",
          "Return the final modified string.",
        ],
        code: 'var interpret = function(command) {\n  let str = command.replaceAll("()", "o");\n  return str.replaceAll("(al)", "al");\n};',
      },
    ],
    timeComplexity: "O(n), where n is the length of the input string.",
    spaceComplexity: "O(n), for the newly created interpreted string.",
    leetcodeLink: "https://leetcode.com/problems/goal-parser-interpretation/",
    videoLink: "dy5JV3Qf7Eo",
  },
  {
    title: "To Lower Case",
    slug: "to-lower-case",
    difficulty: "Easy",
    leetcodeId: "#709",
    category: ["String"],
    problemStatement:
      "You're given a string `s`. You need to return the same string, but with every uppercase letter converted to lowercase. All other characters remain unchanged.",
    examples: [
      {
        input: '"Hello"',
        output: '"hello"',
        explanation: "Only 'H' is uppercase and gets converted.",
      },
      {
        input: '"here"',
        output: '"here"',
        explanation: "All characters are already lowercase.",
      },
      {
        input: '"LOVELY"',
        output: '"lovely"',
        explanation: "All uppercase letters are converted to lowercase.",
      },
    ],
    approach: [
      {
        title: "Manual ASCII Conversion",
        steps: [
          "Initialize an empty string `str` to build the lowercase result.",
          "Loop through each character in the input string `s`.",
          "Check if the character is uppercase (ASCII between 65 and 90).",
          "If yes, convert it to lowercase by adding 32 to its ASCII code.",
          "Use `String.fromCharCode()` to convert the code back to a character.",
          "Append the converted character to `str`, or append the original character if not uppercase.",
          "Return the final string after the loop.",
        ],
        code: 'var toLowerCase = function (s) {\n  let str = "";\n\n  for (let i = 0; i < s.length; i++) {\n    let charCode = s[i].charCodeAt(0);\n    if (charCode >= 65 && charCode <= 90) {\n      str += String.fromCharCode(charCode + 32);\n    } else {\n      str += s[i];\n    }\n  }\n\n  return str;\n};',
      },
      {
        title: "One-Liner Built-In Method",
        steps: [
          "Use the built-in `toLowerCase()` method to convert the entire string.",
        ],
        code: "var toLowerCase = function (s) {\n  return s.toLowerCase();\n};",
      },
    ],
    timeComplexity: "O(n), where n is the length of the string.",
    spaceComplexity: "O(n), for the result string.",
    leetcodeLink: "https://leetcode.com/problems/to-lower-case/",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQSvr4Wk_KyHT45gJ-43iNhAAQZG3_K4HEY4ARAN4ZJN_Eo",
    videoLink: "lbnY8qnATbk",
  },
  {
    title: "Two Sum II Input Array Is Sorted",
    slug: "two-sum-ii-input-array-is-sorted",
    difficulty: "Medium",
    leetcodeId: "#167",
    category: ["Array", "Two Pointer", "Binary Search"],
    problemStatement:
      "You're given a 1-indexed array of integers called numbers, sorted in non-decreasing order. Your task is to find two numbers such that they add up to a given target. Return their indices (1-based) as an array [index1, index2], where 1 <= index1 < index2 <= numbers.length.\n\n⚠️ Each input has exactly one solution, and you cannot use the same element twice.\n\n🧠 Also, your solution must use only constant extra space.",
    examples: [
      {
        input: "numbers = [2, 8, 11, 13, 15, 16, 25], target = 28",
        output: "[2, 6]",
        explanation: "8 (at index 2) + 20 (at index 6) = 28",
      },
    ],
    approach: [
      {
        title: "Approach: Two Pointer",
        steps: [
          "Initialize two pointers: `start = 0` and `end = numbers.length - 1`.",
          "While `start < end`, calculate the sum of numbers[start] + numbers[end].",
          "If the sum equals the target, return `[start + 1, end + 1]` (1-based indexing).",
          "If the sum is less than target, increment `start` to increase the sum.",
          "If the sum is greater than target, decrement `end` to decrease the sum.",
          "Repeat the process until a valid pair is found.",
        ],
        code: "var twoSum = function(numbers, target) {\n  let start = 0;\n  let end = numbers.length - 1;\n\n  while (start < end) {\n    let sum = numbers[start] + numbers[end];\n\n    if (sum === target) {\n      return [start + 1, end + 1];\n    }\n\n    if (sum < target) {\n      start++;\n    } else {\n      end--;\n    }\n  }\n};",
      },
    ],
    timeComplexity: "O(n), where n is the number of elements in the array.",
    spaceComplexity: "O(1), since no extra space is used.",
    leetcodeLink:
      "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQSyKWiCFiQdRa1GP0WE7HztAXvAce1PoIyqMh7hRJg--MM?em=2&amp;wdAr=1.3333333333333333",
    videoLink: "eVMzqVbn1ig",
  },
  {
    title: "Reverse String",
    slug: "reverse-string",
    difficulty: "Easy",
    leetcodeId: "#344",
    category: ["String", "Two Pointer"],
    problemStatement:
      "Write a function that reverses a character array in-place. You must do this by modifying the input array directly with O(1) extra memory.",
    examples: [
      {
        input: '["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: '["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    approach: [
      {
        title: "Two Pointer In-place Reversal",
        steps: [
          "Initialize two pointers: `left = 0` and `right = s.length - 1`.",
          "While `left < right`, swap `s[left]` and `s[right]`.",
          "Increment `left` and decrement `right` after each swap.",
          "This continues until the pointers meet in the middle.",
          "Note: This approach modifies the array in-place and uses no extra memory.",
        ],
        code: "// 🔹 Two Pointer In-place Reversal\nvar reverseString = function(s) {\n  let left = 0, right = s.length - 1;\n\n  while (left < right) {\n    [s[left], s[right]] = [s[right], s[left]]; // Swap using destructuring\n    left++;\n    right--;\n  }\n};",
      },
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    leetcodeLink: "https://leetcode.com/problems/reverse-string/",
    videoLink: "sIMh93UP4aQ",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQRadyARq_8tQ709crU_s6lhAT7zIdmc3G6DZMQo-gHIvS0?em=2&wdAr=1.7777777777777777",
  },
  {
    title: "Valid Palindrome",
    slug: "valid-palindrome",
    difficulty: "Easy",
    leetcodeId: "#125",
    category: ["String", "Two Pointer"],
    problemStatement:
      "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.\n\nGiven a string s, return true if it is a palindrome, or false otherwise.",
    examples: [
      {
        input: "A man, a plan, a canal: Panama",
        output: "true",
        explanation:
          "After cleaning and lowering the string, we get 'amanaplanacanalpanama', which is a palindrome.",
      },
      {
        input: "race a car",
        output: "false",
        explanation:
          "After cleaning and lowering the string, we get 'raceacar', which is not a palindrome.",
      },
      {
        input: " ",
        output: "true",
        explanation:
          "After cleaning, the string is empty. An empty string is considered a valid palindrome.",
      },
    ],
    approach: [
      {
        title: "Approach 1: Brute Force",
        steps: [
          "Filter the string to keep only alphanumeric characters.",
          "Convert the string to lowercase.",
          "Use two pointers to compare characters from the start and end.",
          "If all pairs match, return true. Else, return false.",
        ],
        code: "// 🔹 Brute Force\nvar isPalindrome = function(s) {\n  let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');\n  let start = 0;\n  let end = cleaned.length - 1;\n  while (start < end) {\n    if (cleaned[start] !== cleaned[end]) return false;\n    start++;\n    end--;\n  }\n  return true;\n};",
      },
      {
        title: "Approach 2: Optimized Two Pointer (In-place)",
        steps: [
          "Use two pointers from the start and end.",
          "Skip non-alphanumeric characters.",
          "Compare characters in lowercase on the fly.",
          "If mismatch found, return false.",
          "If loop completes, return true.",
        ],
        code: "// 🔹 Optimized In-Place Two Pointer Approach\nvar isPalindrome = function (s) {\n  let start = 0;\n  let end = s.length - 1;\n\n  while (start < end) {\n    while (start < end && !isAlphaNumeric(s[start])) start++;\n    while (start < end && !isAlphaNumeric(s[end])) end--;\n\n    if (s[start].toLowerCase() !== s[end].toLowerCase()) {\n      return false;\n    }\n\n    start++;\n    end--;\n  }\n\n  return true;\n};\n\nfunction isAlphaNumeric(c) {\n  let code = c.charCodeAt(0);\n  return (\n    (code >= 48 && code <= 57) || // 0-9\n    (code >= 65 && code <= 90) || // A-Z\n    (code >= 97 && code <= 122)   // a-z\n  );\n}",
      },
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    leetcodeLink: "https://leetcode.com/problems/valid-palindrome/",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQS2AJ3O2REWRqTlrI2iCClJAZmcYH672POTf-xA3NaKCRA?em=2&amp;wdAr=1.7777777777777777",
    videoLink: "iq2VnyxoQRs",
  },
  {
    title: "Merge Sorted Array",
    slug: "merge-sorted-array",
    difficulty: "Easy",
    leetcodeId: "#88",
    category: ["Array", "Two Pointer", "Sorting"],
    problemStatement:
      "You are given two integer arrays `nums1` and `nums2`, both sorted in non-decreasing order. You are also given two integers `m` and `n`, representing the number of valid elements in `nums1` and `nums2` respectively.\n\nYou need to merge `nums2` into `nums1` so that `nums1` becomes a single sorted array. The merge should be done **in-place**, meaning no extra array should be returned or used for final output.\n\n**Note:** `nums1` has a total length of `m + n`, with the first `m` elements being valid and the last `n` elements set as 0 placeholders. `nums2` has exactly `n` elements.",
    examples: [
      {
        input: "nums1 = [1,2,3,0,0,0], m = 3\nnums2 = [2,5,6], n = 3",
        output: "[1,2,2,3,5,6]",
        explanation: "Merged result: [1,2,2,3,5,6] in-place inside nums1.",
      },
      {
        input: "nums1 = [1], m = 1\nnums2 = [], n = 0",
        output: "[1]",
        explanation: "Nothing to merge. nums1 remains unchanged.",
      },
      {
        input: "nums1 = [0], m = 0\nnums2 = [1], n = 1",
        output: "[1]",
        explanation: "nums1 had no initial elements. It is filled with nums2.",
      },
    ],
    approach: [
      {
        title: "Approach 1: Brute Force",
        steps: [
          "Copy all elements of `nums2` into `nums1` starting from index `m`.",
          "Sort the entire `nums1` array to get the final result.",
        ],
        code: "// Brute Force\nvar merge = function (nums1, m, nums2, n) {\n  for (let i = m, j = 0; i < m + n; i++, j++) {\n    nums1[i] = nums2[j];\n  }\n  nums1.sort((a, b) => a - b);\n};",
      },
      {
        title: "Approach 2: Optimized with Temp Array",
        steps: [
          "Copy the first `m` elements of `nums1` into a temporary array.",
          "Use three pointers: `i` for temp, `j` for `nums2`, and `k` for position in `nums1`.",
          "Compare and merge elements back into `nums1` in sorted order.",
          "Fill any remaining elements from temp or `nums2`.",
        ],
        code: "// Optimized with Temp Array\nvar merge = function (nums1, m, nums2, n) {\n  let arr = nums1.slice(0, m);\n  let i = 0, j = 0, k = 0;\n\n  while (i < m && j < n) {\n    if (arr[i] <= nums2[j]) {\n      nums1[k++] = arr[i++];\n    } else {\n      nums1[k++] = nums2[j++];\n    }\n  }\n\n  while (i < m) nums1[k++] = arr[i++];\n  while (j < n) nums1[k++] = nums2[j++];\n};",
      },
      {
        title: "Approach 3: Optimal In-place (Two Pointers from End)",
        steps: [
          "Set pointers `i = m - 1`, `j = n - 1`, and `k = m + n - 1`.",
          "Compare `nums1[i]` and `nums2[j]` from the end, place the larger at `nums1[k]`.",
          "Move the pointer that gave the larger value and decrement `k`.",
          "Continue until all elements of `nums2` are placed in `nums1`.",
        ],
        code: "// Optimal In-place (Two Pointers from End)\nvar merge = function(nums1, m, nums2, n) {\n  let i = m - 1;\n  let j = n - 1;\n  let k = m + n - 1;\n\n  while (j >= 0) {\n    if (i >= 0 && nums1[i] > nums2[j]) {\n      nums1[k--] = nums1[i--];\n    } else {\n      nums1[k--] = nums2[j--];\n    }\n  }\n};",
      },
    ],
    timeComplexity: "O(m + n) — each element is visited once",
    spaceComplexity: "O(1) — no extra space used in the final solution",
    leetcodeLink: "https://leetcode.com/problems/merge-sorted-array/",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQTSAkn8LKgSQKmJzH8S2Cb6AZPcRbkNUw9sl6Kjpzq2Fb0?em=2&wdAr=1.7777777777777777",
    videoLink: "L0O88eITpEA",
  },
  {
    title: "Move Zeroes",
    slug: "move-zeroes",
    difficulty: "Easy",
    leetcodeId: "#283",
    category: ["Array", "Two Pointer"],
    problemStatement:
      "Given an integer array `nums`, move all 0's to the end of it while maintaining the relative order of the non-zero elements. You must do this in-place without making a copy of the array.",
    examples: [
      {
        input: "[0,1,0,3,12]",
        output: "[1,3,12,0,0]",
      },
      {
        input: "[0]",
        output: "[0]",
      },
    ],
    approach: [
      {
        title: "Approach 1: Using Extra Space",
        steps: [
          "Iterate through the array and collect all non-zero elements in a new array.",
          "Overwrite the original array with these non-zero elements.",
          "Fill the remaining positions in the array with zeroes.",
        ],
        code: "// Approach 1: Using extra space\nvar moveZeroes = function (nums) {\n  let nonZeroes = [];\n\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] !== 0) {\n      nonZeroes.push(nums[i]);\n    }\n  }\n\n  let i = 0;\n  while (i < nonZeroes.length) {\n    nums[i] = nonZeroes[i];\n    i++;\n  }\n\n  while (i < nums.length) {\n    nums[i] = 0;\n    i++;\n  }\n\n  return nums;\n};",
      },
      {
        title: "Approach 2: In-place Using Two Pointers",
        steps: [
          "Initialize two pointers `first = 0` and `sec = 1`.",
          "If `nums[first]` is 0 and `nums[sec]` is not, swap them.",
          "If both are 0, move `sec` only.",
          "Otherwise, move both pointers forward.",
          "Repeat until the array is rearranged with all zeroes at the end.",
        ],
        code: "// Approach 2: In-place using Two Pointers\nvar moveZeroes = function (nums) {\n  let first = 0;\n  let sec = 1;\n\n  while (first < sec && sec < nums.length) {\n    if (nums[first] === 0 && nums[sec] !== 0) {\n      [nums[first], nums[sec]] = [nums[sec], nums[first]];\n      first++;\n      sec++;\n    } else if (nums[first] === 0 && nums[sec] === 0) {\n      sec++;\n    } else {\n      first++;\n      sec++;\n    }\n  }\n};",
      },
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(1) for in-place solution, O(n) for brute force",
    leetcodeLink: "https://leetcode.com/problems/move-zeroes/",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQSdOQQna87cSJPgwDsn9WNxAUri2_mCrY-N8N1oBbCAbWc?em=2&wdAr=1.7777777777777777",
    videoLink: "ob8TF5jVSYk",
  },
  {
    title: "Remove Duplicates from Sorted Array",
    slug: "remove-duplicates-from-sorted-array",
    difficulty: "Easy",
    leetcodeId: "#26",
    category: ["Array", "Two Pointer"],
    problemStatement:
      "You’re given a sorted array of integers. You need to remove duplicates in-place so that each element appears only once.\n\nReturn the number of unique elements `k`, and modify the input array such that the first `k` elements are the unique ones. Their order should be preserved. Values beyond index `k-1` can be ignored.",
    examples: [
      {
        input: "nums = [1, 1, 2]",
        output: "2",
        explanation:
          "Modified array becomes [1, 2, _]. Only first 2 elements matter.",
      },
      {
        input: "nums = [0,0,1,1,1,2,2,3,3,4]",
        output: "5",
        explanation:
          "Modified array becomes [0,1,2,3,4,_,_,_,_,_]. First 5 elements are unique.",
      },
    ],
    approach: [
      {
        title: "Two Pointer Approach",
        steps: [
          "Initialize `first = 0` and `sec = 1`.",
          "`first` tracks the position of the last unique element.",
          "`sec` scans the array for the next unique element.",
          "If a new unique value is found at `sec`, increment `first`, then swap `nums[first]` and `nums[sec]`.",
          "At the end of the loop, return `first + 1` as the number of unique elements.",
        ],
        code: "var removeDuplicates = function (nums) {\n  let first = 0;\n  let sec = 1;\n\n  while (sec < nums.length) {\n    if (nums[first] === nums[sec]) {\n      sec++;\n    } else {\n      first++;\n      [nums[first], nums[sec]] = [nums[sec], nums[first]];\n      sec++;\n    }\n  }\n\n  console.log(nums.slice(0, first + 1)); // Shows the unique values\n  return first + 1;\n};\n\nconsole.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // Output: 5",
      },
    ],
    timeComplexity: "O(n) – one pass through the array.",
    spaceComplexity: "O(1) – in-place solution using no extra space.",
    leetcodeLink:
      "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQQ2zvicRZIvSLbyYhDAbgwaAVT5x3hYGLwok-_ClyuMCPw?em=2&wdAr=1.7777777777777777",
    videoLink: "tAV7Iwd9-ys",
  },
  {
    title: "Remove Element",
    slug: "remove-element",
    difficulty: "Easy",
    leetcodeId: "#27",
    category: ["Array", "Two Pointer"],
    problemStatement:
      "You are given an array nums and an integer val. Your task is to remove all occurrences of val from the array in-place, and return the number of elements that are not equal to val. The modified array should have all the remaining (non-val) elements at the beginning. The rest of the elements don’t matter.\n\nReturn the count k, which is the number of elements not equal to val.",
    examples: [
      {
        input: "nums = [3,2,2,3], val = 3",
        output: "2",
        explanation:
          "Modified array: [2,2,_,_]. First 2 elements are not equal to 3.",
      },
      {
        input: "nums = [0,1,2,2,3,0,4,2], val = 2",
        output: "5",
        explanation:
          "Modified array: [0,1,3,0,4,_,_,_]. First 5 elements are not equal to 2.",
      },
    ],
    approach: [
      {
        title: "Approach 1: Two Pointer (Swap Based)",
        steps: [
          "Initialize two pointers `first = 0` and `sec = 0`.",
          "Loop while `sec < nums.length`.",
          "If `nums[sec] !== val`, swap `nums[first]` and `nums[sec]`, then increment `first`.",
          "Always increment `sec` regardless of condition.",
        ],
        code: "// Approach 1\nvar removeElement = function(nums, val) {\n  let first = 0;\n  let sec = 0;\n  while (sec < nums.length) {\n    if (nums[sec] !== val) {\n      [nums[first], nums[sec]] = [nums[sec], nums[first]];\n      first++;\n    }\n    sec++;\n  }\n  return first;\n};",
      },
      {
        title: "Approach 2: Cleaner Overwrite",
        steps: [
          "Initialize a pointer `k = 0`.",
          "Loop through the array using index `i`.",
          "If `nums[i] !== val`, set `nums[k] = nums[i]` and increment `k`.",
          "`k` will be the count of elements not equal to val.",
        ],
        code: "// Approach 2\nvar removeElement = function(nums, val) {\n  let k = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] !== val) {\n      nums[k] = nums[i];\n      k++;\n    }\n  }\n  return k;\n};",
      },
    ],
    timeComplexity: "O(n) – We iterate through the array once.",
    spaceComplexity: "O(1) – Done in-place without extra space.",
    leetcodeLink: "https://leetcode.com/problems/remove-element/",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQSRXTgg0kplQb5aYZCgf3ttAY5mnB0DFTGA42Wv-TR9B4k?em=2&wdAr=1.7777777777777777",
    videoLink: "i-d8csKVlGo",
  },
  {
    title: "Sort Colors",
    slug: "sort-colors",
    difficulty: "Medium",
    leetcodeId: "#75",
    category: ["Array", "Two Pointer", "Sorting"],
    problemStatement:
      "You’re given an array nums with n objects colored red, white, or blue. Your task is to sort them in-place so that objects of the same color are adjacent, and in the order: Red (0), White (1), Blue (2).\n\n📌 You must solve it without using any built-in sort function.",
    examples: [
      {
        input: "[2, 0, 2, 1, 1, 0]",
        output: "[0, 0, 1, 1, 2, 2]",
        explanation:
          "The array is sorted in-place into grouped colors in the order 0, 1, 2.",
      },
      {
        input: "[2, 0, 1]",
        output: "[0, 1, 2]",
        explanation:
          "Each color is positioned correctly without using built-in sort.",
      },
    ],
    approach: [
      {
        title: "Counting Sort",
        steps: [
          "Initialize three counters: `zero`, `one`, and `two` to 0.",
          "Iterate through the array once to count the occurrences of 0, 1, and 2.",
          "Overwrite the original array using the counts in order: fill with 0s, then 1s, then 2s.",
        ],
        code: "var sortColors = function(nums) {\n  let zero = 0, one = 0, two = 0;\n\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] === 0) zero++;\n    else if (nums[i] === 1) one++;\n    else two++;\n  }\n\n  let i = 0;\n  while (zero--) nums[i++] = 0;\n  while (one--) nums[i++] = 1;\n  while (two--) nums[i++] = 2;\n\n  return nums;\n};",
      },
    ],
    timeComplexity:
      "O(n) – Each element is visited once during counting and once during writing.",
    spaceComplexity: "O(1) – No extra space used except fixed counters.",
    leetcodeLink: "https://leetcode.com/problems/sort-colors/",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQSkNHooFkk_ToCT9WbPo6cbAe8O425s-VHVEGaWhlwsYqo?em=2&wdAr=1.7777777777777777",
    videoLink: "h1W3yaCAZk0",
  },
  {
    title: "String Compression",
    slug: "string-compression",
    difficulty: "Medium",
    leetcodeId: "#443",
    category: ["String", "Two Pointer"],
    problemStatement:
      "You're given an array of characters chars. Your task is to compress the array in-place using the following rules:\n\n- For each group of consecutive repeating characters:\n  - If the count is 1, just write the character.\n  - If the count is more than 1, write the character followed by the count (split digits like '12' into '1', '2').\n\nThe result must be written in-place and the function should return the new length of the array.\n\n🚨 Space complexity must be O(1), i.e., constant extra space.",
    examples: [
      {
        input: "chars = ['a','a','b','b','c','c','c']",
        output: "6",
        explanation: "The array is compressed to ['a','2','b','2','c','3']",
      },
      {
        input: "chars = ['a']",
        output: "1",
        explanation: "No compression needed, output remains ['a']",
      },
      {
        input: "chars = ['a','b','b','b','b','b','b','b','b','b','b','b','b']",
        output: "4",
        explanation: "The array is compressed to ['a','b','1','2']",
      },
    ],
    approach: [
      {
        title: "Two Pointer In-Place Compression",
        steps: [
          "Use a `read` pointer to scan the input array and a `write` pointer to overwrite the array with compressed values.",
          "Track the current character and count how many times it repeats consecutively.",
          "For each group, write the character once to the `write` pointer.",
          "If the count is more than 1, convert the count to a string and write each digit individually.",
          "Continue this process until the entire array is processed.",
          "Return the value of the `write` pointer as the new compressed length.",
        ],
        code: "var compress = function (chars) {\n  let read = 0;\n  let write = 0;\n\n  while (read < chars.length) {\n    let count = 0;\n    let char = chars[read];\n\n    while (read < chars.length && chars[read] === char) {\n      read++;\n      count++;\n    }\n\n    chars[write++] = char;\n\n    if (count > 1) {\n      for (let c of count.toString()) {\n        chars[write++] = c;\n      }\n    }\n  }\n\n  return write;\n};",
      },
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    leetcodeLink: "https://leetcode.com/problems/string-compression/",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQTunHPpAmKGQZxeWQcNBTTcAQuvSb3x1FZiH8HBtlVyI5I?em=2&amp;wdAr=1.7777777777777777",
    videoLink: "Aoru9tho5mo",
  },
  {
    title: "Is Subsequence",
    slug: "is-subsequence",
    difficulty: "Easy",
    leetcodeId: "#392",
    category: ["String", "Two Pointer", "Dynamic Programming"],
    problemStatement:
      "Given two strings s and t, return true if s is a subsequence of t, or false otherwise.\n\nA subsequence of a string is a new string formed by deleting some (or no) characters from the original string, without disturbing the relative order of the remaining characters.",
    examples: [
      {
        input: 's = "abc", t = "ahbgdc"',
        output: "true",
        explanation: '"a", "b", and "c" appear in order in t.',
      },
      {
        input: 's = "axc", t = "ahbgdc"',
        output: "false",
        explanation: '"x" is not present in t, so s is not a subsequence.',
      },
      {
        input: 's = "ace", t = "abcde"',
        output: "true",
        explanation: "All characters of s appear in order in t.",
      },
    ],
    approach: [
      {
        title: "Two Pointer Technique",
        steps: [
          "Initialize two pointers: `sIndex = 0` for string `s` and `tIndex = 0` for string `t`.",
          "Loop through string `t` using `tIndex`.",
          "At each step, if `s[sIndex] === t[tIndex]`, increment `sIndex` (we matched one character).",
          "Always increment `tIndex` regardless of match.",
          "After the loop ends, check if `sIndex === s.length`. If true, all characters of `s` were found in order inside `t`, so return true.",
          "Otherwise, return false.",
        ],
        code: "var isSubsequence = function(s, t) {\n  let sIndex = 0;\n  let tIndex = 0;\n\n  while (tIndex < t.length) {\n    if (s[sIndex] === t[tIndex]) {\n      sIndex++;\n    }\n    tIndex++;\n  }\n\n  return sIndex === s.length;\n};",
      },
    ],
    timeComplexity: "O(n), where n is the length of string t",
    spaceComplexity: "O(1), using just two pointers",
    leetcodeLink: "https://leetcode.com/problems/is-subsequence/",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQShKXPWeL_ySpKy86aaBxV-AQGibDqJdBthTiAy5XkfPRk?em=2&wdAr=1.7777777777777777",
    videoLink: "SMopvt9jUIU",
  },
  {
    title: "Merge Strings Alternately",
    slug: "merge-strings-alternately",
    difficulty: "Easy",
    leetcodeId: "#1768",
    category: ["String", "Two Pointer"],
    problemStatement:
      "You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If one string is longer than the other, append the additional letters at the end of the merged string. Return the merged string.",
    examples: [
      {
        input: 'word1 = "abc", word2 = "pqr"',
        output: '"apbqcr"',
        explanation:
          "Characters are alternated: a (from word1), p (from word2), b, q, c, r.",
      },
      {
        input: 'word1 = "ab", word2 = "pqrs"',
        output: '"apbqrs"',
        explanation:
          "After alternating a-p, b-q, word2 has extra characters r and s which are appended.",
      },
      {
        input: 'word1 = "abcd", word2 = "pq"',
        output: '"apbqcd"',
        explanation:
          "After alternating a-p, b-q, word1 has extra characters c and d which are appended.",
      },
    ],
    approach: [
      {
        title: "Two Pointer Technique",
        steps: [
          "Initialize two pointers `w1Index` and `w2Index` to 0.",
          "While both pointers are within bounds of `word1` and `word2`, alternately append one character from each string to the result.",
          "After the main loop, if there are any remaining characters in `word1` or `word2`, append them to the result string.",
          "Return the final merged result string.",
        ],
        code: 'var mergeAlternately = function (word1, word2) {\n  let w1Index = 0;\n  let w2Index = 0;\n  let s = "";\n\n  while (w1Index < word1.length && w2Index < word2.length) {\n    s += word1[w1Index++];\n    s += word2[w2Index++];\n  }\n\n  while (w1Index < word1.length) {\n    s += word1[w1Index++];\n  }\n\n  while (w2Index < word2.length) {\n    s += word2[w2Index++];\n  }\n\n  return s;\n};',
      },
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(1) (excluding output string)",
    leetcodeLink: "https://leetcode.com/problems/merge-strings-alternately/",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQRsvLnoG-55RL30e334wh_TAU0StmS0dg4m2wbKQB06MBo?em=2&wdAr=1.7777777777777777",
    videoLink: "4SH2w1HxnRA",
  },
  {
    title: "Find the Index of the First Occurrence in a String",
    slug: "find-the-index-of-the-first-occurrence-in-a-string",
    difficulty: "Easy",
    leetcodeId: "#28",
    category: ["String", "Two Pointer"],
    problemStatement:
      "Implement strStr(). Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack. If needle is an empty string, return 0.",
    examples: [
      {
        input: 'haystack = "sadbutsad", needle = "sad"',
        output: "0",
        explanation: "'sad' starts at index 0.",
      },
      {
        input: 'haystack = "leetcode", needle = "leeto"',
        output: "-1",
        explanation: "'leeto' is not present in 'leetcode'.",
      },
      {
        input: 'haystack = "abc", needle = ""',
        output: "0",
        explanation: "If needle is empty, return 0.",
      },
    ],
    approach: [
      {
        title: "Brute Force Substring Matching",
        steps: [
          "Check if the `needle` is an empty string. If yes, return 0.",
          "If `haystack.length < needle.length`, return -1 immediately.",
          "Loop from index `i = 0` to `haystack.length - needle.length`.",
          "At each index `i`, loop through the characters of `needle` and compare with `haystack[i + j]`.",
          "If all characters match, return the index `i`.",
          "If no match is found after the loop, return -1.",
        ],
        code: "var strStr = function(haystack, needle) {\n  if (needle.length === 0) {\n    return 0;\n  }\n\n  if (haystack.length < needle.length) {\n    return -1;\n  }\n\n  for (let i = 0; i <= haystack.length - needle.length; i++) {\n    let match = true;\n    for (let j = 0; j < needle.length; j++) {\n      if (haystack[i + j] !== needle[j]) {\n        match = false;\n        break;\n      }\n    }\n    if (match) {\n      return i;\n    }\n  }\n\n  return -1;\n};",
      },
    ],
    timeComplexity: "O(n * m), where n = haystack.length and m = needle.length",
    spaceComplexity: "O(1)",
    leetcodeLink:
      "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQQIq0-2lvAaSaWMow609L7YAb8Jb7bkOm-SN-4WAac0gfs?em=2&amp;wdAr=1.7777777777777777",
    videoLink: "D6SMKUk1FoE",
  },
  {
    title: "Reverse Vowels of a String",
    slug: "reverse-vowels-of-a-string",
    difficulty: "Easy",
    leetcodeId: "#345",
    category: ["String", "Two Pointer"],
    problemStatement:
      "Given a string s, reverse only the vowels of the string. Vowels include a, e, i, o, u (both uppercase and lowercase).",
    examples: [
      {
        input: 's = "leetcode"',
        output: '"leotcede"',
        explanation: "Only vowels 'e', 'e', 'o', 'e' are reversed.",
      },
      {
        input: 's = "hello"',
        output: '"holle"',
        explanation: "Vowels 'e' and 'o' are swapped.",
      },
      {
        input: 's = "IceCreAm"',
        output: '"AceCriEm"',
        explanation: "Multiple vowels are reversed using two-pointer logic.",
      },
      {
        input: 's = "AEIOU"',
        output: '"UOIEA"',
        explanation: "All vowels reversed completely.",
      },
    ],
    approach: [
      {
        title: "Two Pointer Approach",
        steps: [
          "Convert the string into a character array for easy manipulation.",
          "Initialize two pointers: one at the start and one at the end of the array.",
          "Use a Set to store all vowels (both uppercase and lowercase).",
          "Move the pointers inward while skipping non-vowel characters.",
          "When both pointers are at vowels, swap the characters.",
          "Continue this process until the two pointers meet.",
          "Finally, join the array back into a string and return it.",
        ],
        code: 'var reverseVowels = function (s) {\n  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);\n  const chars = s.split("");\n  let start = 0;\n  let end = s.length - 1;\n\n  while (start < end) {\n    while (start < end && !vowels.has(chars[start])) start++;\n    while (start < end && !vowels.has(chars[end])) end--;\n\n    [chars[start], chars[end]] = [chars[end], chars[start]];\n    start++;\n    end--;\n  }\n\n  return chars.join("");\n};',
      },
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    leetcodeLink: "https://leetcode.com/problems/reverse-vowels-of-a-string/",
    videoLink: "UJzeOmvwg2g",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQTy2HoVVYQtSb0vmAJ6aCFEAcGwcBtzURg2yctFe6UvYm0?em=2&wdAr=1.7777777777777777",
  },
  {
    title: "Reverse Words in a String III",
    slug: "reverse-words-in-a-string-iii",
    difficulty: "Easy",
    leetcodeId: "#557",
    category: ["String", "Two Pointer"],
    problemStatement:
      "Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.",
    examples: [
      {
        input: 's = "Mr Ding"',
        output: '"rM gniD"',
        explanation:
          "Each word is reversed but the order of the words remains the same.",
      },
      {
        input: 's = "Hello World"',
        output: '"olleH dlroW"',
        explanation: "Each word is reversed in place.",
      },
      {
        input: 's = "a b c"',
        output: '"a b c"',
        explanation: "Single character words remain the same.",
      },
    ],
    approach: [
      {
        title: "Split and Reverse Each Word",
        steps: [
          "Split the input string by spaces to isolate words.",
          "For each word, reverse its characters using a two-pointer approach.",
          "Use a helper function that converts the word to an array, swaps characters from both ends, and joins it back.",
          "Join the reversed words using spaces to reconstruct the sentence.",
        ],
        code: 'var reverseWords = function(s) {\n  let chars = s.split(" ");\n  for (let i = 0; i < chars.length; i++) {\n    chars[i] = reverseWord(chars[i]);\n  }\n  return chars.join(" ");\n};\n\nfunction reverseWord(word) {\n  let start = 0, end = word.length - 1;\n  let chars = word.split("");\n  while (start < end) {\n    [chars[start], chars[end]] = [chars[end], chars[start]];\n    start++;\n    end--;\n  }\n  return chars.join("");\n}',
      },
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    leetcodeLink:
      "https://leetcode.com/problems/reverse-words-in-a-string-iii/",
    videoLink: "o-ymMqY-0So",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQSQCaVurjHnQIQOc16d1fdtAdo4BESjoUoZVPiD4hTVTwo?em=2&wdAr=1.7777777777777777",
  },
  {
    title: "Reverse String II",
    slug: "reverse-string-ii",
    difficulty: "Easy",
    leetcodeId: "#541",
    category: ["String", "Two Pointer"],
    problemStatement:
      "You're given a string `s` and an integer `k`. The task is to reverse the first `k` characters for every `2k` characters, starting from the beginning of the string.\n\nRules:\n1. If there are fewer than `k` characters left, reverse all of them.\n2. If there are at least `k` but fewer than `2k` characters, then reverse only the first `k`, and leave the rest as-is.",
    examples: [
      {
        input: 's = "abcdefg", k = 2',
        output: '"bacdfeg"',
        explanation:
          'First block: "ab" → "ba", Second block: "ef" → "fe". Final string: "bacdfeg".',
      },
      {
        input: 's = "abcd", k = 2',
        output: '"bacd"',
        explanation:
          'Reverse first k = 2 → "ab" → "ba", rest stays same → "bacd".',
      },
    ],
    approach: [
      {
        title: "Two Pointer Chunk Reversal",
        steps: [
          "Convert the string into a character array for easy in-place operations.",
          "Loop through the string in increments of `2k`.",
          "For each chunk, reverse the first `k` characters using two pointers.",
          "Use `Math.min(i + k - 1, s.length - 1)` to ensure we don't go out of bounds.",
          "After all chunks are processed, join the character array into a string and return.",
        ],
        code: "var reverseStr = function(s, k) {\n    let arr = s.split('');\n    for (let i = 0; i < s.length; i += 2 * k) {\n        let left = i;\n        let right = Math.min(i + k - 1, s.length - 1);\n        while (left < right) {\n            [arr[left], arr[right]] = [arr[right], arr[left]];\n            left++;\n            right--;\n        }\n    }\n    return arr.join('');\n};",
      },
    ],
    timeComplexity: "O(n) – We iterate over the string once in chunks.",
    spaceComplexity: "O(n) – Due to character array manipulation.",
    leetcodeLink: "https://leetcode.com/problems/reverse-string-ii/",
    videoLink: "cYY9bWqgmxg",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQSbaolh2QPjTKKKjMRrIyJvAZX0RCkLR0JGcc4_Sl2H20Y?em=2&wdAr=1.7777777777777777",
  },
  {
    title: "Count Binary Substrings",
    slug: "count-binary-substrings",
    leetcodeId: "#696",
    difficulty: "Easy",
    category: ["String", "Two Pointer"],
    problemStatement:
      "You’re given a binary string. Your task is to count the number of substrings that:\n- Have equal number of 0s and 1s, and\n- All the 0s and all the 1s must be grouped together.\n\nNote: Repeated substrings are counted each time they occur.",
    examples: [
      {
        input: "00110011",
        output: "6",
        explanation:
          "Valid substrings are: 0011, 01, 1100, 10, 0011, 01. We care about both count and grouping.",
      },
      {
        input: "10101",
        output: "4",
        explanation: "Valid substrings are: 10, 01, 10, 01",
      },
    ],
    approach: [
      {
        title: "Brute Force",
        steps: [
          "Generate all possible substrings of the binary string.",
          "For each substring, count the number of consecutive 0s and 1s.",
          "Check if the number of 0s and 1s are equal and grouped together (i.e., all 0s come first followed by all 1s, or vice versa).",
          "If valid, increment the result count.",
          "Return the total count of such valid substrings.",
        ],
        code: "// ❌ Inefficient brute-force approach not implemented due to O(n^2) complexity.",
      },
      {
        title: "Optimized Using Group Counts",
        steps: [
          "Initialize a list `groups` to store counts of consecutive characters.",
          "Iterate through the string and count the length of consecutive 0s or 1s.",
          "Push each group count to the `groups` array.",
          "For every adjacent pair of groups, take the minimum of the two (because that’s the maximum number of valid substrings between them).",
          "Sum up all these minimums to get the final result.",
          "Return the result.",
        ],
        code: "var countBinarySubstrings = function(s) {\n  let groups = [];\n  let count = 1;\n\n  for (let i = 1; i < s.length; i++) {\n    if (s[i] === s[i - 1]) {\n      count++;\n    } else {\n      groups.push(count);\n      count = 1;\n    }\n  }\n  groups.push(count);\n\n  let result = 0;\n  for (let i = 1; i < groups.length; i++) {\n    result += Math.min(groups[i - 1], groups[i]);\n  }\n\n  return result;\n};",
      },
    ],
    timeComplexity:
      "O(n) – One pass to count group sizes, one pass to compute result",
    spaceComplexity: "O(n) – For storing the group sizes in an array",
    leetcodeLink: "https://leetcode.com/problems/count-binary-substrings/",
    videoLink: "dXcguydHR3E",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQTqErFs1Uz2QrbWWoNy6tUvAcONn2gOmngtnUWsllaHrxU?em=2&wdAr=1.7777777777777777",
  },
  {
    title: "Shortest Distance to a Character",
    slug: "shortest-distance-to-a-character",
    difficulty: "Easy",
    leetcodeId: "#821",
    category: ["Array", "Two Pointer", "String"],
    problemStatement:
      "You're given a string `s` and a character `c` that is guaranteed to occur at least once in `s`.\n\nYour task is to return an array of integers — where each element represents the shortest distance from the corresponding character in the string to the nearest occurrence of `c`.\n\nDistance is the absolute difference between indices.",
    examples: [
      {
        input: 's = "loveleetcode", c = "e"',
        output: "[3,2,1,0,1,0,0,1,2,2,1,0]",
      },
      {
        input: 's = "aaab", c = "b"',
        output: "[3,2,1,0]",
      },
    ],
    approach: [
      {
        title: "Efficient Two-Pointer Strategy",
        steps: [
          "First, collect all indices where character `c` appears into an array `cIndexes`.",
          "Initialize a pointer `index = 0` to track the nearest `c` as you iterate.",
          "Loop through each character of `s` and for each index `i`:",
          "  - If `i` is before or equal to `cIndexes[index]`, compute distance as `|i - cIndexes[index]|`.",
          "  - If `i` is past `cIndexes[index]`, compare `|i - cIndexes[index]|` and `|i - cIndexes[index+1]|` (if it exists), then use the closer one.",
          "Store each computed distance in a result array.",
          "Return the final distance array after the loop ends.",
        ],
        code: "let cIndexes = [];\n\nfor (let i = 0; i < s.length; i++) {\n  if (s[i] === c) {\n    cIndexes.push(i);\n  }\n}\n\nlet distance = [];\nlet index = 0;\n\nfor (let i = 0; i < s.length; i++) {\n  if (i <= cIndexes[index]) {\n    let dist = Math.abs(i - cIndexes[index]);\n    distance.push(dist);\n  } else {\n    if (index + 1 < cIndexes.length) {\n      let dist1 = Math.abs(i - cIndexes[index]);\n      let dist2 = Math.abs(i - cIndexes[index + 1]);\n      if (dist2 < dist1) {\n        index++;\n        distance.push(dist2);\n      } else {\n        distance.push(dist1);\n      }\n    } else {\n      let dist = Math.abs(i - cIndexes[index]);\n      distance.push(dist);\n    }\n  }\n}\n\nreturn distance;",
      },
    ],
    timeComplexity:
      "O(n) — One pass to gather indices, one pass to calculate distances.",
    spaceComplexity:
      "O(n) — To store both `cIndexes` and the `distance` result array.",
    leetcodeLink:
      "https://leetcode.com/problems/shortest-distance-to-a-character/",
    videoLink: "n6U8sUmBMho",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQQDo50YDcoaRLavSNTWlJm5Ac-IamYkQUXPOqh-Rxe6klE?em=2&wdAr=1.7777777777777777",
  },
  {
    title: "Sort Array by Parity",
    slug: "sort-array-by-parity",
    difficulty: "Easy",
    leetcodeId: "#905",
    category: ["Array", "Sorting", "Two Pointer"],
    problemStatement:
      "You're given an array of integers nums, and your task is to move all even numbers to the front of the array, followed by all the odd numbers. You can return any valid arrangement that satisfies this condition.",
    examples: [
      {
        input: "[3, 1, 2, 4]",
        output: "[4, 2, 1, 3] or [2, 4, 1, 3]",
      },
      {
        input: "[0]",
        output: "[0]",
      },
      {
        input: "[1, 2, 3, 4]",
        output: "[2, 4, 3, 1]",
      },
    ],
    approach: [
      {
        title: "Two-Pointer Approach",
        steps: [
          "Initialize two pointers: `left = 0` and `right = nums.length - 1`.",
          "While `left < right`:",
          "- If `nums[left]` is odd and `nums[right]` is even, swap them.",
          "- If `nums[left]` is even, increment `left`.",
          "- If `nums[right]` is odd, decrement `right`.",
          "This ensures all even numbers move to the beginning of the array.",
        ],
        code: "var sortArrayByParity = function (nums) {\n  let left = 0;\n  let right = nums.length - 1;\n\n  while (left < right) {\n    if (nums[left] % 2 > nums[right] % 2) {\n      [nums[left], nums[right]] = [nums[right], nums[left]];\n    }\n\n    if (nums[left] % 2 === 0) left++;\n    if (nums[right] % 2 === 1) right--;\n  }\n\n  return nums;\n};",
      },
    ],
    timeComplexity: "O(n) – Each element is checked at most once.",
    spaceComplexity: "O(1) – In-place swapping, no extra space used.",
    leetcodeLink: "https://leetcode.com/problems/sort-array-by-parity/",
    videoLink: "MVq7SO8nmvg",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQRnn9KmLIGmSZPno042QYX9ATFMuMl-lZnk6dYkSks6FaE?em=2&wdAr=1.7777777777777777",
  },
  {
    title: "Reverse Only Letters",
    slug: "reverse-only-letters",
    difficulty: "Easy",
    leetcodeId: "#917",
    category: ["String", "Two Pointer"],
    problemStatement:
      "Given a string s, we need to reverse only the English letters — both lowercase and uppercase — while keeping all other characters like digits, dashes, and symbols in their original positions.",
    examples: [
      {
        input: "ab-cd",
        output: "dc-ba",
        explanation: "Only a, b, c, d are letters. The hyphen stays in place.",
      },
      {
        input: "a-bC-dEf-ghIj",
        output: "j-Ih-gfE-dCba",
        explanation: "The dashes remain fixed, and the letters are reversed.",
      },
      {
        input: "Test1ng-Leet=code-Q!",
        output: "Qedo1ct-eeLg=ntse-T!",
        explanation:
          "Even with numbers and symbols, only the letters are reversed.",
      },
    ],
    approach: [
      {
        title: "Two Pointer Technique",
        steps: [
          "Initialize two pointers, `left` at 0 and `right` at the end of the string.",
          "While `left < right`:",
          "If `s[left]` is not a letter, increment `left`.",
          "If `s[right]` is not a letter, decrement `right`.",
          "If both are letters, swap them and move both pointers inward.",
          "Use a helper function `isLetter()` to check for alphabetic characters.",
          "Finally, join the character array back into a string and return.",
        ],
        code: 'var reverseOnlyLetters = function(s) {\n  const isLetter = (char) => {\n    const code = char.charCodeAt(0);\n    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);\n  };\n\n  let chars = s.split("");\n  let left = 0, right = chars.length - 1;\n\n  while (left < right) {\n    if (!isLetter(chars[left])) {\n      left++;\n    } else if (!isLetter(chars[right])) {\n      right--;\n    } else {\n      [chars[left], chars[right]] = [chars[right], chars[left]];\n      left++;\n      right--;\n    }\n  }\n\n  return chars.join("");\n};',
      },
    ],
    timeComplexity:
      "O(n) — Each character is visited at most once by either pointer.",
    spaceComplexity: "O(n) — Because we split the string into a new array.",
    leetcodeLink: "https://leetcode.com/problems/reverse-only-letters/",
    videoLink: "e-3m0l3U31I",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQTYf_wpQCaPTbuI2D3vk6-8AT2LrKV7TEgLS3KpGz3mNPA?em=2&wdAr=1.7777777777777777",
  },
  {
    title: "Contains Duplicate II",
    slug: "contains-duplicate-ii",
    leetcodeId: "#219",
    difficulty: "Easy",
    category: ["Array", "Hash Table", "Sliding Window"],
    problemStatement:
      "Given an integer array `nums` and an integer `k`, return `true` if there are two distinct indices `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.",
    examples: [
      {
        input: "nums = [1, 2, 3, 1], k = 3",
        output: "true",
      },
      {
        input: "nums = [1, 0, 1, 1], k = 1",
        output: "true",
      },
      {
        input: "nums = [1, 2, 3, 1, 2, 3], k = 2",
        output: "false",
      },
    ],
    approach: [
      {
        title: "Brute Force",
        steps: [
          "Iterate through each index `i` from `0` to `n - 1`.",
          "For each index `i`, check the next `k` elements (from `i+1` to `i+k`) to see if any are equal to `nums[i]`.",
          "If a duplicate is found within the range, return `true`.",
          "If no duplicates are found in any range, return `false`.",
        ],
        code: `var containsNearbyDuplicate = function(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + k && j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
};`,
      },
      {
        title: "Sliding Window with Set",
        steps: [
          "Initialize an empty Set to track the elements in the current window of size `k`.",
          "Iterate through the array `nums` using index `i`.",
          "If `nums[i]` is already in the Set, return `true` (duplicate within window found).",
          "Otherwise, add `nums[i]` to the Set.",
          "If the Set size exceeds `k`, remove the element at `i - k` from the Set (to maintain the window).",
          "If no duplicates are found by the end of the loop, return `false`.",
        ],
        code: `var containsNearbyDuplicate = function(nums, k) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }
  return false;
};`,
      },
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(min(n, k))",
    leetcodeLink: "https://leetcode.com/problems/contains-duplicate-ii/",
    videoLink: "OPymJtzjlUM",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQR-8vKDzhNHQIK4fDSk0ZSTAd9PwFJ75-ubz2SG5sfa2uA?em=2&wdAr=1.7777777777777777",
  },
  {
    title: "Longest Harmonious Subsequence",
    slug: "longest-harmonious-subsequence",
    difficulty: "Easy",
    leetcodeId: "#594",
    category: [
      "Array",
      "Hash Table",
      "Sliding Window",
      "Sorting",
      "Two Pointer",
    ],
    problemStatement:
      "We define a harmonious array as one where the difference between the maximum and minimum element is exactly 1. Given an array `nums`, return the length of the longest harmonious subsequence you can find. A subsequence can be formed by deleting some or no elements without changing the order of the remaining elements.",
    examples: [
      {
        input: "nums = [1, 3, 2, 2, 5, 2, 3, 7]",
        output: "5",
        explanation:
          "The subsequence [2, 2, 2, 3, 3] is the longest harmonious subsequence.",
      },
      {
        input: "nums = [1, 2, 3, 4]",
        output: "2",
        explanation: "Both [1, 2] and [2, 3] are valid, so the max is 2.",
      },
      {
        input: "nums = [1, 1, 1, 1]",
        output: "0",
        explanation: "No other number to pair with 1, so output is 0.",
      },
    ],
    approach: [
      {
        title: "Sliding Window (Brute Force)",
        steps: [
          "Sort the array in ascending order.",
          "Initialize two pointers: `start = 0` and `end = 0`.",
          "Iterate through the array with `end` pointer.",
          "While the difference between `nums[end]` and `nums[start]` is greater than 1, move `start` forward.",
          "If the difference is exactly 1, calculate the window length as `end - start + 1` and update the maximum length found so far.",
          "Return the maximum length after the loop ends.",
        ],
        code: "var findLHS = function(nums) {\n  nums.sort((a, b) => a - b);\n  let start = 0, maxLen = 0;\n  for (let end = 0; end < nums.length; end++) {\n    while (nums[end] - nums[start] > 1) {\n      start++;\n    }\n    if (nums[end] - nums[start] === 1) {\n      maxLen = Math.max(maxLen, end - start + 1);\n    }\n  }\n  return maxLen;\n};",
      },
      {
        title: "Optimized (Using Hash Map)",
        steps: [
          "Create a HashMap to count the frequency of each element in the array.",
          "Loop through each key in the HashMap.",
          "For each key, check if `key + 1` exists in the HashMap.",
          "If yes, add the counts of `key` and `key + 1`, and update the maximum length.",
          "Return the maximum length found.",
        ],
        code: "var findLHS = function(nums) {\n  const map = new Map();\n  for (let num of nums) {\n    map.set(num, (map.get(num) || 0) + 1);\n  }\n  let maxLen = 0;\n  for (let [num, count] of map.entries()) {\n    if (map.has(num + 1)) {\n      maxLen = Math.max(maxLen, count + map.get(num + 1));\n    }\n  }\n  return maxLen;\n};",
      },
    ],
    timeComplexity:
      "Brute Force: O(n log n) due to sorting. Optimized: O(n) using hash map.",
    spaceComplexity:
      "Brute Force: O(1) or O(n) (depends on sort). Optimized: O(n) for the frequency map.",
    leetcodeLink:
      "https://leetcode.com/problems/longest-harmonious-subsequence/",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQRiCaf_x8_GTLdrRpBXXLO_ARt9S5TYhQweBDxnCpim570?em=2&wdAr=1.7777777777777777",
    videoLink: "oA9UBaWCL5I",
  },
  {
    title: "Maximum Average Subarray I",
    slug: "maximum-average-subarray-i",
    difficulty: "Easy",
    leetcodeId: "#643",
    category: ["Array", "Sliding Window"],
    problemStatement:
      "You are given an integer array `nums` containing `n` elements, and an integer `k`. Your task is to find a contiguous subarray of length exactly `k` that has the maximum average. Return this average value. Your answer is considered correct if it is within 10^-5 of the actual answer.",
    examples: [
      {
        input: "nums = [1, 12, -5, -6, 50, 3], k = 4",
        output: "12.75000",
        explanation:
          "Subarray [12, -5, -6, 50] gives the maximum average 12.75.",
      },
      {
        input: "nums = [5], k = 1",
        output: "5.00000",
        explanation: "Only one number, so average is the number itself.",
      },
    ],
    approach: [
      {
        title: "Sliding Window Technique",
        steps: [
          "Calculate the sum of the first `k` elements and store it in `subArray`.",
          "Initialize the maximum average `avg` as `subArray / k`.",
          "Iterate from index `k` to the end of the array:",
          "- At each step, update the sum by adding the new element and subtracting the element that is sliding out of the window: `subArray = subArray + nums[i] - nums[i - k]`.",
          "- Recalculate the average and update `avg` if it's higher.",
          "Return the final maximum average rounded to 5 decimal places.",
        ],
        code: "// 🔹 JavaScript Solution using Sliding Window\nvar findMaxAverage = function(nums, k) {\n  let subArray = 0;\n  for (let i = 0; i < k; i++) {\n    subArray += nums[i];\n  }\n  let avg = subArray / k;\n\n  for (let i = k; i < nums.length; i++) {\n    subArray = subArray + nums[i] - nums[i - k];\n    avg = Math.max(avg, subArray / k);\n  }\n\n  return avg.toFixed(5);\n};\n\nconsole.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // Output: 12.75000\nconsole.log(findMaxAverage([5], 1)); // Output: 5.00000",
      },
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    leetcodeLink: "https://leetcode.com/problems/maximum-average-subarray-i/",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQSdsB2jkmV5SISFLa2WAPgoAeT-CM_wybmAdHGtJ2B4uD0?em=2&wdAr=1.7777777777777777",
    videoLink: "83ca4jViqtQ",
  },
  {
    title: "Roman to Integer",
    slug: "roman-to-integer",
    difficulty: "Easy",
    leetcodeId: "#13",
    category: ["String", "Hash Table", "Math"],
    problemStatement:
      "Given a Roman numeral, convert it to an integer.\n\nRoman numerals are represented by seven different symbols: I, V, X, L, C, D and M.\n\nSymbol | Value\n-------|------\nI      | 1\nV      | 5\nX      | 10\nL      | 50\nC      | 100\nD      | 500\nM      | 1000\n\nRoman numerals are usually written largest to smallest from left to right. However, in a few special cases, we subtract values — such as IV = 4 or IX = 9.\n\nYou are given a string representing a Roman numeral. Convert it to the corresponding integer.",
    examples: [
      {
        input: 's = "III"',
        output: "3",
        explanation: '"III" = 1 + 1 + 1 = 3',
      },
      {
        input: 's = "LVIII"',
        output: "58",
        explanation: '"L" = 50, "V" = 5, "III" = 3 → Total = 58',
      },
      {
        input: 's = "MCMXCIV"',
        output: "1994",
        explanation:
          '"M" = 1000, "CM" = 900, "XC" = 90, "IV" = 4 → Total = 1994',
      },
    ],
    approach: [
      {
        title: "Map-Based Iteration with Subtractive Pair Check",
        steps: [
          "Create a map with values for single Roman symbols and subtractive pairs.",
          "Initialize `intVal = 0` and start iterating over the string with index `i`.",
          "Check if `s[i] + s[i+1]` forms a valid subtractive pair present in the map.",
          "- If yes: add its value and move `i` forward by 2.",
          "- Else: add value of single character `s[i]` and increment `i` by 1.",
          "Repeat until end of string and return the final `intVal`.",
        ],
        code: '// 🔹 JavaScript Implementation\nvar romanToInt = function (s) {\n  const map = new Map([\n    ["I", 1], ["V", 5], ["X", 10], ["L", 50],\n    ["C", 100], ["D", 500], ["M", 1000],\n    ["IV", 4], ["IX", 9], ["XL", 40], ["XC", 90],\n    ["CD", 400], ["CM", 900]\n  ]);\n\n  let intVal = 0;\n  for (let i = 0; i < s.length; ) {\n    if (i + 1 < s.length && map.has(s[i] + s[i + 1])) {\n      intVal += map.get(s[i] + s[i + 1]);\n      i += 2;\n    } else {\n      intVal += map.get(s[i]);\n      i++;\n    }\n  }\n  return intVal;\n};\n\nconsole.log(romanToInt("III"));      // 3\nconsole.log(romanToInt("LVIII"));    // 58\nconsole.log(romanToInt("MCMXCIV"));  // 1994',
      },
    ],
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    leetcodeLink: "https://leetcode.com/problems/roman-to-integer/",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQTNLq6Wd-iTTaB8IZJkawtjAW93tAX5euF6wsLZfr2JWUs?em=2&amp;wdAr=1.7777777777777777",
    videoLink: "jtO2AUc_XgQ",
  },
  {
    title: "Majority Element",
    slug: "majority-element",
    difficulty: "Easy",
    leetcodeId: "#169",
    category: ["Array", "Hash Table", "Sorting"],
    problemStatement:
      "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.",
    examples: [
      {
        input: "nums = [3, 2, 3]",
        output: "3",
        explanation:
          "3 appears 2 times in an array of length 3, which is more than ⌊3 / 2⌋ = 1.",
      },
      {
        input: "nums = [2, 2, 1, 1, 1, 2, 2]",
        output: "2",
        explanation:
          "2 appears 4 times in an array of length 7, which is more than ⌊7 / 2⌋ = 3.",
      },
    ],
    approach: [
      {
        title: "Sorting Approach",
        steps: [
          "Sort the array in ascending order.",
          "Return the element at the middle index `Math.floor(n / 2)`.",
          "This works because the majority element must occupy the center position.",
        ],
        code: "var majorityElement = function(nums) {\n  nums.sort((a, b) => a - b);\n  return nums[Math.floor(nums.length / 2)];\n};",
      },
      {
        title: "Hash Map Approach",
        steps: [
          "Create a Hash Map to count the frequency of each element.",
          "Loop through the array and update the count for each number.",
          "If any element’s count becomes greater than ⌊n / 2⌋, return that element.",
        ],
        code: "var majorityElement = function(nums) {\n  const map = new Map();\n  for (let num of nums) {\n    map.set(num, (map.get(num) || 0) + 1);\n    if (map.get(num) > Math.floor(nums.length / 2)) {\n      return num;\n    }\n  }\n};",
      },
      {
        title: "Boyer-Moore Voting Algorithm",
        steps: [
          "Initialize `count = 0` and `major = null`.",
          "Loop through each number in the array:",
          "- If `count == 0`, set `major = current number`.",
          "- If `current number == major`, increment count, else decrement count.",
          "After the loop, return `major` as the majority element.",
        ],
        code: "var majorityElement = function(nums) {\n  let count = 0;\n  let major = null;\n  for (let num of nums) {\n    if (count === 0) major = num;\n    count += num === major ? 1 : -1;\n  }\n  return major;\n};",
      },
    ],
    timeComplexity: "Sorting: O(n log n), Hash Map: O(n), Boyer-Moore: O(n)",
    spaceComplexity: "Sorting: O(1), Hash Map: O(n), Boyer-Moore: O(1)",
    leetcodeLink: "https://leetcode.com/problems/majority-element/",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQR2W9cCgYW1S7LMyACwDolJAUUma-9WDslGvizCtkDhYhM?em=2&amp;wdAr=1.7777777777777777",
    videoLink: "rEn-YTJ4IZI",
  },
  {
    title: "Happy Number",
    slug: "happy-number",
    difficulty: "Easy",
    leetcodeId: "#202",
    category: ["Math", "Hash Table", "Two Pointer"],
    problemStatement:
      "Write an algorithm to determine if a number `n` is a happy number.\n\nA happy number is a number defined by the following process:\n1. Starting with any positive integer,\n2. Replace the number with the sum of the squares of its digits,\n3. Repeat the process until the number equals 1 (where it will stay),\n4. Or it loops endlessly in a cycle that does not include 1.\n\nIf it ends in 1, return `true`. Otherwise, return `false`.",
    examples: [
      {
        input: "n = 19",
        output: "true",
        explanation:
          "1² + 9² = 82 → 8² + 2² = 68 → 6² + 8² = 100 → 1² + 0² + 0² = 1 → returns true.",
      },
      {
        input: "n = 2",
        output: "false",
        explanation: "Goes into a cycle and never reaches 1 → returns false.",
      },
    ],
    approach: [
      {
        title: "Approach: Using Set to Detect Cycle",
        steps: [
          "Initialize an empty Set to store previously seen numbers.",
          "Loop while the number is not equal to 1.",
          "If the number is already in the Set, it means a cycle is detected → return false.",
          "Otherwise, add the number to the Set.",
          "Compute the sum of the squares of its digits.",
          "Replace the number with this sum and repeat.",
          "If number becomes 1, return true.",
        ],
        code: `// 🔹 Approach: Using Set
  var isHappy = function(number) {
    let seenNumbers = new Set();
  
    while (number !== 1) {
      if (seenNumbers.has(number)) {
        return false;
      }
  
      seenNumbers.add(number);
  
      let current = number;
      let sumOfSquares = 0;
  
      while (current > 0) {
        let digit = current % 10;
        sumOfSquares += digit * digit;
        current = Math.floor(current / 10);
      }
  
      number = sumOfSquares;
    }
  
    return true;
  };`,
      },
    ],
    timeComplexity:
      "O(log n) – processing each digit of the number at every step",
    spaceComplexity: "O(log n) – to store intermediate results in the Set",
    leetcodeLink: "https://leetcode.com/problems/happy-number/",
    videoLink: "SupHj9jW4HM",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQS_Vhvl1SGbT5jMr-uV1ZZ1Acaz3--N9YksGWF75M91K_I?em=2&amp;wdAr=1.7777777777777777",
  },
  {
    title: "Isomorphic Strings",
    slug: "isomorphic-strings",
    difficulty: "Easy",
    leetcodeId: "#205",
    category: ["Hash Table", "String"],
    problemStatement:
      "Given two strings `s` and `t`, determine if they are isomorphic.\n\nTwo strings are isomorphic if the characters in `s` can be replaced to get `t` such that:\n1. Each character in `s` maps to exactly one character in `t`.\n2. No two characters may map to the same character.\n3. Character order must be preserved.\n\nReturn `true` if `s` and `t` are isomorphic; otherwise, return `false`.",

    examples: [
      {
        input: 's = "egg", t = "add"',
        output: "true",
        explanation: "'e' → 'a', 'g' → 'd'. Mapping is consistent and unique.",
      },
      {
        input: 's = "foo", t = "bar"',
        output: "false",
        explanation: "'o' maps to two different characters → invalid.",
      },
      {
        input: 's = "paper", t = "title"',
        output: "true",
        explanation:
          "'p'→'t', 'a'→'i', 'e'→'l', 'r'→'e'. Mapping is consistent.",
      },
      {
        input: 's = "ab", t = "aa"',
        output: "false",
        explanation:
          "Both 'a' and 'b' map to 'a' → violates one-to-one mapping.",
      },
    ],

    approach: [
      {
        title: "Approach: Two Hash Maps for Bidirectional Mapping",
        steps: [
          "If `s` and `t` are not of equal length, return false immediately.",
          "Initialize two hash maps: `mapST` for mapping from `s → t`, and `mapTS` for mapping from `t → s`.",
          "Iterate through each character of both strings:",
          "  - If a character from `s` is already mapped, check if it matches the current `t` character.",
          "  - Also check if the `t` character is already mapped by another `s` character.",
          "  - If any mismatch is found in either direction, return false.",
          "If the loop completes without mismatch, return true.",
        ],
        code: `// 🔹 Approach: Two Hash Maps (s → t and t → s)
  var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
  
    let mapST = new Map();
    let mapTS = new Map();
  
    for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      const charT = t[i];
  
      if (
        (mapST.has(charS) && mapST.get(charS) !== charT) ||
        (mapTS.has(charT) && mapTS.get(charT) !== charS)
      ) {
        return false;
      }
  
      mapST.set(charS, charT);
      mapTS.set(charT, charS);
    }
  
    return true;
  };`,
      },
    ],

    timeComplexity: "O(n) – single traversal over the string length",
    spaceComplexity: "O(n) – storing mappings in two hash maps",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQTXUTcGW88ZQK1cM0Xm1-YxAWUpxCmbW8a-6sZyNnxVAN0?em=2&amp;wdAr=1.7777777777777777",
    leetcodeLink: "https://leetcode.com/problems/isomorphic-strings/",
    videoLink: "1NKTxQWcRGo",
  },
  {
    title: "Contains Duplicate",
    slug: "contains-duplicate",
    difficulty: "Easy",
    leetcodeId: "#217",
    category: ["Array", "Hash Table", "Sorting"],
    problemStatement:
      "Given an integer array `nums`, return `true` if any value appears **at least twice**, and `false` if every element is distinct.\n\nYour task is to detect the presence of duplicates in the array efficiently.",

    examples: [
      {
        input: "nums = [1, 2, 3, 1]",
        output: "true",
        explanation: "'1' appears more than once.",
      },
      {
        input: "nums = [1, 2, 3, 4]",
        output: "false",
        explanation: "All elements are unique.",
      },
      {
        input: "nums = [1,1,1,3,3,4,3,2,4,2]",
        output: "true",
        explanation: "Multiple elements have duplicates.",
      },
    ],

    approach: [
      {
        title: "Approach 1: Sorting-Based Duplicate Check",
        steps: [
          "Sort the array in ascending order.",
          "Iterate from index 0 to n-2 and compare each element with the next.",
          "If `nums[i] === nums[i + 1]`, return `true` (duplicate found).",
          "If loop completes with no duplicates, return `false`.",
        ],
        code: `// 🔹 Approach: Sorting
  var containsDuplicate = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] === nums[i + 1]) {
        return true;
      }
    }
    return false;
  };`,
      },
      {
        title: "Approach 2: Hash Set for Constant-Time Lookup",
        steps: [
          "Create an empty Set to store seen numbers.",
          "Iterate through each element in `nums`.",
          "If the current number already exists in the Set, return `true`.",
          "Otherwise, add the number to the Set.",
          "If loop completes with no duplicates, return `false`.",
        ],
        code: `// 🔹 Approach: Hash Set
  var containsDuplicate = function (nums) {
    const seen = new Set();
    for (let num of nums) {
      if (seen.has(num)) return true;
      seen.add(num);
    }
    return false;
  };`,
      },
    ],

    timeComplexity: "O(n) – linear traversal with Set lookup",
    spaceComplexity: "O(n) – to store unique elements in Set",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQSfFJz6VP3-Tr0oai_jM5W1AaklVV9XC23f_yUwRhRNuP0?em=2&amp;wdAr=1.7777777777777777",
    leetcodeLink: "https://leetcode.com/problems/contains-duplicate/",
    videoLink: "J3KkweHXGM4",
  },
  {
    title: "Valid Anagram",
    slug: "valid-anagram",
    difficulty: "Easy",
    leetcodeId: "#242",
    category: ["String", "Hash Table", "Sorting"],
    problemStatement:
      "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.",

    examples: [
      {
        input: 's = "anagram", t = "nagaram"',
        output: "true",
        explanation: "All characters in both strings match in frequency.",
      },
      {
        input: 's = "rat", t = "car"',
        output: "false",
        explanation:
          "Characters do not match; 'a' and 'r' are not in the same frequency.",
      },
      {
        input: 's = "aacc", t = "ccac"',
        output: "false",
        explanation:
          "'a' occurs twice in `s` but only once in `t`, so not an anagram.",
      },
    ],

    approach: [
      {
        title: "Approach 1: Sorting-Based Comparison",
        steps: [
          "Check if the lengths of `s` and `t` are equal. If not, return `false`.",
          "Sort both strings alphabetically.",
          "Compare the sorted strings. If they match, return `true`; otherwise, return `false`.",
        ],
        code: `// 🔹 Approach: Sorting
  var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    return s.split("").sort().join("") === t.split("").sort().join("");
  };`,
      },
      {
        title: "Approach 2: Two Hash Maps",
        steps: [
          "Check if the lengths of `s` and `t` are equal. If not, return `false`.",
          "Create two hash maps to count the frequency of characters in `s` and `t`.",
          "Iterate through each string and populate the maps.",
          "Compare the frequency of each character in both maps. If all match, return `true`.",
        ],
        code: `// 🔹 Approach: Two Hash Maps
  var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
  
    let sMap = new Map();
    let tMap = new Map();
  
    for (let char of s) {
      sMap.set(char, (sMap.get(char) || 0) + 1);
    }
  
    for (let char of t) {
      tMap.set(char, (tMap.get(char) || 0) + 1);
    }
  
    for (let [key, val] of sMap) {
      if (tMap.get(key) !== val) return false;
    }
  
    return true;
  };`,
      },
      {
        title: "Approach 3: Optimized One Hash Map",
        steps: [
          "Check if the lengths of `s` and `t` are equal. If not, return `false`.",
          "Create a hash map to count the characters in `s`.",
          "Iterate through string `t` and decrement the character count in the map.",
          "If a character is not found or goes below 0, return `false`.",
          "If all counts are valid, return `true`.",
        ],
        code: `// 🔹 Approach: One Hash Map (Optimized)
  var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
  
    const map = new Map();
  
    for (let char of s) {
      map.set(char, (map.get(char) || 0) + 1);
    }
  
    for (let char of t) {
      if (!map.has(char)) return false;
      map.set(char, map.get(char) - 1);
      if (map.get(char) < 0) return false;
    }
  
    return true;
  };`,
      },
    ],

    timeComplexity: "O(n) – linear time with optimized hash map",
    spaceComplexity:
      "O(1) – constant space if input is limited to lowercase letters",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQRlyYtqgj7FQJggCwSbLPW9ATCCgLXVkoW3hBKm8xxsto4?em=2&amp;wdAr=1.7777777777777777",
    leetcodeLink: "https://leetcode.com/problems/valid-anagram/",
    videoLink: "hcPxY3m0hzw",
  },
  {
    title: "Palindrome Number",
    slug: "palindrome-number",
    difficulty: "Easy",
    leetcodeId: "#9",
    category: ["Math"],
    problemStatement:
      "Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.\n\nA palindrome is a number that reads the same backward as forward. Negative numbers are **not** considered palindromes.",

    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 reads the same forward and backward.",
      },
      {
        input: "x = -121",
        output: "false",
        explanation: "Reversed = 121-, which is not valid.",
      },
      {
        input: "x = 10",
        output: "false",
        explanation: "Reversed = 01, which is not equal to 10.",
      },
    ],

    approach: [
      {
        title: "Approach: Reverse Integer Comparison",
        steps: [
          "If `x` is negative, immediately return `false`.",
          "Initialize a `reversed` variable to 0 and store the original value in a temporary variable `temp`.",
          "While `temp > 0`:",
          "  - Extract the last digit: `lastDigit = temp % 10`",
          "  - Build reversed number: `reversed = reversed * 10 + lastDigit`",
          "  - Remove last digit: `temp = Math.floor(temp / 10)`",
          "After the loop, compare `reversed` with `x`. If equal, return `true`; otherwise, return `false`.",
        ],
        code: `// 🔹 Approach: Reversing Number
  var isPalindrome = function (x) {
    if (x < 0) return false;
  
    let temp = x;
    let reversed = 0;
  
    while (temp > 0) {
      let lastDigit = temp % 10;
      reversed = reversed * 10 + lastDigit;
      temp = Math.floor(temp / 10);
    }
  
    return reversed === x;
  };`,
      },
    ],

    timeComplexity: "O(log₁₀n) – We divide the number by 10 each iteration",
    spaceComplexity: "O(1) – Constant space for variables",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQQg7J1vh06RQqP3KSgbuJZ8AfgljzogjpF3qLskFDISDHU?em=2&amp;wdAr=1.7777777777777777",
    leetcodeLink: "https://leetcode.com/problems/palindrome-number/",
    videoLink: "dijqWuQaT1o",
  },
  {
    title: "Length of Last Word",
    slug: "length-of-last-word",
    difficulty: "Easy",
    leetcodeId: "#58",
    category: ["String"],
    problemStatement:
      "Given a string `s` consisting of words and spaces, return the length of the **last word** in the string.\n\nA word is a maximal substring consisting of non-space characters only.",

    examples: [
      {
        input: 's = "Hello World"',
        output: "5",
        explanation: "The last word is 'World', which has 5 characters.",
      },
      {
        input: 's = "   fly me   to   the moon  "',
        output: "4",
        explanation: "The last word is 'moon', which has 4 characters.",
      },
      {
        input: 's = "luffy is still joyboy"',
        output: "6",
        explanation: "The last word is 'joyboy', which has 6 characters.",
      },
    ],

    approach: [
      {
        title: "Approach: Reverse Traversal",
        steps: [
          "Initialize an empty string `subStr`.",
          "Loop from the end of the string to the beginning:",
          "  - If the current character is a space and `subStr` is empty, continue (skip trailing spaces).",
          "  - If the current character is a space and `subStr` is not empty, return `subStr.length` (we found the last word).",
          "  - Otherwise, append the current character to `subStr`.",
          "After the loop, return `subStr.length` in case the string has only one word.",
        ],
        code: `// 🔹 Manual Reverse Loop Approach
  var lengthOfLastWord = function (s) {
    let subStr = "";
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === " " && subStr === "") continue;
      else if (s[i] === " " && subStr.length > 0) return subStr.length;
      else subStr += s[i];
    }
    return subStr.length;
  };`,
      },
      {
        title: "Approach: Trim and Split",
        steps: [
          "Use `trim()` to remove trailing and leading spaces.",
          'Use `split(" ")` to convert the string into words.',
          "Return the length of the last element in the resulting array.",
        ],
        code: `// 🔹 Built-in Method (Short Code)
  var lengthOfLastWord = function (s) {
    let words = s.trim().split(" ");
    return words[words.length - 1].length;
  };`,
      },
    ],

    timeComplexity: "O(n) – We scan the string once",
    spaceComplexity: "O(1) for reverse loop, O(n) for split-based version",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQQcqCJ8cB0YRbWH17ygiBdiAX9ktqSRW-up415m3gp4iN8?em=2&amp;wdAr=1.7777777777777777",
    leetcodeLink: "https://leetcode.com/problems/length-of-last-word/",
    videoLink: "bKUSxfwjypE",
  },
  {
    title: "Find All Numbers Disappeared in an Array",
    slug: "find-all-numbers-disappeared-in-an-array",
    difficulty: "Easy",
    leetcodeId: "#448",
    category: ["Array", "Hash Table"],
    problemStatement:
      "Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, some elements appear **twice** and others appear **once**. Return *all the integers in the range* `[1, n]` *that do not appear in* `nums`.",

    examples: [
      {
        input: "nums = [4, 3, 2, 7, 8, 2, 3, 1]",
        output: "[5, 6]",
        explanation: "The numbers 5 and 6 are missing from the range 1 to 8.",
      },
      {
        input: "nums = [1, 1]",
        output: "[2]",
        explanation: "Only number 2 is missing in the range 1 to 2.",
      },
    ],

    approach: [
      {
        title: "Approach: Brute Force using Hash Map",
        steps: [
          "Initialize an empty `Map`.",
          "Loop through `nums` and add each number into the map.",
          "Create an empty array `ans`.",
          "Loop from 1 to n (inclusive):",
          "  - If a number is not present in the map, push it to `ans`.",
          "Return the `ans` array.",
        ],
        code: `// 🔹 Brute Force using Hash Map
  var findDisappearedNumbers = function (nums) {
    let map = new Map();
    let ans = [];
  
    for (let i = 0; i < nums.length; i++) {
      map.set(nums[i], true);
    }
  
    for (let i = 1; i <= nums.length; i++) {
      if (!map.has(i)) ans.push(i);
    }
  
    return ans;
  };`,
      },
      {
        title: "Approach: Optimized In-place Negative Marking",
        steps: [
          "Loop through each number in `nums`.",
          "For each value `val`, calculate `index = Math.abs(val) - 1`.",
          "Make `nums[index]` negative if it’s not already.",
          "Create a result array `result`.",
          "Loop through the array again:",
          "  - If `nums[i]` is positive, then `i + 1` is missing → push to `result`.",
          "Return the `result` array.",
        ],
        code: `// 🔹 Optimized In-place Negative Marking
  var findDisappearedNumbers = function (nums) {
    for (let i = 0; i < nums.length; i++) {
      let index = Math.abs(nums[i]) - 1;
      nums[index] = -Math.abs(nums[index]);
    }
  
    let result = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) result.push(i + 1);
    }
  
    return result;
  };`,
      },
    ],

    timeComplexity: "O(n) – Both approaches scan the array twice",
    spaceComplexity:
      "O(n) for brute force, O(1) for optimized in-place version",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQSZaKGB5jCCTLJyqNq2-bxlAdj6BsLOqVT9E4YSjj305ZM?em=2&amp;wdAr=1.7777777777777777",
    leetcodeLink:
      "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
    videoLink: "",
  },
  {
    title: "Find the Difference",
    slug: "find-the-difference",
    difficulty: "Easy",
    leetcodeId: "#389",
    category: ["String", "Hash Table", "Sorting"],
    problemStatement:
      "You are given two strings `s` and `t`. String `t` is generated by randomly shuffling string `s` and then adding one more letter at a random position. Return the letter that was added to `t`.",

    examples: [
      {
        input: 's = "abcd", t = "abcde"',
        output: '"e"',
        explanation: "The character 'e' was added to string t.",
      },
      {
        input: 's = "", t = "y"',
        output: '"y"',
        explanation: "Since s is empty, the extra character in t is 'y'.",
      },
      {
        input: 's = "a", t = "aa"',
        output: '"a"',
        explanation:
          "'a' appears once in s and twice in t, so it's the added character.",
      },
    ],

    approach: [
      {
        title: "Approach: Using Hash Map to Track Frequency",
        steps: [
          "Initialize an empty Map to store character counts from string `s`.",
          "Loop through string `s`, and for each character, increase its count in the map.",
          "Loop through string `t`:",
          "  - If the character is not in the map or its count is zero, return that character.",
          "  - Otherwise, decrement its count in the map.",
          "This will give us the extra character added in `t`.",
        ],
        code: `// 🔹 Using Hash Map
  var findTheDifference = function(s, t) {
    let map = new Map();
  
    for (let char of s) {
      map.set(char, (map.get(char) || 0) + 1);
    }
  
    for (let char of t) {
      if (!map.has(char) || map.get(char) === 0) {
        return char;
      } else {
        map.set(char, map.get(char) - 1);
      }
    }
  };`,
      },
      {
        title: "Approach: Optimized Using Character Codes (ASCII Sum)",
        steps: [
          "Initialize a variable `sum` to 0.",
          "Loop through each character in `t` and add its ASCII code to `sum`.",
          "Loop through each character in `s` and subtract its ASCII code from `sum`.",
          "The final value of `sum` corresponds to the ASCII of the extra character.",
          "Return `String.fromCharCode(sum)` as the result.",
        ],
        code: `// 🔹 Optimized ASCII Sum Approach
  var findTheDifference = function(s, t) {
    let sum = 0;
  
    for (let char of t) {
      sum += char.charCodeAt(0);
    }
  
    for (let char of s) {
      sum -= char.charCodeAt(0);
    }
  
    return String.fromCharCode(sum);
  };`,
      },
      {
        title: "Approach: Using Sorting",
        steps: [
          "Convert both strings `s` and `t` to arrays and sort them.",
          "Loop through both sorted arrays at the same time:",
          "  - Compare characters at the same index.",
          "  - If a mismatch is found, return the character from `t`.",
          "If no mismatch is found, the extra character is the last one in `t`.",
        ],
        code: `// 🔹 Sorting Approach
  var findTheDifference = function(s, t) {
    let sArr = s.split('').sort();
    let tArr = t.split('').sort();
  
    for (let i = 0; i < sArr.length; i++) {
      if (sArr[i] !== tArr[i]) {
        return tArr[i];
      }
    }
  
    return tArr[tArr.length - 1];
  };`,
      },
    ],

    timeComplexity: "O(n log n) for sorting approach, O(n) for others",
    spaceComplexity: "O(1) for ASCII sum, O(n) for map/sorting",
    pptLink:
      "https://1drv.ms/p/c/d9a1d5f2dacf7aea/IQNtTWNl8jYcFS4GczlNNvEaAcH1rvKOoRShnTGctEDBd-Q?em=2", // placeholder
    leetcodeLink: "https://leetcode.com/problems/find-the-difference/",
    videoLink: "", // fill after uploading video
  },
];

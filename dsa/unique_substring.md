## interview-questions

#### Longest substring without repeating characters

```bash
Asked in HDFC Securities

Given a string, str, return the length of the longest substring without repeating characters.
Constraints:
1 ≤ str.length ≤1000
str consists of English letters, digits, and spaces.

Eg.  p w w c e w

len - 3
b b b b b b 

len - 1

"" len - 0
```

```javascript

function lengthOfLongestSubstring(str) {
  if (str.length === 0) {
    return 0;
  }

  let start = 0; // Starting index of the sliding window
  let maxLength = 0; // Maximum length of substring found
  const charIndexMap = new Map(); // To store the last index of each character

  for (let end = 0; end < str.length; end++) {
    const currentChar = str[end];

    // If the character is already in the map and is within the current window
    if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
      // Move the start of the window to the next character after the last duplicate
      start = charIndexMap.get(currentChar) + 1;
    }

    // Update or add the current character's index in the map
    charIndexMap.set(currentChar, end);

    // Calculate the length of the current window and update maxLength if it's larger
    const currentLength = end - start + 1;
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}

// Example Usage
console.log(lengthOfLongestSubstring("pwwcew")); // Output: 3 (wce)
console.log(lengthOfLongestSubstring("bbbbbb")); // Output: 1 (b)
console.log(lengthOfLongestSubstring("")); // Output: 0
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 (abc)

```
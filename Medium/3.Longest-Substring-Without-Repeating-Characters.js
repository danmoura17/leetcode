/*
Problem: 3. Longest Substring Without Repeating Characters
- Given a string s, find the length of the longest substring without repeating characters.
- URL: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
- Difficulty: Medium

Approach: 
- Use a map to store the characters and their indices.
- Use two pointers to keep track of the current substring.
- If the character is not in the map, add it and update the max length.
- If the character is in the map, remove the character at the left pointer and increment the left pointer.

Complexity:
- Time: O(n)
- Space: O(n)

Key Insights:
- Use a map to store the characters and their indices.
- Use sliding window technique to keep track of the current substring.
*/

const LongestSubstringWithoutRepeatingCharacters = () => {
    const lengthOfLongestSubstring = (s) => {
        let max = 0;
        const map = new Map();
        let left = 0;
        let right = 0;

        while (right < s.length) {
            if(!map.has(s[right])) {
                map.set(s[right], 1);
                max = Math.max(max, right - left + 1);
                right++;
            } else {
                map.delete(s[left]);
                left++;
            }
        }
        
        return max;
    }

    console.log(lengthOfLongestSubstring("abcabcbb")); // 3
    console.log(lengthOfLongestSubstring("bbbbb")); // 1
    console.log(lengthOfLongestSubstring("pwwkew")); // 3
    
};

LongestSubstringWithoutRepeatingCharacters();

module.exports = LongestSubstringWithoutRepeatingCharacters;

/*
Problem: 387. First Unique Character in a String
- Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

- URL: https://leetcode.com/problems/first-unique-character-in-a-string/description/
- Difficulty: Easy

Approach: 
- 

Complexity:
- Time: O(n)
- Space: O(1)

Key Insights:
- This problem can be solved using a hash map or an array of size 26 to store the frequency of each character in the string.
*/

const FirstUniqueCharacterinaString = () => {
    var firstUniqChar = function(s) {
        
        let array = new Array(26).fill(0);

        for (let char of s) {
            array[char.charCodeAt(0) - 'a'.charCodeAt()]++;
        }

        for (let i = 0; i < s.length; i++) {
            if (array[s[i].charCodeAt(0) - 'a'.charCodeAt()] === 1) {
                return i;
            }
        
        }
        return -1;        
    }

    console.log(firstUniqChar("leetcode")); // 0
    console.log(firstUniqChar("loveleetcode")); // 2
    console.log(firstUniqChar("aabb")); // -1
};

FirstUniqueCharacterinaString();

module.exports = FirstUniqueCharacterinaString;

/*
Problem: 242. Valid Anagram
- Given two strings s and t, return true if t is an anagram of s, and false otherwise.
- URL: https://leetcode.com/problems/valid-anagram/description/
- Difficulty: Easy

Approach: 
- Create a array of the first string
- Create a array of the second string
- Compare the two arrays
- If the arrays are the same, return true

Complexity:
- Time: O(n)
- Space: O(1) 

Key Insights:
- Use an array to keep track of the frequency of each character in the string
*/

const ValidAnagram = () => {
    const isAnagram = (s, t) => {
        if(s.length !== t.length){
            return false
        }
        
        const mapString1 = new Array(26).fill(0)
        const mapString2 = new Array(26).fill(0)
        
        for(let i = 0; i < s.length; i++){
            mapString1[s[i].charCodeAt() - 'a'.charCodeAt()]++ // charCodeAt() returns the Unicode of the character at the specified index in a string
            mapString2[t[i].charCodeAt() - 'a'.charCodeAt()]++ // 'a'.charCodeAt() returns 97
        }
    
        for (let i = 0; i < 26; i++){
            if (mapString1[i] !== mapString2[i]){
                return false
            }
        }
    
        return true
    }
    console.log(isAnagram("anagram", "nagaram")) // true
    console.log(isAnagram("rat", "car")) // false
    console.log(isAnagram("a", "ab")) // false
};

ValidAnagram();

module.exports = ValidAnagram;

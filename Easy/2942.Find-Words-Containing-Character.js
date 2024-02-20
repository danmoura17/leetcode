/*
Problem: 2942. Find Words Containing Character

- URL: https://leetcode.com/problems/find-words-containing-character/description/
- Difficulty: Easy

Approach: 
- Iterate through the words array and check if the current word contains the character x

Complexity:
- Time: O(n^2) 
- Space: O(n) 

Key Insights:
- 
*/

const FindWordsContainingCharacter = () => {

    const findWords = (words, x) => {

        let output = []
        for(let i = 0; i < words.length; i++){
            if(words[i].includes(x)){
                output.push(i)
            }
        }

        return output
    }

    console.log(findWords(["leet", "code"], "x")); // []
    console.log(findWords(["abc","bcd","aaaa","cbc"], "a")); // [0,2]
    console.log(findWords(["abc","bcd","aaaa","cbc"], "z")); // []
    
};

FindWordsContainingCharacter();

module.exports = FindWordsContainingCharacter;

/*
Problem: 1189. Maximum Number of Balloons
- Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
- URL: https://leetcode.com/problems/maximum-number-of-balloons/description/
- Difficulty: Easy

Approach: 
- Create a dictionary to store the count of each character in the text

Complexity:
- Time: O(n) - We iterate through the text once
- Space: O(1) - The dictionary will have a maximum of 5 characters

Key Insights:
- We can use a dictionary to store the count of each character in the text
*/

const MaximumNumberofBalloons = () => {
    const maxNumberOfBallons = (text) => {
        const chars = {'b' : 0, 'a': 0, 'l': 0, 'o': 0, 'n': 0} // create a dictionary to store the count of each character

    for (const char of text){
        if (char in chars){
            chars[char]++
        } 
    }

    return Math.min(chars['b'], chars['a'], Math.floor((chars['l'] / 2)), Math.floor((chars['o'] / 2)), chars['n']) // return the minimum count of the characters
    
    }
    console.log(maxNumberOfBallons('nlaebolko'));
    console.log(maxNumberOfBallons('loonbalxballpoon'));
    console.log(maxNumberOfBallons('leetcode'));
};

MaximumNumberofBalloons();

module.exports = MaximumNumberofBalloons;

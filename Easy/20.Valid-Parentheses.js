/*
Problem: 20. Valid Parentheses
- Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
- URL: https://leetcode.com/problems/valid-parentheses/description/
- Difficulty: Easy

Approach: 
- The approach is to use a stack to keep track of the opening brackets.

Complexity:
- Time: 
- Space: 

Key Insights:
- the stack will keep track of the opening brackets
*/

const ValidParentheses = () => {
    const isValid = (s) => {
        const openingBrackets = {
            '{' : '}',
            '[' : ']',
            '(' : ')',
        }
      
        const closingBrackets = {
            '}' : '{',
            ']' : '[',
            ')' : '(',
        }

        const stack = [];

        for (let i = 0; i < s.length; i++) {
           const char = s[i];
           if(openingBrackets[char]) {
               stack.push(char);
           } else if (closingBrackets[char] === stack[stack.length - 1]) { // if the closing bracket matches the last opening bracket in the stack
            stack.pop();
            } else {
                return false;
            }
        } 

        return stack.length === 0; // if the stack is empty, then all brackets were matched
            
    }
    console.log(isValid('()')); // true
    console.log(isValid('()[]{}')); // true
    console.log(isValid('(]')); // false
    console.log(isValid('([)]')); // false
};

ValidParentheses();

module.exports = ValidParentheses;

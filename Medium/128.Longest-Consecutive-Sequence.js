/*
Problem: 128. Longest Consecutive Sequence
- Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
- URL: https://leetcode.com/problems/longest-consecutive-sequence/description/
- Difficulty: Medium

Approach: 
- The best way to solve this problem is to use a hash map to store the length of the sequence for each number.

Complexity:
- Time: O(n)
- Space: O(n)

Key Insights:
- We can use a hash map to store the length of the sequence for each number.
*/

const LongestConsecutiveSequence = () => {
    const longestConsecutive = (nums) => {
        const set = new Set(nums) // create a set from the array to make lookups O(1)
        let max = 0

        for (let i = 0; i < nums.length; i++) {

            
            if (!set.has(nums[i] - 1)) { // if the current number is the start of the sequence
                let currentNum = nums[i]
                let currentMax = 1

                while (set.has(currentNum + 1)) { // while the next number is in the set
                    currentNum++
                    currentMax++
                }

                max = Math.max(max, currentMax)
            }
        }

        return max

    }
    console.log(longestConsecutive([100, 4, 200, 1, 3, 2])) // 4
    console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])) // 9
};

LongestConsecutiveSequence();

module.exports = LongestConsecutiveSequence;

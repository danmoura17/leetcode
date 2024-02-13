/*
Problem: 1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
- URL: https://leetcode.com/problems/two-sum/description/
- Difficulty: Easy

Approach: 
 -To find the two numbers that add up to the target, we can use a hash map to store the difference between the target and the current number.

Complexity:
- Time: 
- Space: 

Key Insights:
- We can use a hash map to store the difference between the target and the current number.
*/

const TwoSum = () => {
    const twoSum = (nums, target) => {
        const map = new Map()

        for(let i = 0; i < nums.length ; i++){
            const complement = target - nums[i]
            if(map.has(complement)){
                return [map.get(complement), i]
            } else {
                map.set(nums[i], i)
            }
        }
    }
    console.log(twoSum([2,7,11,15], 9)) // [0,1]
    console.log(twoSum([3,2,4], 6)) // [1,2]
    console.log(twoSum([-1,-2,-3,-4,-5], -8)) // [2,4]
};

TwoSum();

module.exports = TwoSum;

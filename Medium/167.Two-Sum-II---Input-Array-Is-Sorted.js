/*
Problem: 167. Two Sum II - Input Array Is Sorted
- Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
- URL: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
- Difficulty: Medium

Approach: 
- Use two pointers to iterate through the array from the start and end

Complexity:
- Time: O(n)
- Space: O(1)

Key Insights:
- The array is sorted, so we can use two pointers to iterate through the array from the start and end
*/

const TwoSumIIInputArrayIsSorted = () => {
    const twoSum = (numbers, target) => {
        let left = 0
        let right = numbers.length - 1

        while (left < right){
            if (numbers[left] + numbers[right] === target) {
                return [left + 1, right + 1]
            } else if (numbers[left] + numbers[right] > target) {
                right--
            } else {
                left++
            }
        }
    }
    console.log(twoSum([2,7,11,15], 9)); // [1, 2]
    console.log(twoSum([2,3,4], 6)); // [1, 3]
    console.log(twoSum([-1,0], -1)); // [1, 2]
};

TwoSumIIInputArrayIsSorted();

module.exports = TwoSumIIInputArrayIsSorted;

/*
Problem: 704. Binary Search
- Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
- URL: https://leetcode.com/problems/binary-search/description/
- Difficulty: Easy

Approach: 
- The approach is to use a binary search algorithm to find the target in the sorted array.

Complexity:
- Time: O(log n) - the search space is halved each time
- Space: O(1) - we are not using any extra space

Key Insights:
- The search space is halved each time
*/

const BinarySearch = () => {
    const search = (nums, target) => {
        
        let left = 0;
        let right = nums.length - 1;

        while (left <= right){
            let mid = Math.floor((left + right) / 2);
            console.log(mid);
            if(nums[mid] === target){
                return mid;
            } else if (nums[mid] < target){
                left = mid + 1;
            } else {
                right = mid - 1;
            }

        }

        return -1;
        
    }
    console.log(search([-1,0,3,5,9,12], 9)); // 4
    console.log(search([-1,0,3,5,9,12], 2)); // -1
    console.log(search([5], 5)); // 0
};

BinarySearch();

module.exports = BinarySearch;

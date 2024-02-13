/*
Problem: Search Insert Position
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
- URL: https://leetcode.com/problems/search-insert-position/
- Difficulty: Easy

Approach: Binary Search
This solution uses a binary search algorithm to efficiently find the target value's insertion point in logarithmic time complexity. It narrows down the search by adjusting the 'left' and 'right' pointers based on the comparison with the target value.

Complexity:
- Time: O(log n), where n is the number of elements in the array. Binary search divides the search interval in half each time.
- Space: O(1), uses constant extra space.

Key Insights:
- The binary search is modified to return the left pointer when the target is not found, which corresponds to the correct insertion position.
*/

const SearchInsert = (nums, target) => {
    if (nums.length === 0) {
        return 0;
    }

    let left = 0;
    let right = nums.length - 1;

    const getIndex = (left, right) => {
        let mid = Math.floor((left + right) / 2);
        return mid;
    };

    while (left <= right) {
        let mid = getIndex(left, right);

        if (target === nums[mid]) {
            return mid;
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

console.log(SearchInsert([1, 3], 2)); // Expected output: 1

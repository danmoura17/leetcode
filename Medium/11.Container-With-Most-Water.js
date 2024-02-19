/*
Problem: 11. Container With Most Water
- Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
- n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
- Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
- URL: https://leetcode.com/problems/container-with-most-water/description/
- Difficulty: Medium

Approach: 
- Use two pointers to keep track of the current container.
- Use the smaller height to calculate the area.
- Move the pointer with the smaller height.
- Update the max area.


Complexity:
- Time: O(n)
- Space: O(1)

Key Insights:
- Use two pointers to keep track of the current container.
- Use the smaller height to calculate the area.
*/

const ContainerWithMostWater = () => {
   const maxArea = (height) => {
       let max = 0;
       let left = 0;
       let right = height.length - 1;
        
       while (left < right) {
        let currentArea = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(max, currentArea);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
       }
       return max;
   }

    console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
    console.log(maxArea([1,1])); // 1
    console.log(maxArea([4,3,2,1,4])); // 16
    console.log(maxArea([1,2,1])); // 2
};

ContainerWithMostWater();

module.exports = ContainerWithMostWater;

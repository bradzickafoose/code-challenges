/*
https://leetcode.com/problems/two-sum/

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Input: [2,7,11,15], 9
Output: [0,1]

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0,1]

*/

var twoSum = function(nums, target) {
  let indices = []

  for (var i = 0; i < nums.length; i++) {
      for (var j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              indices.push(i);
              indices.push(j);
          }
      }
  }

  return indices
};

module.exports = twoSum;
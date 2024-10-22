/*
https://leetcode.com/problems/contains-duplicate/

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example:
Input: [1,2,3,1]
Output: true

Example 2:
Input: [1,2,3,4]
Output: false

*/

var containsDuplicate = function(nums) {
  const cache = new Set()

  for (let i=0; i < nums.length; i++) {
    if (!cache.has(nums[i])) {
      cache.add(nums[i])
    } else {
      return true
    }
  }

  return false
};

module.exports = containsDuplicate;
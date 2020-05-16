const twoSum = require ('./two-sum');

describe("Two Sum - LeetCode", () => {
  it("should take an array and a target value and return the indices of the numbers that equal the target", () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
  });
});


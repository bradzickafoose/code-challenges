const containsDuplicate = require ('./contains-duplicate');

describe("Contains Duplicate - LeetCode", () => {
  it("should return true if any value appears at least twice in the array", () => {
    expect(containsDuplicate([1,2,3,1])).toEqual(true);
  });

  it("should return false if every element is distinct", () => {
    expect(containsDuplicate([1,2,3,4])).toEqual(false);
  });
});
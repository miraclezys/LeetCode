/* 
Two Sum

https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};

    for (let i=0; i<nums.length; i++) {
        if (map[target - nums[i]]) {
            return [map[target - nums[i]]-1, i];
        } else {
            map[nums[i]] = i + 1;
        }
    }
};

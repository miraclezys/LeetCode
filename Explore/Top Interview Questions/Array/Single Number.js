/* 
Single Number

https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {};
    let sum1 = 0;
    let sum2 = 0;

    for (let i=0; i<nums.length; i++) {
        if (!map[nums[i]]) {
            sum2 += nums[i];
            map[nums[i]] = 1;
        }

        sum1 += nums[i];
    }

    return sum2 * 2 - sum1;
};

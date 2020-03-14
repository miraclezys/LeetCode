/* 
300. Longest Increasing Subsequence

https://leetcode.com/problems/longest-increasing-subsequence/

Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let result = 0;
    let dp = [];

    for (let i=0; i <nums.length; i++) {
        dp[i] = 1;

        for (let j=0; j<i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], (dp[j] || 0) + 1);
            }
        }

        if (dp[i] > result) {
            result = dp[i]
        }
    }

    return result;
};

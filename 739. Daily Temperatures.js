/* 
739. Daily Temperatures

https://leetcode.com/problems/daily-temperatures/

Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
*/

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let result = [];
    let stack = [];

    for(let i=T.length - 1; i>=0; i--) {
        while(stack.length > 0 && T[stack[stack.length - 1]] <= T[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            result[i] = 0;
        } else {
            result[i] = stack[stack.length - 1] - i;
        }

        stack.push(i);
    }

    return result;
}

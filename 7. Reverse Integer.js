/* 
7. Reverse Integer

https://leetcode.com/problems/reverse-integer/

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let maxNum = Math.pow(2, 31) - 1;
    let minNum = -Math.pow(2, 31);
    
    let result = 0;
    
    while(x !== 0) {
        result = result * 10 + x % 10;
        x = parseInt(x / 10, 10);

        if (result < minNum || result > maxNum) {
            result = 0;
            return result;
        }
    }

    return result;
};

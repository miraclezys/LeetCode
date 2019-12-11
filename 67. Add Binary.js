/* 
67. Add Binary

https://leetcode.com/problems/add-binary/

Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = '';
    let ten = 0;
    let i=a.length-1, j = b.length-1;

    while(i >= 0 || j >= 0) {
        let temp = Number(a[i] || 0) + Number(b[j] || 0) + ten;

        ten = parseInt(temp / 2);

        result = '' + temp % 2 + result;

        i--;
        j--;
    }

    return ten ? ten + result : result;
};

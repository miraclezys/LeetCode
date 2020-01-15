/* 
Valid Palindrome

https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const newString = s.toLowerCase().replace(/[^A-Za-z0-9]/gi, '');
    let left = 0;
    let right = newString.length-1;

    while (left < right) {
        if (newString[left] !== newString[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

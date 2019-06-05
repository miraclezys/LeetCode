/* 
3. Longest Substring Without Repeating Characters

https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = 0;
    let index = 0;
    let map = new Map();

    for(let j=0; j<s.length; j++) {
        index = map.has(s[j]) && map.get(s[j]) > index ? map.get(s[j]) : index;

        if (j + 1 - index > result) {
            result = j + 1 - index;
        }

        map.set(s[j], j + 1);
    }

    return result;
};

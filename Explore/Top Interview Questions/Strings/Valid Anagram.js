/* 
Valid Anagram

https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let map = {};

    for (let i=0; i<s.length; i++) {
        map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
    }

    for (let i=0; i<s.length; i++) {
        if(!map[t[i]]) {
            return false;
        }

        map[t[i]]--;
    }

    return true;
};

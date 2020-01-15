/* 
First Unique Character in a String

https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};

    for (let i=0; i<s.length; i++) {
        map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
    };

    for (let i=0; i<s.length; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }

    return -1;
};

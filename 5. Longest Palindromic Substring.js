/* 
5. Longest Palindromic Substring

https://leetcode.com/problems/longest-palindromic-substring/

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
 */

/* Approach 4: Expand Around Center */

 /**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s;

    let start = 0;
    let end = 0;

    for(let i=0; i<s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i+1);

        let len = len1 >= len2 ? len1 : len2;
        if (len > end - start) {
            start = i - parseInt((len - 1) / 2, 10);
            end = i + parseInt(len / 2, 10);
        }
    }

    return s.slice(start, end + 1);
};

function expandAroundCenter (s, left, right) {
    let l = left;
    let r = right;

    while(l >= 0 && r < s.length && s[l] === s[r]) {
        l --;
        r ++;
    }

    return r - l - 1;
}

/* Approach 3: Dynamic Programming */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome2 = function(s) {
    let dp = [];
    let result = '';

    for(let i = 0; i < s.length; i++) {
        for(let j = i; j >= 0; j--) {
            if (!dp[i]) dp[i] = [];

            dp[i][j] = s[i] === s[j] && (i - j + 1 < 3 || dp[i-1][j+1]);

            if (dp[i][j] && (result.length === 0 || i - j + 1 > result.length)) {
                result = s.slice(j, i+1);
            }
        }
    }

    return result;
};

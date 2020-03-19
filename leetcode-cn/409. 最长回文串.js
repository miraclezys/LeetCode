/* 
409. 最长回文串

https://leetcode-cn.com/problems/longest-palindrome/

给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

注意:
假设字符串的长度不会超过 1010。

示例 1:

输入:
"abccccdd"

输出:
7

解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = {};
    let result = 0;

    for (let i=0; i<s.length; i++) {
        map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
    }

    Object.keys(map).forEach(item => {
        let charNum = map[item];

        result += parseInt(charNum / 2) * 2;

        if (result % 2 === 0 && charNum % 2 !== 0) {
            result += 1;
        }
    });

    return result;
};

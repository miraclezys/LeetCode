/* 
面试题58 - II. 左旋转字符串

https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/

解题思路：https://github.com/julycoding/The-Art-Of-Programming-By-July/blob/master/ebook/zh/01.01.md

字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

示例 1：

输入: s = "abcdefg", k = 2
输出: "cdefgab"
示例 2：

输入: s = "lrloseumgh", k = 6
输出: "umghlrlose"
 
限制：

1 <= k < s.length <= 10000
*/

// 解法一：暴力移位法
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    let strArr = [...s];

    while (n--) {
        let firstChar = strArr[0];
        
        for (let i=1; i<strArr.length; i++) {
            strArr[i-1] = strArr[i];
        }

        strArr[strArr.length-1] = firstChar;
    }

    return strArr.join('');
};

// 解法二：三步反转法

function ReverseString(s, from, to) {
    while (from < to) {
        let tempChar = s[from];
        s[from++] = s[to];
        s[to--] = tempChar;
    }
}

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWordsTwo = function(s, n) {
    let strArr = [...s];

    ReverseString(strArr, 0, n-1);
    ReverseString(strArr, n, s.length-1);
    ReverseString(strArr, 0, s.length);

    return strArr.join('');
};

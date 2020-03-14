/* 
面试题03. 数组中重复的数字

https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/

找出数组中重复的数字。


在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：

输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
 

限制：

2 <= n <= 100000
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    for (let i=0; i<nums.length; i++) {
        while(nums[i] !== i) {
            if (nums[i] === nums[nums[i]]) {
                return nums[i];
            } else {
                let temp = nums[i];
                nums[i] = nums[temp];
                nums[temp] = temp;
            }
        }
    }
};


var findRepeatNumber2 = function(nums) {
    for(let i=0; i<nums.length; i++) {
        let t = nums[i];
        
        if (t !== i) {
            if (nums[t] == t) {
                return t;
            } else {
                nums[t] = t;
                nums[i] = nums[t];
            }
        }
    }
};

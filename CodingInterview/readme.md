# 《剑指offer》相关题目

## 数组

### 003-数组中重复的数字

题目：[面试题03. 数组中重复的数字](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/)

* 方法一：对数组进行排序，然后对排序的数组从头扫到尾。排序一个长度为n的数组需要O(nlogn)时间
* 方法二：使用哈希表记录数字。时间复杂度：O(n)，但是需要O(n)大小的哈希表
* 方法三：因为数组的范围都在0~n-1，如果数组中没有重复的数字，那么数组排序后，数字i会出现在下标i的位置。由于数组中有重复的数字，有些位置可能存在多个数字，下面具体讲讲这个做法，时间复杂度是O(n)，空间复杂度是O(1)

比如数组是[2, 3, 1, 0, 2, 5, 3]:

1. 数组的第0位是2，与下标不符，将它与下标为2的数字1进行交换，此时数组为：[1, 3, 2, 0, 2, 5, 3]
2. 此时，数组的第0位是1，与下标不符，将它与下标为1的数字3进行交换，此时数组为：[3, 1, 2, 0, 2, 5, 3]
3. 此时，数组的第0位是3，与下标不符，将它与下标为3的数字0进行交换，此时数组为：[0, 1, 2, 3, 2, 5, 3]
4. 此时，数组的第0我是0，与下标相符，继续向下扫描。
5. 直到数组的第4位是2，与下标不符。将它与下标为2的数字2进行比较，发现数组相同，从而找到重复的数字

代码中虽然有两重循环，但是每个数字最多交换两次就能找到属于自己的位置，所以时间复杂度是O(n)。因为没有额外分配内存，所以空间复杂度是O(1)

``` js
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
```
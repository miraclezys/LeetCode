/* 
面试题3（一）：找出数组中重复的数字
题目：在一个长度为n的数组里的所有数字都在0到n-1的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，
也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。例如，如果输入长度为7的数组{2, 3, 1, 0, 2, 5, 3}，
那么对应的输出是重复的数字2或者3。

参数:
       numbers:     一个整数数组
       length:      数组的长度
       duplication: (输出) 数组中的一个重复的数字
返回值:             
       true  - 输入有效，并且数组中存在重复的数字
       false - 输入无效，或者数组中没有重复的数字
*/

function duplicate(numbers, duplication)
{
    if (!numbers || numbers.length <= 0) {
        return false;
    }

    for (let i=0; i<numbers.length; i++) {
        while(i !== numbers[i]) {
            if (numbers[i] === numbers[numbers[i]]) {
                duplication[0] = numbers[i];
                return true;
            }

            let temp = numbers[i];
            numbers[i] = numbers[numbers[i]];
            numbers[temp] = temp; 
        }
    }

    return false;
}

/* 
面试题3（二）：不修改数组找出重复的数字
题目：在一个长度为n+1的数组里的所有数字都在1到n的范围内，所以数组中至
少有一个数字是重复的。请找出数组中任意一个重复的数字，但不能修改输入的
数组。例如，如果输入长度为8的数组{2, 3, 5, 4, 3, 2, 6, 7}，那么对应的
输出是重复的数字2或者3。

参数:
       numbers:     一个整数数组
       length:      数组的长度
返回值:             
       正数  - 输入有效，并且数组中存在重复的数字，返回值为重复的数字
       负数  - 输入无效，或者数组中没有重复的数字
*/
function duplicate2(numbers, len) {
    if (!numbers || numbers.length <= 0) {
        return -1;
    }

    let start = 1;
    let end = numbers.length - 1;

    while (start <= end) {
        let middle = parseInt((start + end) / 2);
        let count = countRange(numbers, start, middle);

        if (start === end) {
            if (count > 1) {
                return start;
            }

            break;
        }

        if (count > (middle - start + 1)) {
            end = middle;
        } else {
            start = middle + 1;
        }
    }
    
    return -1;
}

function countRange(numbers, start, end) {
    let count = 0;

    for(let i=0; i<numbers.length; i++) {
        if (numbers[i] >= start && numbers[i] <= end) {
            count += 1;
        }
    }

    return count;
}

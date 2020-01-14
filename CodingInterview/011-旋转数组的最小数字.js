/* 
面试题11：旋转数组的最小数字
题目：把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如数组
{3, 4, 5, 1, 2}为{1, 2, 3, 4, 5}的一个旋转，该数组的最小值为1。
*/

function Min(numbers) {
    if(!numbers || !numbers.length) {
        return;
    }

    let indexOne = 0;
    let indexTwo = numbers.length - 1;
    
    while(numbers[indexOne] >= numbers[indexTwo]) {
        if (indexTwo - indexOne === 1) {
            break;
        }

        let indexMid = parseInt((indexOne + indexTwo) / 2);

        // 如果indexOne、indexMid、indexTwo指向的数字相同
        // 只能按顺序查找结果
        if (numbers[indexMid] === numbers[indexOne] && numbers[indexMid] === numbers[indexTwo]) {
            return MinInOrder(numbers, indexOne, indexTwo);
        }

        if (numbers[indexMid] >= numbers[indexOne]) {
            indexOne = indexMid;
        } else {
            indexTwo = indexMid;
        }
    }

    return numbers[indexTwo];
}

function MinInOrder(numbers, index1, index2) {
    let result = numbers[index1];

    for (let i=0; i<=index2; i++) {
        if (result > numbers[i]) {
            result = numbers[i]
        }
    }

    return result;
}

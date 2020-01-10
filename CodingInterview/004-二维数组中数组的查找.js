/* 
面试题4：二维数组中的查找
题目：在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按
照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个
整数，判断数组中是否含有该整数。
*/

function find(numbers, rows, columns, number) {
    if (!numbers) {
        return false;
    }

    let col = columns -1;
    let row = 0;

    let result = false;

    while (row < rows && col >= 0) {
        if (numbers[row][col] === number) {
            result = true;
            break;
        } else if (numbers[row][col] > number) {
            col -= 1
        } else {
            row += 1;
        }
    }

    return result;
}

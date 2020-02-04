/* 
面试题13：机器人的运动范围
题目：地上有一个m行n列的方格。一个机器人从坐标(0, 0)的格子开始移动，它
每一次可以向左、右、上、下移动一格，但不能进入行坐标和列坐标的数位之和
大于k的格子。例如，当k为18时，机器人能够进入方格(35, 37)，因为3+5+3+7=18。
但它不能进入方格(35, 38)，因为3+5+3+8=19。请问该机器人能够到达多少个格子？
*/

function movingCount(threshold, rows, cols) {
    if (threshold < 0 || rows <= 0 || cols <= 0) {
        return 0;
    }

    let visted = [];

    for (let i=0; i<rows; i++) {
        visted[i] = [];
    }

    return movingCountCore(threshold, rows, cols, 0, 0, visted);
}

function movingCountCore(threshold, rows, cols, row, col, visted) {
    let count = 0;

    if (row >= 0 && row < rows 
        && col >= 0 && col < cols 
        && getDightSum(row) + getDightSum(col) <= threshold 
        && !visted[row][col]) {
        visted[row][col] = true;

        count = 1 + movingCountCore(threshold, rows, cols, row-1, col, visted)
        + movingCountCore(threshold, rows, cols, row, col-1, visted)
        + movingCountCore(threshold, rows, cols, row+1, col, visted)
        + movingCountCore(threshold, rows, cols, row, col+1, visted);
    }

    return count;
}

function getDightSum(number) {
    let sum = 0;

    while(number > 0) {
        sum += sum * 10 + number % 10;
        number = parseInt(number / 10);
    }

    return sum;
}

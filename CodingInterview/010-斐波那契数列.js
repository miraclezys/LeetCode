/* 
面试题10：斐波那契数列
题目：写一个函数，输入n，求斐波那契（Fibonacci）数列的第n项。
*/

/* 
递归
*/

function Fibonacci_Solution1(n) {
    if (n <= 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return Fibonacci_Solution1(n-1) + Fibonacci_Solution1(n-2);
}

/* 
循环
*/

function Fibonacci_Solution2(n) {
    if (n <= 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    let result = 0;
    let numOne = 0;
    let numTwo = 1;

    for (let i=2; i<=n; i++) {
        result = numOne + numTwo;
        numOne = numTwo;
        numTwo = result;
    }

    return result;
}
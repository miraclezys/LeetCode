/* 
面试题15：二进制中1的个数
题目：请实现一个函数，输入一个整数，输出该数二进制表示中1的个数。例如
把9表示成二进制是1001，有2位是1。因此如果输入9，该函数输出2。
*/

function NumberOfSolution1(n) {
    let count = 0;
    let flag = 1;

    while(flag) {
        if (n & flag) {
            count += 1;
        }

        flag = flag << 1;
    }

    return count;
}

function NumberOfSolution2(n) {
    let count = 0;

    while(n) {
        count += 1;
        n = (n - 1) & n;
    }

    return count;
}

/* 
面试题17：打印1到最大的n位数
题目：输入数字n，按顺序打印出从1最大的n位十进制数。比如输入3，则
打印出1、2、3一直到最大的3位数即999。
*/

// ====================公共函数====================
// 字符串number表示一个数字，数字有若干个0开头
// 打印出这个数字，并忽略开头的0
function PrintNumber(number) {
    let isBeginningZero = true;

    let result = '';

    for (let i=0; i<number.length; i++) {
        if (isBeginningZero && number[i] !== 0) {
            isBeginningZero = false;
        }

        if (!isBeginningZero) {
            result += number[i];
        }
    }

    console.log(result);
}

// 方法一
function Print1ToMaxOfNDigits_1(n) {
    if (n <= 0) {
        return;
    }

    let number = [];

    for (let i=0; i<n; i++) {
        number[i] = 0;
    }

    while(!Increment(number)) {
        PrintNumber(number)
    }
}

// 字符串number表示一个数字，在 number上增加1
// 如果做加法溢出，则返回true；否则为false
function Increment(number) {
    let ten = 1;

    for (let i=number.length-1; i>=0; i--) {
        let sum = number[i] + ten;

        if (i === 0 && number[i] === 9 && sum >= 10) {
            return true;
        } else {
            number[i] = sum % 10;
            ten = parseInt(sum / 10);
        }
    }

    return false;
}


// 方法二
function Print1ToMaxOfNDigits_2(n) {
    if (n <= 0) {
        return;
    }

    let number = [];

    for (let i=0; i<n; i++) {
        number[i] = 0;
        Print1ToMaxOfNDigitsRecursively(number, 0);
    }
}

function Print1ToMaxOfNDigitsRecursively(number, index) {
    if (index >= number.length) {
        PrintNumber(number);
        return;
    }

    for (let i=0; i<10; i++) {
        number[index] = i;
        Print1ToMaxOfNDigitsRecursively(number, index + 1);
    }
}

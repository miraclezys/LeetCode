/* 
面试题16：数值的整数次方
题目：实现函数double Power(double base, int exponent)，求base的exponent
次方。不得使用库函数，同时不需要考虑大数问题。
*/

function Power(base, exponent) {
    if (base === 0 && exponent < 0) {
        return 0;
    }

    let absExponent = exponent < 0 ? -exponent : exponent;

    let result = PowerWithUnsignedExponent(base, absExponent);

    if (exponent < 0) {
        result = 1 / result;
    }

    return result;
}

function PowerWithUnsignedExponent(base, exponent) {
    if (exponent === 0) {
        return 1;
    }

    if (exponent === 1) {
        return base;
    }

    let result = PowerWithUnsignedExponent(base, exponent >> 1);
    result *= result;

    if ((exponent & 1) === 1) {
        result *= base;
    }

    return result;
}

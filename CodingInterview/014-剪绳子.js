/* 
面试题14：剪绳子
题目：给你一根长度为n绳子，请把绳子剪成m段（m、n都是整数，n>1并且m≥1）。
每段的绳子的长度记为k[0]、k[1]、……、k[m]。k[0]*k[1]*…*k[m]可能的最大乘
积是多少？例如当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此
时得到最大的乘积18。
*/

// 动态规划
function maxProductAfterCutting(length) {
    if (length < 2) {
        return 0;
    } else if (length === 2) {
        return 1;
    } else if (length === 3) {
        return 2;
    }

    let products = [0, 1, 2, 3];

    for (let i=4; i<=length; i++) {
        let max = 0;
        for (let j=1; j<=i/2; j++) {
            let product = product[j] * product[i-j];

            if (max < product) {
                max = product;
            }

            products[i] = max;
        }
    }

    return products[length];
}

// 贪婪算法
function maxProductAfterCutting2(length) {
    if (length < 2) {
        return 0;
    } else if (length === 2) {
        return 1;
    } else if (length === 3) {
        return 2;
    }

    // 尽可能多地减去长度为3的绳子段
    let timesOf3 = parseInt(length / 3);

    // 当绳子最后剩下的长度为4的时候，不能再剪去长度为3的绳子段。
    // 此时更好的方法是把绳子剪成长度为2的两段，因为2*2 > 3*1。
    if (length - timesOf3 * 3 === 1) {
        timesOf3 -= 1;
    }

    let timesOf2 = parseInt((length - timesOf3 * 3) / 2);

    return Math.pow(3, timesOf3) * Math.pow(2, timesOf2);
}

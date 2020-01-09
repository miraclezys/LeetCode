/* 
题目一：找出数组中重复的数字
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

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var len = 0;
    var temp = 0;
    for(let i=0; i<nums.length; i++) {
      if(nums[i] === 1) {
        temp++;
      }
      else {
        if(temp > len) {
          len = temp;
        }
        temp = 0;
      }
    }

    if(temp > len) {
      len = temp;
    }
    return len;
};

console.log(findMaxConsecutiveOnes([1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1]));
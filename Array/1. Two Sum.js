/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var result = [];
  for(let i=0; i<nums.length; i++) {
    for(let j=i+1; j<nums.length; j++) {
      let temp = nums[i] + nums[j];
      if(temp == target) {
        result.push(i);
        result.push(j);
        return result;
      }
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
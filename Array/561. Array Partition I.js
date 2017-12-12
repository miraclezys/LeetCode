/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums.sort(compare);
  var result = 0;
  for(let i=0; i<nums.length; i+=2) {
    result += nums[i];
  }
  return result;
};

function compare(a, b) {
  if(a < b) {
    return -1;
  }
  else {
    return 1;
  }
}

console.log(arrayPairSum([11, 41, -9046, 2047, 1118, 8477, 8446, 279, 4925, 7380, -1719, 3855]));
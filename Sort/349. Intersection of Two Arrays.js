/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr1 = {};
    for(let i=0; i<nums1.length; i++) {
      if(arr1[nums1[i]]) {
        arr1[nums1[i]]++;
      }
      else {
        arr1[nums1[i]] = 1;
      }
    }

    let inter = [];

    for(let i=0; i<nums2.length; i++) {
      if(arr1[nums2[i]] && arr1[nums2[i]] > 0) {
        inter.push(nums2[i]);
        arr1[nums2[i]] = 0;
      }
    }

    return inter;
};

console.log(intersection([2, 2], [2, 2]));
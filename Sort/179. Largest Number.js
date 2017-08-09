/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  let temp = 0;
  for(let i=0; i<nums.length; i++) {
    if(nums[i] != 0) {
      temp = 1;
    }
    nums[i] = nums[i].toString();
  }
  
  if(temp == 0) {
    return '0';
  }
  else {
    var arr = quickSort(nums, 0, nums.length-1);
    return arr.join('');
  } 
};

function compare(a, b) {
  return (a + b) > (b + a);
}

function quickSort(arr, l, r) {
  if(l < r) {
    let i = l, j = r, num = arr[l];
    while(i < j) {
      while(i < j && !compare(arr[j], num)) {
        j--;
      }
      if(i < j) {
        arr[i] = arr[j];
        i++;
      }
      while(i < j && compare(arr[i], num)) {
        i++;
      }
      if(i < j) {
        arr[j] = arr[i];
        j--;
      }
    }
    arr[i] = num;

    quickSort(arr, l, i-1);
    quickSort(arr, i+1, r);
  }
  return arr;
}

function insertSort(arr) {
  for(let i=1; i<arr.length; i++) {
    if(arr[i-1] > arr[i]) {
      let temp = arr[i];
      let j;
      for(j=i-1; j>=0 && arr[j]>temp; j--) {
        arr[j+1] = arr[j];
      }
      arr[j+1] = temp;
    }
  }
  return arr;
}

function selectSort(arr) {
  for(let i=0; i<arr.length; i++) {
    let min = i;
    for(let j=i+1; j<arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

console.log(selectSort([1, 0, 9, 7, 4, 7, 9, 8], 0, 7));
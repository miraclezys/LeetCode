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

function mergeArray(arr1, arr2) {
  let arr = [];
  while(arr1.length > 0 && arr2.length > 0) {
    if(arr1[0] < arr2[0]) {
      arr.push(arr1.shift());
    }
    else {
      arr.push(arr2.shift());
    }
  }

  return arr.concat(arr1, arr2);
}

function mergeSort(arr) {
  let len = arr.length;
  if(len > 1) {
    let min = parseInt(len / 2);
    let arr1 = arr.slice(0, min);
    let arr2 = arr.slice(min);
    return mergeArray(mergeSort(arr1), mergeSort(arr2));
  }
  return arr;
}

function shellSort(arr) {
  let n = arr.length;
  for(let gap = parseInt(n / 2); gap > 0; gap = parseInt(gap / 2)) {
    for(let i=0; i<gap; i++) {
      for(let j=i+gap; j<n; j+=gap) {
        if(arr[j] < arr[j-gap]) {
          let temp = arr[j];
          let k = j - gap;
          while(k >=0 && arr[k] > temp) {
            arr[k+gap] = arr[k];
            k -= gap;
          }
          arr[k+gap] = temp;
        }
      }
    }
  }
  return arr;
}

console.log(shellSort([1, 0, 9, 7, 4, 7, 9, 8]));
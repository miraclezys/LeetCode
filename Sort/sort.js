// 插入排序
function insertSort(arr) {
  for(let i=1; i<arr.length; i++) {
    if(arr[i] < arr[i-1]) {
      let index = i;
      let value = arr[i];
      
      while(arr[index - 1] > value && index > 0) {
        arr[index] = arr[index - 1];
        index -= 1;
      }
      arr[index] = value;
    }
  }
  return arr;
}

// 快速排序
function quickSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  let value = arr.splice(0, 1)[0];
  let leftArr = [];
  let rightArr = [];
  for(let i=0; i<arr.length; i++) {
    if(arr[i] <= value) {
      leftArr.push(arr[i]);
    }
    else {
      rightArr.push(arr[i]);
    }
  }
  return quickSort(leftArr).concat([value], quickSort(rightArr));
}

// 冒泡排序
function bubbleSort(arr) {
  for(let i=0; i<arr.length; i++) {
    for(let j=1; j<arr.length-i; j++) {
      if(arr[j] < arr[j-1]) {
        let temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// 选择排序
function selectSort(arr) {
  for(let i=0; i<arr.length; i++) {
    let min = i;
    for(let j=i+1; j<arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

// 归并排序
function mergeArray(arr1, arr2) {
  let arr = [];
  while(arr1.length > 0 && arr2.length > 0) {
    if(arr1[0] <= arr2[0]) {
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

// 希尔排序
function shellSort(arr) {
  for(let gap=parseInt(arr.length/2); gap>0; gap=parseInt(gap/2)) {
    for(let i=0; i<gap; i++) {
      for(let j=i+gap; j<arr.length; j+=gap) {
        if(arr[j] < arr[j-gap]) {
          let index = j;
          let value = arr[j];
          while(arr[index - gap] > value && index > 0) {
            arr[index] = arr[index - gap];
            index -= gap;
          }
          arr[index] = value;
        }
      }
    }
  }
  return arr;
}


console.log(insertSort([1, 2, 4, 3]));
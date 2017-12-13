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

console.log(bubbleSort([2, 4, 0, -8, 7, 5, 4, 9, -1]));
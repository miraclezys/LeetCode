# 算法

##  堆排序

* 二叉堆

  * 父结点的键值总是大于或等于（小于或等于）任何一个子结点的键值
  * 每个结点的左右子树都是一个二叉堆

* 最大堆

  父结点的键值总是大于或等于任何一个子结点的键值

* 最小堆

  父结点的键值总是小于或等于任何一个子结点的键值

* 堆的存储

  * `i`结点的父结点下标为`(i - 1) / 2`
  * `i`结点的左右子结点小标分别为`i * 2 + 1`和`i * 2 + 2`

* 堆的删除

  堆中每次删除只能删除第0个结点。堆的第0个操作实际上是堆的最后一个节点赋值给第0个结点，然后从第0个结点开始自上而下调整。调整时需满足父结点比最小的子节点小，即首先找出最小的子结点，然后入父结点比较，若父结点比该子结点小，调整结束，否则，父结点与该子结点位置互换，继续向下调整。

* 构造初始堆

  保证父结点到根结点必然为一个有序序列。

  从最后一个非叶子结点开始，做向下调整，使得该结点往下满足一个有序序列

* 堆排序

  构建完初始堆后，我们可以发现堆的第0个数据就是堆中的最小数据，我们可以执行堆的删除。即将根结点与最后一个结点进行交换，重新恢复堆取出根结点，再将根节点与倒数第二个结点交换，以此类推。

```javascript
function heapAdjust(arr, pos, len) {
  let temp = arr[pos];
  let j = 2 * pos + 1;
  while(j < len) {
    if((j + 1) < len && arr[j] < arr[j+1]) {
      j += 1;
    }

    if(arr[j] <= temp) {
      break;
    }

    arr[pos] = arr[j];
    pos = j;
    j = pos * 2 + 1;
  }
  arr[pos] = temp;
}

function heapSort(arr) {
  for(let i=parseInt(arr.length/2); i>=0; i--) {
    heapAdjust(arr, i, arr.length);
  }
  for(let i=arr.length-1; i>0; i--) {
    let temp = arr[i];
    arr[i] = arr[0];
    arr[0] = temp;
    heapAdjust(arr, 0, i);
  }
  return arr;
}
```



## 插入排序

插入排序的思想就是将一个待排序的数插入一个已排好序的序列中，直到全部记录插入完成。

```javascript
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
```



## 选择排序

选择排序的思想是将无序区选择最小的元素形成有序区，接着每次从无序区找出最小的元素放入有序区的最后，以此类推，直到全部记录插入完毕。

```javascript
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
```


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



## 快速排序

快速排序的思想：

1. 从数列中找出一个数作为基准数
2. 把数列中比该基准数大的数放在该数的右边，比比基准数小的数放在该数的左边
3. 再对左右区间重复第二步，直到各区间只有一个数

```javascript
function quickSort(arr, l, r) {
  if(l < r) {
    let i = l, j = r, num = arr[l];
    while(i < j) {
      while(i < j && arr[j] > num) {
        j -= 1;
      }
      if(i < j) {
        arr[i] = arr[j];
        i += 1;
      }
      while(i < j && arr[i] < num) {
        i += 1;
      }
      if(i < j) {
        arr[j] = arr[i];
        j -= 1;
      }
    }
    arr[i] = num;
    quickSort(arr, l, i-1);
    quickSort(arr, i+1, r);
  }
  return arr;
}
```



## 冒泡排序

冒泡排序的思想：

1. 比较相邻两个数的大小，如果前面的数大于后面的数，两个数位置交换
2. 这样对数组第0个数据到数据第N-1个数据进行一次遍历后，数组最后的一个数据就是该数组最大的数据
3. 即每次遍历后，最大的数就在数组的最后

```javascript
function bubbleSort(arr) {
  for(let i=0; i<arr.length; i++) {
    for(let j=1; j<arr.length -i; j++) {
      if(arr[j-1] > arr[j]) {
        let temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
```

优化，当flag标志位的值为0未被赋值时，说明数组已排序完毕

```javascript
function bubbleSort2(arr) {
  let flag = arr.length;
  while(flag) {
    let k = flag;
    flag = 0;
    for(let i=1; i<k; i++) {
      if(arr[i-1] > arr[i]) {
        let temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
        flag = i;
      }
    }
  }
  return arr;
}
```



## 归并排序

归并排序采用的是分治的思想。

如何将两个有序序列合并？

分别比较两个序列中的第一个数，谁小先取谁，然后在原数组中删除该数，再进行同样的比较，直到其中一个数组为空，那么将另一个数组剩下的数取出。

那么如果需要对一个数组排序，首先将数组分成两组，以此类推，直到分出来的小组只有一个数据时，我们认为该小组已经有序了，然后我们就将相邻两个有序小组合并。

思想：首先递归的进行分组，然后合并序列

```javascript
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
```



## 希尔排序

希尔排序的思想是将带排序序列分割成若干子序列分别进行插入排序，然后依次将子序列每组数量增大进行排序，当子序列的长度为原本序列的长度（增量为1），即对全体进行一次插入排序。因为直接插入排序在元素基本有序时效率是很高的，所以希尔排序在时间效率上较好

```javascript
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
```



## 前序，中序，后序

* 前序： 根结点 -> 左子树 -> 右子树

* 中序：左子树 -> 根结点 -> 右子树

* 后序： 左子树 -> 右子树 -> 根结点

  ​

例子：

![](./image/img1.png)

前序结果： GDAFEMHZ

中序结果： ADEFGHMZ

后序结果： AEFDHZMG

考点：知道前序和中序的结果，求后序？

代码参考：Exam -> preOrder.js
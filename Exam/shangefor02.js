var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});

var n = -1;// 初始状态为负数，表示还没开始读取
var num = '';
rl.on('line', function(line){ // javascript每行数据的回调接口
  if (n < 0) { // 测试用例第一行读取n
    num = line.trim();
    n = 1;
  }
    
  // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
  if (n > 0) {
    // 输出结果
    // console.log(num);
    var sum = 0;
    var result = true;
    var arr = [];
    for(var i=1; i<=65535; i++) {
      arr[i] = 0;
    }
    var numItems = num.split(',');
    for(var i=0; i<numItems.length; i++) {
      if(numItems[i].indexOf('-') != '-1') {
        var temp = numItems[i].split('-');
        temp[0] = parseInt(temp[0]);
        temp[1] = parseInt(temp[1]);
        if(temp[0] > temp[1]) {
          result = false;
          break;
        }
        else if(temp[0] < 1 || temp[0] > 65535) {
          result = false;
          break;
        }
        else if(temp[1] < 1 || temp[1] > 65535) {
          result = false;
          break;
        }
        else if((temp[1] - temp[0] + 1) > 1024) {
          result = false;
          break;
        }
        else {
          for(var j=temp[0]; j<=temp[1]; j++) {
            arr[j] = 1;
          }
        }
      }
      else {
        numItems[i] = parseInt(numItems[i]);
        if(numItems[i] < 1 || numItems[i] > 65535) {
          result = false;
          break;
        }

        arr[numItems[i]] = 1;
      }
    }

    if(result == true) {
      for(var k=1; k<=65535; k++) {
        sum += arr[k];
      }
      console.log(sum);
      if(sum > 1024) {
        console.log(false);
      }
      else {
        console.log(true);
      }
    }
    else {
      console.log(false);
    }
    // 重新初始化相关变量
    n = -1;
  }
});
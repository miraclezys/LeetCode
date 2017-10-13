var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});

var n = -1;// 初始状态为负数，表示还没开始读取
var ans = 0;
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
    var numItems = num.split(' ');
    if(numItems[1] == 'bps') {
      console.log(numItems[0]);
    }
    else if(numItems[1] == 'Kbps') {
      console.log(parseFloat(numItems[0]) * 1000);
    }
    else if(numItems[1] == 'Mbps') {
      console.log(parseFloat(numItems[0]) * 1000 * 1000);
    }
    else if(numItems[1] == 'Gbps') {
      console.log(parseFloat(numItems[0]) * 1000 * 1000 * 1000);
    }
    else if(numItems[1] == 'Tbps') {
      console.log(parseFloat(numItems[0]) * 1000 * 1000 * 1000 * 1000);
    }
    // 重新初始化相关变量
    n = -1;
    ans = 0;
  }
});
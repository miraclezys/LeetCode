var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});

var n = -1;
var m = 0;
var str = '';
rl.on('line', function(line){ // javascript每行数据的回调接口
  if (n < 0) { // 测试用例第一行读取n
    m = parseInt(line.split(' ')[1]);
  }
    
  // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
  if (n > 0) {
    // 输出结果
    // console.log(num);
    str = line;
    var aMax = 0;
    var bMax = 0;
    for(var i=0; i<str.length; i++) {
      if(str[i] == 'a') {
        var temp = 1;
        var num = 0;
        for(var j=i+1; j<str.length && num<=m; j++) {
          if(str[j] != 'a') {
            num +=1;
          }
          if(num <= m) {
            temp += 1;
          }
          else {
            break;
          }
        }
        if(temp > aMax) {
          aMax = temp;
        }
        if(temp == str.length -i) {
          break;
        }
      }
      else {
        temp = 1;
        num = 0;
        for(j=i+1; j<str.length && num<=m; j++) {
          if(str[j] != 'b') {
            num +=1;
          }
          if(num <= m) {
            temp += 1;
          }
          else {
            break;
          }
        }
        if(temp > bMax) {
          bMax = temp;
        }
        if(temp == str.length -i) {
          break;
        }
      }
    }
    
    var max = 0;
    if(aMax > bMax) {
      max = aMax;
    }
    else {
      max = bMax;
    }
    console.log(max);
  }
  n = 1;
});
process.stdin.resume();
process.stdin.setEncoding('ascii');

var n = 0;
var i = 0;
var arr = [];
var temp = 0;

process.stdin.on('data', function (data) {
  if(temp == 0) {
    n = data.toString().slice(0, -2);
    temp = 1;
  }
  else {
    arr[i] = data.toString().slice(0, -2);
    i += 1;
  }
  if(i == n) {
    process.stdin.emit('end');
  }
});

process.stdin.on('end', function () {
  for(var i=0; i<arr.length; i++) {
    if(arr[i].length != 11) {
      process.stdout.write('-1\n');
    }
    else {
      var reg1 = new RegExp(/^((133)|(153)|(180)|(181)|(189))\d{8}$/);
      var reg2 = new RegExp(/^(130|131|155|185|186)\d{8}$/);
      var reg3 = new RegExp(/^((135)|(136)|(150)|(182)|(188))\d{8}$/);
      if(reg1.test(arr[i])) {
        process.stdout.write('China Telecom\n');
      }
      else if(reg2.test(arr[i])) {
        process.stdout.write('China Unicom\n');
      }
      else if(reg3.test(arr[i])) {
        process.stdout.write('China Mobile Communications\n');
      }
      else {
        process.stdout.write('-1\n');
      }
    }
  }
});

process.stdin.resume();
process.stdin.setEncoding('ascii');

var n = -1;
var m = 0;
var str = '';

process.stdin.on('data', function (data) {
  if(n < 0) {
    n = 1;
    m = parseInt(data.split(' ')[1]);
  }
  else {
    str = data;
    process.stdin.emit('end');
  }
});

process.stdin.on('end', function () {
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
      }
      if(temp > aMax) {
        aMax = temp;
      }
    }
  }
  
  for(i=0; i<str.length; i++) {
    if(str[i] == 'b') {
      temp = 1;
      num = 0;
      for(j=i+1; j<str.length && num<=m; j++) {
        if(str[j] != 'b') {
          num +=1;
        }
        if(num <= m) {
          temp += 1;
        }
      }
      if(temp > bMax) {
        bMax = temp;
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
});
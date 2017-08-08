/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s == t) return true;
    if(s.length != t.length) return false;
    var arr1 = {};
    for(let i=0; i<s.length; i++) {
      if(!arr1[s[i]]) {
        arr1[s[i]] = 1;
      }
      else {
        arr1[s[i]] += 1;
      }
    }

    for(let i=0; i<t.length; i++) {
      if(arr1[t[i]]) {
        arr1[t[i]]--;
      }
      else {
        return false;
      }
      
      if(arr1[t[i]] < 0) {
        return false;
      }
    }
    return true;
};

console.log(isAnagram('ab', 'bc'));
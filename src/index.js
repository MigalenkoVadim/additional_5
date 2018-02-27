module.exports = function check(str, bracketsConfig) {
  var strArray = str.split("");
  var config  = bracketsConfig;
  var arr = [];
  while (strArray.length > 0) {
  for (var i = 0; i < config.length; i++) {
      var brackets = config[i];
    if (brackets[0] == brackets[1] && brackets[1] == strArray[0]) {
        if (brackets[0] == arr[arr.length-1]) {
            arr.pop();
            strArray.shift();
        } else if (brackets[0] !== arr[arr.length-1]) {
            arr.push(strArray[0]);
            strArray.shift();
        }
    } else if (brackets[1] == strArray[0]) {
      if (brackets[0] == arr[arr.length-1]) {
        arr.pop();
        strArray.shift();
      } else return false;
    } else if (brackets[0] == strArray[0]) {
      arr.push(strArray[0]);
      strArray.shift();
    }
  }
}
if (arr.length == 0 && strArray.length == 0) {
    return true
} else return false;
}

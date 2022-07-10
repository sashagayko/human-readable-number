module.exports = function toReadable (number) {
    let num = number + '';
    let arr1 =['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arr3 =['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let char1 = num.length-1;
  let char2 = num.length-2;
  let char3 = num.length-3;
  let firstNum;
  let secondNum;
  let newStr;
  let thirdNum;
  if (+num <= 9) {
    firstNum = num[char1];
    return arr1[firstNum];
  } else if (+num <= 19) {
    secondNum = num[char1];
    return arr2[secondNum]
   } else if (+num <= 99) {
     if (num[char1] == '0') {
       secondNum = num[char2] -2;
       return arr3[secondNum];
     }
     firstNum = num[char2]-2;
     secondNum = num[char1];
     return arr3[firstNum]+' '+arr1[secondNum];
   } else {
     if (num[char1] == '0' && num[char2] == '0') {
       firstNum = num[0];
       return arr1[firstNum]+ ' hundred';
     }
     if (num[char2] +num[char1] == '10') {
        firstNum = num[char3];
        secondNum = num[char1];
        return arr1[firstNum]+ ' hundred ' + arr2[secondNum]
      }
     if (num[char2] == '0') {
       firstNum = num[char3];
       secondNum = num[char1];
       return arr1[firstNum]+ ' hundred ' + arr1[secondNum];
     }
     if (num[char1] == '0') {
        firstNum = num[char3];
        secondNum = num[char2]-2;
        return arr1[firstNum]+ ' hundred ' + arr3[secondNum];
      }
      if (num[char2] +num[char1] <= '19') {
        firstNum = num[char3];
        secondNum = num[char1];
        return arr1[firstNum]+ ' hundred ' + arr2[secondNum]
      }
     firstNum = num[char3];
     secondNum = num[char2]-2;
     thirdNum =num[char1]
     newStr = arr1[firstNum]+ ' hundred ' + arr3[secondNum]+' '+arr1[thirdNum];
   }
  return newStr;
}


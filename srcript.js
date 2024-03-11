"1 Given a number. Write a recursive function that reverse the number. Return the new number";
function reverseNumber(num, reversedNum = 0) {
  if (num === 0) {
    return reversedNum;
  } else {
    var lastDigit = num % 10;
    var newReversedNum = reversedNum * 10 + lastDigit;
    var remainingDigits = Math.floor(num / 10);
    return reverseNumber(remainingDigits, newReversedNum);
  }
}

var number = 987654321;
var reversedNumber = reverseNumber(number);
console.log("Original number:", number);
console.log("Reversed number:", reversedNumber);

("2 Given a number and an array. Find the second occurrence of the number in the array. Consider that the occurrence of each element in the array is at least two. (recursive)");
function findSecNumRecursive(n, arr, index = 0, count = 0) {
  if (index >= arr.length) {
    return -1;
  }

  if (arr[index] === n) {
    count++;
    if (count === 2) {
      return index;
    }
  }

  return findSecNumRecursive(n, arr, index + 1, count);
}

let res = findSecNumRecursive(5, [0, -1, 0, 5, 6, 6, 5, -1, 0, 5, 6]);
console.log(res);

("3. Given a substring and a string. Find how many times the substring occurred in the string.(For getting substring of the string use str.substring(startIndex, endIndex),str.substr(startIndex, length) ) (recursive)");
function countSubstringOccurrences(string, substring) {
  if (!string.includes(substring)) {
    return 0;
  }

  const index = string.indexOf(substring);

  const newString = string.substr(index + substring.length);

  return 1 + countSubstringOccurrences(newString, substring);
}

const string = "Are var far shared?";
const substring = "ar";
const occurrences = countSubstringOccurrences(string, substring);
console.log(occurrences);

("4. Given a string, compute recursively (no loops) a new string where all appearances of pi have been replaced by 3.14");
function replacePi(str) {
  if (!str.includes("pi")) {
    return str;
  }
  str = str.toLowerCase();
  const i = str.indexOf("pi");
  const newStr = str.slice(0, i) + "3,14" + str.slice(i + 2);
  return replacePi(newStr);
}
const origStr = "Picsart pipelines";
const changedStr = replacePi(origStr);
console.log(changedStr);

("5. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).");
function flattenArray(arr) {
  let fixedArr = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      fixedArr = fixedArr.concat(flattenArray(element));
    } else {
      fixedArr.push(element);
    }
  });

  return fixedArr;
}

const nestedArray = [1, [3, 4, [1, 2]], 10];
const fixedArr = flattenArray(nestedArray);
console.log(fixedArr);

("6. Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if neededand return the result. (recursive)");
function calcSumOfDig(num) {
  if (num < 10) {
    return num;
  } else {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return calcSumOfDig(sum);
  }
}

const number1 = 14;
const finalSum = calcSumOfDig(number1);
console.log(finalSum);

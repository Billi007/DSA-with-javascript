//Check if a string is palindrome.

//method-1
// let str = "Madam";
// let lower = str.toLowerCase();
// let result = lower == lower.split('').reverse().join('') ? "yes" : "no"
// console.log(result);

//mwthod-2
let string = "Madam";
let transformedStr = string.toLowerCase()
function checkpalindrome(i, str) {
if (i >= str.length / 2) return true
if (str[i] !== str[str.length - i - 1]) return false;
  return checkpalindrome(i + 1, str);
}

console.log(checkpalindrome(0, transformedStr))

// let str = "The quick brown fox jumped over the lazy dog";
// let str1 = str.split(" ");
// let longestWord = "";
// for (let i = 0; i < str1.length; i++) {
//  if (str1[i].length > longestWord.length) {
//    longestWord = str1 [i];
//  }
// }
// console.log (longestWord);

let str = ["short", "medium", "longest", "tiny"];
str.sort((a, b) => a.length - b.length);
console.log(str);


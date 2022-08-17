/*

Codewars, 8k: Training JS #16: Methods of String object--slice(), substring() and substr()

Task
Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

The first mission: Traversing arr, find the shortest string length.

The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

for example:

cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

*/

const cutIt = a => {
  let len = a[0].length;
  let arr = [];
  for (let i of a) {
    if (i.length < len) {
      len = i.length;
    }
  }
  for (let i = 0; i < a.length; i++) {
    arr.push(a[i].substr(0, len));
  }
  return arr;
}

console.log(cutIt(["ab","cde","fgh"]));

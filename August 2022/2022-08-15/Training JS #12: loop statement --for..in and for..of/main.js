/*

Codewars, 8k: Training JS #12: loop statement --for..in and for..of

Task
Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.

You need to the traverse the obj, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5.

Return the five after works finished.

You should use for..in in your code, otherwise, your solution may not pass this kata. Don't learn bad habits from those lazy guys ;-)
*/
const giveMeFive = obj => {
  let arr = [];
  for (let i in obj) {
    if (i.length === 5 && obj[i].length === 5) {
      arr.push(i);
      arr.push(obj[i]);
    } else if (i.length === 5) {
      arr.push(i);
    } else if (obj[i].length === 5) {
      arr.push(obj[i]);
    }
  }
  return arr;
};


console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}))
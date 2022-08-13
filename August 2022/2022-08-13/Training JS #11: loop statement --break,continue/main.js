/*

Codewars, 8k: Training JS #11: loop statement --break,continue


Task
Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.

You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.

When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

Return the bag after for loop finished.

You should use for, break and continue in your code. otherwise, your solution may not pass this kata.

*/

const grabDoll = d => {
  let bag = [];
  for (let i of d) {
    if (bag.length === 3) {
      break;
    } else if (i === 'Hello Kitty' || i === 'Barbie doll') {
      bag.push(i);
    } else {
      continue;
    }
  }
  return bag;
}
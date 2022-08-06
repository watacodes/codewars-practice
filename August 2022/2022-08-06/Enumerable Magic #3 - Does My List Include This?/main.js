/*

Codewars, 8k: Enumerable Magic #3 - Does My List Include This?

  Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

*/

const include = (arr, item) => arr.includes(item);

console.log(include(['Monkey', 'Milk', 'Mongoose'], 'Monkey'));
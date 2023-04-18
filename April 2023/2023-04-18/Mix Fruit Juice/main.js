/*

Codewars, 6k: Mix Fruit Juice

*/

function mixFruit (arr) {
  const regular = ['banana', 'orange', 'apple', 'lemon', 'grapes'];
  const special = ['avocado', 'strawberry', 'mango'];
  const fruitsToPrices = arr.map(fruit => regular.includes(fruit.toLowerCase()) ? 5 : special.includes(fruit.toLowerCase()) ? 7 : 9);
  return Math.round(fruitsToPrices.reduce((acc, curr) => acc + curr, 0) / arr.length);
};
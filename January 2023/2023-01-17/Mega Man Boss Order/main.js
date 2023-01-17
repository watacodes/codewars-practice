/*

Codewars, 7k: Mega Man Boss Order

*/

function getBossOrder(bosses) {
  const arr = [bosses.find(boss => boss.difficulty === 1)];
  while (arr.length < 8) {
    arr.push(bosses.find(boss => boss.weakness === arr[arr.length - 1].weapon));
  }
  console.log(arr);
  return arr.map(boss => boss.name);
}
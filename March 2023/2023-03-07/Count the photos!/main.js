/*

Codewars, 6k: Count the photos!

*/

function countPhotos(road) {
  let counter = 0;
  let left = 0;
  let right = 0;

  for (let i = 0; i < road.length; i++) {
    if (road[i] === '>') {
      right++;
    } else if (road[i] === '.') {
      counter += right;
    }
  }

  for (let k = road.length - 1; k >= 0; k--) {
    if (road[k] === '<') {
      left++;
    } else if (road[k] === '.') {
      counter += left;
    }
  }
  return counter;
}


console.log(countPhotos('>>.')); // 2
console.log(countPhotos('.>>')); // 0
console.log(countPhotos('.><.>>.<<')); // 11

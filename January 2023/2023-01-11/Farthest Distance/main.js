/*

Codewars, 7k: Farthest Distance

*/

function furthestDistance(arr){
  const max = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      let distance = Math.sqrt((arr[i][0] - arr[k][0]) ** 2 + (arr[i][1] - arr[k][1]) ** 2);
      max.push(Number(distance.toFixed(2)));
    }
  }
  return Math.max(...max);
}
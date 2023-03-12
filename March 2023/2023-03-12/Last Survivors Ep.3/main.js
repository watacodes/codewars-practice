/*

Codewars, 6k: Last Survivors Ep.3

*/

function lastSurvivors(arr, nums) {
  return nums.map((e, i) => {
    const temp = arr.map((str) => str[i]).join('').replace(/[ ]/g, '');
    return temp.substring(0, temp.length - e);
  }).join('');
}
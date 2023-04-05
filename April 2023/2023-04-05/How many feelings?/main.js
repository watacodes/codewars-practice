/*

Codewars, 6k: How many feelings?

*/

function countFeelings(s, arr) {
  let counter = 0;

  arr.forEach((e, i) => {
    if ([...e].every(l => s.includes(l))) counter++;
  });
  
  return counter === 1 ? '1 feeling.' : `${counter} feelings.`;
}
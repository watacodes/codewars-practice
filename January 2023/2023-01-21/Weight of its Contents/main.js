/*

Codewars, 7k: Weight of its Contents

*/

function contentWeight(bottleWeight, scale) {
  const comparison = scale.split(' ').slice(-1)[0];
  const times = scale.split(' ').slice(0, 1)[0];
  const containerWeight = bottleWeight / (+times + 1);
  return comparison === 'larger' ? containerWeight * +times : containerWeight;
}
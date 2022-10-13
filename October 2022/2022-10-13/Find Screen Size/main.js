/*

Codewars, 7k: Find Screen Size

The Challenge
Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

Note: The calculated height should be represented as an integer. If the height is fractional, truncate it.

*/

const findScreenHeight = (width, ratio) => {
  const ratioOfWidth = ratio.split(':')[0];
  const ratioOfHeight = ratio.split(':')[1];
  const height = width / +ratioOfWidth * +ratioOfHeight;
  return `${width}x${height}`;
};
console.log(findScreenHeight(1024, "4:3"));

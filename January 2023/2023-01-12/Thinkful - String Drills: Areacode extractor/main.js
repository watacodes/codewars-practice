/*

Codewars, 7k: Thinkful - String Drills: Areacode Extractor

*/

function areaCode(text) {
  const regex = /\(.*?\)/g;
  const nums = text.match(regex);
  return [...nums[0]].slice(1, -1).join('');
}
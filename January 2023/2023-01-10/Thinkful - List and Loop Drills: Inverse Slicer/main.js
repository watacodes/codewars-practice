/*

Codewars, 7k: Thinkful - List and Loop Drills: Inverse Slicer

*/

function inverseSlice(items, a, b) {
  const deleteCount = b - a;
  items.splice(a, deleteCount);
  return items;
}


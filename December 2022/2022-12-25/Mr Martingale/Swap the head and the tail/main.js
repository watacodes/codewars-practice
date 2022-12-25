/*

Codewars, 7k: Swap the head and the tail

*/

const swapHeadAndTail = arr => {
  const head = arr.slice(0, Math.floor(arr.length / 2));
  const body = arr[Math.floor(arr.length / 2)];
  const tail = arr.slice(Math.ceil(arr.length / 2));
  return arr.length % 2 ? tail.concat(body, head) : tail.concat(head);
}
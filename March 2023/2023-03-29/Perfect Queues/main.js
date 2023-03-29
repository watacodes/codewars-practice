/*

Codewars, 6k: Perfect Queues

*/

function dequeueCount(queues) {
  return queues.reduce((acc, curr, idx) => {
    const index = curr.findIndex(e => e !== idx);
    return acc + (index === -1 ? 0 : curr.length - index);
  }, 0);
};
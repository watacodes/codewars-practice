/*

Codewars, 8k:

A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.

*/

// Input: array of either 'stone' or 'gold'

const checkTheBucket = b => b.some(a => a === 'gold');

console.log(checkTheBucket(["stone", "stone", "stone", "stone", "stone"]))
console.log(checkTheBucket(["stone", "stone", "stone", "stone", "gold"]))
/*

Codewars question, 8k: https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"

*/

// If the last element of an given array is wolf, 'pls go away'.
// if the wolf is found, givenarray[indexOf('wolf')+1] is the sheep that is about to be eaten.
// hence, return 'Oi'!

const warnTheSheep = queue => {
    let sheepNum = 0;
    console.log(queue.length, queue.indexOf('wolf'));
    if (queue.indexOf('wolf') === queue.length - 1) {
        return 'Pls go away and stop eating my sheep';
    } else {
        sheepNum = (queue.length - 1) - queue.indexOf('wolf');
        return `Oi! Sheep number ${sheepNum}! You are about to be eaten by a wolf!`;
    }
}

console.log(warnTheSheep(["sheep", "sheep", "wolf", "sheep"]));
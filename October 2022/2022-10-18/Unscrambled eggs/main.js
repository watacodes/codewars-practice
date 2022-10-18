/*

Codewars, 7k: Unscrambled eggs

Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

Example
unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
//             "B---eg---in---n---er---"

*/

const unscrambleEggs = word => word.split(/egg/g).join('');

console.log(unscrambleEggs("Beggegeggineggneggeregg"))
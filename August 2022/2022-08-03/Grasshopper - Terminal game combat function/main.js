/*

Codewars 8k: Grasshopper - Terminal game combat function

Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

*/

const combat = (hp, dmg) => !(hp - dmg < 0) ? hp - dmg: 0;

console.log(combat(100,120));
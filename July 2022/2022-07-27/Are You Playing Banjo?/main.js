/*

Codewars 8k: https://www.codewars.com/kata/53af2b8861023f1d88000832

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

*/

// const areYouPlayingBanjo = name => name.charAt(0).toUpperCase() === 'R' ? `${name} plays banjo` : `${name} does not play banjo`;

const areYouPlayingBanjo = name => name.match(/^[r]/i) ? true : false;

console.log(areYouPlayingBanjo('Ron'));

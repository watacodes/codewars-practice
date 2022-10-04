/*

Codewars, 7k: Find how many times did a team from a given country win the Champions League?

Create a function that takes two arguments:

An array of objects which feature the season, the team and the country of the Champions League winner.

Country (as a string, for example, 'Portugal')

You function should then return the number which represents the number of times a team from a given country has won. Return 0 if there have been no wins.

*/

const countWins = (wL, c) => wL.filter(a => a.country === c).length;
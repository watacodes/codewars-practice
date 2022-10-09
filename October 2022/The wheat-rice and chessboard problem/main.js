/*

Codewars, 7k: The wheat/rice and chessboard problem


*/

// 0 -> 0    0 -> 0
// 1 -> 1    1 -> 1
// 2 -> 2    10 -> 2
// 3 -> 2    11 -> 2
// 4 -> 3    101 -> 3
// 5 -> 3

const squaresNeeded = grains => grains > 0 ? grains.toString(2).length : 0;
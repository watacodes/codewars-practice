/*

Codewars, 7k: Sum of angles

Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

*/

// tri = 180 =  (3 - 2) * 180;
// square = 360 (90 * 4) ->> (4 - 2) * 180

// The formula is,
// (n - 2) * 180

const angle = n => (n - 2) * 180;
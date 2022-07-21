/* 

Codewars challenge, 8k


This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x and y attributes (X and Y in C#) attributes.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places.


*/

function distanceBetweenPoints(a, b) {
    let distance = 0;
    let vertical = a.y - b.y;
    let horizontal = a.x - b.x;
    return distance = Math.sqrt((horizontal ** 2) + (vertical ** 2));
  }
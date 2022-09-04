/*

Codewars, 7k: Alphabet war

There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!

*/

const alphabetWar = f => {
  const leftSide = {
    w: 4,
    p: 3,
    b: 2,
    s: 1
  };

  const rightSide = {
    m: 4,
    q: 3,
    d: 2,
    z: 1
  };

  let countLeft = 0;
  let countRight = 0;

  for (let i = 0; i < f.length; i++) {
    if (leftSide[f[i]]) {
      countLeft += leftSide[f[i]];
    } else if (rightSide[f[i]]) {
      countRight += rightSide[f[i]];
    }
  };
  return countLeft > countRight ? "Left side wins!" : countLeft === countRight ? "Let's fight again!" : "Right side wins!";
};
/* 

Codewars challenge, 8k: https://www.codewars.com/kata/59ca8246d751df55cc00014c

A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)

*/

const hero = (bullets, dragons) => {
    // 1. Each dragon takes two bullets to be defeated.
    // 1.1 Hero should carry at least dragons * bullets of bullets.
    // 2. If (dragons * 2 >= bullets), return 1, else, return -1.

    return (dragons * 2) <= bullets ? true : false;
}

console.log(hero(10, 5));
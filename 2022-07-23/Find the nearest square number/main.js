/*

Codewars challenge, 8k: https://www.codewars.com/kata/5a805d8cafa10f8b930005ba

    Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

*/

function nearestSq(n) {
    let sq = Math.floor(Math.sqrt(n))
    if (n - sq ** 2 > (sq + 1) ** 2 - n) {
        return (sq + 1) ** 2;
    }
    return sq ** 2;
}

console.log(nearestSq(10));
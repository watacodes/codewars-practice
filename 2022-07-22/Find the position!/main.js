/* 

Codewars question, 8k https://www.codewars.com/kata/5808e2006b65bff35500008f

When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

*/

function position(letter){
    // 1. Identify the charcode of letter for an alphabet a
    // 2. the charcode of a - number should be 1.
    // 3. return letter.charCodeAt() - number.
    const pos = letter.charCodeAt() - 96;
    return `Position of alphabet: ${pos}`;
}
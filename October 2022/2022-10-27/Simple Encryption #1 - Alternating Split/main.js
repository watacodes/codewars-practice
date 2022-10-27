/*

Codewars, 6k: Simple Encryption #1 - Alternating Split

Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.

*/

const encrypt = (text, n, counter = 0) => {
  if (n < 1 || !text) return text;
  let oddIdx = text.split('').filter((_, i) => i % 2 === 1);
  let evenIdx = text.split('').filter((_, i) => i % 2 === 0);
  let res = oddIdx.concat(evenIdx).join('');
  counter += 1;
  return counter === n ? res : encrypt(res, n, counter);
}

const decrypt = (encryptedText, n, counter = 0) => {
  if (n < 1) return encryptedText;
  let left = encryptedText.split('').slice(0, Math.floor(encryptedText.length / 2));
  let right = encryptedText.split('').slice(Math.floor(encryptedText.length / 2));
  let emp = [];
  for (let i in right) {
    emp.push(right[i], left[i]);
  }
  let res = emp.join('');
  counter++;
  return counter === n ? res : decrypt(res, n, counter);
};

console.log(encrypt("This is a test!", 1));
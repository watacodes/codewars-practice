/*

Codewars, 7k: Number Manipulation I (Easy)

*/

const manipulate = num => { 
  const numLength = num.toString().length / 2;
  return Number.isInteger(numLength) 
          ?
         Number(String(num).slice(0, numLength) + '0'.repeat(numLength))
          :
         Number(String(num).slice(0, Math.floor(numLength)) + '0'.repeat(Math.ceil(numLength)))
}
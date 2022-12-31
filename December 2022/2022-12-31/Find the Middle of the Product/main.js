/*

Codewars, 7k: Find the Middle of the Product

*/

const findMiddle = str => {
  if (!str || typeof str !== 'string') return -1;
  const onlyDigits = str.replace(/\D/g, '');
  if (onlyDigits.length === 0) return -1;
  const productOfDigits = [...onlyDigits].reduce((acc, curr) => +acc * +curr);
  const idxOfMiddle = Math.floor(String(productOfDigits).length / 2);
  return productOfDigits.toString().length % 2 
    ? Number(productOfDigits.toString().slice(idxOfMiddle, idxOfMiddle + 1))
    : Number(productOfDigits.toString().slice(idxOfMiddle - 1, idxOfMiddle + 1));
}
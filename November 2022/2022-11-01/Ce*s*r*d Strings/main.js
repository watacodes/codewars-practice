/*

Codewars, 7k: Ce*s*r*d Strings


*/

const uncensor = (str, pattern) => {
  let idx = -1;
  return str.replace(/\*/g, () => {
        idx++;
        return pattern.charAt(idx);
    });
};

console.log(uncensor("A**Z*N*", "MAIG"));
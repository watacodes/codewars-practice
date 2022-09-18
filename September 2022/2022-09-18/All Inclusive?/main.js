/*

Codewars, 7k: All Inclusive?

Input:

a string strng
an array of strings arr
Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

a boolean true if all rotations of strng are included in arr
false otherwise
Examples:
contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
  
*/

const containAllRots = (str, arr) => {
  for (let i = 0; i < str.length; i++) {
    if (arr.indexOf(`${str.slice(i)}${str.slice(0, i)}`) === -1) {
      return false;
    }  
  }
  return true;
}

console.log(containAllRots( "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]))
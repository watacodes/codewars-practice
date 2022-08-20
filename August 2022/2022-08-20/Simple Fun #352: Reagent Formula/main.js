/*

Codewars, 8k: Simple Fun #352: Reagent Formula

Task
You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.

Example
For formula = [1,3,7], The output should be true.

For formula = [7,1,2,3], The output should be false.

For formula = [1,3,5,7], The output should be false.

For formula = [1,5,6,7,3], The output should be true.

For formula = [5,6,7], The output should be true.

For formula = [5,6,7,8], The output should be true.

For formula = [6,7,8], The output should be false.

For formula = [7,8], The output should be true.

Note
All inputs are valid. Array contains at least 1 digit. Each digit appears at most once.

*/

const isValid = formula => {
  // if formula includes m1 and m2 at the same time -> false
  // if formula includes m3 and m4 at the same time -> false
  // if formula includes either m5 or m6 exclusively -> false
  // if formula doesn't include either m7 or m8 -> false
  // else -> true
  if (formula.includes(1) && formula.includes(2)) return false;
  if (formula.includes(3) && formula.includes(4)) return false;
  if ((formula.includes(5) && !formula.includes(6) || !formula.includes(5) && formula.includes(6))) return false;
  if (!(formula.includes(7) || formula.includes(8))) return false;
  return true;
}
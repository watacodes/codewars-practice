/*

Codewars, 7k: Replace every nth

Task
Write a method, that replaces every nth char oldValue with char newValue.

Inputs
text: the string to modify
n: change the target letter every nth occurrencies
old_value (or similar): the targetted character
new_value (or similar): the character to use as replacement
Note for untyped languages: all inputs are always valid and of their expected type.

Rules
Your method has to be case sensitive!
If n is 0 or negative or if it is larger than the count of the oldValue, return the original text without a change.
Example:
n:         2
old_value: 'a'
new_value: 'o'
"Vader said: No, I am your father!"
  1     2          3        4       -> 2nd and 4th occurence are replaced
"Vader soid: No, I am your fother!"

*/

const replaceNth = (text, n, oldValue, newValue, counter = 0) => {
  let convertedText = text.split('')
                          .map(item => item == oldValue ? (++counter == n ? ((counter = 0) ? _ : newValue) : item) : item)
                          .join('');
  return convertedText;
};

console.log(replaceNth("Vader said: No I am your father!", 2, 'a', 'o'));
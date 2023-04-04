/*

Codewars, 6k: CamelCase to underscore

*/

const toUnderScore = name => {
  const regex = /([A-Z]|\d+)/g;
  
  const replace = (s1, _, idx) => {
    if (name[idx-1] === '_') return s1;
    return idx === 0 ? s1 : '_' + s1;
  }
  
  return name.replace(regex, replace);
}
/*

Codewars, 7k: Swap items in a dictionary

*/

function switchDict(dic) {
  const keys = [...new Set(Object.keys(dic))];
  const newDic = {};
  
  for (let i of keys){
    if (newDic[dic[i]]) {
      newDic[dic[i]].push(i); 
    } else {
      newDic[dic[i]] = [i];
    }         
  }

  return newDic;
}
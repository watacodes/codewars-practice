/*

Codewars, 6k: Word search

*/

function indexOf(words, target){
  let first = 0, last = words.length - 1
  while(first < last){
    let mid = parseInt((first+last)/2)
    if(words[mid].length<target.length){
      first = mid+1
    } else {
      last = mid-1
    }
  }
  return words.indexOf(target,first)
}
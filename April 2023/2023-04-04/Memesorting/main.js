/*

Codewars, 6k: Memesorting

*/

const memesorting = meme => {
  meme = meme.toLowerCase();
  const roma = ['b', 'u', 'g'];
  const maxim = ['b', 'o', 'o', 'm'];
  const danik = ['e', 'd', 'i', 't', 's'];
  
  const checkMeme = (arr, letter) => {
    if (letter === arr[0]) {
      arr.shift();
    }
    return !arr.length;
  }
  
  for (let i = 0; i < meme.length; i++) {
    let curr = meme[i];
    if (checkMeme(roma, curr)) return 'Roma';
    if (checkMeme(maxim, curr)) return 'Maxim';
    if (checkMeme(danik, curr)) return 'Danik';
  }
  
  return 'Vlad';
}
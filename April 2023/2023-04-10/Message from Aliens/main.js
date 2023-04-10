/*

Codewars, 6k: Message from Aliens

*/

function decode(m) {
  const dictionary = {
    "/\\" : "a", "]3" : "b", "("  : "c", "|)"   : "d", "[-"    : "e", "/=": "f", "(_,": "g", "|-|": "h", "|" : "i", 
    "_T"  : "j", "/<" : "k", "|_" : "l", "|\\/|": "m", "|\\|"  : "n", "()": "o", "|^" : "p", "()_": "q", "/?": "r", 
    "_\\~": "s", "~|~": "t", "|_|": "u", "\\/"  : "v", "\\/\\/": "w", "><": "x", "`/" : "y", "~/_": "z", "__": " " 
  };
  
  return m.split(new RegExp(`\\${m[0]}+`))
          .map(e => dictionary[e])
          .reverse()
          .join('');
}
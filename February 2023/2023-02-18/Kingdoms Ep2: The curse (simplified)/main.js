/*

Codewars, 6k: Kingdoms Ep2: The curse (simplified)

*/

function translate(speech, vocabulary) {
  const regex = /[\*\w]+/g;
  return speech.replace(regex, (word) => vocabulary.find(w => {
    const newRegex = new RegExp(`^${word.replace(/\*/g, '.')}$`);
    console.log(w.match(newRegex))
    return newRegex.test(w);
  }));
}

console.log(translate("hell*, w***d!", ["hello", "hell", "word", "world"], "hello, world!"));
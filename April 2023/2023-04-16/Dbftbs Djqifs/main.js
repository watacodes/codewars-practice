/*

Codewars, 6k: Dbftbs Djqifs

*/

function encryptor (key, message) {
  key = (key % 26 + 26) % 26;
  return message.replace(/[a-z]/gi, (e) => {
    const temp = e >= 'a' ? 97 : 65
    return String.fromCharCode((e.charCodeAt() + key - temp) % 26 + temp);
  });
};
/*

Codewars, 6k: Reverse or rotate?

*/

function revrot(str, sz) {
  if (!str || sz <= 0 || sz >= str.length) return '';
  
  const chunks = [];
  const cubeDigits = chunk => [...chunk].reduce((acc, curr) => acc + (+curr) ** 3, 0);
  const reverseChunks = chunk => [...chunk].reverse().join('');
  const rotateChunks = chunk => chunk.slice(1) + chunk[0];
  
  for (let i = 0; i < str.length; i += sz) {
    let chunk = str.slice(i, i + sz);
    if (chunk.length < sz) {
      continue;
    }
    chunk = cubeDigits(chunk) % 2 ? rotateChunks(chunk) : reverseChunks(chunk);
    chunks.push(chunk);
  }
  return chunks.join('');
}

console.log(revrot("123456987654", 6));
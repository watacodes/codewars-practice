/*

Codewars, 7k: Which section did you scroll to?

*/

function getSectionIdFromScroll(scrollY, sizes) {
  let curr = sizes[0];
  const mapped = sizes.map((num, i) => {
    if (i !== 0) {
      curr += num;
      return curr;
    }
    return num;
  });

  for (let i in mapped) {
    if (mapped[i] > scrollY) return +i;
  }
  
  return -1 
}
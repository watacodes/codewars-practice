/*

Codewars, 7k: The Skiponacci Sequence

*/

const skiponacci = n => {
  if (n < 2) return +n;
  const fib = [1, 1];
  for (let i = 1; i < n - 1; i++) {
    fib.push(fib[i-1] + fib[i]);
  }
  return fib.map((x, i) => i % 2 ? 'skip' : x).join(' ');
}
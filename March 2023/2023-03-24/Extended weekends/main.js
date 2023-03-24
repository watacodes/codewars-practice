/*

Codewars, 7k: Extended weekends

*/

function solve(a, b){
  const res = [];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  for (let i = a; i <= b; i++) {
    for (let m = 0; m < 12; m++) {
      let temp = new Date(i, m, 1);
      let days = new Date(i, m + 1, 0).getDate();
      if (temp.getDay() === 5 && days === 31) {
        res.push(months[temp.getMonth()]);
      }
    }
  }
  
  return [res[0], res.slice(-1)[0], res.length];
}
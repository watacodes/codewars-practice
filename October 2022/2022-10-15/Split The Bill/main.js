/*

Codewars, 7k: Split The Bill


*/

  const splitTheBill = obj => {
    let average = Math.round(Object.values(obj).reduce((a, b) => a + b, 0) / Object.values(obj).length * 100) / 100;
    for (let i in obj) {
      obj[i] = Math.round((obj[i] - average) * 100) / 100;
    }
    return obj;
  }
  
console.log(splitTheBill({A: 20, B: 15, C: 10}))
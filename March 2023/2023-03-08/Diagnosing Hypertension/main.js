/*

Codewars, 6k: Diagnosing Hypertension

[s, d] = [max, min];

*/

const hypertensive = arr => {
  let counter = 0;
  
  for (const patient of arr) {
    const res = [];
    
    for (const data of patient) {
      const split = data.split('/');
      res.push([+split[0], +split[1]]);
    }
    
    if (res.length > 1) {
      const avgSystolic = res.map(e => e[0]).reduce((acc, curr) => acc + curr) / res.length;
      const avgDiastolic = res.map(e => e[1]).reduce((acc, curr) => acc + curr) / res.length;

      if (avgSystolic >= 140) {
        counter++;
      } else if (avgDiastolic >= 90) {
        counter++;
      } else if (res.filter(e => e[0] >= 180 && e[1] >= 110).length > 0) {
        counter++;
      }
    } else if (res.filter(e => e[0] >= 180 && e[1] >= 110).length > 0) {
      counter++;
    }
  }
  
  return counter;
}


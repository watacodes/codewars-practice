/*

Codewars, 4k: Sum of Intervals

*/

function sumIntervals(args) {
  const sorted = args.sort((a, b) => a[0] - b[0]);
  const intervalArr = sorted.reduce((acc, curr, idx, arr) => {
    const prev = arr[idx-1];
    console.log(prev)
    // if arr has two more values and prev value is set,
    if (arr.length > 1 && prev !== undefined) {
      // and if also the first value of current arr is less than acc array's last value
      console.log(curr[0])
      if (curr[0] < acc[acc.length - 1]) {
        // and also if the second value of current arr is larger than the last acc array's last value
        if (curr[1] >= acc[acc.length - 1]) {
          // acc array's last element  will be set to the second value of curr arr;
          acc[acc.length - 1] = curr[1]
        }
      } else {
        acc.push(...curr)
      }
    } else {
      acc.push(...curr)
    }
    console.log('acc array: ', acc)
    return acc;
  }, []);
  console.log(intervalArr);
  
  let count = 0;
  
  for (let i = 0; i < intervalArr.length - 1; i += 2) {
    count += intervalArr[i+1] - intervalArr[i];
  }
  return count;
}

console.log(sumIntervals([
  [1, 4],
  [7, 10],
  [3, 5]
]));
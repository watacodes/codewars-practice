/*

Codewars, 7k: Paul's Misery

*/
const paul = x => {
  const miseryScore = x.reduce((acc, curr) => {
    if (curr === 'life') {
      acc += 0;
    } else if (curr === 'eating') {
      acc += 1;
    } else if (curr === 'Petes kata') {
      acc += 10;
    } else if (curr === 'kata') {
      acc += 5;
    }
    return acc;
  }, 0);

  if (miseryScore < 40) {
    return 'Super happy!';
  } else if (miseryScore < 70) {
    return 'Happy!';
  } else if (miseryScore < 100) {
    return 'Sad!';
  } else {
    return 'Miserable!';
  };
};
/*

Codewars, 7k: Slaphead

*/

const bald = hair => {
  let counter;
  
  if (!hair.match(/[/]/g)) {
    counter = 0;
  } else {
    counter = hair.match(/[/]/g).length;
  }
  
  let comment = 'Hobo!';
  if (counter === 0) {
    comment = 'Clean!';
  };

  if (counter === 1) {
    comment = 'Unicorn!';
  };
  
  if (counter === 2) {
    comment = 'Homer!';
  };

  if (counter >= 3 && counter <= 5) {
    comment = 'Careless!';
  };

  return [hair.replace(/[/]/g, '-'), comment];
};

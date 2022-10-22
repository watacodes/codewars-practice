/*

Codewars, 7k: Fizz Buzz Cuckoo Clock


"13:34"       "tick"
"21:00"       "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
"11:15"       "Fizz Buzz"
"03:03"       "Fizz"
"14:30"       "Cuckoo"
"08:55"       "Buzz"
"00:00"       "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
"12:00"       "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"

*/

function fizzBuzzCuckooClock(time) {
  let min = Number(time.slice(3));
  let hours = Number(time.slice(0, 2));
  console.log(min);
  let cuck = 'Cuckoo ';
  if (min % 15 === 0) {
    if (min % 60 === 0) {
      if (hours === 0) {
        return cuck.repeat(12).trim();
      } else if (hours > 12) {
        hours -= 12;
      }
      return cuck.repeat(hours).trim();
    }
    if (min % 30 === 0) {
      return cuck.trim();
    }
    return 'Fizz Buzz';
  }

  if (min % 5 === 0) {
    return 'Buzz';
  }

  if (min % 3 === 0) {
    return 'Fizz';
  }
  return 'tick';
};

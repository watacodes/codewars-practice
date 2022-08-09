/*

Codewars, 8k: Training JS #8: Conditional statement--switch

Task
Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+
little tips: Use default for most of the cases can reduce your work.

*/

const howManydays = month => {
  let days;
  switch (month) {
    case 2: 
      return days = 28;
      break;
    case 4:
      return days = 30;
      break;
    case 6:
      return days = 30;
      break;
    case 9:
      return days = 30;
      break;
    case 11:
      return days = 30;
      break;
    default:
      return days = 31;
      break;
  };
};

console.log(howManydays(2));
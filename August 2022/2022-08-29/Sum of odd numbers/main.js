/*

Codewars, 7k: Sum of odd numbers

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8 2 ** 3
3 --> 27 3  ** 3
4 --> 64 4 ** 3

*/

const rowSumOddNumbers = n => n ** 3;
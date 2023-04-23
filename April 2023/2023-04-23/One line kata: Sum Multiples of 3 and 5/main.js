/*

Codewars, 6k: One line kata: Sum Multiples of 3 and 5

*/

sum=n=>(f=a=>(b=n/a|0,a*b*++b),(f(3)+f(5)-f(15))/2);
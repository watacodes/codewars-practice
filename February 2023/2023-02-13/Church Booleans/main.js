/*

Codewars, 7k: Church Booleans

*/
const Not = A => A(False)(True)
const And = A => B => A(B)(A)
const Or = A => B => A(A)(B)
const Xor = A => B => A(Not(B))(B)
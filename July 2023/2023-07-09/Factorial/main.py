# Codewars, 7k: Factorial

def factorial(n):
    sum = 1
    
    if n == 0:
        return 1
    
    while n > 0:
        sum *= n
        n -= 1
        
    return sum
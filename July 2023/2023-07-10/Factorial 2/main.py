# Codewars, 7k: Factorial

def factorial(n):
    
    if n < 0 or n > 12:
        raise ValueError
        
    sum = 1
    
    while n > 1:
        sum *= n
        n -= 1
        
    return sum
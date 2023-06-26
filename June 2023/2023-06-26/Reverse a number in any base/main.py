# Codewars, 7k: Reverse a number in any base

def reverse_number(n, b):
    if b == 1:
        return n
    temp = 0
    
    while n:
        n, r = divmod(n, b)
        temp = temp * b + r
        
    return temp
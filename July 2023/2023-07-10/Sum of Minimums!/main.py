# Codewars, 7k: Sum of Minimums!

def sum_of_minimums(numbers):
    sum = 0
    
    for i in numbers:
        sum += min(i)
    
    return sum
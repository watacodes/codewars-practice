# Codewars, 7k: Halving Sum

import math

def halving_sum(n): 
    sum = 0
    
    while n >= 1:
        sum += n
        n = math.floor(n / 2)
    
    return sum
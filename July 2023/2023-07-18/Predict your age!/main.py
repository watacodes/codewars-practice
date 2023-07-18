# Codewars, 7k: Predict your age!

import math

def predict_age(*args):
    sum = 0
    ages = [i for i in args]
    
    for i in ages:
        sum += i ** 2
    
    return math.sqrt(sum) // 2
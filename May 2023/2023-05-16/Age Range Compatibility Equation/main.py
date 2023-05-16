# Codewars, 8k: Age Range Compatibility Equation

import math

def dating_range(age):
    if age > 14:
        min = age // 2 + 7
        max = (age - 7) * 2
    else:
        min = math.floor(age - 0.1 * age)
        max = math.floor(age + 0.1 * age)
    return f'{min}-{max}'
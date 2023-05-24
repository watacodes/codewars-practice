# Codewars, 8k: Area of a Square

import math

def square_area(A):
    rad = (A * 4) / (2 * math.pi)
    return round(rad ** 2, 2)
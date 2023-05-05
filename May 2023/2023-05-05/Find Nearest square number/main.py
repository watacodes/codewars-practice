# Codewars, 8k: Find Nearest square number

import math

def nearest_sq(n):
    floor = math.floor(math.sqrt(n))
    ceil = math.ceil(math.sqrt(n))
    if n - floor ** 2 < ceil ** 2 - n:
        return floor ** 2
    else:
        return ceil ** 2
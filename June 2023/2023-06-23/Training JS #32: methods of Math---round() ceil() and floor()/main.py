# Codewars, 8k: Training JS #32: methods of Math---round() ceil() and floor()

from math import ceil, floor

def round_it(n):
    left, right = str(n).split('.')
    if len(left) < len(right):
        return ceil(n)
    elif len(left) > len(right):
        return floor(n)
    else:
        return round(n)
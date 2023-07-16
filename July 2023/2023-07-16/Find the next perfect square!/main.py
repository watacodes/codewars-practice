# Codewars, 7k: Find the next perfect square!

import math

def find_next_square(sq):
    if math.sqrt(sq).is_integer():
        return (math.sqrt(sq) + 1) ** 2
    else:
        return -1
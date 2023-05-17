# Codewars, 8k: To square(root) or not to square(root)

import math

def square_or_square_root(arr):
    res = []
    for i in arr:
        if math.isqrt(i) ** 2 == i:
            res.append(math.sqrt(i))
        else:
            res.append(i ** 2)
    return res
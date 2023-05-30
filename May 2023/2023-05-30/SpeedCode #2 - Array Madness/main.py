# Codewars, 8k: SpeedCode #2 - Array Madness

def array_madness(a, b):
    left = 0
    right = 0
    for i in a:
        left += i ** 2
    for k in b:
        right += k ** 3
    return left > right
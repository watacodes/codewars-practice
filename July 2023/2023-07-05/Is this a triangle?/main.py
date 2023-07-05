# Codewars, 7k: Is this a triangle?

def is_triangle(a, b, c):
    return a < b + c and b < a + c and c < a + b
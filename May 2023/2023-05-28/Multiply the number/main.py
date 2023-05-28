# Codewars, 8k: Multiply the number

def multiply(n):
    digits = len(str(n).replace('-', ''))
    return n * (5 ** digits)
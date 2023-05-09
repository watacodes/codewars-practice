# Codewars, 8k: Find the Integral

def integrate(coefficient, exponent):
    exponent += 1
    coefficient //= exponent
    return f'{str(coefficient)}x^{str(exponent)}'
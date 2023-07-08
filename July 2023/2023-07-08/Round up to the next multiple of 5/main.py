# Codewars, 7k: Round up to the next multiple of 5

def round_to_next5(n):
    remainder = n % 5
    if remainder != 0:
        return n + (5 - remainder)
    else:
        return n
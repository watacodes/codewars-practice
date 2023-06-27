# Codewars, 7k: Previous multiple of three

def prev_mult_of_three(n):
    if n == 0:
        return None
    elif n % 3 == 0:
        return n
    else:
        return prev_mult_of_three(n // 10)
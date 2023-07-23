# Codewars, 7k: Reverse a Number

def reverse_number(n):
    if n >= 0 and n < 10:
        return n
    elif n > 0:
        return int(str(n)[::-1])
    else:
        return int(str(n)[::-1][:-1]) * -1
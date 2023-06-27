# Codewars, 7k: Odd or Even? Determine that!

def odd_or_even(n):
    if n % 2:
        return 'Either'
    elif (n / 2) % 2:
        return 'Odd'
    else:
        return 'Even'
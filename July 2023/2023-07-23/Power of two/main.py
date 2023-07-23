# Codewars, 7k: Power of two

def power_of_two(x):
    if x <= 0:
        return False
    while x > 1:
        if x % 2 == 0:
            x = x // 2        
        else:
            return False
    return True
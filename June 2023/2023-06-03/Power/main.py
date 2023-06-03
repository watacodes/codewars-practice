# Codewars, 8k: Power

def number_to_pwr(number, p): 
    pw = 1
    while p > 0:
        pw *= number
        p -= 1
    return pw
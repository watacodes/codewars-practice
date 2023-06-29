# Codewars, 7k: Square Every Digit

def square_digits(num):
    num = str(num)
    res = ''
    
    for i in num:
        res += str(int(i) ** 2)
    
    return int(res)
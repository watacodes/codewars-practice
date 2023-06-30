# Codewars, 7k: Descending Order

def descending_order(num):
    num_str = int(('').join(sorted(str(num), reverse=True)))
    return num_str

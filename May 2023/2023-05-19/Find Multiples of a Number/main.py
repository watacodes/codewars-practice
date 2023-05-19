# Codewars, 8k: Find Multiples of a Number

def find_multiples(int, limit):
    res = []
    for i in range(int, limit + 1, int):
        res.append(i)
    return res
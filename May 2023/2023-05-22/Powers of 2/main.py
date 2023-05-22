# Codewars, 8k: Powers of 2

def powers_of_two(n):
    res = []
    for i in range(0, n + 1):
        res.append(2 ** i)
    return res
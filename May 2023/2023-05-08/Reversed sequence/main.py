# Codewars, 8k: Reversed sequence

def reverse_seq(n):
    res = []
    while n > 0:
        res.append(n)
        n -= 1
    return res
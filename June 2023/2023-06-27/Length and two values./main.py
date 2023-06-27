# Codewars, 7k: Length and two values.

def alternate(n, f, s):
    res = []
    for i in range(0, n):
        if i % 2 == 0:
            res.append(f)
        else:
            res.append(s)
    return res
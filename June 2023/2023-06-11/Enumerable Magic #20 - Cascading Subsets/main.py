# Codewars, 8k: Enumerable Magic #20 - Cascading Subsets

def each_cons(lst, n):
    res = []
    for i in range(len(lst) - n + 1):
        res.append(lst[i:i+n])
    return res
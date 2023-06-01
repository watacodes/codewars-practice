# Codewars, 8k: Filtering even numbers (Bug Fixes)

def kata_13_december(lst): 
    res = []
    for i in lst:
        if i % 2:
            res.append(i)
    return res
# Codewars, 7k: Alphabet symmetry

def solve(arr):
    res = []
    alpha = 'abcdefghijklmnopqrstuvwxyz'
    
    for w in arr:
        count = 0

        for i, l in enumerate(w.lower()):
            if i == alpha.index(l):
                count += 1
        
        res.append(count)
    
    return res
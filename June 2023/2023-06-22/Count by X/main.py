# Codewars, 8k: Count by X

def count_by(x, n):
    res = []
    curr = 0
    
    while n > 0:
        curr += x
        res.append(curr)
        n -= 1
    
    return res
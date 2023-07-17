# Codewars, 7k: Form The Minimum

def min_value(digits):
    unique = sorted(list(set(digits)))
    res = []
    
    for i in unique:
        res.append(str(i))
        
    return int(('').join(res))
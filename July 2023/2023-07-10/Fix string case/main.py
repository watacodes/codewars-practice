# Codewars, 7k: Fix string case

def solve(s):
    upper, lower = 0, 0
    
    for i in s:
        if i.islower():
            lower += 1
        else:
            upper += 1
    
    if lower >= upper:
        return s.lower()
    else:
        return s.upper()
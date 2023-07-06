# Codewars, 7k: Testing 1-2-3

def number(lines):
    res = []
    
    if len(lines) == 0:
        return res
    
    for i in range(0, len(lines)):
        res.append(f'{i+1}: {lines[i]}')
    
    return res
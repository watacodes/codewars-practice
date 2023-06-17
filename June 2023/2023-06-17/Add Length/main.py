# Codewars, 8k: Add Length

def add_length(s):
    s_arr = s.split()
    res = []
    
    for i in s_arr:
        res.append(f'{i} {len(i)}')
    
    return res
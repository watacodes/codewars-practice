# Codewars, 7k: List Filtering

def filter_list(l):
    res = []
    
    for i in l:
        if type(i) == int:
            res.append(i)
    
    return res
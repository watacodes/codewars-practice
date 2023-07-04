# Codewars, 7k: Categorize New Member

def open_or_senior(data):
    res = []
    
    for i, k in data:
        if i >= 55 and k > 7:
            res.append('Senior')
        else:
            res.append('Open')
    
    return res
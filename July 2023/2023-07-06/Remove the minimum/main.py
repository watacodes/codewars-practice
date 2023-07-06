# Codewars, 7k: Remove the minimum

def remove_smallest(numbers):
    if len(numbers) == 0:
        return []
    
    minimum = min(numbers)
    res = []
    found = False
    
    for i in numbers:
        if i == minimum and found == False:
            found = True
            pass
        else:
            res.append(i)
    
    return res
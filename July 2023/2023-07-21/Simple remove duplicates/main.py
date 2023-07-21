# Codewars, 7k: Simple remove duplicates

def solve(arr): 
    res = []
    
    for i in range(0, len(arr)):
        if arr[i] in arr[i+1:]:
            pass
        else:
            res.append(arr[i])
    
    return res
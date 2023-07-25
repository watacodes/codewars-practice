# Codewars, 7k: Averages of numbers

def averages(arr):
    res = []
    
    try:
        for i in range(len(arr) - 1):
            res.append((arr[i] + arr[i + 1]) / 2)
    except:
        return []
    
    return res
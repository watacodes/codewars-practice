# Codewars, 7k: Flatten and sort an array

def flatten_and_sort(array):
    res = []
    
    for i in array:
        res += i
    
    return sorted(res)
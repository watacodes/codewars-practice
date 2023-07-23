# Codewars, 7k: Most digits

def find_longest(arr):
    arr_str = []
    res = ''
    
    for i in arr:
        arr_str.append(str(i))
        
    for k in arr_str:
        if len(k) > len(res):
            res = k
    
    return int(res)
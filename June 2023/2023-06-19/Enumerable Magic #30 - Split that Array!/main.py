# Codewars, 8k: Enumerable Magic #30 - Split that Array!

def partition(arr, c_method):
    onlyTrue = []
    onlyFalse = []
    
    for i in arr:
        if c_method(i):
            onlyTrue.append(i)
        else:
            onlyFalse.append(i)
            
    return onlyTrue, onlyFalse
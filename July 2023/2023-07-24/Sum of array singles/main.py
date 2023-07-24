# Codewars, 7k: Sum of array singles

def repeats(arr):
    unique = []
    
    for i in range(len(arr)):
        if arr[i] not in arr[i+1:] and arr[i] not in arr[:i]:
            unique.append(arr[i])
    
    return sum(unique)
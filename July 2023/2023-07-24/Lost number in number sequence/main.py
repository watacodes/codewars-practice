# Codewars, 7k: Lost number in number sequence

def find_deleted_number(arr, mixed_arr):
    missing = 0
    
    for i in arr:
        if i not in mixed_arr:
            return i
    
    return missing
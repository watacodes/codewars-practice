# Codewars, 8k: Merging sorted integer arrays (without duplicates)

def merge_arrays(first, second): 
    return sorted(list(set(first + second)))
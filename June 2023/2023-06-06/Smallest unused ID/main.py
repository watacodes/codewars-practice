# Codewars, 8k: Smallest unused ID

def next_id(arr):
    sorted_arr = sorted(arr)
    for i in range(0, len(arr) + 1):
        if i not in sorted_arr:
            return i
    return sorted_arr[-1] + 1
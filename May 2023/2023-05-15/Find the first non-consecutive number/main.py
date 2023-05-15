# Codewars, 8k: Find the first non-consecutive number

def first_non_consecutive(arr):
    for i in range(len(arr) - 1):
        if arr[i] + 1 not in arr:
            return arr[i + 1]
    return None
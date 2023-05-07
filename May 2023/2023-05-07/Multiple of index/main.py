# Codewars, 8k: Multiple of index

def multiple_of_index(arr):
    res = []
    for i in range(len(arr)):
        if i == 0:
            continue
        elif arr[i] % i == 0:
            res.append(arr[i])
    return res
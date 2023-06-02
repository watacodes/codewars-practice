# Codewars, 8k: Printing Array elements with Comma delimiters

def print_array(arr):
    res = []
    for i in arr:
        res.append(str(i))
    return (',').join(res)
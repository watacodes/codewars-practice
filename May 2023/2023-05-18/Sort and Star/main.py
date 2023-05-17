# Codewars, 8k: Sort and Star

def two_sort(array):
    sorted_arr = sorted(array)
    res = []
    for i in sorted_arr[0]:
        res.append(i + '***')
    return ('').join(res)[:-3]
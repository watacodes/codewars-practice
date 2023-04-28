# Codewars, 8k: Sum of differences in array

def sum_of_differences(arr):
    arr_sorted = sorted(arr, reverse=True)
    sum = 0
    for i in range(len(arr_sorted) - 1):
        sum += arr_sorted[i] - arr_sorted[i+1]
    return sum
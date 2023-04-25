# Codewars, 8k: Sum of differences in array

def sum_of_differences(arr):
    sum = 0
    arr.sort(reverse=True)
    for i in range(len(arr) - 1):
        sum += arr[i] - arr[i+1]
    return sum
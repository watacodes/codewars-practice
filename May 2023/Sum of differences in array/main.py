# Codewars, 8k: Sum of differences in array

def sum_of_differences(arr):
    arr.sort(reverse = True)
    sum = 0
    for i in range(len(arr) - 1):
        sum += arr[i] - arr[i+1]
    return sum
# Codewars, 8k: Find the smallest integer in the array

def find_smallest_int(arr):
    arr.sort(reverse = True)
    return arr.pop()
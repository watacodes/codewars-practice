# Codewars, 7k: Find the stray number

def stray(arr):
    for i in arr:
        if arr.count(i) == 1:
            return i
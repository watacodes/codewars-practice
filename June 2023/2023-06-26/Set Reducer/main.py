# Codewars, 7k: Set Reducer

from itertools import groupby

def set_reducer(arr):
    while len(arr) > 1:
        arr = [len([*vals]) for x, vals in groupby(arr)]
    
    return arr[0]
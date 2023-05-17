# Codewars, 8k: N-th Power

def index(array, n):
    if n > len(array) - 1:
        return -1
    else:
        return array[n] ** n
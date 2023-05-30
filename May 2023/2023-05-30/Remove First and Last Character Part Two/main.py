# Codewars, 8k: Remove First and Last Charactrer Part Two

def array(string):
    arr = string.split(',')
    if len(arr) <= 2:
        return None
    return (' ').join(arr[1:-1])

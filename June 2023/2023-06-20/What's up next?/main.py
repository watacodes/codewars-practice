# Codewars, 8k: What's up next?

def next_item(xs, item):
    arr = iter(xs)
    isFound = False
    for i in arr:
        if isFound:
            return i
        if i == item:
            isFound = True
    return None
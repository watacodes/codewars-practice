# Codewars, 8k: Are arrow functions odd?

def odds(arr):
    res = []
    for i in arr:
        if i % 2:
            res.append(i)
    return res
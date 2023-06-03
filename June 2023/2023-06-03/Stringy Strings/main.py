# Codewars, 8k: Stringy Strings

def stringy(size):
    res = []
    for i in range(1, size + 1):
        if i % 2:
            res.append('1')
        else:
            res.append('0')
    return ('').join(res)
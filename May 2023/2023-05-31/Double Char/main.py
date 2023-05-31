# Codewars, 8k: Double Char

def double_char(s):
    res = []
    for i in s:
        res.append(i * 2)
    return ('').join(res)
# Codewars, 8k: ASCII Total

def uni_total(s):
    val = 0
    for i in s:
        val += ord(i)
    return val
# Codewars, 8k: Remove duplicates from list

def distinct(seq):
    res = []
    for i in seq:
        if i not in res:
            res.append(i)
    return res
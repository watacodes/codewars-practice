# Codewars, 8k: Return Two Highest Values in List

def two_highest(arg1):
    reversed = sorted(arg1, reverse=True)
    res = []
    
    for i in reversed:
        if i not in res:
            res.append(i)
    return res[0:2]
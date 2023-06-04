# Codewars, 8k: Lario and Muigi Pipe Problem

def pipe_fix(nums):
    ma = max(nums)
    mi = min(nums)
    res = []
    for i in range(mi, ma + 1):
        res.append(i)
    return res
# Codewars, 8k: Fake Binary

def fake_bin(x):
    res = []
    for i in x:
        if int(i) < 5:
            res.append('0')
        else:
            res.append('1')
    return ('').join(res)
# Codewars, 8k: Triple Trouble

def triple_trouble(one, two, three):
    res = []
    for i in range(len(one)):
        res.append(one[i])
        res.append(two[i])
        res.append(three[i])
    return ('').join(res)
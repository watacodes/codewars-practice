# Codewars, 8k: Filtering even numbers (Bug Fixes)

def kata_13_december(ls):
    newLs = []
    for i in range(len(ls)):
        if (ls[i] % 2):
            newLs.append(ls[i])
    return newLs
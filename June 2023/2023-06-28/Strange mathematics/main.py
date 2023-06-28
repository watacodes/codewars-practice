# Codewars, 7k: Strange mathematics

def strange_math(n, k):
    res1 = []
    res2 = []
    
    for i in range(n + 1):
        res1.append(str(i))
        
    res1.sort()
    
    for s in res1:
        res2.append(int(s))
    
    return res2.index(k)
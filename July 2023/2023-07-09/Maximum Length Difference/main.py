# Codewars, 7k: Maximum Length Difference

def mxdiflg(a1, a2):
    if not a1 or not a2:
        return -1
    
    a1_len = [len(i) for i in a1]
    a2_len = [len(i) for i in a2]
    
    return max(max(a2_len) - min(a1_len), max(a1_len) - min(a2_len))
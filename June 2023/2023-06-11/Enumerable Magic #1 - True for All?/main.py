# Codewars, 8k: Enumerable Magic #1 - True for All?

def _all(seq, fun): 
    for i in seq:
        if fun(i) == False:
            return False
    return True
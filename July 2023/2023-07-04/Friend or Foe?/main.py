# Codewars, 7k: Friend or Foe?

def friend(x):
    res = []
    
    for i in x:
        if len(i) == 4:
            res.append(i)
    
    return res
# Codewars, 7k: Shortest Word

def find_short(s):
    s_arr = s.split(' ')
    res = []
    
    for i in s_arr:
        res.append(len(i))

    return min(res)
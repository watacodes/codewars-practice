# Codewars, 7k: Mumbling

def accum(s):
    count = 0
    res = []
    
    for letter in s:
        temp = letter.upper() + (letter * count).lower()
        res.append(temp)
        count += 1
    
    return ('-').join(res)
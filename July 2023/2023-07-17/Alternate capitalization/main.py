# Codewars, 7k: Alternate capitalization

def capitalize(s):
    res1 = []
    res2 = []
    
    for i in range(len(s)):
        if i % 2:
            res1.append(s[i].lower())
            res2.append(s[i].upper())
        else:
            res1.append(s[i].upper())
            res2.append(s[i].lower())
            
    return [('').join(res1), ('').join(res2)]
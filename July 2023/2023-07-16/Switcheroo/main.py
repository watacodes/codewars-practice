# Codewars, 7k: Switcheroo

def switcheroo(s):
    res = []
    
    for i in s:
        if i == 'a':
            res.append('b')
        elif i == 'b':
            res.append('a')
        else:
            res.append(i)
    
    return ('').join(res)
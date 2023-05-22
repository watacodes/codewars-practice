# Codewars, 8k: Correct the mistakes of the character recognition software

def correct(s):
    ls = {
        '5': 'S',
        '0': 'O',
        '1': 'I'
    }
    
    res = []
    
    for i in s:
        try:
            res.append(ls[i])
        except:
            res.append(i)
            
    return ('').join(res)
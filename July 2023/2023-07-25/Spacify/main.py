# Codewars, 7k: Spacify

def spacify(string):
    res = []
    
    for i in string:
        res.append(i + ' ')
    
    return ('').join(res)[:-1]
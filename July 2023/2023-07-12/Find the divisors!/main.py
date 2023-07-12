# Codewars, 7k: Find the divisors!

def divisors(integer):
    res = []
    
    for i in range(2, integer):
        if integer % i == 0:
            res.append(i)
    
    if len(res) == 0:
        return f'{integer} is prime'
    
    return res
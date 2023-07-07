# Codewars, 7k: Count the Digit

def nb_dig(n, d):
    counter = 0
    
    for i in range(0, n + 1):
        counter += str(i ** 2).count(str(d))
    
    return counter
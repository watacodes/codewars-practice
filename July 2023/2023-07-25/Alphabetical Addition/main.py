# Codewars, 7k: Alphabetical Addition

def add_letters(*letters):
    sum = 0
    alpha = 'abcdefghijklmnopqrstuvwxyz'
    
    for i in letters:
        print(alpha.index(i))
        sum += alpha.index(i) + 1
    
    return alpha[(sum - 1) % 26]
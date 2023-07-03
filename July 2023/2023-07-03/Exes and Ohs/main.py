# Codewars, 7k: Exes and Ohs

def xo(s):
    x_counter, o_counter = 0, 0

    for i in s.lower():
        if i == 'x':
            x_counter += 1
        if i == 'o':
            o_counter += 1
    
    return x_counter == o_counter
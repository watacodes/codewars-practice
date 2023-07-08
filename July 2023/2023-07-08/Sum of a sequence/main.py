# Codewars, 7k: Sum of a sequence

def sequence_sum(begin, end, step):
    sum = 0
    
    for i in range(begin, end + 1, step):
        sum += i
        
    return sum
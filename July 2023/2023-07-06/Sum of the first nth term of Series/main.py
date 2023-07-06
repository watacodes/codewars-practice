# Codewars, 7k: Sum of the first nth term of Series

def series_sum(n):
    sum = 0.0
    
    for i in range(0, n):
        sum += 1 / (1 + 3 * float(i))
    
    return '%.2f' % sum
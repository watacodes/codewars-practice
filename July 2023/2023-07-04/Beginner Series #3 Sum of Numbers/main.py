# Codewars, 7k: Beginner Series #3 Sum of Numbers

def get_sum(a, b):
    sum = 0
    
    if a == b:
        return a
    
    elif a > b:
        for i in range(b, a + 1):
           sum += i
    
    else:
        for i in range(a, b + 1):
            sum += i
    
    return sum
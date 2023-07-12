# Codewars, 7k: Small enough? - Beginner

def small_enough(array, limit):
    satisfied = True
    
    for i in array:
        if i > limit:
            satisfied = False
    
    return satisfied
# Codewars, 7k: Find your caterer

def find_caterer(budget, people):
    
    if people == 0:
        return -1
    
    first, second = people * 15, people * 20
    third = 0

    
    if people > 60:
        third += 30 * people * 0.8
    else:
        third += 30 * people
    
    if third <= budget:
        return 3
    elif second <= budget:
        return 2
    elif first <= budget:
        return 1
    else:
        return -1
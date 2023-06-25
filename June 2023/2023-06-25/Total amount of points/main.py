# Codewars, 8k: Total amount of points

def points(games):
    score = 0
    
    for i in games:
        a, b = i[0], i[-1]
        if a > b:
            score += 3
        elif a == b:
            score += 1
    
    return score
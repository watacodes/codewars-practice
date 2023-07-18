# Codewars, 7k: No oddities here

def no_odds(values):
    odds = []
    
    for i in values:
        if i % 2 == 0:
            odds.append(i)
    
    return odds
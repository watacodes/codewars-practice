# Codewars, 8k: UEFA EURO 2016

def uefa_euro_2016(teams, scores):
    won = ''
    if scores[0] > scores[1]:
        won += teams[0]
    elif scores[1] > scores[0]:
        won += teams[1]
    
    if len(won) == 0:
        return f'At match {teams[0]} - {teams[1]}, teams played draw.'
    
    return f'At match {teams[0]} - {teams[1]}, {won} won!'
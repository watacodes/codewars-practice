# Codewars, 8k: A wolf in sheep's clothing

def warn_the_sheep(queue):
    if queue[-1] == 'wolf':
        return 'Pls go away and stop eating my sheep'
    idx = 0
    for i in range(len(queue)):
        if queue[i] == 'wolf':
            idx = len(queue) - i - 1
    return 'Oi! Sheep number ' + str(idx) + '! You are about to be eaten by a wolf!'
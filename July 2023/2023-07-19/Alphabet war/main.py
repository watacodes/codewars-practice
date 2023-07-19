# Codewars, 7k: Alphabet war

def alphabet_war(fight):
    power = { 'w': 4, 'p': 3, 'b': 2, 's': 1,
              'm': -4, 'q': -3, 'd': -2, 'z': -1 }

    score = 0
    
    for i in fight:
        try:
            score += power[i]
        except:
            pass
        
    if score == 0:
        return 'Let\'s fight again!'
    elif score > 0:
        return 'Left side wins!'
    else:
        return 'Right side wins!'
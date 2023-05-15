# Codewars, 8k: Simple Fun #261: Whose Move

def whoseMove(lastPlayer, win):
    if win == True:
        return lastPlayer
    elif lastPlayer == 'black':
        return 'white'
    return 'black'
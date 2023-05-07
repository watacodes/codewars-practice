# Codewars, 8k: Define a card suit

def define_suit(card):
    lc = card[-1]
    if lc == 'C':
        return 'clubs'
    elif lc == 'D':
        return 'diamonds'
    elif lc == 'H':
        return 'hearts'
    else:
        return 'spades'
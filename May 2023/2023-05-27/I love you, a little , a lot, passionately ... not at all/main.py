# Codewars, 8k: I love you, a little , a lot, passionately ... not at all

def how_much_i_love_you(nb_petals):
    lines = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    return lines[nb_petals % 6 - 1]
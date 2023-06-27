# Codewars, 7k: Dot Calculator

def calculator(txt):
    if '+' in txt:
        txt = txt.split(' + ')
        return txt[0] + txt[1]
    elif '-' in txt:
        txt = txt.split(' - ')
        length = len(txt[0]) - len(txt[1])
        return '.' * length
    elif '*' in txt:
        txt = txt.split(' * ')
        length = len(txt[0]) * len(txt[1])
        return '.' * length
    elif '//' in txt:
        txt = txt.split(' // ')
        length = len(txt[0]) // len(txt[1])
        return '.' * length
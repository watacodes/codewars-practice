# Codewars, 8k: Who ate the cookie?

def cookie(x):
    pre = 'Who ate the last cookie? It was '
    if type(x) == str:
        return pre + 'Zach!'
    elif type(x) == int or type(x) == float:
        return pre + 'Monica!'
    else:
        return pre + "the dog!"
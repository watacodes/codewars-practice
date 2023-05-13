# Codewars, 8k: Gravity Flip

def flip(d, a):
    if d == 'R':
        return sorted(a)
    else:
        return sorted(a, reverse=True)
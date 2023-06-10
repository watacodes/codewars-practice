# Codewars, 8k: Find the Slope

def find_slope(p):
    try:
        return f'{(p[3] - p[1]) // (p[2] - p[0])}'
    except:
        return 'undefined'
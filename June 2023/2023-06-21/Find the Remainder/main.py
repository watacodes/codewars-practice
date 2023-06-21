# Codewars, 8k: Find the Remainder

def remainder(a, b):
    max_val = max([a, b])
    min_val = min([a, b])
    try:
        return max_val % min_val
    except:
        return None
# Codewars, 8k: Will there be enough space?

def enough(cap, on, wait):
    if on + wait - cap <= 0:
        return 0
    return on + wait - cap
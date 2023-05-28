# Codewars, 8k: No zeros for heros

def no_boring_zeros(n):
    try:
        return int(str(n).rstrip('0'))
    except:
        return 0
# Codewars, 7k: max diff - easy

def max_diff(lst):
    try:
        return max(lst) - min(lst)
    except:
        return 0
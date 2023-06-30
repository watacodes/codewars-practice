# Codewars, 7k: Get the Middle Character

def get_middle(s):
    idx = (len(s) - 1) // 2
    return s[idx:-idx] or s
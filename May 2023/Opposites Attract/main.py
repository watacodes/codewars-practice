# Codewars, 8k: Opposites Attract

def lovefunc (f1, f2):
    if (f1 % 2 and f2 % 2) or (f1 % 2 == 0 and f2 % 2 == 0):
        return False
    else:
        return True